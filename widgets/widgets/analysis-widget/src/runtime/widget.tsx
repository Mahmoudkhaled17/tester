import React, { useState, useEffect, useRef } from 'react';
import { AllWidgetProps, loadArcGISJSAPIModules, getAppStore } from 'jimu-core';
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';
import api from '../../../../api/axiosConfig';

export default function Widget(props: AllWidgetProps<any>) {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null);
  const [user, setUser] = useState<{ id?: number | string; email?: string; credits?: number; token?: string } | null>(null);
  const [analysisType, setAnalysisType] = useState<'crop_type' | 'ndvi'>('crop_type');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' | 'warning' } | null>(null);
  const [autoMapId, setAutoMapId] = useState<string>('');

  const [startDate, setStartDate] = useState('2025-03-01');
  const [endDate, setEndDate] = useState('2025-03-28');

  const [results, setResults] = useState<{
    crop_areas_feddans?: Record<string, number>;
    crop_health_feddans?: Record<string, number>;
  } | null>(null);

  const [layerOpacity, setLayerOpacity] = useState(0.85);
  const [currentAnalysisLayer, setCurrentAnalysisLayer] = useState<any>(null);
  const [tileUrls, setTileUrls] = useState<{ crop_type?: string; crop_health?: string }>({});
  const [currentTileLayer, setCurrentTileLayer] = useState<'crop_type' | 'crop_health'>('crop_type');

  const [drawnGeometry, setDrawnGeometry] = useState<any>(null);
  const sketchViewModelRef = useRef<any>(null);
  const graphicsLayerRef = useRef<any>(null);
  const skipNextUserStateSyncRef = useRef(false);

  useEffect(() => {
    const updateMapId = () => {
      if (props.useMapWidgetIds && props.useMapWidgetIds.length > 0) {
        setAutoMapId(props.useMapWidgetIds[0]);
        return;
      }
      const state = getAppStore().getState();
      const widgets = state?.appConfig?.widgets || {};
      const foundMapKey = Object.keys(widgets).find((key) => {
        const widget = widgets[key];
        return widget?.uri?.includes('arcgis-map') || widget?.manifest?.name === 'map';
      });
      if (foundMapKey) {
        setAutoMapId(foundMapKey);
      }
    };

    updateMapId();
  }, [props.useMapWidgetIds, props.appConfig]);

  const syncUserBalance = async (currentUser: any) => {
    if (!currentUser?.id) return currentUser;

    try {
      const userId = Number(currentUser.id);
      if (!Number.isFinite(userId)) return currentUser;

      const config = currentUser.token
        ? { headers: { Authorization: `Bearer ${currentUser.token}` } }
        : undefined;

      const response = await api.get(`/users/${userId}`, config);
      const data = response?.data?.user ?? response?.data;

      const backendCredits =
        data?.credits ??
        data?.points ??
        data?.remaining_credits ??
        data?.remaining_points ??
        data?.balance;

      if (backendCredits === undefined || backendCredits === null) {
        return currentUser;
      }

      const normalizedCredits = Number(backendCredits);
      if (!Number.isFinite(normalizedCredits)) return currentUser;

      const updatedUser = { ...currentUser, credits: normalizedCredits };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      skipNextUserStateSyncRef.current = true;
      window.dispatchEvent(new Event('userStateChanged'));
      return updatedUser;
    } catch (error) {
      console.error('فشل في مزامنة رصيد المستخدم:', error);
      return currentUser;
    }
  };

  useEffect(() => {
    let cancelled = false;

    const checkUser = async () => {
      const savedUser = localStorage.getItem('user');
      const saved = savedUser ? JSON.parse(savedUser) : null;
      if (cancelled) return;

      if (skipNextUserStateSyncRef.current) {
        skipNextUserStateSyncRef.current = false;
        setUser(saved);
        return;
      }

      setUser(saved);
      if (saved?.id) {
        const synced = await syncUserBalance(saved);
        if (cancelled) return;
        if (synced) setUser(synced);
      }
    };

    checkUser();
    window.addEventListener('storage', checkUser);
    window.addEventListener('userStateChanged', checkUser);

    return () => {
      cancelled = true;
      window.removeEventListener('storage', checkUser);
      window.removeEventListener('userStateChanged', checkUser);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (jimuMapView?.view?.map) {
        if (graphicsLayerRef.current) {
          jimuMapView.view.map.remove(graphicsLayerRef.current);
        }
        if (currentAnalysisLayer) {
          jimuMapView.view.map.remove(currentAnalysisLayer);
        }
      }
    };
  }, [jimuMapView, currentAnalysisLayer]);

  const activeViewChangeHandler = async (jmv: JimuMapView) => {
    if (jmv) {
      setJimuMapView(jmv);
      setMessage(null);

      try {
        const [GraphicsLayer, SketchViewModel] = await loadArcGISJSAPIModules([
          'esri/layers/GraphicsLayer',
          'esri/widgets/Sketch/SketchViewModel'
        ]);

        if (!graphicsLayerRef.current) {
          const gLayer = new GraphicsLayer({ title: 'منطقة الدراسة (AOI)' });
          jmv.view.map.add(gLayer);
          graphicsLayerRef.current = gLayer;
        }

        const sketchVM = new SketchViewModel({
          view: jmv.view,
          layer: graphicsLayerRef.current,
          polygonSymbol: {
            type: 'simple-fill',
            color: [16, 185, 129, 0.25],
            outline: { color: [16, 185, 129, 1], width: 2.5 }
          }
        });

        sketchVM.on('create', (event: any) => {
          if (event.state === 'complete') {
            setDrawnGeometry(event.graphic.geometry);
            setMessage({ text: 'تم تحديد منطقة الدراسة بنجاح', type: 'success' });
          }
        });

        sketchViewModelRef.current = sketchVM;
      } catch (err) {
        console.error('فشل تحميل وحدات ArcGIS API:', err);
      }
    }
  };

  const startDrawing = () => {
    if (sketchViewModelRef.current) {
      if (graphicsLayerRef.current) {
        graphicsLayerRef.current.removeAll();
      }
      setDrawnGeometry(null);
      sketchViewModelRef.current.create('polygon');
      setMessage({ text: 'انقر على الخريطة لتحديد حدود المنطقة', type: 'info' });
    }
  };

  const formatGeometryToGeoJSON = (geometry: any, webMercatorUtils: any) => {
    if (!geometry) return null;
    const geoGeometry = webMercatorUtils ? webMercatorUtils.webMercatorToGeographic(geometry) : geometry;
    if (!geoGeometry || !geoGeometry.rings || geoGeometry.rings.length === 0) return null;

    const ring = geoGeometry.rings[0].map((pt: number[]) => [pt[0], pt[1]]);
    if (ring.length > 0) {
      const first = ring[0];
      const last = ring[ring.length - 1];
      if (first[0] !== last[0] || first[1] !== last[1]) {
        ring.push([first[0], first[1]]);
      }
    }
    return ring;
  };

  const handleOpacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setLayerOpacity(val);
    if (currentAnalysisLayer) {
      currentAnalysisLayer.opacity = val;
    }
  };

  const switchTileLayer = async (layer: 'crop_type' | 'crop_health') => {
    if (!tileUrls[layer] || !jimuMapView?.view?.map) return;

    setCurrentTileLayer(layer);

    if (currentAnalysisLayer && jimuMapView?.view?.map) {
      jimuMapView.view.map.remove(currentAnalysisLayer);
    }

    const [WebTileLayer] = await loadArcGISJSAPIModules(['esri/layers/WebTileLayer']);

    const newLayer = new WebTileLayer({
      urlTemplate: tileUrls[layer],
      opacity: layerOpacity,
      title: layer === 'crop_type' ? 'نتائج تصنيف المحاصيل' : 'خريطة صحة النبات'
    });

    jimuMapView.view.map.add(newLayer);
    setCurrentAnalysisLayer(newLayer);

    setMessage({
      text: layer === 'crop_type' ? 'تم عرض طبقة تصنيف المحاصيل.' : 'تم عرض طبقة صحة النبات.',
      type: 'success'
    });
  };

  const validateDates = (start: string, end: string) => {
    const sDate = new Date(start);
    const eDate = new Date(end);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(sDate.getTime()) || isNaN(eDate.getTime())) {
      return { valid: false, message: 'تنسيق التاريخ غير صالح.' };
    }
    if (sDate > eDate) {
      return { valid: false, message: 'تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.' };
    }
    if (sDate > today || eDate > today) {
      return { valid: false, message: 'التواريخ لا يمكن أن تكون في المستقبل.' };
    }
    const diffDays = Math.ceil((eDate.getTime() - sDate.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays > 366) {
      return { valid: false, message: 'الفترة الزمنية لا يجب أن تتجاوز 366 يوماً.' };
    }
    if (diffDays < 1) {
      return { valid: false, message: 'يجب أن يكون هناك يوم واحد على الأقل بين التواريخ.' };
    }
    return { valid: true, message: '' };
  };

  const runEsriNdviAnalysis = async () => {
    try {
      const [ImageryLayer, RasterFunction] = await loadArcGISJSAPIModules([
        'esri/layers/ImageryLayer',
        'esri/layers/support/RasterFunction'
      ]);

      if (currentAnalysisLayer && jimuMapView?.view?.map) {
        jimuMapView.view.map.remove(currentAnalysisLayer);
      }

      const ndviBandTransform = new RasterFunction({
        functionName: 'NDVI',
        functionArguments: {
          VisibleBand: 4,
          InfraredBand: 5,
          ScientificOutput: false
        }
      });

      const colormapTransform = new RasterFunction({
        functionName: 'Colormap',
        functionArguments: {
          ColormapName: 'NDVI3',
          Raster: ndviBandTransform
        }
      });

      let finalRasterFunction = colormapTransform;
      if (drawnGeometry) {
        finalRasterFunction = new RasterFunction({
          functionName: 'Clip',
          functionArguments: {
            ClippingGeometry: drawnGeometry,
            ClippingType: 1,
            Raster: colormapTransform
          }
        });
      }

      const ndviLayer = new ImageryLayer({
        url: 'https://landsat2.arcgis.com/arcgis/rest/services/Landsat8_Views/ImageServer',
        rasterFunction: finalRasterFunction,
        opacity: layerOpacity,
        title: 'مؤشر صحة النبات (NDVI)'
      });

      if (jimuMapView?.view?.map) {
        jimuMapView.view.map.add(ndviLayer);
        setCurrentAnalysisLayer(ndviLayer);

        if (drawnGeometry) {
          jimuMapView.view.goTo(drawnGeometry.extent.expand(1.3));
        }
      }

      setMessage({ text: 'تم إنشاء خريطة NDVI المحددة بالمنطقة بنجاح.', type: 'success' });
    } catch (err) {
      console.error('فشل تحليل NDVI:', err);
      setMessage({ text: 'حدث خطأ أثناء تحميل خدمات NDVI.', type: 'error' });
    }
  };

  const handleRunAnalysis = async () => {
    setMessage(null);

    if (!user) {
      setMessage({ text: 'يرجى تسجيل الدخول للوصول لهذه الخدمة.', type: 'warning' });
      return;
    }

    if (Number(user.credits ?? 0) <= 0) {
      setMessage({ text: 'نَفِد رصيدك المتاح! يرجى الشحن للمتابعة.', type: 'warning' });
      return;
    }

    if (!drawnGeometry) {
      setMessage({ text: 'يرجى رسم حدود المنطقة المستهدفة أولاً.', type: 'warning' });
      return;
    }

    const dateValidation = validateDates(startDate, endDate);
    if (!dateValidation.valid) {
      setMessage({ text: dateValidation.message, type: 'error' });
      return;
    }

    setLoading(true);
    setResults(null);

    try {
      if (analysisType === 'ndvi') {
        await runEsriNdviAnalysis();
      } else {
        const [WebTileLayer, webMercatorUtils] = await loadArcGISJSAPIModules([
          'esri/layers/WebTileLayer',
          'esri/geometry/support/webMercatorUtils'
        ]);

        const formattedGeometry = formatGeometryToGeoJSON(drawnGeometry, webMercatorUtils);
        if (!formattedGeometry) {
          setMessage({ text: 'فشل استخراج إحداثيات المنطقة.', type: 'error' });
          setLoading(false);
          return;
        }

        if (currentAnalysisLayer && jimuMapView?.view?.map) {
          jimuMapView.view.map.remove(currentAnalysisLayer);
        }

        const payload = {
          analysis_type: 'crop_type',
          project_id: 1,
          testStartDate: startDate,
          testEndDate: endDate,
          geometry: formattedGeometry
        };

        const numericTesterId = user.id ? Number(user.id) : 1;

        const response = await api.post('/gaip/classify', payload, {
          headers: {
            'X-Tester-Id': numericTesterId
          }
        });

        const analysisResponse = response.data?.gaip_response ?? response.data;
        const { crop_areas_feddans, crop_health_feddans, maps_urls, passed_metadata } = analysisResponse || {};

        setResults({
          crop_areas_feddans: crop_areas_feddans || {},
          crop_health_feddans: crop_health_feddans || {}
        });

        const tileUrlsData = {
          crop_type: maps_urls?.crop_type_tiles || maps_urls?.tiles,
          crop_health: maps_urls?.crop_health_tiles
        };
        setTileUrls(tileUrlsData);

        const tileUrl = tileUrlsData.crop_type;

        if (tileUrl && jimuMapView?.view?.map) {
          const analysisLayer = new WebTileLayer({
            urlTemplate: tileUrl,
            opacity: layerOpacity,
            title: 'نتائج تصنيف المحاصيل'
          });

          jimuMapView.view.map.add(analysisLayer);
          setCurrentAnalysisLayer(analysisLayer);

          if (drawnGeometry) {
            jimuMapView.view.goTo(drawnGeometry.extent.expand(1.2));
          }
        }

        // 💾 حفظ البيانات لاسترجاعها عند التنقل لصفحة المقارنة
        const finalMetadata = passed_metadata || payload;
        
        localStorage.setItem('lastAnalysisMetadata', JSON.stringify(finalMetadata));

        window.dispatchEvent(
          new CustomEvent('cropAnalysisCompleted', {
            detail: {
              analysisType,
              metadata: finalMetadata,
              responseData: analysisResponse
            }
          })
        );

        await syncUserBalance(user);
        setMessage({ text: 'تم تنفيذ تحليل تصنيف المحاصيل بنجاح.', type: 'success' });
      }
    } catch (err: any) {
      console.error('GeoAI Analysis failed:', err);

      let errorMsg = 'حدث خطأ غير متوقع أثناء معالجة البيانات.';
      if (err.response?.data?.detail) {
        const detail = err.response.data.detail;
        errorMsg = Array.isArray(detail)
          ? (detail[0]?.msg || JSON.stringify(detail))
          : (typeof detail === 'string' ? detail : JSON.stringify(detail));
      } else if (err.message) {
        errorMsg = err.message;
      }

      setMessage({ text: errorMsg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const getGrowthStage = (cropType: string, dateStr: string) => {
    if (!cropType || !dateStr) return 'غير محدد';
    const end = new Date(dateStr);
    let plantingDate: Date;

    if (cropType === 'Wheat') {
      const year = end.getMonth() >= 10 ? end.getFullYear() : end.getFullYear() - 1;
      plantingDate = new Date(`${year}-11-01`);
    } else if (cropType === 'Corn') {
      plantingDate = new Date(`${end.getFullYear()}-05-01`);
    } else {
      return 'غير محدد';
    }

    const diffDays = Math.floor((end.getTime() - plantingDate.getTime()) / (1000 * 60 * 60 * 24));

    if (cropType === 'Wheat') {
      if (diffDays < 40) return 'إنبات (Seedling)';
      if (diffDays < 90) return 'نمو خضري (Vegetative)';
      return 'نضج (Maturation)';
    } else {
      if (diffDays < 30) return 'إنبات (Seedling)';
      if (diffDays < 70) return 'نمو خضري (Vegetative)';
      return 'نضج (Maturation)';
    }
  };

  const computeClassificationMetrics = () => {
    if (!results) return null;

    const cropAreas = results.crop_areas_feddans || {};
    const cropHealth = results.crop_health_feddans || {};

    const wheat = cropAreas.Wheat_1 || cropAreas.Wheat || 0;
    const corn = cropAreas.Corn_0 || cropAreas.Corn || 0;
    const nonAgri = cropAreas.Non_agricultural_2 || cropAreas.Non_agricultural || 0;

    const total = wheat + corn + nonAgri || Object.values(cropAreas).reduce((a, b) => a + Number(b), 0) || 1;
    const wheatPct = ((wheat / total) * 100).toFixed(1);
    const cornPct = ((corn / total) * 100).toFixed(1);
    const nonAgriPct = ((nonAgri / total) * 100).toFixed(1);

    const highH = cropHealth.High_Quality_Green || cropHealth.High || 0;
    const medH = cropHealth.Medium_Quality_Yellow || cropHealth.Medium || 0;
    const lowH = cropHealth.Low_Quality_Red || cropHealth.Low || 0;
    const totalH = highH + medH + lowH || Object.values(cropHealth).reduce((a, b) => a + Number(b), 0) || 1;

    const healthIndex = Math.round((highH * 100 + medH * 60 + lowH * 20) / totalH);
    const dominantCrop = wheat >= corn ? 'القمح (Wheat)' : 'الذرة (Corn)';

    return {
      wheat,
      corn,
      nonAgri,
      total,
      wheatPct,
      cornPct,
      nonAgriPct,
      highH,
      medH,
      lowH,
      totalH,
      healthIndex,
      dominantCrop,
      growthStage: getGrowthStage(wheat >= corn ? 'Wheat' : 'Corn', endDate)
    };
  };

  const metrics = computeClassificationMetrics();

  return (
    <div className="widget-analysis jimu-widget" style={styles.container}>
      {(autoMapId || (props.useMapWidgetIds && props.useMapWidgetIds[0])) && (
        <JimuMapViewComponent
          useMapWidgetId={autoMapId || props.useMapWidgetIds[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}

      {/* Header Card */}
      <div style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={styles.iconBadge}>🌱</div>
          <div>
            <h3 style={styles.title}>منصة التحليلات الزراعية</h3>
            <span style={styles.subtitle}>GeoAI & Remote Sensing Engine</span>
          </div>
        </div>
        {user && (
          <div style={styles.balanceBadge}>
            <span style={{ fontSize: '0.9rem' }}>⚡</span>
            <span>الرصيد: <strong>{Number(user.credits ?? 0)}</strong></span>
          </div>
        )}
      </div>

      {!user ? (
        <div style={styles.alertWarning}>
          ⚠️ يرجى تسجيل الدخول للوصول إلى أدوات المعالجة والتحليل.
        </div>
      ) : (
        <div style={styles.bodyContainer}>
          {/* Selection */}
          <div style={styles.formGroup}>
            <label style={styles.label}>نوع التحليل المطلوب:</label>
            <div style={styles.selectWrapper}>
              <select
                value={analysisType}
                onChange={(e) => setAnalysisType(e.target.value as any)}
                style={styles.select}
              >
                <option value="crop_type">🌾 تصنيف أنواع المحاصيل (Grop Analysis)</option>
                <option value="ndvi">🌿 مؤشر صحة النبات (NDVI)</option>
              </select>
            </div>
          </div>

          {/* Drawing Button */}
          <div style={styles.formGroup}>
            <button
              type="button"
              onClick={startDrawing}
              style={{
                ...styles.drawButton,
                borderColor: drawnGeometry ? '#10b981' : '#cbd5e1',
                backgroundColor: drawnGeometry ? '#ecfdf5' : '#f8fafc',
                color: drawnGeometry ? '#047857' : '#334155'
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{drawnGeometry ? '✨' : '✏️'}</span>
              <span>{drawnGeometry ? 'إعادة تحديد منطقة الدراسة' : 'رسم منطقة الدراسة على الخريطة'}</span>
            </button>
          </div>

          {/* Date Picker Grid */}
          <div style={styles.grid2}>
            <div style={styles.formGroup}>
              <label style={styles.label}>تاريخ البدء:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>تاريخ النهاية:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>

          {/* Opacity Controller */}
          {currentAnalysisLayer && (
            <div style={styles.opacityBox}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <label style={styles.label}>شفافية الطبقة:</label>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0f172a' }}>
                  {Math.round(layerOpacity * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={layerOpacity}
                onChange={handleOpacityChange}
                style={styles.rangeInput}
              />
            </div>
          )}

          {/* Layer Toggle (Classification / Health) */}
          {tileUrls.crop_type && tileUrls.crop_health && (
            <div style={styles.opacityBox}>
              <label style={styles.label}>طبقة العرض:</label>
              <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => switchTileLayer('crop_type')}
                  style={{
                    ...styles.toggleBtn,
                    backgroundColor: currentTileLayer === 'crop_type' ? '#059669' : '#f8fafc',
                    color: currentTileLayer === 'crop_type' ? '#ffffff' : '#334155',
                    borderColor: currentTileLayer === 'crop_type' ? '#059669' : '#cbd5e1'
                  }}
                >
                  🌾 التصنيف
                </button>
                <button
                  type="button"
                  onClick={() => switchTileLayer('crop_health')}
                  style={{
                    ...styles.toggleBtn,
                    backgroundColor: currentTileLayer === 'crop_health' ? '#0891b2' : '#f8fafc',
                    color: currentTileLayer === 'crop_health' ? '#ffffff' : '#334155',
                    borderColor: currentTileLayer === 'crop_health' ? '#0891b2' : '#cbd5e1'
                  }}
                >
                  🌿 الصحة
                </button>
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={handleRunAnalysis}
            disabled={loading}
            style={{
              ...styles.primaryButton,
              backgroundColor: Number(user.credits ?? 0) > 0 ? '#059669' : '#94a3b8',
              cursor: loading ? 'wait' : 'pointer'
            }}
          >
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span className="spinner" />
                <span>جاري المعالجة...</span>
              </div>
            ) : (
              <span>🚀 بدء المعالجة والتحليل</span>
            )}
          </button>

          {/* Notification Messages */}
          {message && (
            <div
              style={{
                ...styles.alertBox,
                ...(message.type === 'success' ? styles.alertSuccess : {}),
                ...(message.type === 'error' ? styles.alertError : {}),
                ...(message.type === 'warning' ? styles.alertWarning : {}),
                ...(message.type === 'info' ? styles.alertInfo : {})
              }}
            >
              {message.text}
            </div>
          )}

          {/* Results Analytics Panel */}
          {metrics && (
            <div style={styles.resultsPanel}>
              <h4 style={styles.resultHeader}>📊 ملخص المؤشرات الحقلية</h4>

              <div style={styles.statsGrid}>
                <div style={styles.statBox}>
                  <span style={styles.statLabel}>المساحة الكلية</span>
                  <strong style={styles.statValue}>{Math.round(metrics.total)} فدان</strong>
                </div>
                <div style={styles.statBox}>
                  <span style={styles.statLabel}>المحصول السائد</span>
                  <strong style={styles.statValue}>{metrics.dominantCrop}</strong>
                </div>
                <div style={styles.statBox}>
                  <span style={styles.statLabel}>مرحلة النمو</span>
                  <strong style={styles.statValue}>{metrics.growthStage}</strong>
                </div>
              </div>

              <div style={styles.metricSection}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={styles.sectionLabel}>مؤشر صحة النبات (NDVI)</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#059669' }}>
                    {metrics.healthIndex}%
                  </span>
                </div>
                <div style={styles.badgeList}>
                  <div style={{ ...styles.badge, backgroundColor: '#dcfce7', color: '#15803d', borderColor: '#86efac' }}>
                    🟢 ممتازة: {metrics.highH.toFixed(1)} ف
                  </div>
                  <div style={{ ...styles.badge, backgroundColor: '#fef9c3', color: '#a16207', borderColor: '#fde047' }}>
                    🟡 متوسطة: {metrics.medH.toFixed(1)} ف
                  </div>
                  <div style={{ ...styles.badge, backgroundColor: '#fee2e2', color: '#b91c1c', borderColor: '#fca5a5' }}>
                    🔴 ضعيفة: {metrics.lowH.toFixed(1)} ف
                  </div>
                </div>
              </div>

              <div style={styles.metricSection}>
                <span style={styles.sectionLabel}>التوزيع النسبي للمساحات:</span>
                <div style={styles.badgeList}>
                  <div style={styles.pillBadge}>القمح: {metrics.wheatPct}%</div>
                  <div style={styles.pillBadge}>الذرة: {metrics.cornPct}%</div>
                  <div style={styles.pillBadge}>غير زراعي: {metrics.nonAgriPct}%</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '16px',
    direction: 'rtl',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    boxSizing: 'border-box',
    maxHeight: '100vh',
    height: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '12px',
    marginBottom: '14px',
    borderBottom: '1px solid #f1f5f9',
    flexShrink: 0
  },
  iconBadge: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    backgroundColor: '#ecfdf5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem'
  },
  title: {
    margin: 0,
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#0f172a'
  },
  subtitle: {
    fontSize: '0.7rem',
    color: '#64748b',
    display: 'block'
  },
  balanceBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 10px',
    borderRadius: '20px',
    backgroundColor: '#f0fdf4',
    color: '#166534',
    border: '1px solid #bbf7d0',
    fontSize: '0.75rem',
    fontWeight: 600
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  label: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#334155'
  },
  selectWrapper: {
    position: 'relative'
  },
  select: {
    width: '100%',
    padding: '8px 10px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#f8fafc',
    fontSize: '0.825rem',
    color: '#1e293b',
    outline: 'none'
  },
  input: {
    width: '100%',
    padding: '8px 10px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    fontSize: '0.825rem',
    color: '#1e293b',
    boxSizing: 'border-box',
    outline: 'none'
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px'
  },
  drawButton: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px dashed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: 600,
    fontSize: '0.825rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  opacityBox: {
    padding: '10px',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  rangeInput: {
    width: '100%',
    accentColor: '#059669',
    cursor: 'pointer'
  },
  primaryButton: {
    width: '100%',
    padding: '11px',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '0.875rem',
    boxShadow: '0 2px 6px rgba(5, 150, 105, 0.25)',
    transition: 'background-color 0.2s ease'
  },
  alertBox: {
    padding: '10px 12px',
    borderRadius: '8px',
    fontSize: '0.8rem',
    lineHeight: '1.4'
  },
  alertSuccess: {
    backgroundColor: '#f0fdf4',
    color: '#166534',
    border: '1px solid #bbf7d0'
  },
  alertError: {
    backgroundColor: '#fef2f2',
    color: '#991b1b',
    border: '1px solid #fecaca'
  },
  alertWarning: {
    backgroundColor: '#fffbeb',
    color: '#92400e',
    border: '1px solid #fde68a'
  },
  alertInfo: {
    backgroundColor: '#f0f9ff',
    color: '#075985',
    border: '1px solid #bae6fd'
  },
  resultsPanel: {
    marginTop: '6px',
    padding: '12px',
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
    border: '1px solid #e2e8f0'
  },
  resultHeader: {
    margin: '0 0 10px 0',
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#0f172a'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '6px',
    marginBottom: '10px'
  },
  statBox: {
    backgroundColor: '#ffffff',
    padding: '8px 6px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  statLabel: {
    fontSize: '0.675rem',
    color: '#64748b',
    marginBottom: '2px'
  },
  statValue: {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#0f172a'
  },
  metricSection: {
    marginTop: '8px',
    paddingTop: '8px',
    borderTop: '1px dashed #cbd5e1'
  },
  sectionLabel: {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#475569',
    display: 'block',
    marginBottom: '4px'
  },
  badgeList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px'
  },
  badge: {
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '0.725rem',
    fontWeight: 600,
    border: '1px solid'
  },
  pillBadge: {
    backgroundColor: '#ffffff',
    color: '#334155',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '0.725rem',
    border: '1px solid #cbd5e1'
  },
  toggleBtn: {
    flex: 1,
    padding: '8px 10px',
    borderRadius: '8px',
    border: '1px solid',
    fontWeight: 700,
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }
};
/** @jsx jsx */
import {
  DataActionManager,
  DataLevel,
  type DataRecord,
  type DataRecordSet,
  type DataSource,
  DataSourceManager,
  DataSourceStatus,
  DataSourceTypes,
  type FeatureLayerDataSource,
  type FieldSchema,
  type IMDataSourceSchema,
  Immutable,
  type ImmutableArray,
  type ImmutableObject,
  JimuFieldType,
  React,
  hooks,
  jsx,
  useIntl
} from 'jimu-core'
import defaultMessages from '../../../translations/default'
import { EditableFields } from './editable-fields'
import { NonEditableFields } from './non-editable-fields'
import { Button, Modal, ModalBody, ModalHeader, Tooltip } from 'jimu-ui'
import type { SubtypeLayers, DynSegFieldInfo, Track, TrackRecord } from '../../../../config'
import { type EventInfo, getCalciteNoticeTheme, getExistingFieldNames, getLayer, type IntersectionInfo, isDefined, type LrsLayer, LrsLayerType, type NetworkInfo } from 'widgets/shared-code/lrs'
import { DynSegFields } from '../../../../constants'
import { getAttributesByDiagram, getObjectIdFieldName, getObjectIdValue } from '../../../utils/diagram-utils'
import { ExportOutlined } from 'jimu-icons/outlined/editor/export'
import { colorUtils, getTheme } from 'jimu-theme'
import { useDynSegRuntimeDispatch, useDynSegRuntimeState } from '../../../state'
import FeatureLayer from 'esri/layers/FeatureLayer'
import Graphic from 'esri/Graphic'
import { Statistics } from './statistics'
import { createLockInfoFromParams, preventConflict, getRouteIdsOnLine } from '../../../utils/edit-utils'
import { round } from 'lodash-es'
import { queryIntersections, queryDeviceJunctions } from '../../../utils/service-utils'
import 'calcite-components'

export interface EditPopupProps {
  widgetId: string
  track: Track
  allowEditing: boolean
  trackRecord: TrackRecord
  trackFieldInfos: DynSegFieldInfo[]
  lrsLayers: ImmutableArray<LrsLayer>
  subtypeLayers: SubtypeLayers[]
  networkInfo: ImmutableObject<NetworkInfo>
  showEventStatistics: boolean
  featureLayer: __esri.FeatureLayer
  onApply: (track: Track) => void
  onClose: () => void
}

export function EditPopup (props: EditPopupProps) {
  const { widgetId, track, allowEditing, trackRecord, trackFieldInfos, lrsLayers, subtypeLayers, networkInfo, showEventStatistics, featureLayer, onApply, onClose } = props
  const [showPopup, setShowPopup] = React.useState(false)
  const [showEditNotice, setShowEditNotice] = React.useState(false)
  const [noticeMessage, setNoticeMessage] = React.useState('')
  const [noticeType, setNoticeType] = React.useState<'info' | 'warning' | 'danger' | 'success'>('info')
  const [showNotice, setShowNotice] = React.useState(false)
  const [refreshStats, setRefreshStats] = React.useState(false)

  const [eventInfo, setEventInfo] = React.useState<EventInfo>(null)
  const [isUNLayer, setIsUNLayer] = React.useState<boolean>(false)
  const [records, setRecords] = React.useState<__esri.Graphic[]>([])
  const [selectedFeatureLayer, setSelectedFeatureLayer] = React.useState<__esri.FeatureLayer>(null)
  const [featureFields, setFeatureFields] = React.useState<__esri.Field[]>([])
  const [featureDS, setFeatureDS] = React.useState<DataSource>(null)

  const [currentRecord, setCurrentRecord] = React.useState<__esri.Graphic>(null)
  const [outputPointDsId, setOutputPointDsId] = React.useState<string>(null)
  const [outputLineDsId, setOutputLineDsId] = React.useState<string>(null)

  const statRef = React.useRef(null)
  const editRef = React.useRef(null)
  const { pendingEdits, selectedSldId, outputDataSources, conflictPreventionEnabled, networkDS, currentRouteInfo } = useDynSegRuntimeState()
  const dispatch = useDynSegRuntimeDispatch()
  const getI18nMessage = hooks.useTranslation(defaultMessages)
  const theme = getTheme()
  const intl = useIntl()

  // #region Effects
  React.useEffect(() => {
    if (!isDefined(track) || !isDefined(trackRecord)) {
      setShowPopup(false)
    } else {
      setShowPopup(true)
      findRecords()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track, trackRecord])

  React.useEffect(() => {
    if (isDefined(outputDataSources) && outputDataSources.length === 2) {
      setOutputPointDsId(outputDataSources[0])
      setOutputLineDsId(outputDataSources[1])
    }
  }, [outputDataSources])
  // #endregion

  React.useEffect(() => {
    if (showNotice) {
      setTimeout(() => {
        setShowNotice(false)
        setNoticeMessage('')
        setNoticeType('success')
      }, 10000)
    }
  }, [showNotice])

  const canEdit = React.useMemo(() => {
    return isDefined(eventInfo) && allowEditing
  }, [eventInfo, allowEditing])

  const canShowStats = React.useMemo(() => {
    return showEventStatistics && (isDefined(eventInfo) || isUNLayer)
  }, [showEventStatistics, eventInfo, isUNLayer])

  // #region Event Query
  const findRecords = async () => {
    // find the event layer
    const lrsLayer = lrsLayers.find(lrsLayer => lrsLayer.serviceId.toString() === track.layerId)
    const dataSource = DataSourceManager.getInstance().getDataSource(lrsLayer.useDataSource.dataSourceId)

    if (isDefined(lrsLayer) && lrsLayer.layerType === LrsLayerType.Event) {
      setIsUNLayer(false)
      setEventInfo(lrsLayer.eventInfo)
      if (isDefined(dataSource)) {
        let gdbVersion = (dataSource as FeatureLayerDataSource).getGDBVersion()
        if (!gdbVersion) {
          gdbVersion = ''
        }
        let historicMoment = (dataSource as FeatureLayerDataSource)?.getHistoricMoment()
        if (historicMoment === '') {
          historicMoment = null
        }

        const eventLayer = await getLayer(lrsLayer.useDataSource)
        const query = eventLayer.createQuery()
        const routeId = trackRecord.attributes.get(DynSegFields.routeIdName)
        const fieldType = eventLayer.fields.find((field) => field.name === lrsLayer.eventInfo.routeIdFieldName)?.type

        // Get all route ids on the line if the event layer can span routes
        let routeIds: string[] = []
        if (lrsLayer?.eventInfo?.canSpanRoutes) {
          const networkLayer = lrsLayers.find(lrsLayer => lrsLayer?.networkInfo?.lrsNetworkId === networkInfo.lrsNetworkId)
          const networkDataSource = DataSourceManager.getInstance().getDataSource(networkLayer.useDataSource.dataSourceId) as FeatureLayerDataSource
          routeIds = await getRouteIdsOnLine(networkInfo, routeId as string, networkDataSource)
        }

        query.outFields = ['*']
        if (fieldType === 'string') {
          // Use case insensitive string comparison for String fields
          if (routeIds.length > 1) {
            query.where = `LOWER(${lrsLayer.eventInfo.routeIdFieldName}) IN ('${routeIds.join('\',\'')}')`
          } else
          {
            query.where = `LOWER(${lrsLayer.eventInfo.routeIdFieldName}) = LOWER('${routeId}')`
          }
        } else {
          // Use case sensitive string comparison for GUID fields
          if (routeIds.length > 1) {
            query.where = `${lrsLayer.eventInfo.routeIdFieldName} IN ('${routeIds.join('\',\'')}')`
          } else {
            query.where = `${lrsLayer.eventInfo.routeIdFieldName} = '${routeId}'`
          }
        }
        query.historicMoment = historicMoment
        query.gdbVersion = gdbVersion
        query.start = 0

        // QueryFeatures can only return a max of 2000 records at a time. Get the
        // feature count first and then loop through the query to get all the records.
        let newRecords: __esri.Graphic[] = []
        await eventLayer.queryFeatureCount(query).then(async (count) => {
          while (query.start < count) {
            query.num = 2000
            await eventLayer.queryFeatures(query).then((res) => {
              if (query.start === 0) {
                // set the event data source and fields
                setFeatureDS(dataSource)
                setFeatureFields(eventLayer.fields)
                setSelectedFeatureLayer(eventLayer)
                newRecords = res.features
              } else {
                newRecords = newRecords.concat(res.features)
              }
            })
            query.start += 2000
          }
          // set the event records and current record
          setRecords(newRecords)
          findCurrentEventRecord(newRecords, dataSource, lrsLayer.eventInfo)
        })
      }
    } else if (isDefined(lrsLayer) && lrsLayer.layerType === LrsLayerType.Intersection) {
      setIsUNLayer(false)
      const results = await queryIntersections(currentRouteInfo, lrsLayer, networkDS, null, false)
      if (results.length > 0) {
        const intersectionLayer = await getLayer(lrsLayer.useDataSource)
        setFeatureDS(dataSource)
        setFeatureFields(intersectionLayer.fields)
        setSelectedFeatureLayer(intersectionLayer)
        setRecords(results)
        findCurrentIntersectionRecord(results, dataSource, lrsLayer.intersectionInfo)
      }
    } else if (isDefined(lrsLayer) && lrsLayer.layerType === LrsLayerType.UtilityNetwork) {
      setIsUNLayer(true)
      setEventInfo(null)
      const results = await queryDeviceJunctions(currentRouteInfo, lrsLayer, networkDS)
      if (results.length > 0) {
        const deviceJunctionLayer = await getLayer(lrsLayer.useDataSource)
        setFeatureDS(dataSource)
        setFeatureFields(deviceJunctionLayer.fields)
        setSelectedFeatureLayer(deviceJunctionLayer)
        setRecords(results)
        findCurrentUNRecord(results)
      }
    }
  }

  const findCurrentEventRecord = (records: __esri.Graphic[], dataSource: DataSource, eventInfo: EventInfo) => {
    if (records.length === 0) {
      setCurrentRecord(null)
    } else if (records.length === 1) {
      setCurrentRecord(getRecordWithTrackInfo(records[0], trackRecord, eventInfo.fromMeasureFieldName, eventInfo.toMeasureFieldName))
    } else {
      records.forEach(record => {
        const e1 = record.getObjectId()
        const e2 = trackRecord.attributes.get(getObjectIdFieldName(trackRecord))
        if (e1 === e2) {
          setCurrentRecord(getRecordWithTrackInfo(record, trackRecord, eventInfo.fromMeasureFieldName, eventInfo.toMeasureFieldName))
        }
      })
    }
  }

  const findCurrentUNRecord = (records: __esri.Graphic[]) => {
    if (records.length === 0) {
      setCurrentRecord(null)
    } else if (records.length === 1) {
      const record = getRecordWithTrackInfo(records[0], trackRecord, '', '')
      setCurrentRecord(record)
    } else {
      records.forEach(record => {
        const e1 = record.getObjectId()
        const e2 = trackRecord.attributes.get(getObjectIdFieldName(trackRecord))
        if (e1 === e2) {
          const matched = getRecordWithTrackInfo(record, trackRecord, '', '')
          setCurrentRecord(matched)
        }
      })
    }
  }

  const findCurrentIntersectionRecord = (records: __esri.Graphic[], dataSource: DataSource, intersectionInfo: IntersectionInfo) => {
    if (records.length === 0) {
      setCurrentRecord(null)
    } else if (records.length === 1) {
      setCurrentRecord(getRecordWithTrackInfo(records[0], trackRecord, intersectionInfo.fromDateFieldNameSchema.name))
    } else {
      records.forEach(record => {
        const e1 = record.getObjectId()
        const e2 = trackRecord.attributes.get(getObjectIdFieldName(trackRecord))
        if (e1 === e2) {
          setCurrentRecord(getRecordWithTrackInfo(record, trackRecord, intersectionInfo.fromDateFieldNameSchema.name))
        }
      })
    }
  }

  const getRecordWithTrackInfo = (record: __esri.Graphic, trackRecord: TrackRecord, fromMeasureName: string, toMeasureName?: string): __esri.Graphic => {
    // Sync the current record with the track record
    const values = { ...record.attributes }
    const keys = Object.keys(values)

    // Track record's field names are lowercase but the actual event field names could be uppercase
    const fromM = trackRecord.attributes.get(DynSegFields.fromMeasureName)
    values[fromMeasureName] = !isDefined(fromM) || fromM === '' || isNaN(Number(fromM)) ? fromM : round(Number(fromM), networkInfo.measurePrecision)
    if (toMeasureName && toMeasureName.length > 0) {
      const toM = trackRecord.attributes.get(DynSegFields.toMeasureName)
      values[toMeasureName] = !isDefined(toM) || toM === '' || isNaN(Number(toM)) ? toM : round(Number(toM), networkInfo.measurePrecision)
    }

    keys.forEach((key) => {
      if (trackRecord.attributes.has(key)) {
        values[key] = trackRecord.attributes.get(key)
      }
    })
    record.attributes = values
    return record
  }
  // #endregion

  // #region Export to CSV
  const handleExport = async () => {
    if (isDefined(featureDS) && isDefined(currentRecord)) {
      // Build the output data record
      const dataRecord = getDataRecord(featureDS, currentRecord)
      if (!isDefined(dataRecord)) {
        return
      }

      // build the output data source
      const results = await buildOutputDsResults(featureDS, [dataRecord])
      if (!isDefined(results)) {
        return
      }

      // export the data source to csv
      const dsId = results[0]
      if (dsId) {
        const dataSetRecords = results[1]
        const dsManager = DataSourceManager.getInstance()
        const outDS = dsManager?.getDataSource(dsId)
        dsManager.createDataSource(Immutable({
          id: featureDS.id + '_export',
          type: DataSourceTypes.FeatureLayer,
          isDataInDataSourceInstance: true,
          schema: outDS.getSchema(),
          disableExport: false
        })).then(ds => {
          ds.setSourceRecords([dataRecord])

          const actionsPromise = DataActionManager.getInstance().getSupportedActions(widgetId, dataSetRecords, DataLevel.Records)
          actionsPromise.then(async actions => {
            const action = actions.export
            if (action?.length > 0) {
              const exportToCsvAction = action.filter((action) => {
                return action.id === 'export-csv'
              })
              await DataActionManager.getInstance().executeDataAction(exportToCsvAction[0], dataSetRecords, DataLevel.Records, widgetId)
            }
          }).catch(err => {
            console.error(err)
          })
        })
      }
    }
  }

  const buildOutputDsResults = async (dataSource: DataSource, featureRecords: DataRecord[]): Promise<[string, DataRecordSet[]]> => {
    // get the output data source

    const outputDsId = (isUNLayer || eventInfo?.isPointEvent) ? outputPointDsId : outputLineDsId
    let outputDS = DataSourceManager.getInstance().getDataSource(outputDsId)
    if (!outputDS) {
      outputDS = await DataSourceManager.getInstance().createDataSource(outputDsId) as FeatureLayerDataSource
    }
    if (!outputDS) {
      return
    }

    // set the schema for the output data source using the input data source.
    // we will tack on statistic fields if applicable.
    const newSchema = getOutputSchema(dataSource)
    outputDS.setSchema(newSchema)
    const fieldsToExport = getFieldsToExport()
    const dsJson = Object.assign(outputDS.getDataSourceJson())
    const label = dataSource.getLabel() + '_export'
    DataSourceManager.getInstance().updateDataSourceByDataSourceJson(outputDS, Immutable({ ...dsJson, label: label, disableExport: false }))

    const sourceFeatures: Graphic[] = []
    featureRecords?.forEach((record: any, index) => {
      //create source feature values by pushing the graphic attributes
      const featureValue: any = {}
      const tempFeature = record.getFeature()
      if (tempFeature.attributes) {
        for (const key in tempFeature.attributes) {
          const attributeValue = tempFeature.attributes[key]
          //add values for new feature
          if (attributeValue !== undefined && attributeValue !== null) {
            featureValue[key] = attributeValue
          }
        }
      }
      const newGraphic = new Graphic({
        attributes: featureValue,
        geometry: record.geometry
      })
      sourceFeatures.push(newGraphic)
    })

    //create field infos for layer and popupTemplate
    const fieldsInPopupTemplate: any[] = []
    const layerFields: any[] = []
    const featureFields = Object.keys(newSchema?.fields)
      .filter(key => fieldsToExport.includes(key))
      .reduce((obj, key) => {
        obj[key] = newSchema?.fields[key]
        return obj
      }, {})
    for (const key in featureFields) {
      let fieldType
      if (featureFields[key].type === JimuFieldType.Number) {
        fieldType = 'double'
      } else if (featureFields[key].type === JimuFieldType.Date) {
        fieldType = 'date'
      } else {
        fieldType = 'string'
      }
      const fieldInfo = {
        alias: featureFields[key].alias,
        name: featureFields[key].name,
        type: fieldType
      }
      const popupFieldItem = {
        fieldName: featureFields[key].name,
        label: featureFields[key].alias
      }
      layerFields.push(fieldInfo)
      fieldsInPopupTemplate.push(popupFieldItem)
    }

    // create temp feature layer
    const layer = new FeatureLayer({
      id: outputDsId + '_layer',
      title: outputDsId,
      fields: layerFields,
      geometryType: (isUNLayer || eventInfo?.isPointEvent) ? 'point' : 'polyline',
      source: sourceFeatures,
      objectIdField: outputDS.getSchema().idField,
      popupTemplate: {
        title: outputDS.getLabel(),
        fieldInfos: fieldsInPopupTemplate,
        content: [{
          type: 'fields',
          fieldInfos: fieldsInPopupTemplate
        }]
      },
      visible: false,
      listMode: 'hide'
    })

    // assign feature layer to the data source
    const featureLayerDs = DataSourceManager.getInstance().getDataSource(outputDsId) as FeatureLayerDataSource
    if (layer && featureLayerDs) {
      featureLayerDs.layer = layer
    }

    // create the data set array
    const dataSetArr: DataRecordSet[] = []
    dataSetArr.push({
      records: featureRecords,
      dataSource: outputDS,
      name: outputDS.getLabel(),
      fields: fieldsToExport
    })

    //update the data source status
    DataSourceManager.getInstance().getDataSource(outputDsId)?.setStatus(DataSourceStatus.Unloaded)
    DataSourceManager.getInstance().getDataSource(outputDsId)?.setCountStatus(DataSourceStatus.Unloaded)
    DataSourceManager.getInstance().getDataSource(outputDsId)?.addSourceVersion()

    return [outputDsId, dataSetArr]
  }

  const getOutputSchema = (dataSource: DataSource): IMDataSourceSchema => {
    const fields = {}
    const featureDS = dataSource as FeatureLayerDataSource
    const originSchema = featureDS?.getSchema().fields.asMutable({ deep: true })
    const lrsFields = getLrsFields()
    const attributes = isUNLayer ? getUNFieldsToExport() : getAttributeSetFields()
    const statFields = getStatFields()
    const outputFields: FieldSchema[] = []

    // Only include fields that are in the UI.
    Object.keys(originSchema).forEach((value) => {
      if (lrsFields.includes(value)) {
        outputFields.push(originSchema[value])
      }
      if (attributes.includes(value)) {
        outputFields.push(originSchema[value])
      }
    })

    // Include the statistic fields
    statFields.forEach((field) => {
      outputFields.push({
        alias: field[0],
        type: JimuFieldType.Number,
        jimuName: field[0],
        name: field[0]
      })
    })

    // Gather each schema field.
    outputFields?.forEach((fieldSchema) => {
      fields[fieldSchema?.jimuName] = fieldSchema
    })
    const label = dataSource.getLabel() + '_export'

    // return schema object.
    return {
      label,
      idField: 'OBJECTID',
      fields: fields
    } as IMDataSourceSchema
  }

  const getUNFieldsToExport = (): string[] => {
    let fieldsToFilter = getExistingFieldNames().map(f => f.toUpperCase())
    fieldsToFilter = fieldsToFilter.concat([
      selectedFeatureLayer?.editFieldsInfo?.creationDateField,
      selectedFeatureLayer?.editFieldsInfo?.creatorField,
      selectedFeatureLayer?.editFieldsInfo?.editorField,
      selectedFeatureLayer?.editFieldsInfo?.editDateField,
      selectedFeatureLayer?.objectIdField,
      selectedFeatureLayer?.globalIdField
    ].filter(Boolean).map(f => f.toUpperCase()))
    return featureFields
      .filter(field => !(
        fieldsToFilter.includes(field.name.toUpperCase()) ||
        fieldsToFilter.includes(field.alias.toUpperCase())
      ))
      .map(field => field.name)
  }

  const getFieldsToExport = (): string[] => {
    if (isUNLayer) return getUNFieldsToExport()
    const lrsFields = eventInfo.lrsFields.map((lrsField) => lrsField.name)
    const statFields = getStatFields().map((field) => field[0])
    const dynSegFieldValues = Object.values(DynSegFields)
    const trackFieldKeys = [...trackRecord.attributes.keys()]
    const objectIdFields = trackFieldInfos.filter((field) => field.isOidField).map((field) => field.featureFieldName)
    const trackFields = trackFieldKeys.filter((key) => !dynSegFieldValues.includes(key) && key !== eventInfo.eventIdFieldName && !objectIdFields.includes(key))
    return [...lrsFields, ...statFields, ...trackFields]
  }

  const getLrsFields = (): string[] => {
    if (isUNLayer) return []
    return eventInfo.lrsFields.map((lrsField) => lrsField.name)
  }

  const getAttributeSetFields = (): string[] => {
    const attributeFields = []
    const keys = Object.keys(currentRecord.attributes)
    keys.forEach((key) => {
      if (trackRecord.attributes.has(key)) {
        attributeFields.push(key)
      }
    })
    return attributeFields
  }

  const getStatFields = (): Array<[string, string]> => {
    if (!statRef.current) {
      return []
    }
    return statRef.current.getStats()
  }

  const getDataRecord = (dataSource: DataSource, currentRecord: __esri.Graphic): DataRecord => {
    const attributesToInclude: { [key: string]: any } = {}

    if (isUNLayer) {
      const unFields = getUNFieldsToExport()
      Object.keys(currentRecord.attributes).forEach((key) => {
        if (unFields.includes(key)) {
          attributesToInclude[key] = currentRecord.attributes[key]
        }
      })
    } else {
      const lrsFields = getLrsFields()
      const statFields = getStatFields()
      const keys = Object.keys(currentRecord.attributes)
      keys.forEach((key) => {
        if (lrsFields.includes(key)) {
          attributesToInclude[key] = currentRecord.attributes[key]
        }
        if (trackRecord.attributes.has(key)) {
          attributesToInclude[key] = trackRecord.attributes.get(key)
        }
      })
      statFields.forEach((field) => {
        attributesToInclude[field[0]] = field[1]
      })
    }

    return dataSource.buildRecord({ attributes: attributesToInclude, geometry: currentRecord.geometry })
  }

  // #endregion

  // #region Event Handlers
  const handleClose = (discard?: boolean) => {
    if (editRef.current && editRef.current.isEditPending() && !discard) {
      setShowEditNotice(true)
    } else {
      setShowEditNotice(false)
      setShowNotice(false)
      setShowPopup(false)
      setEventInfo(null)
      setRecords([])
      setSelectedFeatureLayer(null)
      setFeatureFields([])
      setCurrentRecord(null)
      dispatch({ type: 'SET_SELECTED_SLD_ID', value: '' })
      onClose()
    }
  }

  const handleSave = () => {
    editRef.current?.applyEdit()
    setTimeout(() => {
      if (!editRef.current.isEditPending()) {
        setShowEditNotice(false)
        handleClose()
      }
    }, 200)
  }

  const handleApply = React.useCallback(async (record: TrackRecord) => {
    // Update the pending edits

    let locks = null
    if (conflictPreventionEnabled) {
      const routeId = trackRecord.attributes.get(DynSegFields.routeIdName) as string
      const params = await createLockInfoFromParams(currentRouteInfo, lrsLayers, routeId, networkDS, track.layerId)
      locks = await preventConflict(params, networkDS as FeatureLayerDataSource, intl)
      if (locks) {
        setNoticeMessage(locks.toastMsg)
        if (locks.toastMsgType === 'danger') {
          setNoticeType('danger')
          setShowNotice(true)
          return
        } else if (locks.toastMsgType === 'info') {
          setNoticeType('info')
        }
      }
    }

    const updatedPendingEdits = new Map(pendingEdits)
    const DynSegEdits = {
      layerId: track.layerId,
      attributes: getAttributesByDiagram(trackFieldInfos, record, eventInfo?.datasetName, false)
    }
    updatedPendingEdits.set(selectedSldId, DynSegEdits)
    dispatch({ type: 'SET_EDITS', value: updatedPendingEdits })

    // Update the client side feature layer.
    const query = featureLayer.createQuery()
    query.outFields = ['*']
    query.where = getObjectIdFieldName(record) + ` = ${getObjectIdValue(record)}`

    featureLayer.queryFeatures(query).then((res) => {
      if (res.features.length > 0) {
        for (const feature of res.features) {
          const recordFieldKeys = record.attributes.keys()
          for (const key of recordFieldKeys) {
            const fieldInfo = record.fieldInfos.find((field) => field.originalFieldName === key)
            if (fieldInfo) {
              feature.attributes[fieldInfo.featureFieldName] = record.attributes.get(key)
            }
          }
        }

        featureLayer.applyEdits({
          updateFeatures: res.features
        }).then((result) => {
          if (result.updateFeatureResults.length > 0) {
            console.log('Feature updated successfully')
          }
        }).catch((error) => {
          console.error('Error updating feature:', error)
        })
      }
    })

    // Update the track for the UI
    const index = track.records.findIndex((record) => record.index === trackRecord.index)
    if (index > -1) {
      track.records[index] = record
      if (!locks) {
        setNoticeType('success')
      }
      setShowNotice(true)
      onApply(track)
      refresh()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, eventInfo, onApply, pendingEdits, selectedSldId, track, trackFieldInfos, trackRecord])

  const refresh = () => {
    setRefreshStats(true)
    setTimeout(() => {
      setRefreshStats(false)
    }, 200)
  }
  // #endregion

  // #region Render
  return (
    <Modal
      size='sm'
      isOpen={showPopup}
      centered
      scrollable
      toggle={() => { handleClose() }}
      backdrop='static'
    >
      <ModalHeader
        title={track?.layerName}
        toggle={() => { handleClose() }}>
        <div className='d-flex w-100 title1'>
          {track?.layerName}
          <Tooltip title={getI18nMessage('dataAction_ExportCSV')}>
            <Button
              style={{
                marginLeft: 'auto',
                border: 'none'
              }}
              icon
              size='sm'
              onClick={handleExport}>
              <ExportOutlined/>
            </Button>
          </Tooltip>
        </div>
      </ModalHeader>
      <ModalBody
        style={{
          maxHeight: '70vh',
          overflow: 'auto',
          background: theme.sys.color.surface.background
        }}>
          <calcite-notice
          css={getCalciteNoticeTheme(theme)}
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            marginBottom: showNotice ? '15px' : '0px',
            borderTop: showNotice ? `1px solid ${colorUtils.colorMixOpacity(theme.sys.color.surface.overlayHint, 0.5)}` : 'none',
            borderRight: showNotice ? `1px solid ${colorUtils.colorMixOpacity(theme.sys.color.surface.overlayHint, 0.5)}` : 'none',
            borderBottom: showNotice ? `1px solid ${colorUtils.colorMixOpacity(theme.sys.color.surface.overlayHint, 0.5)}` : 'none',
            borderLeft: 0
          }}
            open={showNotice ? true : undefined}
            icon='check-circle'
            kind={noticeType}
            scale='s'
            width='auto'
            closable={true}
            oncalciteNoticeClose={(e) => { setShowNotice(false) }}>
            <div slot='title'>{noticeMessage.length > 0 ? noticeMessage : getI18nMessage('sldEditSuccessful')}</div>
          </calcite-notice>
          <calcite-notice
          css={getCalciteNoticeTheme(theme)}
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            marginBottom: showEditNotice ? '15px' : '0px',
            borderTop: showEditNotice ? `1px solid ${colorUtils.colorMixOpacity(theme.sys.color.surface.overlayHint, 0.5)}` : 'none',
            borderRight: showEditNotice ? `1px solid ${colorUtils.colorMixOpacity(theme.sys.color.surface.overlayHint, 0.5)}` : 'none',
            borderBottom: showEditNotice ? `1px solid ${colorUtils.colorMixOpacity(theme.sys.color.surface.overlayHint, 0.5)}` : 'none',
            borderLeft: 0
          }}
            open={showEditNotice ? true : undefined}
            icon='exclamation-mark-triangle'
            kind='warning'
            scale='s'
            width='auto'
          >
            <div slot='title'>{getI18nMessage('applyEditTitle')}</div>
            <div slot='message'>{getI18nMessage('applyEditMessage')}</div>
            <div slot='actions-end'>
              <div className='d-flex' style={{ flexDirection: 'column', backgroundColor: theme.sys.color.primary.main }}>
                <calcite-action
                  scale='m'
                  icon="read-only-non-editable"
                  text="Discard"
                  text-enabled
                  appearance='transparent'
                  onClick={() => { handleClose(true) }}
                  style={{ border: `2px solid ${theme.sys.color.surface.paper}` }}/>
                <calcite-action
                  scale='m'
                  icon="save"
                  text="Apply"
                  text-enabled
                  appearance='transparent'
                  onClick={() => { handleSave() }}
                  style={{ border: `2px solid ${theme.sys.color.surface.paper}`, borderTop: 0 }}/>
              </div>
            </div>

          </calcite-notice>
          { canEdit && <EditableFields
            ref={editRef}
            trackRecord={trackRecord}
            eventInfo={eventInfo}
            eventRecords={records}
            eventFields={featureFields}
            featureLayer={selectedFeatureLayer}
            currentRecord={currentRecord}
            onApply={handleApply}/> }
          <NonEditableFields
            eventInfo={eventInfo}
            allowEditing={canEdit}
            eventFields={featureFields}
            subtypeLayers={subtypeLayers}
            featureLayer={selectedFeatureLayer}
            currentRecord={currentRecord}/>
          {canShowStats && (
            <Statistics
              ref={statRef}
              track={track}
              trackRecord={trackRecord}
              eventEsriFields={featureFields}
              eventInfo={eventInfo}
              currentRecord={currentRecord}
              allRecords={records}
              networkInfo={networkInfo}
              featureLayer={selectedFeatureLayer}
              refresh={refreshStats}/>
          )}

      </ModalBody>
    </Modal>
  )
}
// #endregion

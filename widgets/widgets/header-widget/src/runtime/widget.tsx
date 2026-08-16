import React, { useState, useEffect } from 'react';
import { AllWidgetProps, getAppStore } from 'jimu-core';

interface UserData {
  email: string;
  credits: number;
  token: string;
  id?: number | string;
}

export default function Widget(props: AllWidgetProps<any>) {
  const [activeTab, setActiveTab] = useState<'main' | 'compare'>('main');
  const [user, setUser] = useState<UserData | null>(null);
  const [showPayModal, setShowPayModal] = useState(false);
  const [message, setMessage] = useState('');

  // ============================================================
  // 🔄 متابعة الصفحة الحالية
  // ============================================================
  useEffect(() => {
    const syncActiveTab = () => {
      try {
        const state = getAppStore().getState();

        const currentPageId =
          state?.appRuntimeInfo?.currentPageId;

        console.log('📍 Current Page ID:', currentPageId);

        if (currentPageId === 'page_4') {
          setActiveTab('compare');
        } else {
          setActiveTab('main');
        }
      } catch (error) {
        console.warn(
          '⚠️ Could not detect current page:',
          error
        );
      }
    };

    syncActiveTab();

    const unsubscribe =
      getAppStore().subscribe(syncActiveTab);

    window.addEventListener(
      'popstate',
      syncActiveTab
    );

    window.addEventListener(
      'hashchange',
      syncActiveTab
    );

    return () => {
      unsubscribe();

      window.removeEventListener(
        'popstate',
        syncActiveTab
      );

      window.removeEventListener(
        'hashchange',
        syncActiveTab
      );
    };
  }, []);

  // ============================================================
  // 👤 متابعة حالة المستخدم
  // ============================================================
  useEffect(() => {
    const checkUser = () => {
      try {
        const savedUser =
          localStorage.getItem('user');

        if (savedUser) {
          setUser(JSON.parse(savedUser));
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error(
          '❌ User data error:',
          error
        );

        setUser(null);
      }
    };

    checkUser();

    window.addEventListener(
      'storage',
      checkUser
    );

    window.addEventListener(
      'userStateChanged',
      checkUser
    );

    return () => {
      window.removeEventListener(
        'storage',
        checkUser
      );

      window.removeEventListener(
        'userStateChanged',
        checkUser
      );
    };
  }, []);

  // ============================================================
  // 🚀 Navigation
  // ============================================================
  const navigateToPage = (pageId: string) => {
    console.log('');
    console.log('========================================');
    console.log('🚀 NAVIGATE TO PAGE');
    console.log('Target Page:', pageId);
    console.log('========================================');

    try {
      const state =
        getAppStore().getState();

      const appConfig =
        state?.appConfig;

      const currentPageId =
        state?.appRuntimeInfo?.currentPageId;

      console.log(
        '📍 Current Page ID:',
        currentPageId
      );

      // ========================================================
      // التأكد أن الصفحة موجودة
      // ========================================================

      const pages =
        appConfig?.pages;

      if (
        !pages ||
        !pages[pageId]
      ) {
        console.error(
          `❌ Page "${pageId}" does not exist`
        );

        console.log(
          'Available pages:',
          pages
            ? Object.keys(pages)
            : []
        );

        return;
      }

      console.log(
        `✅ Target page exists: ${pageId}`
      );

      // ========================================================
      // لو إحنا بالفعل في نفس الصفحة
      // ========================================================

      if (currentPageId === pageId) {
        console.log(
          'ℹ️ Already on this page'
        );

        return;
      }

      // ========================================================
      // قراءة الـ URL الحالي
      // ========================================================

      const currentUrl =
        new URL(
          window.location.href
        );

      console.log(
        '🌐 Current URL:',
        currentUrl.toString()
      );

      console.log(
        '📍 Current pathname:',
        currentUrl.pathname
      );

      // ========================================================
      // Experience Builder عندك يستخدم:
      //
      // /experience/0/page/page_2
      //
      // أو:
      //
      // /experience/0/page/page_2?draft=true
      // ========================================================

      const pathParts =
        currentUrl.pathname.split('/');

      console.log(
        '🧩 Path parts:',
        pathParts
      );

      const pageIndex =
        pathParts.indexOf('page');

      // ========================================================
      // لو /page/ موجود
      // ========================================================

      if (pageIndex !== -1) {
        if (
          pageIndex + 1 <
          pathParts.length
        ) {
          console.log(
            '🔄 Replacing current page:',
            pathParts[pageIndex + 1],
            '→',
            pageId
          );

          pathParts[
            pageIndex + 1
          ] = pageId;
        } else {
          pathParts.push(pageId);
        }
      } else {
        // ======================================================
        // لو /page/ مش موجود
        // ======================================================

        console.log(
          '⚠️ /page/ not found, adding it'
        );

        pathParts.push(
          'page',
          pageId
        );
      }

      // ========================================================
      // تحديث pathname
      // ========================================================

      currentUrl.pathname =
        pathParts.join('/');

      // ========================================================
      // إزالة الـ hash القديم
      // ========================================================

      currentUrl.hash = '';

      // ========================================================
      // تكوين URL الجديد
      // ========================================================

      const newUrl =
        currentUrl.pathname +
        currentUrl.search;

      console.log(
        '🔗 NEW URL:',
        newUrl
      );

      // ========================================================
      // تحديث الـ Active Tab
      // ========================================================

      if (
        pageId === 'page_4'
      ) {
        setActiveTab('compare');
      } else {
        setActiveTab('main');
      }

      // ========================================================
      // ⭐ Navigation بدون Full Page Reload
      // ========================================================

      console.log(
        '🚀 Navigating using History API...'
      );

      window.history.pushState(
        {
          pageId: pageId
        },
        '',
        newUrl
      );

      console.log(
        '✅ History updated without reload'
      );

      // ========================================================
      // إرسال popstate
      // ========================================================

      window.dispatchEvent(
        new PopStateEvent(
          'popstate',
          {
            state: {
              pageId: pageId
            }
          }
        )
      );

      // ========================================================
      // إرسال hashchange
      // ========================================================

      window.dispatchEvent(
        new Event('hashchange')
      );

      console.log(
        '✅ Navigation events dispatched'
      );

    } catch (error) {
      console.error(
        '❌ Navigation Error:',
        error
      );
    }
  };

  // ============================================================
  // 🏠 Main Page
  // ============================================================
  const handleMainClick = () => {
    setActiveTab('main');

    navigateToPage(
      'page_2'
    );
  };

  // ============================================================
  // 📊 Compare Page
  // ============================================================
  const handleCompareClick = () => {
    setActiveTab('compare');

    navigateToPage(
      'page_4'
    );
  };

  // ============================================================
  // 🚪 Logout
  // ============================================================
  const handleLogout = (
    e: React.MouseEvent
  ) => {
    e.stopPropagation();

    localStorage.removeItem(
      'user'
    );

    setUser(null);

    window.dispatchEvent(
      new Event(
        'userStateChanged'
      )
    );
  };

  // ============================================================
  // 💳 Payment Success
  // ============================================================
  const handlePaymentSuccess = (
    e?: React.MouseEvent
  ) => {
    if (e) {
      e.stopPropagation();
    }

    if (!user) {
      return;
    }

    const updatedUser = {
      ...user,
      credits: 10
    };

    setUser(
      updatedUser
    );

    localStorage.setItem(
      'user',
      JSON.stringify(
        updatedUser
      )
    );

    window.dispatchEvent(
      new Event(
        'userStateChanged'
      )
    );

    setShowPayModal(false);

    setMessage(
      '🎉 تم تجديد الاشتراك! لديك 10 محاولات الآن.'
    );

    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  // ============================================================
  // 🎨 UI
  // ============================================================
  return (
    <div
      className="widget-header jimu-widget"
      style={styles.container}
    >

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div style={styles.topHeader}>

        {/* ====================================================
            BRAND
        ==================================================== */}

        <div style={styles.brandGroup}>

          <span style={styles.logoBadge}>
            GAIP
          </span>

          <span style={styles.appName}>
            Geospatial Agriculture Intelligence Platform
          </span>

        </div>

        {/* ====================================================
            NAVIGATION TABS
        ==================================================== */}

        <div style={styles.tabsGroup}>

          {/* MAIN */}

          <button
            onClick={
              handleMainClick
            }
            style={{
              ...styles.tabBtn,

              ...(activeTab === 'main'
                ? styles.activeTabBtn
                : {})
            }}
          >
            <span>
              🏠 الرئيسية
            </span>
          </button>

          {/* COMPARE */}

          <button
            onClick={
              handleCompareClick
            }
            style={{
              ...styles.tabBtn,

              ...(activeTab === 'compare'
                ? styles.activeTabBtn
                : {})
            }}
          >
            <span>
              📊 المقارنة التاريخية
            </span>
          </button>

        </div>

        {/* ====================================================
            USER SECTION
        ==================================================== */}

        {user ? (

          <div style={styles.userSection}>

            {/* CREDIT */}

            <div
              style={{
                ...styles.creditBadge,

                backgroundColor:
                  user.credits > 0
                    ? '#e8f5e9'
                    : '#ffebee',

                color:
                  user.credits > 0
                    ? '#2e7d32'
                    : '#c62828',

                borderColor:
                  user.credits > 0
                    ? '#a5d6a7'
                    : '#ef9a9a'
              }}

              onClick={() =>
                setShowPayModal(true)
              }

              title="اضغط لتجديد الرصيد"
            >

              <span>
                ⚡ الرصيد:{' '}

                <b>
                  {user.credits}
                </b>

                /10
              </span>

            </div>

            {/* PROFILE */}

            <div
              style={
                styles.profileBadge
              }
            >

              <span
                style={
                  styles.userEmail
                }

                title={
                  user.email
                }
              >

                👤{' '}

                {
                  user.email.split(
                    '@'
                  )[0]
                }

              </span>

              <button
                onClick={
                  handleLogout
                }

                style={
                  styles.logoutBtn
                }

                title="تسجيل الخروج"
              >
                🚪 خروج
              </button>

            </div>

          </div>

        ) : (

          <div
            style={
              styles.guestBadge
            }
          >
            🔒 غير مسجل الدخول
          </div>

        )}

      </div>

      {/* ======================================================
          TOAST MESSAGE
      ====================================================== */}

      {message && (

        <div
          style={
            styles.toastMessage
          }
        >
          {message}
        </div>

      )}

      {/* ======================================================
          PAYMENT MODAL
      ====================================================== */}

      {showPayModal && (

        <div
          style={
            styles.modalOverlay
          }

          onClick={() =>
            setShowPayModal(
              false
            )
          }
        >

          <div
            style={
              styles.modalContent
            }

            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div
              style={{
                fontSize: '2.5rem',
                marginBottom: '6px'
              }}
            >
              💳
            </div>

            <h3
              style={{
                color: '#1b5e20',
                margin: '0 0 8px 0'
              }}
            >
              تجديد اشتراك GAIP
            </h3>

            <p
              style={{
                color: '#555',
                fontSize: '0.85rem',
                lineHeight: '1.4',
                marginBottom: '14px'
              }}
            >
              احصل على{' '}

              <b>
                10 محاولات تحليل جديدة
              </b>{' '}

              لاستخدامها في نماذج NDVI
              والتحليلات المكانية.
            </p>

            <div
              style={
                styles.priceTag
              }
            >

              <span
                style={{
                  fontSize: '0.9rem'
                }}
              >
                القيمة:{' '}
              </span>

              <span
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#007ac2'
                }}
              >
                $10.00
              </span>

            </div>

            <div
              style={{
                display: 'flex',
                gap: '8px',
                justifyContent:
                  'center',
                marginTop: '16px'
              }}
            >

              <button
                onClick={
                  handlePaymentSuccess
                }

                style={
                  styles.payNowBtn
                }
              >
                ⚡ Pay Now
              </button>

              <button
                onClick={() =>
                  setShowPayModal(
                    false
                  )
                }

                style={
                  styles.closeBtn
                }
              >
                إلغاء
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

// ============================================================
// 🎨 STYLES
// ============================================================

const styles: {
  [key: string]: React.CSSProperties;
} = {

  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderBottom:
      '2px solid #e2e8f0',
    boxShadow:
      '0 2px 10px rgba(0,0,0,0.05)',
    direction: 'rtl',
    fontFamily:
      'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    position: 'relative'
  },

  topHeader: {
    display: 'flex',
    justifyContent:
      'space-between',
    alignItems: 'center',
    padding: '8px 16px',
    height: '100%'
  },

  brandGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },

  logoBadge: {
    backgroundColor: '#1b5e20',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    padding: '4px 10px',
    borderRadius: '6px',
    letterSpacing: '1px'
  },

  appName: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#1e293b'
  },

  tabsGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#f8fafc',
    padding: '4px',
    borderRadius: '8px',
    border:
      '1px solid #e2e8f0'
  },

  tabBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 14px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor:
      'transparent',
    color: '#64748b',
    fontSize: '0.825rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition:
      'all 0.2s ease'
  },

  activeTabBtn: {
    backgroundColor: '#ffffff',
    color: '#059669',
    boxShadow:
      '0 1px 4px rgba(0,0,0,0.08)'
  },

  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },

  creditBadge: {
    fontSize: '0.8rem',
    padding: '4px 10px',
    borderRadius: '20px',
    border: '1px solid',
    cursor: 'pointer',
    userSelect: 'none'
  },

  profileBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f8fafc',
    padding: '4px 8px',
    borderRadius: '8px',
    border:
      '1px solid #e2e8f0'
  },

  userEmail: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#334155',
    maxWidth: '100px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  logoutBtn: {
    backgroundColor: '#fef2f2',
    border:
      '1px solid #fecaca',
    color: '#991b1b',
    fontSize: '0.75rem',
    cursor: 'pointer',
    padding: '3px 6px',
    borderRadius: '4px',
    fontWeight: 'bold'
  },

  guestBadge: {
    fontSize: '0.8rem',
    color: '#64748b',
    backgroundColor: '#f1f5f9',
    padding: '4px 10px',
    borderRadius: '6px'
  },

  toastMessage: {
    position: 'absolute',
    bottom: '-35px',
    left: '50%',
    transform:
      'translateX(-50%)',
    backgroundColor: '#323232',
    color: '#fff',
    padding: '6px 14px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    zIndex: 1000
  },

  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:
      'rgba(0, 0, 0, 0.65)',
    display: 'flex',
    alignItems: 'center',
    justifyContent:
      'center',
    zIndex: 99999
  },

  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    width: '280px',
    textAlign: 'center',
    boxShadow:
      '0 8px 24px rgba(0,0,0,0.25)'
  },

  priceTag: {
    backgroundColor: '#f0f7ff',
    padding: '8px',
    borderRadius: '6px',
    display: 'inline-block'
  },

  payNowBtn: {
    backgroundColor: '#2e7d32',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.85rem'
  },

  closeBtn: {
    backgroundColor: '#eceff1',
    color: '#455a64',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.85rem'
  }
};
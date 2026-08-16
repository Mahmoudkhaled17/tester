import React, { useState } from 'react';
import api from '../../../../../api/axiosConfig';

interface Props {
  onLoginSuccess: (userData: {
    id?: number | string;
    email: string;
    credits: number;
    token: string;
  }) => void;
  switchToSignUp: () => void;
}

export const LoginForm = ({
  onLoginSuccess,
  switchToSignUp,
}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ============================================================
  // 🚀 Navigate to Experience Builder Page
  // ============================================================

  const navigateToPage = (pageId: string) => {
    console.log('');
    console.log('========================================');
    console.log('🚀 LOGIN NAVIGATION');
    console.log('Target Page:', pageId);
    console.log('========================================');

    try {
      const currentUrl = new URL(window.location.href);

      console.log(
        '🌐 Current URL:',
        currentUrl.toString()
      );

      const pathParts = currentUrl.pathname.split('/');

      console.log(
        '🧩 Current path parts:',
        pathParts
      );

      const pageIndex = pathParts.indexOf('page');

      // ========================================================
      // لو الـ URL بالفعل فيه /page/page_x
      // ========================================================

      if (pageIndex !== -1) {
        if (pageIndex + 1 < pathParts.length) {
          console.log(
            '🔄 Replacing page:',
            pathParts[pageIndex + 1],
            '→',
            pageId
          );

          pathParts[pageIndex + 1] = pageId;
        } else {
          pathParts.push(pageId);
        }
      }

      // ========================================================
      // لو /page/ مش موجود
      // ========================================================

      else {
        console.log(
          '⚠️ /page/ not found, adding it'
        );

        pathParts.push(
          'page',
          pageId
        );
      }

      currentUrl.pathname =
        pathParts.join('/');

      // إزالة الـ hash القديم
      currentUrl.hash = '';

      const newUrl =
        currentUrl.toString();

      console.log(
        '🔗 New URL:',
        newUrl
      );

      // ========================================================
      // مهم جداً:
      // لا نستخدم window.location.href
      // عشان ما يحصلش Reload
      // ========================================================

      window.history.pushState(
        {
          pageId,
        },
        '',
        newUrl
      );

      console.log(
        '✅ pushState executed'
      );

      // إرسال أحداث التنقل
      window.dispatchEvent(
        new PopStateEvent('popstate')
      );

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
  // 🔐 Login
  // ============================================================

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      // ========================================================
      // API Login
      // ========================================================

      const response = await api.post(
        '/users/login',
        {
          email,
          password,
        }
      );

      console.log(
        'LOGIN RESPONSE:',
        response.data
      );

      const data = response.data;

      // ========================================================
      // Token
      // ========================================================

      const token =
        data.token ??
        data.access_token ??
        '';

      // ========================================================
      // User ID
      // ========================================================

      const userId =
        data.id ??
        data.user_id ??
        data.user?.id ??
        data.user?.user_id;

      // ========================================================
      // Credits
      // ========================================================

      let credits =
        data.credits_balance ??
        data.credits ??
        data.points ??
        data.user?.credits_balance ??
        data.user?.credits ??
        data.user?.points ??
        0;

      // ========================================================
      // Save token
      // ========================================================

      if (token) {
        localStorage.setItem(
          'token',
          token
        );
      }

      // ========================================================
      // Get full user data
      // ========================================================

      if (
        userId !== undefined &&
        userId !== null
      ) {
        try {
          const userResponse =
            await api.get(
              `/users/${userId}`,
              {
                headers: token
                  ? {
                      Authorization:
                        `Bearer ${token}`,
                    }
                  : {},
              }
            );

          console.log(
            'USER RESPONSE:',
            userResponse.data
          );

          const userData =
            userResponse.data;

          credits =
            userData.credits_balance ??
            userData.credits ??
            userData.points ??
            credits;

        } catch (userError) {
          console.warn(
            'Could not fetch user balance:',
            userError
          );
        }
      }

      // ========================================================
      // Final User Object
      // ========================================================

      const userData = {
        id: userId,
        email:
          data.email ??
          data.user?.email ??
          email,
        credits,
        token,
      };

      console.log(
        '👤 FINAL USER DATA:',
        userData
      );

      // ========================================================
      // Save User
      // ========================================================

      localStorage.setItem(
        'user',
        JSON.stringify(userData)
      );

      // ========================================================
      // Notify other widgets
      // ========================================================

      window.dispatchEvent(
        new Event('storage')
      );

      window.dispatchEvent(
        new Event('userStateChanged')
      );

      // ========================================================
      // Notify Parent
      // ========================================================

      onLoginSuccess(
        userData
      );

      // ========================================================
      // 🚀 بعد نجاح Login
      // روح مباشرة لصفحة التحليل
      // ========================================================

      console.log(
        '🚀 Login successful!'
      );

      console.log(
        '➡️ Navigating to analysis page: page_2'
      );

      navigateToPage(
        'page_2'
      );

    } catch (err: any) {

      console.error(
        'LOGIN ERROR:',
        err
      );

      const message =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        'فشل تسجيل الدخول، تحقق من البريد الإلكتروني وكلمة المرور.';

      const normalized =
        Array.isArray(message)
          ? (
              message[0]?.msg ||
              JSON.stringify(message)
            )
          : message;

      setError(
        typeof normalized === 'string'
          ? normalized
          : JSON.stringify(normalized)
      );

    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // 🎨 UI
  // ============================================================

  return (
    <div
      style={{
        padding: '15px',
        direction: 'rtl',
      }}
    >

      <h3>
        تسجيل الدخول
      </h3>

      {/* ERROR */}

      {error && (
        <div
          style={{
            color: 'red',
            marginBottom: '10px',
          }}
        >
          {error}
        </div>
      )}

      {/* FORM */}

      <form
        onSubmit={handleLogin}
      >

        {/* EMAIL */}

        <div
          style={{
            marginBottom: '10px',
          }}
        >

          <label>
            البريد الإلكتروني:
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '4px',
              boxSizing:
                'border-box',
            }}
          />

        </div>

        {/* PASSWORD */}

        <div
          style={{
            marginBottom: '15px',
          }}
        >

          <label>
            كلمة المرور:
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '4px',
              boxSizing:
                'border-box',
            }}
          />

        </div>

        {/* LOGIN BUTTON */}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor:
              '#007ac2',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: loading
              ? 'not-allowed'
              : 'pointer',
          }}
        >
          {loading
            ? 'جاري التحقق...'
            : 'دخول'}
        </button>

      </form>

      {/* SIGN UP */}

      <p
        style={{
          marginTop: '15px',
          fontSize: '0.9rem',
        }}
      >

        ليس لديك حساب؟{' '}

        <span
          onClick={
            switchToSignUp
          }
          style={{
            color: '#007ac2',
            cursor: 'pointer',
            textDecoration:
              'underline',
          }}
        >
          إنشاء حساب جديد
        </span>

      </p>

    </div>
  );
};
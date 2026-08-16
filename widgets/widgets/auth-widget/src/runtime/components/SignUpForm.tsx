import React, { useState } from 'react';
import api from '../../../../../api/axiosConfig';
interface Props {
  switchToLogin: () => void;
  onSignUpSuccess?: (userData: any) => void;
}

export const SignUpForm = ({
  switchToLogin,
  onSignUpSuccess,
}: Props) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const payload = new FormData();
      payload.append('first_name', formData.first_name);
      payload.append('last_name', formData.last_name);
      payload.append('email', formData.email);
      payload.append('password', formData.password);
      payload.append('phone_number', formData.phone_number);

      // POST /users/new (multipart/form-data — كما يتوقع الـ Backend)
      const response = await api.post('/users/new', payload, {
        headers: { 'Content-Type': undefined }
      });

      console.log('SIGN UP RESPONSE:', response.data);

      setSuccess(true);

      // الـ Backend لا يرجع id/token هنا — لا نحفظ user مزيّف في localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.dispatchEvent(new Event('userStateChanged'));

      // الانتقال للـ Login بعد رسالة النجاح
      setTimeout(() => {
        switchToLogin();
      }, 1500);

    } catch (err: any) {
      console.error('SIGN UP ERROR:', err);

      let message =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        'حدث خطأ أثناء إنشاء الحساب.';

      if (Array.isArray(message)) {
        message = message[0]?.msg || JSON.stringify(message);
      }

      setError(typeof message === 'string' ? message : JSON.stringify(message));

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: '15px',
        direction: 'rtl',
      }}
    >
      <h3>إنشاء حساب جديد</h3>

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

      {success && (
        <div
          style={{
            color: 'green',
            marginBottom: '10px',
          }}
        >
          ✅ تم إنشاء الحساب بنجاح!
        </div>
      )}

      <form onSubmit={handleSignUp}>

        <div style={{ marginBottom: '8px' }}>
          <label>الاسم الأول:</label>

          <input
            type="text"
            name="first_name"
            required
            value={formData.first_name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '6px',
            }}
          />
        </div>

        <div style={{ marginBottom: '8px' }}>
          <label>الاسم الثاني:</label>

          <input
            type="text"
            name="last_name"
            required
            value={formData.last_name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '6px',
            }}
          />
        </div>

        <div style={{ marginBottom: '8px' }}>
          <label>البريد الإلكتروني:</label>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '6px',
            }}
          />
        </div>

        <div style={{ marginBottom: '8px' }}>
          <label>رقم الهاتف:</label>

          <input
            type="tel"
            name="phone_number"
            required
            value={formData.phone_number}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '6px',
            }}
          />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label>كلمة المرور:</label>

          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '6px',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: loading
              ? 'not-allowed'
              : 'pointer',
          }}
        >
          {loading
            ? 'جاري التسجيل...'
            : 'تسجيل حساب'}
        </button>

      </form>

      <p
        style={{
          marginTop: '15px',
          fontSize: '0.9rem',
        }}
      >
        لديك حساب بالفعل؟{' '}

        <span
          onClick={switchToLogin}
          style={{
            color: '#007ac2',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          تسجيل الدخول
        </span>
      </p>
    </div>
  );
};
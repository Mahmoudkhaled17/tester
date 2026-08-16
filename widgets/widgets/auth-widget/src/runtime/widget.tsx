import { React, AllWidgetProps } from 'jimu-core';
import { useState, useEffect } from 'react';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';

export default function Widget(props: AllWidgetProps<any>) {
  const [view, setView] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState<{ email: string; credits: number; token: string } | null>(null);

  // التأكد مما إذا كان المستخدم مسجل دخول بالفعل عند فتح التطبيق
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setView('login');
  };

  return (
    <div className="widget-auth jimu-widget" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      {user ? (
        // في حالة تسجيل الدخول، يتم عرض الرصيد وزر الخروج
        <div style={{ padding: '15px', direction: 'rtl' }}>
          <h4>مرحباً، {user.email} 👋</h4>
          <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#f0f4f8', borderRadius: '4px' }}>
            <span>الرصيد المتبقي للتحليلات: </span>
            <strong style={{ color: user.credits > 0 ? '#28a745' : '#dc3545', fontSize: '1.2rem' }}>
              {user.credits} محاولات
            </strong>
          </div>
          
          {user.credits === 0 && (
            <button style={{ width: '100%', padding: '8px', backgroundColor: '#ffc107', border: 'none', borderRadius: '4px', marginBottom: '10px' }}>
              💳 شراء باقة جديدة
            </button>
          )}

          <button onClick={handleLogout} style={{ width: '100%', padding: '8px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}>
            تسجيل الخروج
          </button>
        </div>
      ) : (
        // في حالة عدم تسجيل الدخول، يتم التبديل بين Login و SignUp
        view === 'login' ? (
          <LoginForm 
            onLoginSuccess={(userData) => setUser(userData)} 
            switchToSignUp={() => setView('signup')} 
          />
        ) : (
          <SignUpForm 
            switchToLogin={() => setView('login')} 
          />
        )
      )}
    </div>
  );
}
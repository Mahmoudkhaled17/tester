import axios from 'axios';

const BASE_URL = 'https://tester.152-53-231-71.sslip.io';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// دالة لمعالجة مسارات الصور القادمة من السيرفر
export const resolveImageUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};

export default api;
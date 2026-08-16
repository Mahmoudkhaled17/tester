import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tester.152-53-231-71.sslip.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
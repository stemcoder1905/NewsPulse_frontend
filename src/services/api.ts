
import axios from 'axios';

const apiBaseUrl = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000';

export const adminApi = axios.create({
  baseURL: `${apiBaseUrl}/api/v1/admin`,
  timeout: 75000,
  headers: {
    'Content-Type': 'application/json'
  }
});
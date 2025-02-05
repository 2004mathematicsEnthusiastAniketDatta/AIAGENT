// src/config/environment.ts

export const API_KEY = process.env.API_KEY || 'your-default-api-key';
export const BASE_URL = process.env.BASE_URL || 'https://api.weatherapi.com/v1';
export const TIMEOUT = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : 5000;
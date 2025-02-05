// src/types/index.ts

export interface WeatherResponse {
    location: string;
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
}

export interface UserRequest {
    location: string;
    date: string;
}
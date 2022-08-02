import { ForecastResponseType } from '../@types';
import { weatherAxiosInstance } from './api';

export const forecastAPI = {
  dailyWeather(days: number, lat: number, lon: number) {
    return weatherAxiosInstance.get<ForecastResponseType>(
      `/forecast.json?q=${lat},${lon}&days=${days}`,
    );
  },
};

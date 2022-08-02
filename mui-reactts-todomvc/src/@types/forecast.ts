import { ConditionType, DayType, AstroType, HourType } from './general';

export type CurrentWeatherType = {
  cloud: number;
  condition: ConditionType;
  feelslike_c: number;
  gust_kph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  precip_mm: number;
  temp_c: number;
  uv: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
};

export type LocationType = {
  country: string;
  lat: number;
  localtime_epoch: number;
  localtime: string;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
};

export type ForecastType = {
  forecastday: ForecastdayType[];
};

export type ForecastdayType = {
  astro: AstroType;
  date: string;
  day: DayType;
  hour: HourType[];
};

// ======== Responses ========

export type ForecastResponseType = {
  current: CurrentWeatherType;
  forecast: ForecastType;
  location: LocationType;
};

export type ConditionType = {
  code: number;
  icon: string;
  text: string;
};

export type DayType = {
  avghumidity: number;
  avgtemp_c: number;
  condition: ConditionType;
  daily_chance_of_rain: string;
  daily_chance_of_snow: string;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxwind_kph: number;
  mintemp_c: number;
  totalprecip_mm: number;
  uv: number;
};

export type AstroType = {
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
};

export type HourType = {
  chance_of_rain: string;
  chance_of_snow: string;
  cloud: number;
  condition: ConditionType;
  dewpoint_c: number;
  feelslike_c: number;
  gust_kph: number;
  heatindex_c: number;
  humidity: number;
  is_day: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  time: string;
  will_it_rain: number;
  will_it_snow: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  windchill_c: number;
};

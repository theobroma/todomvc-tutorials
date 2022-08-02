import {
  faBacon,
  faCalendarAlt,
  faTemperatureHigh,
  faWater,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@mui/material';
import React from 'react';
import { CurrentWeatherType } from '../../../@types';
import ConditionItem from './ConditionItem';
import CurrentWeatherTemperature from './CurrentWeatherTemperature';

type Props = {
  currentWeather: CurrentWeatherType;
};

const CurrentWeatherData = (props: Props) => {
  const {
    currentWeather: {
      temp_c,
      condition,
      last_updated,
      humidity,
      wind_kph,
      wind_dir,
      gust_kph,
    },
  } = props;
  const updateDate = new Date(last_updated);
  const currentWeekday = { weekday: 'long' } as const;
  const currentDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;
  const last_updated_weekday = updateDate.toLocaleString(
    'en-US',
    currentWeekday,
  );
  const last_updated_date = updateDate.toLocaleString('en-US', currentDate);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <CurrentWeatherTemperature temp={temp_c} condition={condition} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <ConditionItem title="Today:" icon={faCalendarAlt}>
              {last_updated_weekday} {last_updated_date}
            </ConditionItem>
            <ConditionItem title="Feels Like:" icon={faTemperatureHigh}>
              {temp_c}&#176;C
            </ConditionItem>
            <ConditionItem title="Humidity:" icon={faWater}>
              {humidity} %
            </ConditionItem>
            <ConditionItem title="Wind:" icon={faWind}>
              {wind_kph} km/h ({wind_dir})
            </ConditionItem>
            <ConditionItem title="Gust:" icon={faBacon}>
              {gust_kph}
            </ConditionItem>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CurrentWeatherData;

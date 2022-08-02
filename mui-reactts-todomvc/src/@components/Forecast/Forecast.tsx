import { Box, Grid, Typography } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useAppSelector } from '../../@store/configureStore';
import {
  forecastdaySelector,
  forecastSelector,
} from '../../@store/forecast/selectors';
import GridProgress from '../UI/GridProgress/GridProgress';
import ForecastDay from './ForecastDay';

const Forecast = () => {
  const forecastday = useAppSelector(forecastdaySelector);
  const { isFetching } = useAppSelector(forecastSelector);

  const currentWeekday = { weekday: 'long' } as const;
  const currentDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;

  return (
    <Box p={3}>
      <Box mb={1}>
        <Typography variant="h6" noWrap>
          Forecast
        </Typography>
      </Box>
      <Box>
        <GridProgress container spacing={1} loading={isFetching}>
          {forecastday.map((d) => {
            const adaptedDate = new Date(d.date);
            return (
              <Grid item xs={12} md={4} key={nanoid(8)}>
                <ForecastDay
                  weekDay={adaptedDate.toLocaleString('en-US', currentWeekday)}
                  date={adaptedDate.toLocaleString('en-US', currentDate)}
                  sunrise={d.astro.sunrise}
                  sunset={d.astro.sunset}
                  icon={d.day.condition.icon}
                  condition_text={d.day.condition.text}
                  min_temp={d.day.mintemp_c}
                  max_temp={d.day.maxtemp_c}
                />
              </Grid>
            );
          })}
        </GridProgress>
      </Box>
    </Box>
  );
};

export default Forecast;

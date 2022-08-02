import { Box, Grid } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../@store/configureStore';
import { forecastSelector } from '../../@store/forecast/selectors';
import GridProgress from '../UI/GridProgress';
import CurrentWeatherData from './CurrentWeatherData';
import Location from './Location';

const CurrentWeather = () => {
  const { location, currentWeather, isFetching } =
    useAppSelector(forecastSelector);

  return (
    <Box p={3}>
      <GridProgress container spacing={1} loading={isFetching}>
        <Grid item xs={12}>
          {location.name && <Location location={location} />}
          <CurrentWeatherData currentWeather={currentWeather} />
        </Grid>
      </GridProgress>
    </Box>
  );
};

export default CurrentWeather;

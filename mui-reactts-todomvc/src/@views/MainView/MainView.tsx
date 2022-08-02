import { Container, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import AppSearch from '../../@components/AppSearch';
import CurrentWeather from '../../@components/CurrentWeather';
import Forecast from '../../@components/Forecast';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { getForecastTC } from '../../@store/forecast/slice';
import { сoordinatesSelector } from '../../@store/сoordinates/selectors';
import { setUserCoordinatesTC } from '../../@store/сoordinates/slice';

const MainView = () => {
  const dispatch = useAppDispatch();
  const { lon, lat } = useAppSelector(сoordinatesSelector);

  useEffect(() => {
    if (lat === null && lon === null) {
      dispatch(setUserCoordinatesTC());
    }
  }, [lat, lon, dispatch]);

  useEffect(() => {
    const days = 3; // Limited for free plan
    if (lat !== null && lon !== null) {
      dispatch(getForecastTC({ days }));
    }
  }, [lat, lon, dispatch]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          //  style={{ padding: 3 }}
        >
          <Grid item xs={12}>
            <Box sx={{ mb: 1 }}>
              <Paper elevation={3}>
                {/* Search */}
                <AppSearch />
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={1}>
              <Paper elevation={3}>
                {/* CurrentWeather */}
                <CurrentWeather />
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={1}>
              <Paper elevation={3}>
                {/* Forecast */}
                <Forecast />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainView;

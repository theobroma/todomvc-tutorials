import { Box, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { ConditionType } from '../../../../@types';

const useStyles = makeStyles()({
  condition: {
    position: 'absolute',
    // filter: `brightness(0)`,
    width: '150px',
    opacity: 0.15,
  },
  conditionText: {
    fontSize: 30,
    fontWeight: 300,
  },
  temperatureWrap: {
    position: 'relative',
  },
  temperature: {
    lineHeight: 1,
    fontSize: 110,
    fontWeight: 700,
    // [theme.breakpoints.down('md')]: {
    //   fontSize: 75,
    // },
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: 50,
    // },
  },
});

type Props = {
  temp: number;
  condition: ConditionType;
};

const CurrentWeatherTemperature = ({ temp, condition }: Props) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.temperatureWrap}>
      <img
        src={condition?.icon}
        className={classes.condition}
        width="150"
        alt="condition"
      />
      <Box pt={5}>
        <Typography
          className={classes.temperature}
          component="p"
          variant="subtitle1"
          color="textSecondary"
          align="center"
        >
          {temp}&#176;C
        </Typography>
        <Typography
          className={classes.conditionText}
          component="p"
          variant="subtitle1"
          color="textSecondary"
          align="center"
        >
          {condition?.text}
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrentWeatherTemperature;

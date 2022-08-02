import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    minWidth: 275,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 6,
  },
  temperature: {
    fontWeight: 300,
    fontSize: '24px',
  },
}));

type Props = {
  weekDay: string;
  date: string;
  sunrise: string;
  sunset: string;
  icon: string;
  condition_text: string;
  min_temp: number;
  max_temp: number;
};

const ForecastDay = (props: Props) => {
  const {
    weekDay,
    date,
    sunrise,
    sunset,
    icon,
    condition_text,
    min_temp,
    max_temp,
  } = props;
  const { classes } = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          align="center"
        >
          {weekDay}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
        >
          {date}
        </Typography>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <img src={icon} alt="icon" />
        </div>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
          style={{
            marginBottom: 24,
          }}
        >
          {condition_text}
        </Typography>
        <Typography
          className={classes.temperature}
          color="textSecondary"
          align="center"
          style={{
            marginBottom: 24,
          }}
        >
          {min_temp} - {max_temp}&#176;C
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
        >
          <FontAwesomeIcon icon={faSun} /> {sunrise}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
        >
          <FontAwesomeIcon icon={faMoon} /> {sunset}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ForecastDay;

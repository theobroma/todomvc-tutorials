import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';

type Props = {
  location: {
    name: string;
    region: string;
    country: string;
  };
};

const useStyles = makeStyles()({
  title: {
    fontSize: 30,
    fontWeight: 300,
  },
});

const Location = (props: Props) => {
  const { location } = props;
  const { classes } = useStyles();
  return (
    <div>
      <Typography className={classes.title} component="h2" variant="h6">
        {location.name}, {location.region}, {location.country}
      </Typography>
    </div>
  );
};

export default Location;

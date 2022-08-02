// https://ozzie.sh/passing-icons-as-props-in-a-consistent-way-using-react
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

interface Props {
  title: string;
  icon: IconDefinition;
  children: React.ReactNode;
}

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
  },
  title: {
    marginLeft: 10,
  },
  label: {
    minWidth: 135,
    display: 'flex',
    alignItems: 'center',
  },
}));

const ConditionItem = ({ title, icon, children }: Props) => {
  const { classes } = useStyles();
  return (
    <Box my={2} className={classes.root}>
      <Box className={classes.label}>
        <Typography color="textSecondary" display="inline">
          <FontAwesomeIcon icon={icon} />
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          display="inline"
        >
          {title}
        </Typography>
      </Box>
      <Typography variant="subtitle1" align="center" display="inline">
        {children}
      </Typography>
    </Box>
  );
};

export default ConditionItem;

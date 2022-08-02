import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import useDebounce from '../../@hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { getForecastTC } from '../../@store/forecast/slice';
import { searchDataSelector } from '../../@store/search/selectors';
import { clearDataAC, searchTC } from '../../@store/search/slice';
import { setCoordinatesAC } from '../../@store/сoordinates/slice';
import SearchOutput from './SearchOutput';

const useStyles = makeStyles()({
  outputWrap: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
  },
});

const AppSearch = () => {
  const dispatch = useAppDispatch();
  const { classes } = useStyles();
  const searchData = useAppSelector(searchDataSelector);
  const [searchVal, setSearchVal] = useState('');
  const debouncedSearchTerm = useDebounce(searchVal, 300);

  const onPlaceClick = useCallback(
    (lat: number, lon: number) => {
      dispatch(setCoordinatesAC({ lat, lon }));
      const days = 3; // Limited for free plan
      dispatch(getForecastTC({ days }));
      dispatch(clearDataAC());
      setSearchVal('');
    },
    [dispatch],
  );

  useEffect(() => {
    // API response only for 3 characters
    if (debouncedSearchTerm.length > 2) dispatch(searchTC(debouncedSearchTerm));
  }, [debouncedSearchTerm, dispatch]);

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.currentTarget.value.trim());
  };

  return (
    <Box p={3}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="search-input">Search</InputLabel>
        <OutlinedInput
          // need for correct styles. Same text as in InputLabel
          label="Search"
          id="search-input"
          value={searchVal}
          onChange={handleChange()}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      {searchData.length > 0 && (
        <div className={classes.outputWrap}>
          <SearchOutput searchData={searchData} onClick={onPlaceClick} />
        </div>
      )}
    </Box>
  );
};

export default AppSearch;

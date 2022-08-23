import { useDispatch } from 'react-redux';

import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';

import { useAppSelector } from '../../../@store/configureStore';
import { filterSelector } from '../../../@store/filter/selectors';
import { setFilterAC } from '../../../@store/filter/slice';
import type { FilterType } from '../../../@types';
import { VisibilityFilters } from '../../../@types';

const TodoFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useAppSelector(filterSelector);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setFilterAC(event.target.value as FilterType));
  };

  return (
    <Box
      sx={{ minWidth: 120 }}
      style={{
        display: 'flex',
        gap: '20px',
      }}
    >
      <FilterListIcon />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterValue}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={VisibilityFilters.SHOW_ALL}>All</MenuItem>
          <MenuItem value={VisibilityFilters.SHOW_ACTIVE}>Active</MenuItem>
          <MenuItem value={VisibilityFilters.SHOW_COMPLETED}>
            Completed
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TodoFilter;

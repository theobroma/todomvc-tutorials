import { useEffect } from 'react';

import { Box, Grid, Paper } from '@mui/material';

import GridProgress from '../../../@components/UI/GridProgress';
import { useAppDispatch, useAppSelector } from '../../../@store/configureStore';
import {
  todosSelector,
  visibleTodosSelector,
} from '../../../@store/todos/selectors';
import { getTodosTC } from '../../../@store/todos/slice';
import CheckboxList from '../CheckboxList';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const { error, isError, isFetching } = useAppSelector(todosSelector);
  const todos = useAppSelector(visibleTodosSelector);

  useEffect(() => {
    dispatch(getTodosTC());
  }, [dispatch]);

  if (isError)
    return (
      <div>
        An error has occurred!
        <br />
        {error}
      </div>
    );

  return (
    <Box p={3}>
      <GridProgress container spacing={1} loading={isFetching}>
        <Grid item xs={12}>
          {!!todos && (
            <Paper style={{ margin: 16 }}>
              {/* {BoxBlock} */}
              <CheckboxList todos={todos || []} />
            </Paper>
          )}
        </Grid>
      </GridProgress>
    </Box>
  );
};

export default TodoList;

import { useEffect } from 'react';

import { Box, Grid, List, Paper } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';

import GridProgress from '../../../@components/UI/GridProgress';
import { useAppDispatch, useAppSelector } from '../../../@store/configureStore';
import { todosSelector } from '../../../@store/todos/selectors';
import { getTodosTC } from '../../../@store/todos/slice';
import type { TodoType } from '../../../@types';
import TodoListItem from '../TodoListItem';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const {
    data: todos,
    error,
    isError,
    isFetching,
  } = useAppSelector(todosSelector);

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
          {todos && (
            <Paper style={{ margin: 16 }}>
              {/* {BoxBlock} */}
              <List style={{ overflow: 'scroll' }}>
                {todos.map((todo: TodoType, idx: number) => (
                  <TodoListItem
                    todo={todo}
                    key={nanoid()}
                    // no divider for last item
                    divider={idx !== todos.length - 1}
                    // onButtonClick={() => props.onItemRemove(idx)}
                    // onCheckBoxToggle={() => props.onItemCheck(idx)}
                  />
                ))}
              </List>
            </Paper>
          )}
        </Grid>
      </GridProgress>
    </Box>
  );
};

export default TodoList;

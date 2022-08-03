import { useEffect } from 'react';

import { List, Paper } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../@store/configureStore';
import { todosSelector } from '../../../@store/todos/selectors';
import { getTodosTC } from '../../../@store/todos/slice';
import type { TodoType } from '../../../@types';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(todosSelector).data;

  useEffect(() => {
    dispatch(getTodosTC());
  }, [dispatch]);

  return (
    <>
      {todos.length > 0 && (
        <Paper style={{ margin: 16 }}>
          {/* {BoxBlock} */}
          <List style={{ overflow: 'scroll' }}>
            {todos.map((todo: TodoType) => todo.title)}
          </List>
        </Paper>
      )}
    </>
  );
};

export default TodoList;

import * as React from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from '../../../@store/configureStore';
import { deleteTodoTC, patchTodoTC } from '../../../@store/todos/slice';
import type { TodoType } from '../../../@types';

interface Props {
  todos: TodoType[];
}

const CheckboxList = ({ todos }: Props) => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = React.useState([3]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const removeTodo = (id: TodoType['id']) => () => {
    dispatch(deleteTodoTC({ id }));
  };

  const toggleTodo = (todo: TodoType) => () => {
    dispatch(
      patchTodoTC({
        id: todo.id,
        partialTodo: { ...todo, completed: !todo.completed },
      }),
    );
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            key={nanoid()}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={removeTodo(todo.id)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(todo.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  onClick={toggleTodo(todo)}
                  //   checked={checked.indexOf(value) !== -1}
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
              <ListItemText id={labelId} primary={todo.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CheckboxList;

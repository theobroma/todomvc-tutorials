// TODO: try to replace with crypto.randomUUID()
import { v4 as uuidv4 } from 'uuid';

import { TodoInterface } from './todos-context.interface';

export const initialTodosContext: TodoInterface[] = [
  {
    id: uuidv4(),
    title: 'drink coffee',
    completed: false,
  },
  {
    id: uuidv4(),
    title: 'be awesome',
    completed: true,
  },
];

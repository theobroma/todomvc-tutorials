import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { TodoInterface } from '@/context/todos-context.interface';
import { FilterEnum } from '@/enums/filter.enum';

const toggleTodo = (todos: TodoInterface[], id: TodoInterface['id']): TodoInterface[] =>
  todos.map((todo) => ({
    ...todo,
    completed: todo.id === id ? !todo.completed : todo.completed,
  }));

const toggleAllTodos = (todos: TodoInterface[]): TodoInterface[] => {
  const activeTodoCount = todos.filter((item) => item.completed === false).length;

  return todos.map((todo) => ({
    ...todo,
    completed: activeTodoCount !== 0,
  }));
};

const removeTodo = (todos: TodoInterface[], id: TodoInterface['id']): TodoInterface[] =>
  todos.filter((todo) => todo.id !== id);

const removeCompleted = (todos: TodoInterface[]): TodoInterface[] =>
  todos.filter((todo) => todo.completed === false);

const addTodo = (
  todos: TodoInterface[],
  title: TodoInterface['title'],
): TodoInterface[] => [
  ...todos,
  {
    id: crypto.randomUUID(),
    title,
    completed: false,
  },
];

const saveEditTodo = (
  todos: TodoInterface[],
  editingTodoId: TodoInterface['id'] | null,
  newTitle: TodoInterface['title'],
): TodoInterface[] => {
  const index = todos.findIndex((element) => element.id === editingTodoId);
  todos[index].title = newTitle;
  return todos;
};

// Zustand implementation
type Store = {
  todos: TodoInterface[];
  filter: FilterEnum;
  editingTodoId: TodoInterface['id'] | null;
  addTodo: (text: TodoInterface['title']) => void;
  saveEditTodo: (text: TodoInterface['title']) => void;
  setFilter: (newFilter: FilterEnum) => void;
  setEditTodoID: (id: TodoInterface['id']) => void;
  toggleTodo: (id: TodoInterface['id']) => void;
  toggleAllTodos: () => void;
  removeTodo: (id: TodoInterface['id']) => void;
  removeCompleted: () => void;
};

const useTodosStore = create<Store>()(
  devtools(
    persist(
      (set): Store => ({
        todos: [
          {
            id: crypto.randomUUID(),
            title: 'drink coffee',
            completed: false,
          },
          {
            id: crypto.randomUUID(),
            title: 'be awesome',
            completed: true,
          },
        ],
        filter: FilterEnum.ShowAll,
        editingTodoId: null,
        setFilter: (newFilter: FilterEnum) =>
          set((state) => ({
            ...state,
            filter: newFilter,
          })),
        setEditTodoID: (id: TodoInterface['id']) =>
          set((state) => ({
            ...state,
            editingTodoId: id,
          })),
        removeTodo: (id: TodoInterface['id']) =>
          set((state) => ({
            ...state,
            todos: removeTodo(state.todos, id),
          })),
        removeCompleted: () =>
          set((state) => ({
            ...state,
            todos: removeCompleted(state.todos),
          })),
        toggleTodo: (id: TodoInterface['id']) =>
          set((state) => ({
            ...state,
            todos: toggleTodo(state.todos, id),
          })),
        toggleAllTodos: () =>
          set((state) => ({
            ...state,
            todos: toggleAllTodos(state.todos),
          })),
        addTodo: (text: TodoInterface['title']) =>
          set((state) => ({
            ...state,
            todos: addTodo(state.todos, text),
          })),
        saveEditTodo: (text: TodoInterface['title']) =>
          set((state) => ({
            ...state,
            todos: saveEditTodo(state.todos, state.editingTodoId, text),
            editingTodoId: null,
          })),
      }),
      {
        name: 'todo-app',
      },
    ),
  ),
);

export default useTodosStore;

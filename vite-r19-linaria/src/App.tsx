import { use } from 'react';
import { css } from '@linaria/core';
import { hiDPI, modularScale } from 'polished';

import { TodosContext } from '@/context/todos-context';

const header = css`
  text-transform: uppercase;
  font-size: ${modularScale(2)};
  color: green;

  ${hiDPI(1.5)} {
    color: red;
    font-size: ${modularScale(2.5)};
  }
`;

const list = css`
  list-style-type: none;
`;

function App() {
  const { todos } = use(TodosContext);

  return (
    <>
      <h1 className={header}>Hello world</h1>
      <ul className={list}>
        {todos.map((todo) => (
          <li>
            <label htmlFor={todo.id}>
              <input type="checkbox" id={todo.id} /> {todo.title}
            </label>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

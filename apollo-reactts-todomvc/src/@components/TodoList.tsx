import { useQuery } from '@apollo/client';

import { ALL_TODO } from '../@apollo/todos';

const TodoList = () => {
  const { loading, error, data } = useQuery(ALL_TODO);
  console.log('data :>> ', data);

  return <span>todolist</span>;
};

export default TodoList;

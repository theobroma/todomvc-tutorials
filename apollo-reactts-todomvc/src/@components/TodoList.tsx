// https://stackoverflow.com/questions/62633904/react-apollo-usequery-hook-with-typescript
// https://www.apollographql.com/docs/react/development-testing/static-typing/#typing-hooks
import { useQuery } from '@apollo/client';
import { Spinner, VStack } from '@chakra-ui/react';

import { ALL_TODO } from '../@apollo/todos';

import TodoItem from './TodoItem';

const TodoList = () => {
  const { loading, error, data } = useQuery<any>(ALL_TODO);
  console.log('data :>> ', data);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <>
      <VStack spacing={2} mt={4}>
        {data.todos.map((todo: any) => (
          <TodoItem
            key={todo.id}
            // onToggle={toggleTodo}
            // onDelete={removeTodo}
            {...todo}
          />
        ))}
      </VStack>
      {/* <TotalCount /> */}
    </>
  );
};

export default TodoList;

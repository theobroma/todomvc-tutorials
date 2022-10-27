import { Box, Container } from '@chakra-ui/react';

import AddTodo from './@components/AddTodo';
import TodoList from './@components/TodoList';

const App = () => {
  return (
    <div className="App">
      <Container
        maxW="container.xl"
        bg="blackAlpha.800"
        color="white"
        p="6"
        display="flex"
        justifyContent="center"
      >
        <Box maxW="xl" borderWidth="1px" borderRadius="lg" p="6">
          <AddTodo />
          <TodoList />
        </Box>
      </Container>
    </div>
  );
};

export default App;

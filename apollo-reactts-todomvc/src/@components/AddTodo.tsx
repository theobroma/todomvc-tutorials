// https://bobbyhadz.com/blog/typescript-react-onkeypress-event-type
import { useState } from 'react';

import { Button, FormControl, Input } from '@chakra-ui/react';

const AddTodo = () => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim().length) {
      setText('');
    }
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleAddTodo();
  };

  return (
    <FormControl display="flex" mt={6}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKey}
        mr="8"
      />
      <Button onClick={handleAddTodo}>Add todo</Button>
    </FormControl>
  );
};

export default AddTodo;

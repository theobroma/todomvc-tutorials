import { Checkbox, CloseButton, HStack, Text } from '@chakra-ui/react';

const TodoItem = ({ id, title, completed, onToggle, onDelete }: any) => {
  return (
    <HStack spacing={3}>
      <Checkbox
        isChecked={completed}
        onChange={() =>
          onToggle({
            variables: {
              id,
              completed: !completed,
            },
          })
        }
      />
      <Text>{title}</Text>
      <CloseButton
        onClick={() =>
          onDelete({
            variables: { id },
          })
        }
      />
    </HStack>
  );
};

export default TodoItem;

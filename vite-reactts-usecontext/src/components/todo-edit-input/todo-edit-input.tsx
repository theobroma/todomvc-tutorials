import { useState } from 'react';

import { TodoInterface } from '@/context/todos-context.interface';
import { useFocus } from '@/hooks/use-focus';

interface TodoEditInputProps {
  currentTitle?: TodoInterface['title'];
  onSave: (text: string) => void;
}

export const TodoEditInput = ({ currentTitle, onSave }: TodoEditInputProps) => {
  const inputRef = useFocus();
  const [text, setText] = useState(currentTitle || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setText(value);
  };

  // TODO: escape press also triggers this
  const handleBlur = () => {
    onSave(text);
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // TODO: not working
    if (event.key === 'Escape') {
      // dispatch(cancelEditTodoAC());
    }
    if (event.key === 'Enter') {
      onSave(text);
    }
  };

  return (
    <input
      className="edit"
      value={text}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKey}
      ref={inputRef}
    />
  );
};

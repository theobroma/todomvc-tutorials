import { useState } from 'react';

import { useFocus } from '@/hooks/use-focus';

export const TodoEditInput = () => {
  const inputRef = useFocus();
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setText(value);
  };

  // TODO: escape press also triggers this
  const handleBlur = () => {
    //   dispatch(saveEditTodoAC(text));
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // TODO: not working
    if (event.key === 'Escape') {
      // dispatch(cancelEditTodoAC());
    }
    if (event.key === 'Enter') {
      // dispatch(saveEditTodoAC(text));
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

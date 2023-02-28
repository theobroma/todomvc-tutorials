// Learn useRef in 11 Minutes : https://www.youtube.com/watch?v=t2ypzz6gJm0&ab_channel=WebDevSimplified
// https://stackoverflow.com/questions/49278648/alternative-for-events-deprecated-keyboardevent-which-property
import React, { useState } from 'react';

import { useFocus } from '../@hooks/use-focus';

interface Props {
  placeholder?: string;
  onSave: (text: string) => void;
}

const TodoTextInput = ({
  placeholder = 'What needs to be done?',
  onSave,
}: Props) => {
  const inputRef = useFocus();
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setText(value);
  };

  // TODO: escape press also triggers this
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    onSave(value);
    setText(' ');
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    if (event.key === 'Enter') {
      onSave(value);
      setText(' ');
    }
  };

  return (
    <input
      className="new-todo"
      type="text"
      placeholder={placeholder}
      ref={inputRef}
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKey}
    />
  );
};

export default TodoTextInput;

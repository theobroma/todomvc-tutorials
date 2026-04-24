// Learn useRef in 11 Minutes : https://www.youtube.com/watch?v=t2ypzz6gJm0&ab_channel=WebDevSimplified
// https://stackoverflow.com/questions/49278648/alternative-for-events-deprecated-keyboardevent-which-property
import { useFocus } from '@/hooks/use-focus';
import React, { useState } from 'react';

interface TodoTextInputProps {
  placeholder?: string;
  onSave: (text: string) => void;
}

export const TodoTextInput = ({
  placeholder = 'What needs to be done?',
  onSave,
}: TodoTextInputProps) => {
  const inputRef = useFocus();
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  // TODO: escape press also triggers this
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
    setText('');
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSave(event.currentTarget.value);
      setText('');
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

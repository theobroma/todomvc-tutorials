// Learn useRef in 11 Minutes : https://www.youtube.com/watch?v=t2ypzz6gJm0&ab_channel=WebDevSimplified
// https://stackoverflow.com/questions/49278648/alternative-for-events-deprecated-keyboardevent-which-property
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  placeholder?: string;
  className?: string;
  handleBlur: any;
  handleKey: any;
}

export const BaseInput = ({
  placeholder = 'placeholder',
  className,
  handleBlur,
  handleKey,
}: Props) => {
  const [text, setText] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setText(value);
  };

  return (
    <input
      className={className}
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

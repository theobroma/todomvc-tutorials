// https://github.com/dohomi/react-hook-form-mui/blob/master/src/TextFieldElement.tsx
/* eslint-disable no-useless-escape */
import type {
  Control,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form/dist/types/fields';

import type { TextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';

type TextFieldElementProps<T> = Omit<TextFieldProps, 'name'> & {
  validation?: ControllerProps['rules'];
  name: Path<T>;
  parseError?: (error: FieldError) => string;
  control?: Control<T>;
};

const TextFieldElement = <TFieldValues extends FieldValues>({
  validation = {},
  parseError,
  type,
  required,
  name,
  control,
  ...rest
}: TextFieldElementProps<TFieldValues>): JSX.Element => {
  if (required && !validation.required) {
    validation.required = 'This field is required';
  }

  if (type === 'email' && !validation.pattern) {
    validation.pattern = {
      // eslint-disable-next-line no-useless-escape
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email address',
    };
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { invalid, error },
      }) => (
        <TextField
          {...rest}
          name={name}
          value={value ?? ''}
          onChange={(ev) => {
            onChange(ev);
            if (typeof rest.onChange === 'function') {
              rest.onChange(ev);
            }
          }}
          onBlur={onBlur}
          required={required}
          type={type}
          error={invalid}
          /* eslint-disable no-nested-ternary */
          helperText={
            error
              ? typeof parseError === 'function'
                ? parseError(error)
                : error.message
              : rest.helperText
          }
          /* eslint-enable no-nested-ternary */
        />
      )}
    />
  );
};

export default TextFieldElement;

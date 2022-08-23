import React from 'react';
import { useForm } from 'react-hook-form';

import { Box, Button } from '@mui/material';

import TextFieldElement from '../../../@components/Forms/FormInputText';

const defaultValues = {
  title: '',
};

const TodoForm = () => {
  const methods = useForm<any>({ defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: any) => console.log(data);
  return (
    <Box
      style={{
        display: 'flex',
        gap: '20px',
      }}
    >
      <TextFieldElement
        name="title"
        label="Title"
        control={control}
        fullWidth
      />
      <Button onClick={handleSubmit(onSubmit)} variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default TodoForm;

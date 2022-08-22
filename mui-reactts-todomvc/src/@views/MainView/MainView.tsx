import { useForm } from 'react-hook-form';

import { Button, Container, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';

import TextFieldElement from '../../@components/Forms/FormInputText';

import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

const defaultValues = {
  textValue: '',
};

const MainView = () => {
  const methods = useForm<any>({ defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          //  style={{ padding: 3 }}
        >
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={3}>
                <Box
                  style={{
                    display: 'flex',
                    gap: '20px',
                  }}
                >
                  <TextFieldElement
                    name="name"
                    label="Name"
                    control={control}
                    fullWidth
                  />
                  <Button onClick={handleSubmit(onSubmit)} variant="contained">
                    Submit
                  </Button>
                </Box>
                <TodoFilter />
                <TodoList />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainView;

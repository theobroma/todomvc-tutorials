import { Container, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';

import TodoForm from './TodoForm/TodoForm';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

const MainView = () => {
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
                <TodoForm />
              </Box>
              <Box p={3}>
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

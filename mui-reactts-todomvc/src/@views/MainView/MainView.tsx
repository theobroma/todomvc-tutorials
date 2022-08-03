import { Container, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';

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
            <Box mb={1}>
              <Paper elevation={3}>paper</Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={1}>
              <TodoList />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainView;

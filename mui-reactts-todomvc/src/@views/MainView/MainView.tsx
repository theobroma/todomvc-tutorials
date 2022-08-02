import { Container, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';

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
        </Grid>
      </Box>
    </Container>
  );
};

export default MainView;

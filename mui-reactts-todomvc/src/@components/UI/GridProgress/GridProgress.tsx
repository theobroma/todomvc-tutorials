import type { GridProps } from '@mui/material';
import { Box, CircularProgress, Grid } from '@mui/material';

type GridProgressProps = {
  loading: boolean;
} & GridProps;

const GridProgress = (props: GridProgressProps) => {
  const { loading, children, ...gridProps } = props;
  return (
    <Grid {...gridProps}>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={200}
          width="100%"
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </Grid>
  );
};

export default GridProgress;

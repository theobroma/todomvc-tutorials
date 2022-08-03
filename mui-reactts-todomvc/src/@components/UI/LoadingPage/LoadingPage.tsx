import { Backdrop, CircularProgress } from '@mui/material';

const LoadingPage = () => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default LoadingPage;

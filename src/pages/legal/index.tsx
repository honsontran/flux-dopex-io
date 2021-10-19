import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Legal = () => {
  return (
    <Box className="min-h-screen flex items-center justify-items-center justify-center text-5xl flex-col">
      Coming Soon
      <br />
      <br />
      <Button endIcon={<ArrowForwardIcon />} href="/">
        Home
      </Button>
    </Box>
  );
};

export default Legal;

import { Box, Typography } from "@mui/material";

const ErrorComponent = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minHeight="50vh"
    px={2}
  >
    <Typography variant="h4" color="error" gutterBottom>
      Error
    </Typography>
    <Typography variant="body1">
      Something went wrong. Please try reloading the page or come back later.
    </Typography>
  </Box>
);

export default ErrorComponent;
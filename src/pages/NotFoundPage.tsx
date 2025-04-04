import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minHeight="50vh"
    px={2}
  >
    <Typography variant="h4" gutterBottom>
      404 - Page Not Found
    </Typography>
    <Typography variant="body1" gutterBottom>
      The page you are looking for does not exist.
    </Typography>
    <Button component={Link} to="/" variant="contained" color="primary">
      Go to Home
    </Button>
  </Box>
);

export default NotFoundPage;
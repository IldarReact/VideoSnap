import {
  Paper,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          mt: { xs: 4, md: 6 },
          textAlign: "center",
          py: { xs: 3, md: 4 },
          px: { xs: 2, md: 0 },
          bgcolor: "background.paper",
          width: "100%",
          mx: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2.25rem" },
          }}
        >
          Less important title
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            px: 3,
            width: { xs: "80%", sm: "50%", md: "200px" },
            maxWidth: "200px",
            mx: "auto",
            display: "block",
          }}
        >
          Contact us
        </Button>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          textAlign: "center",
          py: { xs: 2, md: 3 },
          mt: { xs: 3, md: 4 },
          px: { xs: 2, md: 0 },
          bgcolor: "background.paper",
          width: "100%",
          mx: "auto",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          Some Company {new Date().getFullYear()}
        </Typography>
      </Paper>
    </>
  );
};

export default ContactSection;
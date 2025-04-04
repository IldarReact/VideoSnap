import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            width: "auto",
            textDecoration: "none",
            color: "inherit",
            transition: "none",
            "&:hover": {
              textDecoration: "none",
              color: "inherit",
            },
          }}
        >
          VideoSnap
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: "rgb(0, 30, 74)",
              backgroundColor: "transparent",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "transparent",
                color: "rgb(51, 94, 234)",
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
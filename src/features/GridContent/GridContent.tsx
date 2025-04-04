import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GridItem } from "./types";
import GridContentItem from "./GridContentItem";

const GridContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const items: GridItem[] = [
    {
      id: "1",
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.",
    },
    {
      id: "2",
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.",
    },
    {
      id: "3",
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.",
    },
    {
      id: "4",
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.",
    },
    {
      id: "5",
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.",
    },
    {
      id: "6",
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.",
    },
  ];

  return (
    <>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", mb: { xs: 2, md: 3 } }}
      >
        Welcome to our site
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
        {items.map((item) => (
          <GridContentItem
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </Grid>

      <Box
        display="flex"
        justifyContent="center"
        sx={{ mt: { xs: 3, md: 4 }, px: { xs: 2, md: 0 } }}
      >
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          color="primary"
          fullWidth={isMobile}
          sx={{ maxWidth: isMobile ? "none" : "200px" }}
          aria-label="Contact us"
        >
          Contact us
        </Button>
      </Box>
    </>
  );
};

export default GridContent;
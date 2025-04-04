import { Grid, Typography } from "@mui/material";
import { GridItem } from "./types";

const GridContentItem: React.FC<Omit<GridItem, "id">> = ({
  title,
  content,
}) => (
  <Grid item xs={12} sm={6} md={4}>
    <Typography variant="h2" gutterBottom sx={{ textAlign: "left" }}>
      {title}
    </Typography>
    <Typography variant="body1" sx={{ textAlign: "left" }}>
      {content}
    </Typography>
  </Grid>
);

export default GridContentItem;
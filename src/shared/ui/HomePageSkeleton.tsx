import { Skeleton, Box } from "@mui/material";

const HomePageSkeleton = () => (
  <Box sx={{ p: 4 }}>
    <Skeleton variant="rectangular" height={400} sx={{ mb: 2 }} />
    <Skeleton variant="text" height={40} width="60%" sx={{ mb: 1 }} />
    <Skeleton variant="text" height={20} width="80%" />
  </Box>
);

export default HomePageSkeleton;
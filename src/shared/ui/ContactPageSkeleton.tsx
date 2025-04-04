import { Skeleton, Box } from "@mui/material";

const ContactPageSkeleton = () => (
  <Box sx={{ p: 4 }}>
    <Skeleton
      variant="text"
      height={40}
      width="40%"
      sx={{ mb: 2, mx: "auto" }}
    />
    <Skeleton variant="rectangular" height={300} width="100%" />
  </Box>
);

export default ContactPageSkeleton;

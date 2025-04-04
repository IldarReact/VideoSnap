import { Skeleton } from "@mui/material";

const FormSkeleton = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <Skeleton variant="text" height={40} width="40%" sx={{ mx: "auto" }} />
    <Skeleton variant="rectangular" height={56} />
    <Skeleton variant="rectangular" height={56} />
    <Skeleton variant="rectangular" height={120} />
    <Skeleton variant="rectangular" height={48} />
  </div>
);

export default FormSkeleton;
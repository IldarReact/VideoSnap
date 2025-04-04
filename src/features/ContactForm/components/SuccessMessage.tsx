import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface SuccessMessageProps {
  name: string | null;
}

const SuccessMessage = ({ name }: SuccessMessageProps) => (
  <div style={{ textAlign: "center" }}>
    <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
      Thank you for your interest, {name}!
    </Typography>
    <Button component={Link} to="/" variant="contained" color="primary">
      Return to home page
    </Button>
  </div>
);

export default SuccessMessage;
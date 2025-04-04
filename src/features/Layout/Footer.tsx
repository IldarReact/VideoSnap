import { Paper, Typography } from "@mui/material";
import ContactSection from "./ContactSection";

const Footer = () => {
  return (
    <>
      <ContactSection />
      <Paper
        component="footer"
        elevation={0}
        sx={{
          py: 4,
          bgcolor: "rgb(0, 30, 74)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          © {new Date().getFullYear()} VideoSnap. All rights reserved
        </Typography>
      </Paper>
    </>
  );
};

export default Footer;
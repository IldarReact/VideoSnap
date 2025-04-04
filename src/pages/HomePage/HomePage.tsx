import { Helmet } from "react-helmet-async";
import { Container } from "@mui/material";
import TitleAndVideo from "../../features/TitleAndVideo/TitleAndVideo";
import { GridContent } from "../../features/GridContent";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - Video Snap</title>
        <meta name="description" content="Explore our homepage" />
        <meta property="og:title" content="Home - Video Snap" />
        <meta property="og:description" content="Explore our homepage" />
        <meta property="og:url" content="https://your-site.com" />
        <meta name="twitter:title" content="Home - Video Snap" />
        <meta name="twitter:description" content="Explore our homepage" />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <TitleAndVideo />
        <GridContent />
      </Container>
    </>
  );
};

export default HomePage;

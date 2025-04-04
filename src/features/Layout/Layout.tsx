import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MainContent, StickyFooter, StickyHeader } from "./layoutStyles";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Helmet>
      <title>Video Snap</title>
      <meta name="description" content="Welcome to Video Snap" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://your-site.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://your-site.com/og-image.jpg" />
    </Helmet>
    <StickyHeader>
      <Header />
    </StickyHeader>
    <MainContent>
      <Outlet />
    </MainContent>
    <StickyFooter>
      <Footer />
    </StickyFooter>
  </div>
);

export default Layout;
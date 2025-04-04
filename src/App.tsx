import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routes";

const App = () => (
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);

export default App;
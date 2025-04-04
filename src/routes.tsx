import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./features/Layout";
import { ContactPageSkeleton, ErrorComponent, HomePageSkeleton } from "./shared/ui";
import NotFoundPage from "./pages/NotFoundPage";
import ContactForm from "./features/ContactForm/ContactForm";
import HomePage from "./pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<HomePageSkeleton />}>
            <HomePage />
          </Suspense>
        ),
        errorElement: <ErrorComponent />,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<ContactPageSkeleton />}>
            <ContactForm />
          </Suspense>
        ),
        errorElement: <ErrorComponent />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
        errorElement: <ErrorComponent />,
      },
    ],
  },
]);

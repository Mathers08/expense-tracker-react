import { createBrowserRouter } from "react-router-dom";
import { Auth, Categories, ErrorPage, Home, Layout, Transactions } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/auth",
        element: <Auth />,
      }
    ]
  },
]);

import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import CategoryPage from "../pages/CategoryPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/category/:id",
        element: <CategoryPage />,
      },
    ],
  },
]);

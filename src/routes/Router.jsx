import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import CategoryPage from "../pages/CategoryPage";
import AuthProvider from "../pages/AuthProvider";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";

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
        loader: () => fetch("/news.json").then((res) => res.json()),
        element: <CategoryPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthProvider />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news/:id",
    loader: () => fetch("/news.json").then((res) => res.json()),
    element: <NewsDetails />,
  },
]);

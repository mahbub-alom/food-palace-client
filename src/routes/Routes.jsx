import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/Login";
import Register from "../pages/Shared/Register";
import Category from "../pages/Home/Home/Category";
import Dashboard from "../Layout/Main/Dashboard";
import AllProducts from "../pages/Home/Dashboard/AllProducts";
import User from "../pages/Home/Dashboard/User";
import Update from "../pages/Home/Dashboard/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/category/:category",
        element: <Category></Category>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "AllProducts",
        element: <AllProducts />,
      },
      {
        path: "users",
        element: <User />,
      },
      {
        path: "EditProduct/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/menu/${params.id}`),
      },
    ],
  },
]);
export default router;

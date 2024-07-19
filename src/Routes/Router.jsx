import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Create from "../Components/Create";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: `/update/:id`,
    element: <Create />,
  },
]);

export default router;

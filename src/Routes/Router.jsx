import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddTask from "../Components/AddTask";
import ViewTasks from "../Components/ViewTasks";
import ManageTasks from "../Components/ManageTasks";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "viewTasks",
        element: <ViewTasks></ViewTasks>,
      },
      {
        path: "/manageTasks",
        element: <ManageTasks></ManageTasks>,
      },
      {
        path: '*',
        element:<ErrorPage></ErrorPage>
      }
    ],
  },
]);

export default router;

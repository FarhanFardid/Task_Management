import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddTask from "../Components/AddTask";
import ViewTasks from "../Components/ViewTasks";
import ManageTasks from "../Components/ManageTasks";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'addTask',
                element:<AddTask></AddTask>
            },
            {
                path:'viewTasks',
                element:<ViewTasks></ViewTasks>
            },
            {
                path:'/manageTasks',
                element:<ManageTasks></ManageTasks>
            },
        ]
    }
])

export default router;
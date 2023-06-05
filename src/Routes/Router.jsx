import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AddTask from "../Components/AddTask";
import ViewTasks from "../Components/ViewTasks";


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
            }
        ]
    }
])

export default router;
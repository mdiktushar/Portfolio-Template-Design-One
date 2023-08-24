import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: `/`,
        element:<MainLayout />,
        children: [
            {
                path:`/`,
                element: <Home />
            }
        ]
    }
])

export default routes;
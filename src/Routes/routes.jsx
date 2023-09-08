import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Page404 from "../Pages/404/Page404";

const routes = createBrowserRouter([
    {
        path: `/`,
        element:<MainLayout />,
        children: [
            {
                path:`/`,
                element: <Home />,
                loader: async () => await fetch(`./data/feedback.json`),
            },
            {
                path:`*`,
                element: <Page404 />
            }
        ]
    }
])

export default routes;
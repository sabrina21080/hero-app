import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <p>Loading..</p>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/apps",
                element: <Apps />,
            },
            {
                path: "/installation",
                element: <Installation />
            },
            {
                path: '/app/:id',
                element: <AppDetails></AppDetails>, 
                errorElement: <ErrorPage />,
            }
        ]
    },

]);

export default router;
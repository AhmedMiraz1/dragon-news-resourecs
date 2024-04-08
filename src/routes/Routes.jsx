import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/ErrorPage";
import LogIng from "../pages/login/LogIng";




const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts/>,
        errorElement:<ErrorPage/>,
        children :[

            {
                path:'',
                element: <Home/>
            },
            {
                path: 'login',
                element: <LogIng/>
            }
        ]
    }
]);

export default router
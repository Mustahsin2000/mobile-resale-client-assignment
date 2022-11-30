import { createBrowserRouter } from "react-router-dom";
import DashboardLaypot from "../../Layout/DashboardLaypot";
import Main from "../../Layout/Main";
import Add from "../../Pages/Add/Add";
import Blogs from "../../Pages/Blogs/Blogs";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllByers from "../../Pages/Dashboard/AllByers/AllByers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Categories from "../../Pages/Home/Categories/Categories";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from '../../Pages/Products/Products'
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/add',
                element: <Add></Add>
            },
           {
            path:'/products',
            element:<Products></Products>,
            loader:()=>fetch('https://mobile-resale-server.vercel.app/products') 
           },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                  path:'/signup',
                  element:<Signup></Signup>
            },
          
        ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashboardLaypot></DashboardLaypot></PrivateRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
           path:'/dashboard',
           element:<MyOrders></MyOrders>
        },
        {
           path:'/dashboard/buyers',
           element:<AdminRoute><AllByers></AllByers></AdminRoute>
        },
        {
            path:'/dashboard/addproduct',
            element:<AddAProduct></AddAProduct>//sellerroute khule or moddhe dite hobe
    
        },
        {
            path:'/dashboard/myproducts',
            element:<MyProducts></MyProducts> //sellerroute er moddhe rakhte hobe

        },
        {
            path:'/dashboard/payment/:id',
            element:<Payment></Payment> ,//sellerroute er moddhe rakhte hobe
             loader:({params})=>fetch(`https://mobile-resale-server.vercel.app/addproducts/${params.id}`)
        }
      ]
    }
])

export default router;
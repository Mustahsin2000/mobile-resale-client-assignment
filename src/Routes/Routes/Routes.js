import { createBrowserRouter } from "react-router-dom";
import DashboardLaypot from "../../Layout/DashboardLaypot";
import Main from "../../Layout/Main";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllByers from "../../Pages/Dashboard/AllByers/AllByers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Categories from "../../Pages/Home/Categories/Categories";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from '../../Pages/Products/Products'
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
           {
            path:'/products',
            element:<Products></Products>,
            loader:()=>fetch('http://localhost:5000/products') 
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
            element:<AddAProduct></AddAProduct>
        }
      ]
    }
])

export default router;
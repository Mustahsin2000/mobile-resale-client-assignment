import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLaypot = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] =  UseAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                   

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        
                        {
                            isAdmin && <>
                            <li><Link to='/dashboard/buyers'>All Byers</Link></li>
                            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLaypot;
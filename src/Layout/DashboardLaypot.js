import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLaypot = () => {
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
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLaypot;
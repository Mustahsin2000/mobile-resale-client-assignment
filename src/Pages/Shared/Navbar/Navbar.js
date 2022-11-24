import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.jpg'

const Navbar = () => {
    return (
        // <div className="navbar bg-base-100">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                 <li><a>Item 1</a></li>
        //                 <li tabIndex={0}>
        //                     <a className="justify-between">
        //                         Parent
        //                         <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        //                     </a>
        //                     <ul className="p-2">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </li>
        //                 <li><a>Item 3</a></li>
        //             </ul>
        //         </div>
        //         <a className="btn btn-ghost normal-case text-xl">BarterPhone</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal p-0">
        //             <li><a>Item 1</a></li>
        //             <li tabIndex={0}>
        //                 <a>
        //                     Parent
        //                     <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        //                 </a>
        //                 <ul className="p-2">
        //                     <li><a>Submenu 1</a></li>
        //                     <li><a>Submenu 2</a></li>
        //                 </ul>
        //             </li>
        //             <li><a>Item 3</a></li>
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         <a className="btn">Get started</a>
        //     </div>
        // </div>

        <div className="navbar bg-base-100 mt-3 mb-3 mx-11">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/appoinment'>Appoinment</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Signup</Link></li>
                    </ul>
                </div>
                <img className='h-12 rounded-full' src={logo} alt="" />
                <Link to='/' className=" normal-case text-xl font-semibold">Resale<small className='font-bold text-cyan-500'>Buzz</small></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0 rounded font-semibold">
                    <li className='hover:bg-blue-300 rounded hover:text-white'><Link to='/'>Home</Link></li>
                    <li className='hover:bg-blue-300 rounded hover:text-white'><Link to='/appoinment'>AdverTiseItems</Link></li>
                    <li className='hover:bg-blue-300 rounded hover:text-white'><Link to='/about'>Blog</Link></li>

                    {/* {user?.uid ?
                        <>
                            <li className='hover:bg-cyan-300 rounded hover:text-white'><Link to='/dashboard'>Dashboard</Link></li>
                            <li className='hover:bg-cyan-300 rounded hover:text-white'><button onClick={handlelogout}>sign out</button></li>
                        </>
                        :
                        <li className='hover:bg-cyan-300 rounded hover:text-white'><Link to='/login'>Login</Link></li>}
                    <li className='hover:bg-cyan-300 rounded hover:text-white'><Link to='/signup'>Signup</Link></li> */}

                </ul>
               
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;
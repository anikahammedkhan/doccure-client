import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link>Our Services</Link></li>
        <li><Link>About Us</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link className='btn btn-info mr-2 md:hidden'>Login</Link></li>
        <li><Link className='btn btn-success mr-2 md:hidden'>Register</Link></li>
    </>

    const profile = <li tabIndex={0} className="list-none">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt='' />
            </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link>My Appointments</Link></li>
            <li><Link>Profile</Link></li>
        </ul>
    </li>
    return (
        <div className="navbar bg-white lg:px-20 shadow-lg sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to="/">
                    <img src="https://doccure-html.dreamguystech.com/template/assets/img/logo-one.png" alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    {profile}
                </div>
                <Link className='btn btn-info mr-2 hidden md:flex'>Login</Link>
                <Link className='btn btn-success mr-2 hidden md:flex'>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;
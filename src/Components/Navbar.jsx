import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo-D9NHcesw 1.png';
import github from '../assets/github.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-3 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='hover:text-[#632EE3] font-semibold'><NavLink to='/'>Home</NavLink></li>
                        <li className='hover:text-[#632EE3] font-semibold'><NavLink to='/apps'>App</NavLink></li>
                        <li className='hover:text-[#632EE3] font-semibold'><NavLink to='/installation'>Installation</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="flex items-center font-bold text-[#632EE3] text-xl"><span><img src={logo} alt="" /></span>HERO.IO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='hover:text-[#632EE3] font-semibold'><NavLink to='/'>Home</NavLink></li>
                    <li className='hover:text-[#632EE3] font-semibold'><NavLink to='/apps'>App</NavLink></li>
                    <li className='hover:text-[#632EE3] font-semibold'><NavLink to='/installation'>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='https://github.com/sabrina21080' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text- text-white font-bold"><span><img src={github} alt="" /></span>Contribute</Link>
            </div>
        </div>
    );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NavbarLinks } from "../../../data/navbar-links";
import { fetchCourseCategories } from './../../services/operations/courseDetailsAPI';

import ProfileDropDown from '../core/Auth/ProfileDropDown';
import MobileProfileDropDown from '../core/Auth/MobileProfileDropDown';

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import logo1 from '/logo-3.png';

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);
    const location = useLocation();

    const [subLinks, setSubLinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const fetchSublinks = async () => {
        try {
            setLoading(true);
            const res = await fetchCourseCategories();
            setSubLinks(res);
        }
        catch (error) {
            console.log("Could not fetch the category list =", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        // once backend is done then remove the comment
        // fetchSublinks();
    }, []);

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    const [showNavbar, setShowNavbar] = useState('top');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            setShowNavbar(window.scrollY > lastScrollY ? 'hide' : 'show');
        } else {
            setShowNavbar('top');
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        setSidebarOpen(false);
    }

    return (
        <nav className={`z-[10] flex h-14 w-full items-center justify-center border-b-[1px] border-b-richblack-700 text-white translate-y-0 transition-all ${showNavbar}`}>
            <div className='flex w-full max-w-maxContent items-center justify-between'>
                {/* Logo */}
                <Link to="/">
                    <img src={logo1} alt="ScholarStation" className="h-8 w-auto lg:scale-150" />
                    {/* Adjust the height (`h-8`) and width (`w-auto`) as needed */}
                </Link>

                {/* Nav Links - visible for only large devices */}
                <ul className='hidden md:flex gap-x-4 text-richblack-25'>
                    {
                        NavbarLinks.map((link, index) => (
                            <li key={index}>
                                {
                                    link.title === "Resources" ? (
                                        <div
                                            className={`group relative flex cursor-pointer items-center gap-1 ${matchRoute("/catalog/:catalogName")
                                                ? "bg-yellow-25 text-black rounded-xl p-1 px-3"
                                                : "text-richblack-25 rounded-xl p-1 px-3"
                                                }`}
                                        >
                                            <p className="hover:underline transition duration-200">{link.title}</p>
                                            <MdKeyboardArrowDown />
                                            {/* Drop down menu */}
                                            <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] 
                                                    flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible 
                                                    group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]"
                                            >
                                                <div className="absolute left-[50%] top-0 z-[100] h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                                                {loading ? (
                                                    <p className="text-center">Loading...</p>
                                                ) : subLinks.length ? (
                                                    <>
                                                        {subLinks.map((subLink, i) => (
                                                            <Link
                                                                to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                                                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50 transition duration-200"
                                                                key={i}
                                                            >
                                                                <p className="hover:underline transition duration-200">{subLink.name}</p>
                                                            </Link>
                                                        ))}
                                                    </>
                                                ) : (
                                                    <p className="text-center">No Notes Found</p>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link to={link.path}>
                                            <p className={`${matchRoute(link.path) ? "bg-yellow-25 text-black" : "text-richblack-25"} rounded-xl p-1 px-3 hover:underline transition duration-200`}>
                                                {link.title}
                                            </p>
                                        </Link>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>

                {/* Login/SignUp/Dashboard */}
                <div className="flex sm:flex-row gap-2 items-center text-xs sm:text-sm p-2">
                    {
                        user && user.accountType !== "Instructor" && (
                            <Link to="/dashboard/cart" className="relative">
                                <AiOutlineShoppingCart className="text-[2.35rem] text-richblack-5 hover:bg-richblack-700 rounded-full p-2 duration-200" />
                                {totalItems > 0 && (
                                    <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/login">
                                <button className={`px-[12px] py-[8px] text-richblack-100 rounded-md 
                                 ${matchRoute('/login') ? 'border-[2.5px] border-yellow-50' : 'border border-richblack-700 bg-richblack-800'} 
                                 hover:underline transition duration-200`}>
                                    Log in
                                </button>
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/signup">
                                <button className={`px-[12px] py-[8px] text-richblack-100 rounded-md 
                                 ${matchRoute('/signup') ? 'border-[2.5px] border-yellow-50' : 'border border-richblack-700 bg-richblack-800'} 
                                 hover:underline transition duration-200`}>
                                    Sign Up
                                </button>
                            </Link>
                        )
                    }

                    {/* for large devices */}
                    {token !== null && <ProfileDropDown />}

                    {/* for small devices */}
                    {token !== null && <MobileProfileDropDown />}

                </div>

                
                {/* Hamburger Icon for Mobile View */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setSidebarOpen(true)}>
                        <HiOutlineMenuAlt3 className="text-2xl text-white" />
                    </button>
                </div>

                {/* Sidebar */}
                <div className={`fixed top-0 left-0 h-screen w-64 bg-richblack-900 z-20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                    <div className="flex items-center bg-richblack-800 justify-between p-3">
                        <Link to="/">
                            <img src={logo1} alt="ScholarStation" className="h-8 w-auto lg:scale-150" />
                        </Link>
                        <button className="text-white text-2xl" onClick={() => setSidebarOpen(false)}>
                            <HiOutlineX />
                        </button>
                    </div>

                    <div className="bg-richblack-900">
                        <ul className="mt-10 space-y-4">
                            {NavbarLinks.map((link, index) => (
                                <li key={index} className="px-4 py-2">
                                    <Link 
                                        to={link.path} 
                                        onClick={() => setSidebarOpen(false)} 
                                        className="flex items-center relative text-sm md:text-base lg:text-lg text-white transition duration-200 hover:bg-richblack-800"
                                    >
                                        {link.icon && <span className="mr-2">{link.icon}</span>}
                                        {link.title}
                                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-transform duration-200 transform scale-x-0 hover:scale-x-100"></span>
                                        <span className="absolute left-0 bottom-0 w-full h-px bg-richblack-300"></span> {/* Bottom border */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

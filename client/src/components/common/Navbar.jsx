import React, { useState, useEffect } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NavbarLinks } from "../../../data/navbar-links";
import { fetchCourseCategories } from './../../services/operations/courseDetailsAPI';

import ProfileDropDown from '../core/Auth/ProfileDropDown';
import MobileProfileDropDown from '../core/Auth/MobileProfileDropDown';

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

// Import your logo image using a relative path
import logo1 from '/src/assets/Logo/logo1.png'; // Adjust the path based on your directory structure

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);
    const location = useLocation();

    const [subLinks, setSubLinks] = useState([]);
    const [loading, setLoading] = useState(false);

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
        fetchSublinks();
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
            if (window.scrollY > lastScrollY)
                setShowNavbar('hide');
            else
                setShowNavbar('show');
        }
        else setShowNavbar('top');

        setLastScrollY(window.scrollY);
    };

    return (
        <nav className={`z-[10] flex h-14 w-full items-center justify-center border-b-[1px] border-b-richblack-700 text-white translate-y-0 transition-all ${showNavbar}`}>
            <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
                {/* Logo */}
                <Link to="/">
                    <img src={logo1} alt="ScholarStation Logo" className="h-8 w-auto" />
                    {/* Adjust the height (`h-8`) and width (`w-auto`) as needed */}
                </Link>

                {/* Nav Links - visible for only large devices */}
                <ul className='hidden sm:flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((link, index) => (
                            <li key={index}>
                                {
                                    link.title === "Catalog" ? (
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
                <div className='flex gap-x-4 items-center'>
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
            </div>
        </nav>
    );
};

export default Navbar;

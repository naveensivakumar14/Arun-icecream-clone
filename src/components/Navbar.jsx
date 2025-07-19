import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/Logo.png";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <>
            <div className="bg-white flex justify-between shadow-md items-center px-8 py-4">
                <div className="size-24 flex items-center">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="md:flex hidden">
                    <ul className="flex space-x-10 items-center">
                        <li>
                            <Link to="/" className="hover:font-bold hover:text-red-600">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:font-bold hover:text-red-600">About</Link>
                        </li>
                        <li>
                            <Link to="/products" className="hover:font-bold hover:text-red-600">Products</Link>
                        </li>
                        <li>
                            <Link to="/media" className="hover:font-bold hover:text-red-600">Media</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:font-bold hover:text-red-600">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* React Icons */}
                <div className="md:flex hidden space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <IoLogoInstagram size={30} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <FaYoutube size={30} className='text-red-500' />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={handleNav}>
                        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`${nav ? 'block' : 'hidden'} md:hidden bg-slate-200`}>
                <ul className="flex flex-col items-center space-y-4 p-4">
                    <li><Link to="/" className="hover:font-semibold hover:underline" onClick={handleNav}>Home</Link></li>
                    <li><Link to="/about" className="hover:font-semibold hover:underline" onClick={handleNav}>About Us</Link></li>
                    <li><Link to="/products" className="hover:font-semibold hover:underline" onClick={handleNav}>Products</Link></li>
                    <li><Link to="/media" className="hover:font-semibold hover:underline" onClick={handleNav}>Media</Link></li>
                    <li><Link to="/contact" className="hover:font-semibold hover:underline" onClick={handleNav}>Contact</Link></li>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <IoLogoInstagram size={30} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <FaYoutube size={30} />
                        </a>
                    </div>
                </ul>
            </div>
        </>
    );
}

export default Navbar;

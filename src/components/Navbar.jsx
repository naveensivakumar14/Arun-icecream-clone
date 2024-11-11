import React, { useState } from 'react';
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
            <div className="bg-white flex justify-around shadow-md items-center">
                <div className="size-24 flex items-center">
                    <img src={logo} alt="logo" />
                </div>
                <div className="md:flex hidden">
                    <ul className="flex space-x-4">
                        <li className="hover:font-semibold hover:underline">Home</li>
                        <li className="hover:font-semibold hover:underline">About</li>
                        <li className="hover:font-semibold hover:underline">Products</li>
                        <li className="hover:font-semibold hover:underline">Contact</li>
                    </ul>
                </div>

                {/* React Icons */}
                <div className="md:flex hidden space-x-4">
                    <IoLogoInstagram size={30} />
                    <FaYoutube size={30} />
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={handleNav}>
                        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${nav ? 'block' : 'hidden'} md:hidden bg-slate-200`}>
                <ul className="flex flex-col items-center space-y-4 p-4">
                    <li className="hover:font-semibold hover:underline">Home</li>
                    <li className="hover:font-semibold hover:underline">About us</li>
                    <li className="hover:font-semibold hover:underline">Products</li>
                    <li className="hover:font-semibold hover:underline">Contact</li>
                    <div className="flex space-x-4">
                        <IoLogoInstagram size={30} />
                        <FaYoutube size={30} />
                    </div>
                </ul>
            </div>
        </>
    );
}

export default Navbar;

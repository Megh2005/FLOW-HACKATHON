"use client";
import { useState } from "react";
import {
    FaHome,
    FaHandsHelping,
} from "react-icons/fa";
import { FaEthereum, FaCircleInfo } from "react-icons/fa6";
import { RiProfileFill } from "react-icons/ri";

import Link from "next/link";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="bg-[#291560] text-yellow-400 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-t-xl shadow-4xl w-auto sm:w-auto">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center">
                <div className="flex space-x-6">
                    <Link
                        href="/"
                        className={`relative group hover:text-yellow-900`}
                        onClick={() => handleLinkClick("home")}
                    >
                        <FaHome className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Home
                        </span>
                    </Link>
                    <Link
                        href="/about"
                        className={`relative group hover:text-yellow-900`}
                        onClick={() => handleLinkClick("home")}
                    >
                        <FaCircleInfo className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            About
                        </span>
                    </Link>
                    <Link
                        href="/mint"
                        className={`relative group hover:text-yellow-900`}
                        onClick={() => handleLinkClick("home")}
                    >
                        <FaEthereum className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Mint
                        </span>
                    </Link>
                    <Link
                        href="/profile"
                        className={`relative group hover:text-yellow-900`}
                        onClick={() => handleLinkClick("home")}
                    >
                        <RiProfileFill className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Profile
                        </span>
                    </Link>
                    <Link
                        href="/manual"
                        className={`relative group hover:text-yellow-900`}
                        onClick={() => handleLinkClick("profile")}
                    >
                        <FaHandsHelping className="inline-block mr-2" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Manual
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
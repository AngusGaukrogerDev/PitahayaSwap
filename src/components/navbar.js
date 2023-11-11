import React from "react";
import '../styles/navbar.css'

const Navbar = () => {
    return(
    <nav
    className="w-full fixed flex flex-row justify-center items-center px-5 md:px-16 py-2 overflow-x-hidden z-[99] top-0 h-20  bg-snow drop-shadow-custom">
        <h1 className=" font-extrabold text-2xl">PitahayaSwap</h1>
    </nav>
    )
}

export default Navbar;
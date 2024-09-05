import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { shopContext } from "../context/ShopContext";

function Navbar() {
  // This is for the button that dropdown 3 things
  const [show, setShow] = useState(false);

  // This is for the Hamburger menu
  const [navabar, setNavbar] = useState(false);

  const { setShowSearch, showSearch, getCartCount } = useContext(shopContext);

  return (
    // Left Side
    <div className="flex justify-between items-center py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36 cursor-pointer" alt="" />
      </Link>

      {/* Middle */}

      <ul className=" hidden sm:flex text-gray-700 gap-8 text-sm uppercase">
        <NavLink to="/" className={`flex flex-col items-center gap-1`}>
          <p>Home</p>
          <hr className="w-full rounded-2xl border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collections"
          className={`flex flex-col items-center gap-1`}
        >
          <p>Collections</p>
          <hr className="w-full rounded-2xl border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className={`flex flex-col items-center gap-1`}>
          <p>About</p>
          <hr className="w-full rounded-2xl border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className={`flex flex-col items-center gap-1`}>
          <p>Contact</p>
          <hr className="w-full rounded-2xl border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* RightSide */}
      <div className="flex justify-center items-center gap-6">
        <img
          onClick={() => setShowSearch(!showSearch)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />
        <div className="group relative">
          <img
            onClick={(e) => setShow(!show)}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div
            className={`${
              show ? "absolute dropdown-menu right-0 pt-4" : "hidden"
            } `}
          >
            <div className="w-40 bg-slate-100 p-4 rounded shadow flex justify-between text-gray-500">
              <div className="flex flex-col gap-2 mr-2">
                <Link onClick={(e) => setShow(false)} to="/orders">
                  <p className="cursor-pointer hover:text-black">Orders</p>
                </Link>
                <Link onClick={(e) => setShow(false)} to="/login">
                  <p className="cursor-pointer hover:text-black">Login</p>
                </Link>
              </div>
              <div className="rounded-full bg-slate-200 duration-300 cursor-pointer hover:bg-slate-300 w-8 h-8 flex justify-center items-center">
                <img
                  className="w-3"
                  onClick={(e) => setShow(false)}
                  src={assets.cross_icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Link to="/card" className="relative">
          <img src={assets.cart_icon} className="min-w-5 w-5" alt="" />
          <p className="absolute -right-1 -bottom-2 w-4 text-center leading-4 aspect-square bg-black text-white text-[8px] rounded-full ">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          onClick={() => setNavbar(true)}
          className="w-5 sm:hidden cursor-pointer"
          alt=""
        />
      </div>

      {/* When CLicked Hamburger */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all duration-300 bg-white ${
          navabar ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setNavbar(false)}
            className="cursor-pointer flex items-center gap-4 p-3 "
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-14 ">
            <NavLink
              onClick={() => setNavbar(false)}
              className="w-full border pl-3 py-6 text-gray-500 text-center hover:text-black duration-300"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setNavbar(false)}
              className="w-full border pl-3 py-6 text-gray-500 text-center hover:text-black duration-300"
              to="/collections"
            >
              COLLECTIONS
            </NavLink>
            <NavLink
              onClick={() => setNavbar(false)}
              className="w-full border pl-3 py-6 text-gray-500 text-center hover:text-black duration-300"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setNavbar(false)}
              className="w-full border pl-3 py-6 text-gray-500 text-center hover:text-black duration-300"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

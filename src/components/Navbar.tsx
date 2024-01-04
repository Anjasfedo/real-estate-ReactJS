import React, { useState } from "react";
import { FaBars, FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { TbHomeCheck } from "react-icons/tb";

const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="lg:block hidden bg-[#0ca39a] text-white py-2">
        <div className="container mx-auto lg:flex items-center justify-between px-3">
          <span className="flex items-center gap-x-1">
            <FaLocationArrow />
            <p className="text-sm">Bengkulu, Indonesia</p>
          </span>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1">
              <FaPhone />
              <p>088888888888</p>
            </span>
            <span className="flex items-center gap-x-1">
              <FaEnvelope />
              <p>example@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-3">
          <div>
            <ul className="lg:flex hidden items-center gap-x-4 list-none lg:ml-auto lg:gap-y-0 gap-y-8">
              <li className="py-2 flex font-medium items-center leading-snug">
                <button className="bg-[#0ca39a] rounded-full px-4 py-1 hover:bg-slate-950">
                  Home
                </button>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug">
                  <a href="#">About</a>
                </li>
                <li className="py-2 flex font-medium items-center leading-snug">
                  <a href="#">Listings</a>
                </li>
                <li className="py-2 flex font-medium items-center leading-snug">
                  <a href="#">Services</a>
                </li>
                <li className="py-2 flex font-medium items-center leading-snug">
                  <a href="#">Blogs</a>
                </li>
            </ul>
          </div>

          <div className="w-full lg:w-auto flex justify-between items-center">
            <span className="flex items-center gap-x-2">
              <button className="bg-[#0ca39a] text-white rounded-full w-14 h-14">
                <TbHomeCheck className="w-1/2 h-1/2 m-auto" />
              </button>
              <p className="font-medium text-xl">Anjas</p>
            </span>
            <div className="flex items-center lg:hidden">
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 h-[3rem]"
                onClick={() => setNavBarOpen(!navBarOpen)}
              >
                {navBarOpen ? <AiOutlineClose /> : <FaBars />}
              </button>
            </div>
          </div>

          <div
            className={`lg:flex lg:items-center items-baseline lg:h-auto lg:mx-0 mx-auto h-screen ${
              navBarOpen ? "flex" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-x-4 list-none lg:ml-auto lg:gap-y-0 gap-y-8 ">
              <div className="lg:hidden flex flex-col gap-y-8 items-center">
                <li className="py-2 flex font-medium items-center leading-snug">
                  <button className="bg-[#0ca39a] rounded-full px-4 py-1 ">
                    Home
                  </button>
                </li>
                <li className="py-2 flex font-medium items-center leading-snug">
                  <a href="#">About</a>
                </li>
                <li className="py-2 flex font-medium items-center leading-snug">
                  <a href="#">Listings</a>
                </li>
                <li className="py-2 flex font-medium items-center leading-snug">
                  <a href="#">Services</a>
                </li>
                <li className="py-2 flex font-medium items-center leading-snug">
                  <a href="#">Blogs</a>
                </li>
              </div>

              <li className="py-2 flex font-medium items-center leading-snug">
                <button className="py-4 flex items-center gap-2">
                  <IoPersonCircleOutline />
                  <p>Login/Register</p>
                </button>
              </li>

              <li className="py-2 flex font-medium items-center leading-snug">
                <button className="bg-[#0ca39a] rounded-full py-4 px-6 flex items-center gap-2">
                  <TbHomeCheck className="text-xl" />
                  <p>Add Listing</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

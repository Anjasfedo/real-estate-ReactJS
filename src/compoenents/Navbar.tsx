import React, { useState } from "react";

import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import Navlink from "./Navlink";

const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50">
      <div className="lg:block hidden bg-[#0ca39a] text-white py-2">
        <div className="container mx-auto lg:flex hidden item-center justify-between px-3">
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

      <div>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <Navlink to="/">About</Navlink>
          </li>
          <li>
            <Navlink to="/">Listings</Navlink>
          </li>
          <li>
            <Navlink to="/">Services</Navlink>
          </li>
          <li>
            <Navlink to="/">Blocgs</Navlink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

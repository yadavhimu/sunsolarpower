import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
//   const [visible, setVisible] = useState(false);

  return (
    <div className="px-[2vw] bg-[#252F38] " >
      <div className=" flex items-center justify-between py-5 font-medium ">
        <Link to="/">
          <h1 className="text-white font-bold text-5xl">SunSolarPower</h1>{" "}
          <h1 className="text-orange-600 font-bold text-3xl ">Solution</h1>
        </Link>
        {/* <link to='/' <img src={assets.logo} className='w-36' alt=""/> </Link> */}
        <ul className="hidden sm:flex gap-5 text-4xl text-white">
          <NavLink
            to="/"
            className="flex flex-col  items-center gap-1 hover:text-orange-600"
          >
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1 hover:text-orange-600"
          >
            <p>Products</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1 hover:text-orange-600"
          >
            <p>Resources</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1 hover:text-orange-600"
          >
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1 hover:text-orange-600"
          >
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        {/* <div className="flex items-center gap-6">
          <img
            onClick={() => setVisible(true)}
            src="./images/menu_icon.png"
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div> */}
        {/* side bar menu for small screens */}
        {/* <div
          className={`absolute top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                className="h-4 rotate-180"
                src=".images/dropdown_icon.png"
                alt=""
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/puja"
            >
              Puja
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/temple"
            >
              Temple
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;

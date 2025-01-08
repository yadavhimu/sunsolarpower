import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#252F38] rounded-lg ">
      <div className="flex flex-col sm:grid grid-cols-[1fr_1fr_1fr_1fr] gap-14 my-10  text-sm pt-2 pl-2 ">
        <div>

           <img className="w-80" src="./images/logosolar.png" alt="" />
          <p className="w-full md:w-2/3 text-white text-md text-xl">
           Power For The People
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold mb-5 text-white">Explore</p>
          <ul className="flex flex-col gap-1 text-white text-xl">
            <Link to={"/"}>
              <li className="text-md">Home</li>
            </Link>
            <Link to={"products"}>
              <li className="text-md">Products</li>
            </Link>
            <Link to={"about"}>
              <li className="text-md">About</li>
            </Link>
            <Link to={"contact"}>
              <li className="text-md">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-bold mb-5 text-white">Legal</p>
          <ul className="flex flex-col gap-1 text-white text-xl">
            <Link to={"term"}>
            <li className="text-md">Terms and Condition</li>
            </Link>
            <Link to={"refund"}>
            <li className="text-md">Return and Refund Policy</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-bold mb-5 text-white">Contact Detail</p>
          <ul className="flex flex-col gap-1 text-white text-xl">
            <li className="text-xl font-medium text-orange-600"> Phone :</li>
            <li className="text-md">+91 9236113863</li>
            <li className="text-xl font-medium text-orange-600"> Email:</li>
            <li className="text-md">Kapish2293@gmail.com</li>
            <li className="text-xl font-medium text-orange-600">Address :</li>
            <li className="text-md">
              123/419 A Saresh Bagh Kanpur,{" "}
            </li>
            <li className="text-md"> India - 208012</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-lg text-center text-white">
          {" "}
          Copyright 2024@sunsolarpower solutions  - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

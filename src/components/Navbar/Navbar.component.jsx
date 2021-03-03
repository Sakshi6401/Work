import React from "react";

import "./Navbar.style.css";

let isOpen = false;

const Toggle1 = (y, x) => {
  console.log("closed");
  y.style.display = "none";
  x[0].style.transform = "none";
  x[1].style.opacity = "100";
  x[2].style.transform = "none";
  isOpen = false;
};
const Toggle2 = (y, x) => {
  console.log("open");
  y.style.display = "block";
  x[0].style.transform = "rotate(-45deg) translate(-5px,6px)";
  x[0].style.transition = "transform 0.4s ease-in";
  x[1].style.opacity = "0";
  x[1].style.transition = "opacity 0.2s ease-in";
  x[2].style.transform = "rotate(45deg) translate(-5px,-6px)";
  x[2].style.transition = "transform 0.4s ease-in";
  isOpen = true;
};

const handleClick = () => {
  const y = document.getElementById("drop-down");
  const x = document.getElementById("nav_parent").children;
  isOpen ? Toggle1(y, x) : Toggle2(y, x);
};

const Navbar = () => (
  <div className="block">
    <div className="h-16 bg-gray-900 text-gray-300 flex justify-between justify-items-center font-mono">
      <div className="text-2xl py-3 px-8 uppercase select-none tracking-widest">
        Navbar
      </div>
      <div className="hidden sm:flex text-lg py-3" id="lol">
        <a className="px-4 md:px-8 lg:px-10 hover:text-red-500" href="#">
          Home
        </a>
        <a className="px-4 md:px-8 lg:px-10 hover:text-red-500" href="#">
          Features
        </a>
        <a className="px-4 md:px-8 lg:px-10 hover:text-red-500" href="#">
          About
        </a>
        <a className="px-4 md:px-8 lg:px-10 hover:text-red-500" href="#">
          Contact
        </a>
      </div>
      <div
        className="sm:hidden py-4 px-8 cursor-pointer"
        id="nav_parent"
        onClick={() => {
          handleClick();
        }}
      >
        <div id="div1" className="h-1 w-6 m-1 bg-gray-300"></div>
        <div id="div2" className="h-1 w-6 m-1 bg-gray-300"></div>
        <div id="div3" className="h-1 w-6 m-1 bg-gray-300"></div>
      </div>
    </div>
    <div
      className="hidden sm:hidden bg-gray-900 text-gray-300 text-lg py-3"
      id="drop-down"
    >
      <a className="px-4 md:px-8 lg:px-10 hover:text-red-500 block" href="#">
        Home
      </a>
      <a className="px-4 md:px-8 lg:px-10 hover:text-red-500 block" href="#">
        Feature
      </a>
      <a className="px-4 md:px-8 lg:px-10 hover:text-red-500 block" href="#">
        About
      </a>
      <a className="px-4 md:px-8 lg:px-10 hover:text-red-500 block" href="#">
        Contact
      </a>
    </div>
  </div>
);

export default Navbar;

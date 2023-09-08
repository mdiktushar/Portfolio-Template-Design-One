import React from "react";
import logo from "../../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const list = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/portfolio`}>Portfolio</NavLink>
      </li>
      <li>
        <NavLink to={`/about-me`}>About me</NavLink>
      </li>
      <li>
        <NavLink to={`/testiomonials`}>Testimonials</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {list}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" width={`150px`} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-transparent border-spacing-1 border-[#5E3BEE] rounded-lg mr-10 text-[10px] text-[#5E3BEE]">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Navbar;

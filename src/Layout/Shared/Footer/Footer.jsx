import React from "react";
import logo from "../../../assets/img/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-[300px] py-12 px-10 bg-[#F5FCFF]">
      <div className="flex flex-col md:flex-row md:justify-between gap-5 items-center">
        <img src={logo} alt="" width={"100px"} />
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Link className="font-bold" href="">
            Home
          </Link>
          <Link className="font-bold" href="">
            Portfolio
          </Link>
          <Link className="font-bold" href="">
            About me
          </Link>
          <Link className="font-bold" href="">
            Contact
          </Link>
          <Link className="font-bold" href="">
            Testimonals
          </Link>
        </div>
        <div className="flex gap-5 md:gap-3">
          <Link target="_blank" href="">
            <FaFacebookF />
          </Link>
          <Link target="_blank" href="">
            <FaInstagram />
          </Link>
          <Link target="_blank" href="">
            <FaSquareXTwitter />
          </Link>
          <Link target="_blank" href="">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <hr className="bg-black h-[2px] my-16"/>

      <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
        <p className="text-sm">Developer: <Link target="_blank" href="https://github.com/mdiktushar/">Md. Imrul Kayes</Link></p>
        <div className="flex gap-2">
            <Link target="_blank" className="text-sm" href="">Privacy Policy</Link>
            <Link target="_blank" className="text-sm" href="">Terms of Services</Link>
            <Link target="_blank" className="text-sm" href="">Cookies Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

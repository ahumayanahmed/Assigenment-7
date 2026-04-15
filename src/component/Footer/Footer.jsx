import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <footer className="bg-[#1E3A2F] text-white my-10 py-10 text-center">
      {/* Brand */}
      <div className="text-3xl font-bold mb-2">
        Keen<span className="font-normal">Keeper</span>
      </div>

      {/* Tagline */}
      <p className="text-sm text-gray-300 mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
<h1 className='pb-3'>Social Links</h1>
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-6 text-xl ">
        <a href="#" aria-label="Instagram" className="hover:text-gray-200 bg-white p-3 text-black rounded-full">
          <FaInstagramSquare />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-gray-200 bg-white text-black p-3 rounded-full">
          <FaFacebookF/>
        </a>
        <a href="#" aria-label="X / Twitter" className="bg-white text-black rounded-full p-3 hover:bg-gray-200">
          <FaXTwitter />
        </a>
      </div>
<hr className="mt-10 border-t border-gray-600 w-[90%] mx-auto my-6" />
      <div className='flex justify-between items-center w-[90%] mx-auto pt-2'>
        {/* Legal Links */}
      <div className="flex justify-center gap-6 text-gray-400 text-sm mb-2">
        <a href="#" className="hover:text-gray-200">Privacy Policy</a>
        <a href="#" className="hover:text-gray-200">Terms of Service</a>
        <a href="#" className="hover:text-gray-200">Cookies</a>
      </div>

      {/* Copyright */}
      <div className="text-gray-500 text-xs">
        &copy; 2026 KeenKeeper. All rights reserved.
      </div>
      </div>
    </footer>
    );
};

export default Footer;
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";


const Footer = () => {
  
  return (
    <footer className="bg-black py-[5rem] text-center text-white">
      <div className="flex justify-between items-center px-[9rem] mx-auto">
        {/* Left Section: Logo and EgoSwap text */}
        <div className="flex items-center space-x-4">
          <div className="max-w-sm">
            <Image
              src="/egax_logo.png"
              alt="EgoSwap Logo"
              width={50}
              height={50}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="text-white font-bold text-4xl">EgoSwap</div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center space-x-6">
          <SocialIcon
            className="cursor-pointer"
            network="twitter"
            fgColor="gray"
            bgColor="white"
          />
          <SocialIcon
            className="cursor-pointer"
            network="telegram"
            fgColor="gray"
            bgColor="white"
          />
          <SocialIcon
            className="cursor-pointer"
            network="github"
            fgColor="gray"
            bgColor="white"
          />
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="white"
          />
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-t-4 border-gray-700 w-[90%] mx-auto my-6" />


      {/* Copyright */}
      <p>&copy; 2024 EgoSwap. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

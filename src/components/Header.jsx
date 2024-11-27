"use client";
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation'; // Correct import for App Router
import { FaPowerOff } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
  const router = useRouter(); // Initialize router

  const handleLogout = () => {
    // Simulate logout and redirect to the login page
    router.push("/login"); // Push to the login page
  };

  return (
    <header className="bg-stone-900 py-9 px-[10rem] flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="max-w-sm mx-auto">
          <Image
            src="/egax_logo.png"
            alt="A description of the image"
            width={50}
            height={50}
            className="rounded-xl shadow-2xl"
          />
        </div>

        <div className="text-white font-bold text-4xl">EgoSwap</div>
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <p className="text-2xl text-white">Wallet</p>
        <p className="text-2xl text-white">Earn</p>

        <p className="bg-transparent text-2xl font-bold py-3 px-3 rounded-full border-2 border-white text-white">
          <IoSettingsOutline />
        </p>
        <button
          onClick={handleLogout} // Trigger the logout simulation
          className="bg-transparent text-2xl font-bold py-3 px-3 rounded-full border-2 border-white text-red-600"
        >
          <FaPowerOff />
        </button>
      </div>
    </header>
  );
};

export default Header;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const Navbar = () => {
  return (
    <nav className="bg-black py-9 px-[9rem] flex justify-between items-center">
        <div className='flex items-center gap-2'>
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
      <button className="bg-green-700 text-white text-xl font-bold py-3 px-6 rounded-full hover:bg-green-800">
      <Link href="/login">Login / Signup</Link>
      </button>
    </nav>
  );
};

export default Navbar;

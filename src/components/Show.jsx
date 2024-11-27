"use client";
import Image from "next/image";
import React from "react";

const Show = ({ setShowSec1, setShowSec2, setShowSec3 }) => {
  return (
    <div className="bg-stone-950  w-[37rem] h-[95vh] mx-auto my-10 py-5 rounded-xl"
      onClick={(e) => e.stopPropagation()}
      >
      <div className="flex flex-col px-8">
        <h2 className="text-3xl font-bold text-green-600 mb-4 text-left">
          Select a token
        </h2>

        <p className="text-lg font-bold text-white mb-4 text-left">
          You can search and select any token on EgoSwap
        </p>

        {/* Input Field */}
        <input
          type="text"
          className="w-[30rem] h-[4rem] rounded-xl bg-transparent border-4 border-white outline-green-800 border-opacity-70 
           text-white px-4 focus:border-green-700 focus:outline-none"
          placeholder="Search for a token..."
        />
      </div>
      {/* Divider */}
      <div className="h-[2px] bg-gray-500 w-[37rem] my-10"></div>
      <div className="flex flex-col gap-7">

        <div
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-5 hover:bg-stone-900 py-5 px-4 w-[37rem]
         cursor-not-allowed opacity-50"
        >   
          <div className="">
            <Image
              src="/usdt_img.png"
              alt="A description of the image"
              width={50}
              height={50}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="text-white flex flex-col gap-1">
            <span>USDT/Bep20</span>
            <span>
              Tether USD{" "}
              <span className="bg-yellow-500 p-1 rounded-lg">Bep20</span>
            </span>
          </div>
        </div>


        <div className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
        onClick={()=>{
          setShowSec1(true)
          setShowSec2(false);
          setShowSec3(false);
        }}>
          <div className="">
            <Image
              src="/usdt_img.png"
              alt="A description of the image"
              width={50}
              height={50}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="text-white flex flex-col gap-1">
            <span>USDT/Bep20</span>
            <span>
              Tether USD{" "}
              <span className="bg-yellow-500 p-1 rounded-lg">Bep20</span>
            </span>
          </div>
        </div>


        <div className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
          onClick={()=>{
            setShowSec1(false)
            setShowSec2(true);
            setShowSec3(false);
          }}>
        
          <div className="">
            <Image
              src="/usdt_img.png"
              alt="A description of the image"
              width={50}
              height={50}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="text-white flex flex-col gap-1">
            <span>USDT/Bep20</span>
            <span>
              Tether USD{" "}
              <span className="bg-yellow-500 p-1 rounded-lg">Bep20</span>
            </span>
          </div>
        </div>


        <div className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
          onClick={()=>{
            setShowSec1(false)
            setShowSec2(false);
            setShowSec3(true);
          }}>
        
          <div className="">
            <Image
              src="/usdt_img.png"
              alt="A description of the image"
              width={50}
              height={50}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="text-white flex flex-col gap-1">
            <span>USDT/Bep20</span>
            <span>
              Tether USD{" "}
              <span className="bg-yellow-500 p-1 rounded-lg">Bep20</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Show;





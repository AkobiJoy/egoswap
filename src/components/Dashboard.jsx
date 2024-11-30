"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineSwapVert } from "react-icons/md"; // Importing the swap icon
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import Show from "./Show";

const Dashboard = () => {
  const [content, setContent] = useState({
    upperDiv: {
      title: "USDT/BEP20",
      chain: "BINANCE",
      token: "BEP20",
      amount: "0.00",
      sendText: "You send", // Default to "You send"
    },
    lowerDiv: {
      title: "USDT/EGO20",
      chain: "EGOCHAIN",
      token: "EGO20",
      amount: "0.00",
      sendText: "You receive", // Default to "You receive"
    },
  });

  // Handle the content swap click (content transfer from one div to another)
  const handleSwap = () => {
    setContent((prevState) => ({
      upperDiv: {
        ...prevState.lowerDiv,
      },
      lowerDiv: {
        ...prevState.upperDiv,
      },
    }));
  };

  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const [secOne, setSecOne] = useState(true);
  const [secTwo, setSecTwo] = useState(false);
  const [secThree, setSecThree] = useState(false);

  const handleSecOne = () => {
    setSecOne(true);
    setSecTwo(false);
    setSecThree(false);
  };

  const handleSecTwo = () => {
    setSecTwo(true);
    setSecOne(false);
    setSecThree(false);
  };

  const handleSecThree = () => {
    setSecThree(true);
    setSecOne(false);
    setSecTwo(false);
  };

  return (
    <>
      <div className="bg-green-950 h-full pb-[10rem]">
        {/* section 1 */}
        {secOne === true && (
          <section className="bg-green-950 text-center py-[30rem] text-white flex flex-col items-center justify-center h-screen">
            {/* Main Heading */}

            <h1 className="text-5xl font-bold flex flex-col gap-1 mb-5">
              <span>Exchange Any Crypto</span>{" "}
              <span className="text-green-600">Instantly</span>{" "}
            </h1>

            {/* Swap Interface */}
            <div className="bg-black rounded-lg max-w-full w-[45%] p-6 shadow-lg flex flex-col gap-6 relative">
              {/* Bridge Div */}
              <div className="flex items-center bg-stone-900 rounded-xl">
                <span className="text-xl font-bold py-3 px-12 border-4 border-green-600 rounded-lg transition-all">
                  Bridge
                </span>
              </div>

              {/* Upper content div */}
              <div
                // onClick={toggleOpenModal}
                className="flex items-center gap-3 bg-stone-900 w-full h-[8rem] rounded-xl text-white px-6 py-5 mt-4"
              >
                <div></div>
                <div className="">
                  <Image
                    src="/usdt_img.png"
                    alt="A description of the image"
                    width={50}
                    height={50}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div onClick={toggleOpenModal} className="text-left cursor-pointer">
                    {/* </div> */}

                    <>
                      <div className="text-2xl font-bold flex items-end">
                        {content.upperDiv.title} <IoMdArrowDropdown />
                        {/* open modal */}
                        {openModal && (
                          <div
                            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                            // Close modal on backdrop click
                          >
                            {/* <Show /> */}

                            <div
                              className="bg-stone-950  w-[37rem] h-[95vh] mx-auto my-10 py-5 rounded-xl"
                              // onClick={(e) => e.stopPropagation()}
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
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent modal close on input click
                                    console.log("Input clicked");
                                  }}
                                  type="text"
                                  className="w-[30rem] h-[4rem] rounded-xl bg-transparent border-4 border-white outline-green-800 border-opacity-70 
                                                text-white px-4 focus:border-green-700 focus:outline-none"
                                  placeholder="Search for a token..."
                                />
                              </div>
                              {/* Divider */}
                              <div className="h-[2px] bg-gray-500 w-[37rem] my-4"></div>
                              <div className="flex flex-col gap-3">
                                {/* doamnt div */}
                                <div
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default behavior
                                    e.stopPropagation(); // Stop propagation to avoid closing the modal
                                    console.log("Dormant div clicked");
                                  }}
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
                                  <div className="text-white  flex flex-col gap-1">
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/*MODAL clickable div 1 */}
                                <div
                                  onClick={handleSecOne}
                                  className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
                                  //  onClick={() => handleSectionChange(1)}
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
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/*MODAL clickable div 2 */}
                                <div
                                  onClick={handleSecTwo}
                                  className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
                                  //  onClick={() => handleSectionChange(1)}
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
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/*MODAL clickable div 4 */}
                                <div
                                  onClick={handleSecThree}
                                  className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
                                  //  onClick={() => handleSectionChange(1)}
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
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="flex items-center gap-2 font-medium">
                        {content.upperDiv.chain}{" "}
                        <span className="bg-green-600 text-sm p-1 rounded-md">
                          {content.upperDiv.token}
                        </span>
                      </p>
                    </>
                  </div>
                  

                  <div className="text-right flex flex-col gap-3">
                    <span className="text-xl">{content.upperDiv.sendText}</span>
                    {/* <p className="text-5xl font-bold"> */}
                    <input
                      type="number"
                      value={content.upperDiv.amount} // Use the value from the object
                      onChange={(e) =>
                        console.log("Updated value:", e.target.value)
                      } // Handle changes if needed
                      className="w-[10rem] h-[4rem] rounded-xl bg-transparent border-4 border-white outline-green-800 border-opacity-70 
             text-white px-4 focus:border-green-700 focus:outline-none"
                      placeholder="Search for a token..."
                    />

                    {/* {content.upperDiv.amount} */}
                    {/* </p> */}
                  </div>
                </div>
              </div>

              {/* Centered Swap Icon */}
              <div
                onClick={handleSwap} // Handle swap click
                className="absolute top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer text-3xl bg-black"
              >
                <MdOutlineSwapVert />
              </div>

              {/* Lower content div */}
              <div className="flex items-center gap-3 bg-stone-900 w-full h-[8rem] rounded-xl text-white px-6 py-5 mt-4">
                <div className="">
                  <Image
                    src="/usdt_img.png"
                    alt="A description of the image"
                    width={50}
                    height={50}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <p className="text-2xl font-bold">
                      {content.lowerDiv.title}
                    </p>
                    <p className="flex items-center gap-2 font-medium">
                      {content.lowerDiv.chain}{" "}
                      <span className="bg-green-600 text-sm p-1 rounded-md">
                        {content.lowerDiv.token}
                      </span>
                    </p>
                  </div>

                  <div className="text-right flex flex-col gap-3">
                    <span className="text-xl">{content.lowerDiv.sendText}</span>
                    <p className="text-5xl font-bold">
                      {content.lowerDiv.amount}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 text-white text-lg font-medium py-2 px-6 rounded-lg shadow-md text-left mt-5 w-full">
                1USD = 1USDE
              </div>

              {/* Login/Signup Button */}
              <button className="bg-green-700 py-4 px-6 rounded-lg text-white text-xl font-semibold hover:bg-green-800 transition-transform transform hover:scale-105 mt-5 w-full">
                <Link href="/login">Bridge</Link>
              </button>
            </div>
          </section>
        )}

        {/* section 2 */}
        {secTwo === true && (
          <section className="bg-yellow-950 text-center py-[35rem] text-white flex flex-col items-center justify-center h-screen">
            {/* Main Heading */}

            <h1 className="text-5xl font-bold flex flex-col gap-1 mb-5">
              <span>Exchange Any Crypto</span>{" "}
              <span className="text-green-600">Instantly</span>{" "}
            </h1>

            {/* Swap Interface */}
            <div className="bg-black rounded-lg max-w-full w-[45%] p-6 shadow-lg flex flex-col gap-6 relative">
              {/* Bridge Div */}
              <div className="flex items-center bg-stone-900 rounded-xl">
                <span className="text-xl font-bold py-3 px-12 border-4 border-green-600 rounded-lg transition-all">
                  Bridge
                </span>
              </div>

              {/* Upper content div */}
              <div
                onClick={toggleOpenModal}
                className="flex items-center gap-3 bg-stone-900 w-full h-[8rem] rounded-xl text-white px-6 py-5 mt-4"
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
                <div className="flex justify-between items-center w-full">
                  <div className="text-left cursor-pointer">
                    {/* </div> */}

                    <>
                      <div className="text-2xl font-bold flex items-end">
                        {content.upperDiv.title} <IoMdArrowDropdown />
                        {/* open modal */}
                        {openModal && (
                          <div
                            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                            // Close modal on backdrop click
                          >
                            {/* <Show /> */}

                            <div
                              className="bg-stone-950  w-[37rem] h-[95vh] mx-auto my-10 py-5 rounded-xl"
                              // onClick={(e) => e.stopPropagation()}
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
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent modal close on input click
                                    console.log("Input clicked");
                                  }}
                                  type="text"
                                  className="w-[30rem] h-[4rem] rounded-xl bg-transparent border-4 border-white outline-green-800 border-opacity-70 
                                    text-white px-4 focus:border-green-700 focus:outline-none"
                                  placeholder="Search for a token..."
                                />
                              </div>
                              {/* Divider */}
                              <div className="h-[2px] bg-gray-500 w-[37rem] my-4"></div>
                              <div className="flex flex-col gap-3">
                                {/* doamnt div */}
                                <div
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default behavior
                                    e.stopPropagation(); // Stop propagation to avoid closing the modal
                                    console.log("Dormant div clicked");
                                  }}
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
                                  <div className="text-white  flex flex-col gap-1">
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/*MODAL clickable div 1 */}
                                <div
                                  onClick={handleSecOne}
                                  className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
                                  //  onClick={() => handleSectionChange(1)}
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
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/*MODAL clickable div 2 */}
                                <div
                                  onClick={handleSecTwo}
                                  className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
                                  //  onClick={() => handleSectionChange(1)}
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
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/*MODAL clickable div 4 */}
                                <div
                                  onClick={handleSecThree}
                                  className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
                                  //  onClick={() => handleSectionChange(1)}
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
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="flex items-center gap-2 font-medium">
                        {content.upperDiv.chain}{" "}
                        <span className="bg-green-600 text-sm p-1 rounded-md">
                          {content.upperDiv.token}
                        </span>
                      </p>
                    </>
                  </div>

                  <div className="text-right flex flex-col gap-3">
                    <span className="text-xl">{content.upperDiv.sendText}</span>
                    <p className="text-5xl font-bold">
                      {content.upperDiv.amount}
                    </p>
                  </div>
                </div>
              </div>

              {/* Centered Swap Icon */}
              <div
                onClick={handleSwap} // Handle swap click
                className="absolute top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer text-3xl bg-black"
              >
                <MdOutlineSwapVert />
              </div>

              {/* Lower content div */}
              <div className="flex items-center gap-3 bg-stone-900 w-full h-[8rem] rounded-xl text-white px-6 py-5 mt-4">
                <div className="">
                  <Image
                    src="/usdt_img.png"
                    alt="A description of the image"
                    width={50}
                    height={50}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <p className="text-2xl font-bold">
                      {content.lowerDiv.title}
                    </p>
                    <p className="flex items-center gap-2 font-medium">
                      {content.lowerDiv.chain}{" "}
                      <span className="bg-green-600 text-sm p-1 rounded-md">
                        {content.lowerDiv.token}
                      </span>
                    </p>
                  </div>

                  <div className="text-right flex flex-col gap-3">
                    <span className="text-xl">{content.lowerDiv.sendText}</span>
                    <p className="text-5xl font-bold">
                      {content.lowerDiv.amount}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 text-white text-lg font-medium py-2 px-6 rounded-lg shadow-md text-left mt-5 w-full">
                1USD = 1USDE
              </div>

              {/* Login/Signup Button */}
              <button className="bg-green-700 py-4 px-6 rounded-lg text-white text-xl font-semibold hover:bg-green-800 transition-transform transform hover:scale-105 mt-5 w-full">
                <Link href="/login">Bridge</Link>
              </button>
            </div>
          </section>
        )}

        {/* section 3 */}
        {secThree === true && (
          <section className="bg-blue-950 text-center py-[35rem] text-white flex flex-col items-center justify-center h-screen">
            {/* Main Heading */}

            <h1 className="text-5xl font-bold flex flex-col gap-1 mb-5">
              <span>Exchange Any Crypto</span>{" "}
              <span className="text-green-600">Instantly</span>{" "}
            </h1>

            {/* Swap Interface */}
            <div className="bg-black rounded-lg max-w-full w-[45%] p-6 shadow-lg flex flex-col gap-6 relative">
              {/* Bridge Div */}
              <div className="flex items-center bg-stone-900 rounded-xl">
                <span className="text-xl font-bold py-3 px-12 border-4 border-green-600 rounded-lg transition-all">
                  Bridge
                </span>
              </div>

              {/* Upper content div */}
              <div
                onClick={toggleOpenModal}
                className="flex items-center gap-3 bg-stone-900 w-full h-[8rem] rounded-xl text-white px-6 py-5 mt-4"
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
                <div className="flex justify-between items-center w-full">
                  <div className="text-left cursor-pointer">
                    {/* </div> */}

                    <>
                      <div className="text-2xl font-bold flex items-end">
                        {content.upperDiv.title} <IoMdArrowDropdown />
                        {/* open modal */}
                        {openModal && (
                          <div
                            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                            // Close modal on backdrop click
                          >
                            {/* <Show /> */}

                            <div
                              className="bg-stone-950  w-[37rem] h-[95vh] mx-auto my-10 py-5 rounded-xl"
                              // onClick={(e) => e.stopPropagation()}
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
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent modal close on input click
                                    console.log("Input clicked");
                                  }}
                                  type="text"
                                  className="w-[30rem] h-[4rem] rounded-xl bg-transparent border-4 border-white outline-green-800 border-opacity-70 
                               text-white px-4 focus:border-green-700 focus:outline-none"
                                  placeholder="Search for a token..."
                                />
                              </div>
                              {/* Divider */}
                              <div className="h-[2px] bg-gray-500 w-[37rem] my-4"></div>
                              <div className="flex flex-col gap-3">
                                {/* doamnt div */}
                                <div
                                  onClick={(e) => {
                                    e.preventDefault(); // Prevent default behavior
                                    e.stopPropagation(); // Stop propagation to avoid closing the modal
                                    console.log("Dormant div clicked");
                                  }}
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
                                  <div className="text-white  flex flex-col gap-1">
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/*MODAL clickable div 1 */}
                                <div
                                  onClick={handleSecOne}
                                  className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
                                  //  onClick={() => handleSectionChange(1)}
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
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/*MODAL clickable div 2 */}
                                <div
                                  onClick={handleSecTwo}
                                  className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
                                  //  onClick={() => handleSectionChange(1)}
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
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/*MODAL clickable div 4 */}
                                <div
                                  onClick={handleSecThree}
                                  className="flex items-center gap-5 hover:bg-stone-700 cursor-pointer py-5 px-4 w-[37rem]"
                                  //  onClick={() => handleSectionChange(1)}
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
                                    <span className="text-xl">USDT/Bep20</span>
                                    <span className="text-xl">
                                      Tether USD{" "}
                                      <span className="bg-yellow-500 text-sm p-1 rounded-lg">
                                        Bep20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="flex items-center gap-2 font-medium">
                        {content.upperDiv.chain}{" "}
                        <span className="bg-green-600 text-sm p-1 rounded-md">
                          {content.upperDiv.token}
                        </span>
                      </p>
                    </>
                  </div>

                  <div className="text-right flex flex-col gap-3">
                    <span className="text-xl">{content.upperDiv.sendText}</span>
                    <p className="text-5xl font-bold">
                      {content.upperDiv.amount}
                    </p>
                  </div>
                </div>
              </div>

              {/* Centered Swap Icon */}
              <div
                onClick={handleSwap} // Handle swap click
                className="absolute top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer text-3xl bg-black"
              >
                <MdOutlineSwapVert />
              </div>

              {/* Lower content div */}
              <div className="flex items-center gap-3 bg-stone-900 w-full h-[8rem] rounded-xl text-white px-6 py-5 mt-4">
                <div className="">
                  <Image
                    src="/usdt_img.png"
                    alt="A description of the image"
                    width={50}
                    height={50}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <p className="text-2xl font-bold">
                      {content.lowerDiv.title}
                    </p>
                    <p className="flex items-center gap-2 font-medium">
                      {content.lowerDiv.chain}{" "}
                      <span className="bg-green-600 text-sm p-1 rounded-md">
                        {content.lowerDiv.token}
                      </span>
                    </p>
                  </div>

                  <div className="text-right flex flex-col gap-3">
                    <span className="text-xl">{content.lowerDiv.sendText}</span>
                    <p className="text-5xl font-bold">
                      {content.lowerDiv.amount}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 text-white text-lg font-medium py-2 px-6 rounded-lg shadow-md text-left mt-5 w-full">
                1USD = 1USDE
              </div>

              {/* Login/Signup Button */}
              <button className="bg-green-700 py-4 px-6 rounded-lg text-white text-xl font-semibold hover:bg-green-800 transition-transform transform hover:scale-105 mt-5 w-full">
                <Link href="/login">Bridge</Link>
              </button>
            </div>
          </section>
        )}


<div className="flex flex-col items-center justify-center w-[90%]  mx-auto border border-slate-700 mb-[2rem] rounded-xl overflow-hidden">


<ul className="flex items-center gap-4 bg-stone-900 py-10 px-10 text-white w-full justify-between cursor-pointer ">
  <li>Type</li>
  <li>Amount</li>
  <li>To</li>
  <li>Date</li>
  <li>Time</li>
  <li>Status</li>
</ul>


<ul className="flex items-center gap-4 bg-black py-5 px-10 text-white w-full justify-between cursor-pointer hover:bg-stone-950 hover:px-4">
  <li className="py-2 px-3 rounded-full bg-gray-500">WITHDRAWAL</li>
  <li>4.60 EGAX</li>
  <li>joyeugene3@gmail.com</li>
  <li>11/11/2000</li>
  <li>0.03pm</li>
  <li  className="py-2 px-8 rounded-full bg-green-800 text-green-500">success</li>
</ul>


<div className="h-[1px] bg-slate-600 bg-opacity-50 w-full"></div>


<ul className="flex items-center gap-4 bg-black py-5 px-10 text-white w-full justify-between cursor-pointer hover:bg-stone-950 hover:px-4">
  <li className="py-2 px-8 rounded-full bg-gray-500">CREDIT</li>
  <li>4.60 USDT</li>
  <li>joyeugene3@gmail.com</li>
  <li>11/10/2000</li>
  <li>0.06pm</li>
  <li  className="py-2 px-8 rounded-full bg-green-800 text-green-500">success</li>
</ul>

<div className="h-[1px] bg-slate-600 bg-opacity-50 w-full"></div>


<ul className="flex items-center gap-4 bg-black py-5 px-10 text-white w-full justify-between cursor-pointer hover:bg-stone-950 hover:px-4">
  <li className="py-2 px-8 rounded-full bg-gray-500">SWAP</li>
  <li>4.60 EGAX</li>
  <li>joyeugene3@gmail.com</li>
  <li>11/11/2000</li>
  <li>0.03pm</li>
  <li  className="py-2 px-8 rounded-full bg-green-800 text-green-500">success</li>
</ul>

</div>

<div className="flex items-center gap-5 text-center justify-center text-white pb-24">
  <p className="px-3 py-2 rounded bg-stone-400 ">Prev</p>
  <p className="px-3 py-2 rounded bg-green-400 ">1</p>
  <p className="px-3 py-2 rounded bg-stone-400 ">Next</p>
</div>

      </div>


    </>
  );
};

export default Dashboard;

// chat  code

// "use client";
// import { useState } from "react";

// export default function Dashboard() {
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");
//   const [amount, setAmount] = useState(""); // Start as an empty string
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const currencies = ["USD", "EUR", "GBP", "BTC", "ETH"]; // Example currencies

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleCurrencyChange = (currency) => {
//     setSelectedCurrency(currency);
//     setIsModalOpen(false); // Close modal when currency is selected
//   };

//   const formatAmount = (value) => {
//     // Ensure value is always in the format of 0.00
//     if (isNaN(value) || value === "") return "";
//     return parseFloat(value).toFixed(2);
//   };

//   const handleAmountChange = (e) => {
//     const rawValue = e.target.value.replace(/[^\d.]/g, ""); // Allow only numbers and a single dot
//     setAmount(rawValue);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

//       {/* Currency and Amount Input */}
//       <div className="flex items-center gap-4 mb-6">
//         <button
//           onClick={toggleModal}
//           className="flex items-center justify-between px-4 py-2 bg-gray-200 rounded cursor-pointer"
//         >
//           <span className="font-semibold">{selectedCurrency}</span>
//           <span className="ml-2 text-sm text-gray-500">▼</span>
//         </button>
//         <input
//           type="text"
//           value={amount === "" ? "" : formatAmount(amount)}
//           onChange={handleAmountChange}
//           placeholder="0.00"
//           className="px-4 py-2 border rounded w-fit text-right"
//         />
//       </div>

//       <button
//         onClick={() => window.open("https://egoswap.io/", "_blank")}
//         className="px-4 py-2 bg-black text-white rounded"
//       >
//         Bridge
//       </button>

//       {/* Currency Selection Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded shadow-lg">
//             <h2 className="text-lg font-bold mb-4">Select Currency</h2>
//             {currencies.map((currency) => (
//               <div
//                 key={currency}
//                 className="p-4 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 mb-2"
//                 onClick={() => handleCurrencyChange(currency)}
//               >
//                 {currency}
//               </div>
//             ))}
//             <button
//               onClick={toggleModal}
//               className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

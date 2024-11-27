// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { MdOutlineSwapVert } from "react-icons/md"; // Importing the swap icon
// import { IoMdArrowDropdown } from "react-icons/io";
// import Image from "next/image";
// import Show from "./Show";

// const Dashboard = () => {
//   const [content, setContent] = useState({
//     upperDiv: {
//       title: "USDT/BEP20",
//       chain: "BINANCE",
//       token: "BEP20",
//       amount: "0.00",
//       sendText: "You send", // Default to "You send"
//     },
//     lowerDiv: {
//       title: "USDT/EGO20",
//       chain: "EGOCHAIN",
//       token: "EGO20",
//       amount: "0.00",
//       sendText: "You receive", // Default to "You receive"
//     },
//   });

//   // Handle the content swap click (content transfer from one div to another)
//   const handleSwap = () => {
//     setContent((prevState) => ({
//       upperDiv: {
//         ...prevState.lowerDiv,
//       },
//       lowerDiv: {
//         ...prevState.upperDiv,
//       },
//     }));
//   };


//   return (
//     <>
//     <div>
   
   
//     <div className="bg-green-950 text-center py-[35rem] text-white flex flex-col items-center justify-center h-screen">
//       {/* Main Heading */}
      
//       <h1 className="text-5xl font-bold flex flex-col gap-1 mb-5">
//         <span>Exchange Any Crypto</span>{" "}
//         <span className="text-green-600">Instantly</span>{" "}
//       </h1>

//       {/* Swap Interface */}
//       <div className="bg-black rounded-lg max-w-full w-[45%] p-6 shadow-lg flex flex-col gap-6 relative">
       
//         {/* Bridge Div */}
//         <div className="flex items-center bg-stone-900 rounded-xl">
//           <span className="text-xl font-bold py-3 px-12 border-4 border-green-600 rounded-lg transition-all">
//             Bridge
//           </span>
//         </div>

//         {/* Upper content div */}
//         <div className="flex items-center gap-3 bg-stone-900 w-full h-[8rem] rounded-xl text-white px-6 py-5 mt-4">
//           <div className="">
//             <Image
//               src="/usdt_img.png"
//               alt="A description of the image"
//               width={50}
//               height={50}
//               className="rounded-xl shadow-2xl"
//               />
//           </div>
//           <div className="flex justify-between items-center w-full">
//             <div className="text-left cursor-pointer">
            
//                 {/* <div
//                   className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//                  // Close modal on backdrop click
//                   >
//                   <Show />
//                 </div> */}

//               {/* </div> */}

//               <>
//                 <p className="text-2xl font-bold flex items-end">
//                   {content.upperDiv.title} <IoMdArrowDropdown />
//                 </p>
//                 <p className="flex items-center gap-2 font-medium">
//                   {content.upperDiv.chain}{" "}
//                   <span className="bg-green-600 text-sm p-1 rounded-md">
//                     {content.upperDiv.token}
//                   </span>
//                 </p>
//               </>
//             </div>

//             <div className="text-right flex flex-col gap-3">
//               <span className="text-xl">{content.upperDiv.sendText}</span>
//               <p className="text-5xl font-bold">{content.upperDiv.amount}</p>
//             </div>
//           </div>
//         </div>

//         {/* Centered Swap Icon */}
//         <div
//           onClick={handleSwap} // Handle swap click
//           className="absolute top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer text-3xl bg-black"
//           >
//           <MdOutlineSwapVert />
//         </div>

//         {/* Lower content div */}
//         <div className="flex items-center gap-3 bg-stone-900 w-full h-[8rem] rounded-xl text-white px-6 py-5 mt-4">
//           <div className="">
//             <Image
//               src="/usdt_img.png"
//               alt="A description of the image"
//               width={50}
//               height={50}
//               className="rounded-xl shadow-2xl"
//               />
//           </div>
//           <div className="flex justify-between items-center w-full">
//             <div className="text-left">
//               <p className="text-2xl font-bold">{content.lowerDiv.title}</p>
//               <p className="flex items-center gap-2 font-medium">
//                 {content.lowerDiv.chain}{" "}
//                 <span className="bg-green-600 text-sm p-1 rounded-md">
//                   {content.lowerDiv.token}
//                 </span>
//               </p>
//             </div>

//             <div className="text-right flex flex-col gap-3">
//               <span className="text-xl">{content.lowerDiv.sendText}</span>
//               <p className="text-5xl font-bold">{content.lowerDiv.amount}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-stone-900 text-white text-lg font-medium py-2 px-6 rounded-lg shadow-md text-left mt-5 w-full">
//           1USD = 1USDE
//         </div>

//         {/* Login/Signup Button */}
//         <button className="bg-green-700 py-4 px-6 rounded-lg text-white text-xl font-semibold hover:bg-green-800 transition-transform transform hover:scale-105 mt-5 w-full">
//           <Link href="/login">Bridge</Link>
//         </button>
//       </div>
//     </div>
    

//               </div>
//     </>
//   );
// };

// export default Dashboard;


















































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

  // const [showDiv, setShowDiv] = useState("");
  // const toggleShowDiv = () => {
  //   setShowDiv(!showDiv);
  // };

  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [showSec1, setShowSec1]= useState(true)
  const [showSec2, setShowSec2]= useState(false)
  const [showSec3, setShowSec3]= useState(false)

  return (
    <>
    <div>
    <Show
    setShowSec1={setShowSec1}
    setShowSec2={setShowSec2}
    setShowSec3={setShowSec3}
    />
    {showSec1 && (
    <div className="bg-green-950 text-center py-[35rem] text-white flex flex-col items-center justify-center h-screen">
      {/* Main Heading */}
      <h1 className="bg-red-800">xdtcfgvyubhjnilomkcjbhgvgvbhjnkbgfghj</h1>
      
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
            <div onClick={toggleModal} className="text-left cursor-pointer">
              {showModal && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                  onClick={() => setShowModal(false)} // Close modal on backdrop click
                  >
                  <Show closeModal={() => setShowModal(false)} />
                </div>
              )}
              {/* </div> */}

              <>
                <p className="text-2xl font-bold flex items-end">
                  {content.upperDiv.title} <IoMdArrowDropdown />
                </p>
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
              <p className="text-5xl font-bold">{content.upperDiv.amount}</p>
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
              <p className="text-2xl font-bold">{content.lowerDiv.title}</p>
              <p className="flex items-center gap-2 font-medium">
                {content.lowerDiv.chain}{" "}
                <span className="bg-green-600 text-sm p-1 rounded-md">
                  {content.lowerDiv.token}
                </span>
              </p>
            </div>

            <div className="text-right flex flex-col gap-3">
              <span className="text-xl">{content.lowerDiv.sendText}</span>
              <p className="text-5xl font-bold">{content.lowerDiv.amount}</p>
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
    </div>
    )}

{showSec2 && (
    <div className="bg-green-950 text-center py-[35rem] text-white flex flex-col items-center justify-center h-screen">
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
            <div onClick={toggleModal} className="text-left cursor-pointer">
              {showModal && (
                <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={() => setShowModal(false)} // Close modal on backdrop click
                >
                  <Show closeModal={() => setShowModal(false)} />
                </div>
              )}
              {/* </div> */}

              <>
                <p className="text-2xl font-bold flex items-end">
                  {content.upperDiv.title} <IoMdArrowDropdown />
                </p>
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
              <p className="text-5xl font-bold">{content.upperDiv.amount}</p>
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
              <p className="text-2xl font-bold">{content.lowerDiv.title}</p>
              <p className="flex items-center gap-2 font-medium">
                {content.lowerDiv.chain}{" "}
                <span className="bg-green-600 text-sm p-1 rounded-md">
                  {content.lowerDiv.token}
                </span>
              </p>
            </div>

            <div className="text-right flex flex-col gap-3">
              <span className="text-xl">{content.lowerDiv.sendText}</span>
              <p className="text-5xl font-bold">{content.lowerDiv.amount}</p>
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
    </div>
     )}
     

     {showSec3 && (
      <div className="bg-green-950 text-center py-[35rem] text-white flex flex-col items-center justify-center h-screen">
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
            <div onClick={toggleModal} className="text-left cursor-pointer">
              {showModal && (
                <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={() => setShowModal(false)} // Close modal on backdrop click
                >
                  <Show closeModal={() => setShowModal(false)} />
                </div>
              )}
              {/* </div> */}

              <>
                <p className="text-2xl font-bold flex items-end">
                  {content.upperDiv.title} <IoMdArrowDropdown />
                </p>
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
              <p className="text-5xl font-bold">{content.upperDiv.amount}</p>
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
              <p className="text-2xl font-bold">{content.lowerDiv.title}</p>
              <p className="flex items-center gap-2 font-medium">
                {content.lowerDiv.chain}{" "}
                <span className="bg-green-600 text-sm p-1 rounded-md">
                  {content.lowerDiv.token}
                </span>
              </p>
            </div>

            <div className="text-right flex flex-col gap-3">
              <span className="text-xl">{content.lowerDiv.sendText}</span>
              <p className="text-5xl font-bold">{content.lowerDiv.amount}</p>
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


    </div>
    )}
              </div>
    </>
  );
};

export default Dashboard;







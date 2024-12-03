"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoMdTime } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

const Payment = () => {
    const [timeLeft, setTimeLeft] = useState(1 * 60 * 60 + 47 * 60 + 30); // Total seconds for 1hr 47min 30sec
    const transactionId = "67A0PMFU0Y";
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)); // Decrement timer
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
  
    // Format time into hr:mm:ss
    const formatTime = (seconds) => {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hrs}hr : ${mins}mm : ${secs}ss`;
    };

    const [showAbortModal, setShowAbortModal] = useState(false); // State to control Abort modal visibility
  const [showProceedModal, setShowProceedModal] = useState(false); // State to control Proceed modal visibility
  const [loading, setLoading] = useState(false); // State to control the loading state for Proceed
  const router = useRouter();

  // Show the Abort modal when "Abort" is clicked
  const handleAbortClick = () => {
    setShowAbortModal(true);
  };

  // Handle "No Cancel" in Abort modal (close modal)
  const handleNoClick = () => {
    setShowAbortModal(false);
  };

  // Handle "Yes Abort" in Abort modal (navigate to Bridge)
  const handleYesClick = () => {
    // setShowAbortModal(false);
    setLoading(true); // Start loading state
    router.push("/dashboard"); // Navigate to the bridge page
  };

  // Show the Proceed modal when "Proceed" is clicked
  const handleProceedClick = () => {
    setShowProceedModal(true);
  };

  // Handle "Back" in Proceed modal (close modal)
  const handleBackClick = () => {
    setShowProceedModal(false);
  };

  // Handle "Proceed" in Proceed modal (navigate to Bridging)
  const handleProceedConfirm = () => {
    setLoading(true); // Start loading state
    // setShowProceedModal(false);
    router.push("/bridging"); // Navigate to the bridging page
  };

//   setTimeout(() => {
//     setLoading(false); // Stop loading after 2 seconds (you can adjust this based on your real process)
//     router.push("/bridging"); // Navigate to the bridging page
//   }, 1000); // Simulate a loading delay



  return (
    <>
    <div className="h-[1px] bg-stone-900 bg-opacity-50 w-full"></div>
    <div
      className="bg-gradient-to-b from-stone-900 via-green-900 to-zinc-900
text-center py-[5rem] text-white flex items-start gap-20 px-[10rem] justify-center"
    >
      <div className="flex gap-20">
        {/* first div */}
        <div className="bg-black  h-[30%] rounded-lg border border-gray-600">
          <div className=" flex flex-col gap-5 p-5 w-[23rem]">
            <p className="font-bold text-2xl text-left flex-wrap">
              Provide address information to create a transaction
            </p>
            <hr />
            <p className="bg-stone-600 py-5 rounded-lg flex flex-col text-left p-5 w-[20rem]">
              <span className="text-xl font-bold">Bridging pair </span>
              <span className="font-semibold text-xl text-gray-300">
                Set the preferred exchange pair.
              </span>
            </p>
            <p className="bg-stone-600 py-5 rounded-lg flex flex-col text-left p-5 w-[20rem]">
              <span className="text-xl font-bold">Wallet address</span>
              <span className="font-semibold text-xl text-gray-300">
                Fill in the crypto wallet address details.
              </span>
            </p>
            <p className="bg-stone-600 py-5 rounded-lg flex flex-col text-left p-5 w-[20rem]">
              <span className="text-xl font-bold">Payments</span>
              <span className="font-semibold text-xl text-gray-300">
                Deposit the amount required for the exchange.
              </span>
            </p>
            <p className="bg-stone-600 py-5 rounded-lg flex flex-col text-left p-5 w-[20rem]">
              <span className="text-xl font-bold">Bridging</span>
              <span className="font-semibold text-xl text-gray-300">
                Wait for your transaction to be completed.
              </span>
            </p>
          </div>
        </div>

        {/* second div */}
        <div className="flex flex-col gap-4  ">
          <div className="bg-black p-5 py-2 pb-10 w-[45rem] h-[70%] rounded-lg border border-gray-600">
          <h1 className="text-4xl font-bold mb-4 text-left py-5">Send funds to the address below</h1>
          <hr className='py-6'/>

          <div className='flex justify-between'>
      <div className="mb-4 text-left flex flex-col gap-10">
        <p className="font-bold">Amount</p>
        <div>

        <p>Egoswap address</p>
        <p className="italic text-gray-400">(USDT EGOCHAIN)</p>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-6 text-left">
        <div className='flex items-center gap-2'>
      <p className="text-white text-lg">1.00 USDT</p>
        <p className="font-bold py-1 px-2 bg-green-500 rounded">Ego20</p> 
        </div>   
        <p className="font-bold">0x3fED131Cd4eB56905abc3125789B126c51A2f1a4</p>
        <p>blockchain: <span className="text-green-500">EGOCHAIN</span></p>
       
      <button className="bg-white w-[10rem] py-3 px-4 rounded-lg text-black font-semibold text-xl">
        Copy Address
      </button>
      </div>
      </div>

          </div>
          {/* <div className="bg-black p-5 rounded-lg w-[45rem] flex justify-between items-center px-10">
      <button className="bg-red-600 text-white py-3 px-10 rounded-lg text-lg font-bold">
        Abort
      </button>
      <button className="bg-green-600 text-white py-3 px-10 rounded-lg text-lg font-bold">
        Proceed
      </button>
    </div> */}
  <div className="bg-black p-5 rounded-lg w-[45rem] flex justify-between items-center px-10 border border-gray-600">
        <button
          onClick={handleAbortClick}
          className="bg-red-600 text-white py-5 px-10 rounded-lg text-lg font-bold w-[19rem]"
        >
          Abort
        </button>
        <button
          onClick={handleProceedClick}
          className="bg-green-600 text-white py-5 px-10 rounded-lg text-lg font-bold w-[19rem]"
        >
          Proceed
        </button>
      </div>

      {/* Abort Modal */}
      {showAbortModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-gray-950 p-6 rounded-lg w-[30rem] h-[35%] border border-gray-500">
            <h2 className="text-4xl font-bold mb-4">Abort Transaction</h2>
            <p className="text-2xl mb-6 text-gray-400">
              Are you sure you want to abort this transaction?
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleNoClick}
                className="bg-red-600 text-white py-5 px-6 rounded-lg text-lg font-bold w-[12rem]"
              >
                No Cancel
              </button>
              <button
                onClick={handleYesClick}
                className="bg-green-600 text-white py-5 px-6 rounded-lg text-lg font-bold w-[12rem]"
                disabled={loading} // Disable button while loading
              >
                 {loading ? (
                  <span>Loading...</span> // Show loading text
                ) : (
                  "Yes Abort"
                )}
                
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Proceed Modal */}
      {showProceedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-950 p-6 rounded-lg w-[30rem] h-[35%] border border-gray-500">
            <h2 className="text-3xl font-bold mb-4">Proceed</h2>
            <p className="text-2xl mb-6 text-gray-400">
              Are you sure you have confirmed the deposit of 1.00 USDT (Ego20) in 0x3fED13...bc312?
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleBackClick}
                className="bg-red-600 text-white py-5 px-6 rounded-lg text-lg font-bold w-[12rem]"
              >
                Back
              </button>
              <button
                onClick={handleProceedConfirm}
                className="bg-green-600 text-white py-5 px-6 rounded-lg text-lg font-bold w-[12rem]"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <span>Loading...</span> // Show loading text
                ) : (
                  "Proceed"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

        </div>

      </div>

      {/* third div */}
      <div className='flex flex-col gap-6'>
      <div className="bg-black text-white p-5 rounded-lg w-[23rem] flex flex-col  gap-4 text-left">
      <div className="text-xl font-bold text-left text-green-500 flex items-center gap-2"><IoMdTime className='text-white' /> {formatTime(timeLeft)}</div>
      <h1 className="text-xl text-gray-500 font-bold text-left">Time left to send 1 USDT/Ego20</h1>
      <div className="text-lg text-left">
        <div className='flex items-center gap-2'>
        <span className="text-left flex flex-col gap-3 font-bold text-xl">{transactionId} </span>
        <span><MdContentCopy /></span>
        </div>

        <span className="text-left text-gray-500">Transaction ID:</span> 
      </div>
    </div>

      <div className="bg-black rounded-lg border border-gray-600">
        <div className=" flex flex-col gap-5 p-5 w-[23rem] h-[60%] ">
          <p className="font-bold text-2xl text-left flex-wrap">
            Transaction details
          </p>
          <hr />
          <p className="rounded-lg flex flex-col text-left w-[20rem]">
            <span className="text-lg text-gray-400 ">You send</span>
            <span className="font-semibold text-lg text-white ">
              USDT{" "}
              <span className="bg-green-400 rounded-md py-1 px-1 text-sm">
                Ego20
              </span>
            </span>
          </p>
          <p className="rounded-lg flex flex-col text-left  w-[20rem]">
            <span className="text-lg text-gray-400 ">Exchange rate</span>
            <span className="font-semibold text-lg text-white ">
              1 USDT=1USDT
            </span>
          </p>
          <p className="rounded-lg flex flex-col text-left  w-[20rem]">
            <span className="text-lg text-gray-400 ">Bridge fee 1%</span>
            <span className="font-semibold text-lg text-white ">
              0 USDT{" "}
              <span className="bg-yellow-400 rounded-md py-1 px-1 text-sm">
                Bep20
              </span>
            </span>
          </p>
          <hr />
          <p className="rounded-lg flex flex-col text-left w-[20rem]">
            <span className="text-lg text-gray-400 ">You get</span>
            <span className="font-semibold text-lg text-white ">
              USDT{" "}
              <span className="bg-yellow-400 rounded-md py-1 px-1 text-sm">
                <span className="bg-yellow-400 rounded-md py-1 px-1 text-sm">
                  Bep20
                </span>
              </span>
            </span>
          </p>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default Payment
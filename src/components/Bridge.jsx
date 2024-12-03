"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Bridge = () => {
    const [isChecked, setIsChecked] = useState(false); // Checkbox state
    const [checkBox, setCheckBox] = useState(""); // Checkbox value
    const [checkBoxErr, setCheckBoxErr] = useState("");

    const [walletAddress, setWalletAddress] = useState("");
    // const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();
  
    const handleProceed = () => {
      // Redirect to checkout page
      router.push("/checkout");
    };

    const isProceedDisabled = !walletAddress || !isChecked;

    
  return (
    <>
      <div className="h-[1px] bg-stone-900 bg-opacity-50 w-full"></div>
      <div
        className="bg-gradient-to-b from-stone-900 via-green-900 to-zinc-900
    text-center py-[5rem] text-white flex items-start gap-20 px-[10rem] justify-center"
      >
        <div className="flex gap-20">
          {/* first div */}
          <div className="bg-black  h-[30%] rounded-lg">
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
          <div className="flex flex-col gap-4">
            <div className="bg-black p-5 py-2 pb-10 w-[40rem] h-[60%] rounded-lg">
              <div className=" flex items-center justify-between gap-5 p-5 w-[37rem] bg-stone-600 rounded-lg my-10">
                <div className="flex flex-col gap-3 text-left">
                  <span className="text-left">USDT/Ego20</span>
                  <span className="text-left">
                    EGOCHAIN <span>Ego20</span>
                  </span>
                </div>
              </div>

              <div className=" flex items-center justify-between gap-5 p-5 w-[37rem] bg-stone-600 rounded-lg">
                <div className="flex flex-col gap-3 text-left">
                  <span className="text-left">USDT/Ego20</span>
                  <span className="text-left">
                    EGOCHAIN <span>Ego20</span>
                  </span>
                </div>
                <div className="flex flex-col gap-3 text-right">
                  <p>You Send</p>
                  <p typeof="number">0.00</p>
                </div>
              </div>

              <div className=" p-3 w-[37rem] bg-stone-600 rounded-lg mt-6 text-left">
                <p>1 USDE=1USD</p>
              </div>
            </div>

            <div
              className=" px-3 py-5 pt-2 h-[5rem] w-[40rem] bg-black rounded-lg mt-6 text-left
            flex items-center justify-between"
            >
              <p>Bridge Fees</p>
              <p className="flex items-center gap-3">
                <span>0 USDT</span>
                <span className="bg-yellow-400 rounded-md py-1 px-1 text-sm">
                  Bep20
                </span>
              </p>
            </div>

            {/* <div className="bg-black p-5 py-2 pb-10 w-[40rem] h-[60%] rounded-lg">
              <h1 className="py-4 text-3xl text-green-600 font-bold">Destination wallet address</h1>
              <hr className="pb-3"/>
<div className=" flex flex-col gap-5">
  

              <p className="text-left text-xl font-bold">Enter your USDT Bep20 wallet address</p>
              <input
                type="text"
                className="w-[30rem] h-[4rem] rounded-xl bg-transparent border-4 border-white outline-green-800 border-opacity-70 
                                                text-white px-4 focus:border-green-700 focus:outline-none"
                placeholder="Recipient USDT Bep20 wallet address..."
              />

               
            <div className="flex items-center mb-6">
              <div
                className={`w-7 h-7 flex items-center justify-center border-2 cursor-pointer transition-all rounded-md ${
                  isChecked
                    ? "bg-green-600 border-none"
                    : "bg-black border-white"
                }`}
                onClick={() => {
                  setIsChecked(!isChecked);
                  setCheckBox(!isChecked ? "checked" : "");
                  setCheckBoxErr("");
                }}
              >
                {isChecked && (
                  <div className="text-white font-bold text-lg leading-none">
                    ✔
                  </div>
                )}
              </div>
              <label
                onClick={() => {
                  setIsChecked(!isChecked);
                  setCheckBox(!isChecked ? "checked" : "");
                  setCheckBoxErr("");
                }}
                className="ml-3 text-lg font-semibold mt-3 text-white cursor-pointer"
              >
               I agree with Terms of Use, Privacy Policy.
              </label>
            </div>

              <div className="flex items-center gap-10 justify-between">
              <button className="bg-red-500 py-5 px-3 w-[124rem] rounded-lg text-lg font-bold">Back Home</button>
              <button className="bg-green-500 py-5 px-3 w-[124rem] rounded-lg text-lg font-bold">Proceed</button>
              </div>
              </div>

            </div> */}

<div className="bg-black p-5 py-2 pb-10 w-[40rem] h-[60%] rounded-lg">
      <h1 className="py-4 text-3xl text-green-600 font-bold">Destination Wallet Address</h1>
      <hr className="pb-3" />
      <div className="flex flex-col gap-5">
        {/* Input Field */}
        <p className="text-left text-xl font-bold">Enter your USDT BEP20 wallet address</p>
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="w-full h-[4rem] rounded-xl bg-transparent border-4 border-white outline-green-800 border-opacity-70 text-white px-4 focus:border-green-700 focus:outline-none"
          placeholder="Recipient USDT BEP20 wallet address..."
        />

        {/* Checkbox */}
        <div className="flex items-center mb-6">
          <div
            className={`w-7 h-7 flex items-center justify-center border-2 cursor-pointer transition-all rounded-md ${
              isChecked ? "bg-green-600 border-none" : "bg-black border-white"
            }`}
            onClick={() => setIsChecked(!isChecked)}
          >
            {isChecked && (
              <div className="text-white font-bold text-lg leading-none">✔</div>
            )}
          </div>
          <label
            onClick={() => setIsChecked(!isChecked)}
            className="ml-3 text-lg font-semibold text-white cursor-pointer"
          >
            I agree with Terms of Use, Privacy Policy.
          </label>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            className="bg-red-500 py-3 px-6 w-full rounded-lg text-lg font-bold"
            onClick={() => router.push("/")} // Redirect back home
          >
            Back Home
          </button>
          <button
            className={`py-3 px-6 w-full rounded-lg text-lg font-bold ${
              isProceedDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500"
            }`}
            onClick={handleProceed}
            disabled={isProceedDisabled}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>

            
          </div>
        </div>

        {/* third div */}
        <div className="bg-black rounded-lg">
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
    </>
  );
};

export default Bridge;

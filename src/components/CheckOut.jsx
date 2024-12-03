"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const CheckOut = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // Goes back to the previous page
  };

  const [loading, setLoading] = useState(false);
  

  const handlePaymentClick = async () => {
    setLoading(true); // Show loading state
    // Simulate a delay for loading (e.g., API call)
    setTimeout(() => {
      setLoading(false); // Hide loading state
      router.push("/payment"); // Navigate to payment page
    }, 1000); // Adjust delay as needed
  };

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
          <div className="flex flex-col gap-4 ">
            <div className="bg-black p-5 py-2 pb-10 w-[45rem] h-[80%] rounded-lg border border-gray-600">
              <div className="flex items-center justify-between px-10 py-10">
                <p className="text-3xl font-bold">Checkout</p>
                <p className="flex items-center gap-3 bg-gray-400 py-3 px-3 rounded-lg cursor-pointer text-xl font-bold"
                onClick={handleBackClick}>
                  <FaArrowLeft /> Back
                </p>
              </div>

              <div className="flex items-center justify-between text-left px-10">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl text-gray-500">You send</span>
                  <div  className="flex items-center gap-3">
                  <span className=" text-2xl font-bold">
                    0.99 USDT{" "}
                  </span>
                  <span className="bg-green-500  px-1 rounded">Ego20</span>
                  </div>
                  <span className="text-green-600">Blockchain: EGOCHAIN</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-2xl text-gray-500">You get</span>
                  <div  className="flex items-center gap-3">
                  <span className=" text-2xl font-bold">
                    0.99 USDT{" "}
                  </span>
                  <span className="bg-yellow-500  px-1 rounded">Ego20</span>
                  </div>
                  <span className="text-green-600">Blockchain: EGOCHAIN</span>
                </div>
              </div>
              <hr className="my-10" />

              <div className="flex justify-between items-start text-left px-10">
  <div className="flex flex-col gap-10">
    <div className="flex flex-col">
      <span className="text-gray-500 text-xl font-semibold">Bridge fee</span>
      <div className="flex items-center gap-2">
      <span className="text-2xl font-bold">
        0.01 USDT</span>
        <span className="px-1 bg-yellow-600 rounded">Bep20</span>
      </div>
    
      <span className="text-lg text-gray-400 ">
        The exchange fee is already included in the <br />
        displayed amount {"you’ll"} get
      </span>
    </div>
    <div className="text-2xl text-gray-400 font-semibold">Recipient address</div>
  </div>

  <div className="flex flex-col items-start">
    <span className="text-xl text-gray-400 ">Exchange rate</span>
    <span className="text-2xl text-white font-bold">1 USDT = 1 USDT</span>
  </div>
</div>

            </div>

            <div className="bg-black p-5 py-2 w-[45rem] h-[17%] rounded-lg flex justify-center items-center border border-gray-600">
      <button
        className={`py-3 px-10 rounded-lg w-[36rem] h-[4rem] text-lg font-bold ${
          loading ? "bg-gray-500" : "bg-green-600 text-white"
        }`}
        onClick={handlePaymentClick}
        disabled={loading} // Disable button during loading
      >
        {loading ? "Loading..." : "Confirm & Make Payment"}
      </button>
    </div>
          </div>
        </div>

        {/* third div */}
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
    </>
  );
};

export default CheckOut;

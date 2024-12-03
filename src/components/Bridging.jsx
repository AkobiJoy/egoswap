"use client";
import React, { useEffect, useState } from "react";
import { FaToggleOff } from "react-icons/fa";
import { BsBoxArrowDown } from "react-icons/bs";

const Bridging = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            //   setProgress((prev) => (prev < 100 ? prev + 1 : 100));
            setProgress((prev) => (prev < 100 ? prev + 1 : 0));
        }, 1500); // Increase progress by 10% every 0.5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <>
            <div className="h-[1px] bg-stone-900 bg-opacity-50 w-full"></div>
            <div
                className="bg-gradient-to-b from-stone-900 via-green-900 to-zinc-900
  text-center py-[5rem] text-white flex items-start gap-12 px-[10rem] justify-center"
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
                        <div className="bg-black p-5 py-10 pb-10 w-[50rem] h-[80%] rounded-lg px-10">
                            <p className="text-left text-3xl font-bold px-10">Bridging</p>
                            <div className="p-5">
                                {/* Progress Bar */}
                                <div className="w-full bg-white h-4 rounded-lg overflow-hidden">
                                    <div
                                        className="bg-green-600 h-full"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                                <p className="mt-2 text-sm">{progress}% Complete</p>
                            </div>

                            <hr />

                            <div>
                                <div className="flex items-center gap-4 py-4">
                                    <span className="loading loading-spinner loading-lg text-green-600"></span>
                                    <span>Confirmation in progress</span>
                                </div>
                                <p className="text-xl text-gray-300 font-semibold text-left">
                                    Once USDT(Bep20) is confirmed in the blockchain, we'll start
                                    bridging it to USDT(Ego20)
                                </p>
                                <div className="flex flex-col">
                                    <p className="flex items-center gap-2 text-left pt-9 text-2xl text-white font-bold">
                                        <FaToggleOff className="text-3xl text-white font-bold" /> Bridging USDT (Bep20) to USDT (Ego20) </p>
                                    <span className="text-left text-gray-300 font-semibold text-xl">The process
                                        will take a few minutes please wait</span>
                                </div>
                                <p className="flex items-center gap-2 text-left pt-9  text-2xl text-white font-bold">
                                <BsBoxArrowDown className="text-3xl text-white font-bold" /> Sending funds to your wallet</p>
                                <p className="text-left text-lg leading-6 text-gray-300 font-semibold">
                                    Once the transaction is completed, your USDT (Bep20) will be
                                    sent to your crypto wallet. Typically, it takes a few minutes
                                    for your funds to show up.
                                </p>
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

export default Bridging;

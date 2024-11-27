"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import Image from "next/image";

const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false); // Checkbox state
  const [showPassword, setShowPassword] = useState(false); // Show/hide password
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [checkBox, setCheckBox] = useState(""); // Checkbox value
  const [loading, setLoading] = useState(false); // Loader state
  const [showSuccess, setShowSuccess] = useState(false); // Success modal state
  // Error states
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [checkBoxErr, setCheckBoxErr] = useState("");

  const router = useRouter(); // Initialize useRouter

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Reset errors
    setEmailErr("");
    setPasswordErr("");
    setCheckBoxErr("");

    // Validation checks
    let formIsValid = true;
    if (!email) {
      setEmailErr("Email not entered!");
      formIsValid = false;
    } else if (!password) {
      setPasswordErr("Password not entered!");
      formIsValid = false;
    } else if (!isChecked) {
      setCheckBoxErr("Checkbox must be checked!");
      formIsValid = false;
    }

    if (!formIsValid) return;

    // Simulate login and redirect
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      // router.push("/dashboard"); // Redirect to the dashboard
    }, 1000);
  };

  const handleContinue = () => {
    router.push("/dashboard"); // Redirect to the dashboard
  };

  return (
    
    <div className="h-screen bg-green-950 text-white flex flex-col items-center justify-center">
    {/* <div className="h-screen w-full bg-white blur-2xl top-0 left-0 z-20 absolute"></div> */}
        {/* Logo */}
        <div className="mb-5">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
        </div>

        {/* Login Container */}
        <div className="bg-black rounded-lg shadow-lg w-[90%] max-w-[44rem] p-8">
          <form onSubmit={submitHandler} className="flex flex-col gap-5">
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailErr("");
                }}
                value={email}
                type="email"
                id="email"
                className={`w-full px-4 py-4 bg-white text-black rounded-lg focus:outline-none ${
                  emailErr
                    ? "placeholder-red-600 border-2 italic border-red-500"
                    : ""
                }`}
                placeholder={emailErr || "Enter your email"}
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordErr("");
                }}
                value={password}
                type={showPassword ? "text" : "password"}
                id="password"
                className={`w-full px-4 py-4 bg-white text-black rounded-lg focus:outline-none ${
                  passwordErr
                    ? "placeholder-red-600 border-2 italic border-red-500"
                    : ""
                }`}
                placeholder={passwordErr || "Enter your password"}
              />
              <div
                onClick={toggleShow}
                className="absolute top-[70%] right-3 transform -translate-y-1/2 flex items-center cursor-pointer text-white bg-green-600 py-2 px-2 rounded-md font-bold"
              >
                {showPassword ? <GoEyeClosed /> : <GoEye />}
              </div>
            </div>

            {/* Checkbox */}
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
                className="ml-3 text-lg font-semibold text-white cursor-pointer"
              >
                Remember Me
              </label>
            </div>
            {checkBoxErr && (
              <p className="text-red-500 italic text-sm ">{checkBoxErr}</p>
            )}

            {/* Submit Button */}
            <button
  type="submit"
  className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
>
  {loading ? (
    <div className="loader px-1 py-2 text-xs text-center text-gray-800"></div>
  ) : (
    "Login In"
  )}
</button>

          </form>

          {/* Separator */}
          <div className="my-6 border-t border-stone-800"></div>
        </div>

        {/* Sign-Up Link */}
        <div className="text-center pt-7">
          <p className="text-white text-xl font-semibold">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-green-600 hover:text-green-500 font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0  bg-black bg-opacity-75 flex flex-col items-center justify-center">
            <div className="bg-black  w-[38rem] flex flex-col items-center justify-center py-10 px-20 outline-none rounded-xl shadow-sm shadow-green-100">
              <div className="max-w-sm">
                <Image
                  src="/good.png"
                  alt="Success Image"
                  width={300}
                  height={300}
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <h2 className="text-5xl font-bold text-white mb-4">Success</h2>
              <p className="text-3xl font-bold text-white mb-4">
                You have successfully logged in
              </p>
              <button
                onClick={handleContinue}
                className="bg-green-600 text-white py-4 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors w-[30rem]"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    
  );
};

export default LoginPage;

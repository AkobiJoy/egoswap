// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { GoEye } from "react-icons/go";
// import { GoEyeClosed } from "react-icons/go";

// const SignupPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [code, setCode] = useState("");
//   const [nameError, setNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [successModal, setSuccessModal] = useState(false);
//   const [isProceedDisabled, setIsProceedDisabled] = useState(true);
//   const [showPassword, setShowPassword] = useState(false); // Show/hide password
//   const toggleShow = () => {
//     setShowPassword(!showPassword);
//   };

//   const router = useRouter();

//    // Check if all fields are filled
//    const handleInputChange = () => {
//     if (email && password && name) {
//       setIsProceedDisabled(false);
//     } else {
//       setIsProceedDisabled(true);
//     }
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();

//     // Reset errors
//     setNameError(false);
//     setEmailError(false);
//     setPasswordError(false);

//     let hasError = false;

//     if (!name) {
//       setNameError(true);
//       hasError = true;
//     } else if (!email) {
//       setEmailError(true);
//       hasError = true;
//     } else if (!password) {
//       setPasswordError(true);
//       hasError = true;
//     }

//     if (hasError) return;

//     setLoading(true);

//     // Simulate API call
//     setTimeout(() => {
//       setLoading(false);
//       setSuccessModal(true); // Show success modal
//     }, 1500);
//   };

//   const redirectToLogin = () => {
//     router.push("/login"); // Navigate to the login page
//   };

//   return (
//     <div className="h-screen bg-green-950 text-white flex flex-col items-center justify-center">
//       <div className="mb-5">
//           <h1 className="text-4xl font-bold">Get started with Egoswap</h1>
//         </div>
//       <div className="  bg-black rounded-lg shadow-lg w-[90%] max-w-[44rem] p-8">
//         <form className="space-y-4" onSubmit={handleSignup}>
//         <div className="mb-4">
//            <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-300 mb-2"
//               >
//                  * Email Address
//               </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//               setEmailError("");
//               handleInputChange();
//             }}
//             placeholder={emailError ? "Email is required" : "Email"}
//             className={`w-full p-3  bg-neutral-600 text-neutral-200 font-semibold text-lg border border-stone-900 rounded-lg focus:outline-none ${
//               emailError
//                 ? "border-red-500 placeholder-red-500"
//                 : "focus:ring focus:ring-green-400"
//             }`}
//           />
//           </div>

//           <div className="mb-4 relative">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-300 mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   setPasswordError("");
//                   handleInputChange();
//                 }}
//                 value={password}
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 className={`w-full p-3  bg-neutral-600 text-neutral-200 font-semibold text-lg border border-stone-900 rounded-lg focus:outline-none ${
//                   passwordError
//                     ? "placeholder-red-600 border-2 italic border-red-500"
//                     : ""
//                 }`}
//                 placeholder={passwordError || "Enter your password"}
//               />
//               <div
//                 onClick={toggleShow}
//                 className="absolute top-[70%] right-3 transform -translate-y-1/2 flex items-center cursor-pointer text-white bg-green-600 py-2 px-2 rounded-md font-bold"
//               >
//                 {showPassword ? <GoEyeClosed /> : <GoEye />}
//               </div>
//             </div>

//             <div className="mb-4">
//            <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-300 mb-2"
//               >
//                  * User Name
//               </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//               setNameError("");
//               handleInputChange();
//             }}
//             placeholder={nameError ? "User Name is required" : " User Name"}
//             className={`w-full p-3  bg-neutral-600 text-neutral-200 font-semibold text-lg border border-stone-900 rounded-lg focus:outline-none ${
//               nameError
//                 ? "border-red-500 placeholder-red-500"
//                 : "focus:ring focus:ring-green-400"
//             }`}
//           />
//           </div>

//           <div className="mb-4">
//            <label
//                 htmlFor="code"
//                 className="block text-sm font-medium text-gray-300 mb-2"
//               >
//                  * Referral Code
//               </label>
//           <input
//             type="text"
//             id="code"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             placeholder={"Referral Code"}
//             className="w-full p-3  bg-neutral-600 text-neutral-200 font-semibold text-lg border border-stone-900 rounded-lg focus:outline-none"
//           />
//           <p className="text-xs text-neutral-400">* Optional</p>
//           </div>

//            {/* Submit/Proceed Button */}
//            <button
//             type="submit"
//             className={`py-3 px-6 w-full rounded-lg text-lg font-bold ${isProceedDisabled ? "bg-green-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"} transition`}
//             disabled={isProceedDisabled || loading}
//           >
//             {loading ? "Signing Up..." : "Sign Up"}
//           </button>
//         </form>

//       </div>
//         <span className="pt-8 text-2xl font-bold text-white flex gap-2 items-center">Already have an acccount?
//           <Link href={"/login"}><span className="text-green-600">Login</span></Link>
//           </span>

//       {successModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-2xl font-bold mb-4 text-green-500">Success!</h2>
//             <p className="mb-6">You have signed up successfully.</p>
//             <button
//               onClick={redirectToLogin}
//               className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition"
//             >
//               Continue to Login
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignupPage;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [isProceedDisabled, setIsProceedDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // Show/hide password
  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  // Check if all fields are filled
  const handleInputChange = () => {
    if (email && password && name) {
      setIsProceedDisabled(false);
    } else {
      setIsProceedDisabled(true);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Reset errors
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    let hasError = false;

    if (!name) {
      setNameError(true);
      hasError = true;
    } else if (!email) {
      setEmailError(true);
      hasError = true;
    } else if (!password) {
      setPasswordError(true);
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccessModal(true); // Show success modal
    }, 1500);
  };

  const redirectToLogin = () => {
    router.push("/login"); // Navigate to the login page
  };

  return (
    <div className="h-screen bg-green-950 text-white flex flex-col items-center justify-center">
      <div className="mb-5">
        <h1 className="text-4xl font-bold">Get started with Egoswap</h1>
      </div>
      <div className="bg-black rounded-lg shadow-lg w-[90%] max-w-[44rem] p-8">
        <form className="space-y-4" onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              * Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
                handleInputChange();
              }}
              placeholder={emailError ? "Email is required" : "Email"}
              className={`w-full p-3 bg-neutral-600 text-neutral-200 font-semibold text-lg border border-stone-900 rounded-lg focus:outline-none ${
                emailError
                  ? "border-red-500 placeholder-red-500"
                  : "focus:ring focus:ring-green-400"
              }`}
            />
          </div>

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
                setPasswordError("");
                handleInputChange();
              }}
              value={password}
              type={showPassword ? "text" : "password"}
              id="password"
              className={`w-full p-3 bg-neutral-600 text-neutral-200 font-semibold text-lg border border-stone-900 rounded-lg focus:outline-none ${
                passwordError
                  ? "placeholder-red-600 border-2 italic border-red-500"
                  : ""
              }`}
              placeholder={passwordError || "Enter your password"}
            />
            <div
              onClick={toggleShow}
              className="absolute top-[70%] right-3 transform -translate-y-1/2 flex items-center cursor-pointer text-white bg-green-600 py-2 px-2 rounded-md font-bold"
            >
              {showPassword ? <GoEyeClosed /> : <GoEye />}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              * User Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
                handleInputChange();
              }}
              placeholder={nameError ? "User Name is required" : "User Name"}
              className={`w-full p-3 bg-neutral-600 text-neutral-200 font-semibold text-lg border border-stone-900 rounded-lg focus:outline-none ${
                nameError
                  ? "border-red-500 placeholder-red-500"
                  : "focus:ring focus:ring-green-400"
              }`}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              * Referral Code
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={"Referral Code"}
              className="w-full p-3 bg-neutral-600 text-neutral-200 font-semibold text-lg border border-stone-900 rounded-lg focus:outline-none"
            />
            <p className="text-xs text-neutral-400">* Optional</p>
          </div>

          {/* Submit/Proceed Button */}
          <button
            type="submit"
            className={`py-3 px-6 w-full rounded-lg text-lg font-bold ${
              isProceedDisabled || loading
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            } transition`}
            disabled={isProceedDisabled || loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
      <span className="pt-8 text-2xl font-bold text-white flex gap-2 items-center">
        Already have an account?
        <Link href={"/login"}>
          <span className="text-green-600">Login</span>
        </Link>
      </span>

      {successModal && (
        <div
          className="fixed inset-0  bg-black bg-opacity-75 flex flex-col items-center justify-center
        z-50"
        >
          <div
            className="bg-black  w-[38rem] flex flex-col items-center justify-center py-10 px-20 outline-none rounded-xl shadow-sm shadow-green-100
             text-center"
          >
              <div className="max-w-sm">
                <Image
                  src="/good.png"
                  alt="Success Image"
                  width={300}
                  height={300}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            <h2 className="text-5xl font-bold mb-4 text-white">Success!</h2>
            <p className="mb-4 text-2xl">You have signed up successfully.</p>
            <button
              onClick={redirectToLogin}
              className="bg-green-600 text-white py-4 px-4 text-xl rounded-xl font-semibold hover:bg-green-700 transition-colors w-[32rem]"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;

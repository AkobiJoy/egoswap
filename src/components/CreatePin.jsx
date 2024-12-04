
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const CreatePin = () => {
//   const [pin, setPin] = useState("");
//   const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handlePinChange = (e) => {
//     const value = e.target.value;
//     console.log("Pin changed:", value); // Debugging log
//     setPin(value);

//     // Enable submit button if PIN is entered
//     if (value) {
//       setIsSubmitDisabled(false);
//     } else {
//       setIsSubmitDisabled(true);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     console.log("Submitting PIN:", pin); // Debugging log

//     setTimeout(() => {
//       setLoading(false);
//       router.push("/dashboard"); // Redirect to dashboard after 1.5 seconds
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-green-950 text-white flex flex-col items-center justify-center">
//       <div className="bg-black rounded-lg shadow-lg w-[90%] max-w-[44rem] p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center">Create a PIN</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="mb-4">
//             <label htmlFor="pin" className="block text-sm font-medium text-gray-300 mb-2">
//               * PIN
//             </label>
//             <input
//               type="password"
//               id="pin"
//               value={pin}
//               onChange={handlePinChange}
//               placeholder="Create your PIN"
//               className="w-full p-3 bg-neutral-600 text-neutral-200 font-semibold text-lg border border-stone-900 rounded-lg focus:outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitDisabled || loading}
//             className={`py-3 px-6 w-full rounded-lg text-lg font-bold ${isSubmitDisabled || loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"} transition`}
//           >
//             {loading ? "Creating PIN..." : "Enter"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePin;


// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const CreatePin = () => {
//   const [pin, setPin] = useState(["", "", "", ""]);
//   const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handlePinChange = (e, index) => {
//     const value = e.target.value.slice(0, 1); // Allow only one character per box
//     const newPin = [...pin];
//     newPin[index] = value;
//     setPin(newPin);

//     // Enable submit button if all 4 boxes are filled
//     if (newPin.every((digit) => digit !== "")) {
//       setIsSubmitDisabled(false);
//     } else {
//       setIsSubmitDisabled(true);
//     }

//     // Move to the next input if a digit is entered
//     if (value && index < 3) {
//       document.getElementById(`pin-input-${index + 1}`).focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     // Handle backspace to focus on the previous input
//     if (e.key === "Backspace" && pin[index] === "") {
//       if (index > 0) {
//         document.getElementById(`pin-input-${index - 1}`).focus();
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const pinValue = pin.join(""); // Join the array to get the full PIN as a string
//     console.log("Submitting PIN:", pinValue); // Debugging log

//     setTimeout(() => {
//       setLoading(false);
//       router.push("/dashboard"); // Redirect to dashboard after 1.5 seconds
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-green-950 text-white flex flex-col items-center justify-center">
//       <div className="bg-black rounded-lg shadow-lg w-[90%] max-w-[22rem] p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center">Create a PIN</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="mb-4">
//             <label htmlFor="pin" className="block text-sm font-medium text-gray-300 mb-2">
//               * PIN
//             </label>
//             <div className="flex space-x-2">
//               {pin.map((digit, index) => (
//                 <input
//                   key={index}
//                   id={`pin-input-${index}`}
//                   type="password"
//                   value={digit}
//                   onChange={(e) => handlePinChange(e, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   maxLength={1}
//                   className="w-16 h-16 text-center bg-neutral-600 text-neutral-200 font-semibold text-2xl border border-stone-900 rounded-lg focus:outline-none"
//                   autoFocus={index === 0} // Focus on the first input initially
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-center items-center pt-5">
//           <button
//             type="submit"
//             disabled={isSubmitDisabled || loading}
//             className={`py-4 px-6 w-[10rem] rounded-lg text-sm font-bold mx-auto ${isSubmitDisabled || loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"} transition`}
//           >
//             {loading ? "Creating PIN..." : "Enter"}
//           </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePin;





"use client"
import { useRouter } from "next/navigation";
// import React, { useState } from "react";
import React, { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

const CreatePin = ({ show, onClose }) => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State for showing the alert
  const router = useRouter(); // Initialize the useRouter hook


  
  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  const handlePinChange = (e, index) => {
    const value = e.target.value.slice(0, 1);
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    setIsSubmitDisabled(!newPin.every((digit) => digit !== ""));

    if (value && index < 3) {
      document.getElementById(`pin-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowAlert(true); // Show the alert when the PIN is created
      setTimeout(() => {
        setShowAlert(false); // Hide the alert after some time
        router.push("/login"); // Navigate to the login page after the alert disappears
      }, 3000); // Duration for the alert before redirecting
    }, 1500);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
            {showAlert && (
        <div
          className="fixed bottom-10 right-0 bg-white text-green-800 py-3 px-6 rounded-tl-lg text-lg font-bold transition-all transform duration-1000 ease-out"
          style={{
            transform: showAlert ? "translateX(0)" : "translateX(100%)", // Start from right and slide to the left
          }}
        >
          PIN created successfully!
        </div>
      )}
      <div className="bg-black rounded-lg shadow-lg w-[90%] max-w-[38rem] p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Please Set a Pin</h2>
        <h3 className="text-xl  mb-6 text-center text-neutral-400">You'll need to create a pin to be able to make <br /> transactions</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4 relative">
            <div className="flex space-x-2 justify-center text-center">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  id={`pin-input-${index}`}
                  type={showPassword ? "number" : "password"}
                  value={digit}
                  onChange={(e) => handlePinChange(e, index)}
                  maxLength={1}
                  className="w-16 h-16 text-center bg-neutral-600 text-neutral-200 font-semibold text-2xl border border-stone-900 rounded-lg focus:outline-none"
                />
              ))}
              <div
              onClick={toggleShow}
              className="absolute top-[55%] right-[83px] transform -translate-y-1/2 flex items-center cursor-pointer text-white bg-gray-600 py-3 px-3 rounded-md font-bold"
            >
              {showPassword ? <GoEyeClosed /> : <GoEye />}
            </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={isSubmitDisabled || loading}
            className={`py-5 px-6 w-[30rem] rounded-lg text-sm font-bold ${
              isSubmitDisabled || loading ? "bg-green-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            } transition`}
          >
            {loading ? "Creating PIN..." : "Next"}
          </button>

          </div>
        </form>
        {/* <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-300 hover:underline"
        >
          Cancel
        </button> */}
      </div>
      
    </div>
  );
};

export default CreatePin;


import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const RegistrationLink = () => {
    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const setVal = (e) => {
        setEmail(e.target.value)
    }
    const sendLink = async (e) => {
        if (email === "") {
            toast.error("email is required", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email", {
                position: "top-center"
            });
        } else {
            const res = await fetch("http://localhost:8000/api/registerationlink", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email })
            });
            console.log(`Response Status =${res.status}`);
            const data = await res.json();
            if (data.status == 200) {
                setEmail("");
                setMessage(true);
            } else {
                toast.success("Email Send ", {
                    position: "top-center"
                });
            }

        }
    }
    return (
        // <>
        //     <div className="flex justify-center items-center h-screen">
        //         <div className="bg-white shadow-md rounded px-8 py-6 w-full sm:max-w-md">
        //             <h2 className="text-xl font-semibold mb-4">Registration</h2>
        //             {message ? <p style={{ color: "green", fontWeight: "bold" }}>Registration link send Succesfully</p> : ""}
        //             <div className="mb-4">
        //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        //                     Email
        //                 </label>
        //                 <input
        //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                     id="email"
        //                     type="email"
        //                     placeholder="Email"
        //                     value={email}
        //                     onChange={setVal}
        //                 />
        //             </div>
        //             <div className="flex items-center justify-center">
        //                 <button
        //                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        //                     onClick={sendLink}
        //                 >
        //                     Send Link
        //                 </button>
        //             </div>
        //             <ToastContainer />
        //         </div>

        //     </div>
        // </>
        <>
    <div className="flex justify-center items-center h-screen bg-dark dark:bg-neutral-900">
        <div className="bg-white dark:bg-neutral-800 shadow-md rounded px-8 py-6 w-full sm:max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">Registration</h2>
            {message && <p className="text-green-500 font-bold mb-4">{message}</p>}
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-100 dark:bg-neutral-700"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={setVal}
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={sendLink}
                >
                    Send Link
                </button>
            </div>
            <ToastContainer />
        </div>
    </div>
</>


    )
}
export default RegistrationLink;
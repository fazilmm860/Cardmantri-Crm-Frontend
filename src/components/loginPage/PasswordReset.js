import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const PasswordReset = () => {
    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");


    const setVal = (e) => {
        setEmail(e.target.value)
    }
    const sendLink = async (e) => {
        e.preventDefault();
        if (email === "") {
            toast.error("email is required", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email", {
                position: "top-center"
            });
        } else {
            const res = await fetch("http://localhost:8000/api/sendpasswordlink", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ email })
            });

            console.log('Response Status:', res.status);
            const data = await res.json();
            if (data.status == 201) {
                setEmail("");
                setMessage(true)
            } else {
                toast.error("Invalid User", {
                    position: "top-center"
                });
            }

        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-md rounded px-8 py-6 w-full sm:max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Password Reset</h2>
                    {message ? <p style={{ color: "green", fontWeight: "bold" }}>Password reset link send Succesfully</p> : ""}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={setVal}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={sendLink}
                        >
                            Send Reset Email
                        </button>
                    </div>
                    <ToastContainer />
                </div>

            </div>
        </>
    )

}

export default PasswordReset;
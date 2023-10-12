import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import "./mix.css"

const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const setVal = (e) => {
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();
        const { fname, email, password, cpassword } = inpval

        if (fname === "") {
            toast.warning("fname is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.error("cpassword is required!", {
                position: "top-center"
            });
        } else if (cpassword.length < 6) {
            toast.error("confirm password must be 6b char!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.error("pass and cpass are not matching ", {
                position: "top-center"
            })
        } else {
            const data = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            });
            const res = await data.json();
            if (res.status === 201) {
                toast.success("Registration Successfully Completed", {
                    position: "top-center"
                });
                setInpval({ ...inpval, fname: "", email: "", password: "", })
            }
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="form_heading">
                <h1>Sign Up</h1>
                <p style={{ textAlign: "center", color:'whitesmoke'}}>We are glad that you will be using these credentials to  <br />accessing the  admin pages.</p>
            </div >
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mr-3 w-full sm:max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fname"
                        type="text"
                        placeholder="Name"
                        name="fname"
                        onChange={setVal}
                        value={inpval.fname}

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={setVal}
                        value={inpval.email}

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type={!passShow ? "password" : "text"}
                        placeholder="Password"
                        name="password"
                        value={inpval.password}
                        onChange={setVal}

                    />
                    <div className="showpass" onClick={() => setPassShow(!passShow)}>
                        {!passShow ? "Show" : "Hide"}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cpassword"
                        type={!cpassShow ? "password" : "text"}
                        placeholder="Confirm Password"
                        name="cpassword"
                        value={inpval.cpassword}
                        onChange={setVal}
                    />
                    <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                        {!cpassShow ? "Show" : "Hide"}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={addUserdata}

                    >
                        Sign Up
                    </button>
                </div>
                <p>Already have a account?<NavLink to="/login"></NavLink></p>

            </form>
            <ToastContainer />
        </div >
    );


}

export default Register
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
    const [passShow, setPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });
    const history = useNavigate();

    const setVal = (e) => {
       
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };
    const loginuser = async (e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("Email is required!", {
                position: "top-center"
            });
            return;
        } else if (!email.includes("@")) {
            toast.warning("Email must include '@'!", {
                position: "top-center"
            });
            return;
        } else if (password.length < 6) {
            toast.error("Password must be at least 6 characters!", {
                position: "top-center"
            });
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (!response.ok) {
                throw new Error(`Request failed: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            if (data.status === 201) {
                localStorage.setItem("usersdatatoken", data.result.token);
                history("/admin");
                setInpval({ ...inpval, email: "", password: "" });
            } else {
                toast.error("Incorrect email or password", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            toast.error("An error occurred while logging in", {
                position: "top-center"
            });
        }
    };

    return (
        <>
<div className='flex flex-col justify-center items-center bg-dark dark:bg-neutral-900 min-h-screen'>

<form className="bg-white dark:bg-neutral-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full sm:max-w-md">

    <div className="mb-4">
        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="email">
            Email
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white bg-gray-100 dark:bg-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={inpval.email}
            onChange={setVal}
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
            Password
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white bg-gray-100 dark:bg-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={!passShow ? "password" : "text"}
            placeholder="Password"
            name="password"
            value={inpval.password}
            onChange={setVal}
        />
        <div className="showpass" style={{color:'white'}} onClick={() => setPassShow(!passShow)}>
            {!passShow ? "Show" : "Hide"}
        </div>
    </div>

    <div className="flex items-center justify-center">
        <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={loginuser}
        >
            Sign Up
        </button>
    </div>

    <p style={{ color: "white", padding:"10px", fontWeight: "bold" }}>Forgot Password  <NavLink to="/password-reset">Click Here</NavLink> </p>

</form>
<ToastContainer />
</div>


        </>
    )
}

export default Login;
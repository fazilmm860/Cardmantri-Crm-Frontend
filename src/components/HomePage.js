import React from 'react';
import { Link } from 'react-router-dom';
const title = [
    {
        choose: "HDFC",
        to: "/form"
    },
    {
        choose: "IDFC",
        to: "/form"
    },
    {
        choose: "Indusand",
        to: "/form"
    },
    {
        choose: "ICICI",
        to: "/form"
    },
    {
        choose: "SBI",
        to: "/form"
    },
]

export default function HomePage() {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-dark dark:bg-neutral-900 min-h-screen'>

                <div div className="min-h-screen flex justify-center items-center" >
                    <div className="grid gap-1 grid-cols-1   md:grid-cols-5 mt-5 ">
                        {title.map((item, index) => (
                            <Link to={item.to} key={index}>
                                <div className="flex flex-col w-60 h-full ml-2 items-center justify-center rounded-lg bg-yellow-600 dark:bg-yellow-500 shadow-lg hover:bg-yellow-300 dark:hover:bg-yellow-800 md:max-w-xl md:flex-row">
                                    <div className="flex flex-col justify-center p-6">
                                        <h5 className="mb-2 text-xl font-medium text-neutral-50 text-center">
                                            {item.choose}
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}

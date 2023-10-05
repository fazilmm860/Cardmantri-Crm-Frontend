import React from 'react';
import { Link } from 'react-router-dom';

const title = [
    {
        choose: "Result-Table",
        to: "/result-table"
    },
    {
        choose: "Registration-Page",
        to: "/registration"
    }
];

export default function AdminPage() {
    return (
        <div className="flex flex-col items-center justify-start p-12">
            <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2">
                {title.map((item, index) => (
                    <Link key={index} to={item.to}>
                        <div className="flex flex-col w-60 items-center justify-center rounded-lg bg-gray-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:bg-gray-500 dark:bg-neutral-700 md:max-w-xl md:flex-row">
                            <div className="flex flex-col justify-center p-2">
                                <h5 className="mb-1 text-xl font-medium text-neutral-800 dark:text-neutral-50 text-center">
                                    {item.choose}
                                </h5>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

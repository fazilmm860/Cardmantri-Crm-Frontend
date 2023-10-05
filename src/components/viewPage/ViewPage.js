import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const ViewPage = () => {
    const { itemId } = useParams();

    console.log(itemId);

    const [formData, setFormData] = useState({});
    useEffect(() => {
        console.log("Component mounted. Fetching data...");
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/getDetails/${itemId}`);
                setFormData(res.data.item);
                console.log(`Fectching data completed Successfully`);

            } catch (error) {
                console.error(`Error in fetching data: ${error}`);
            }
        };

        fetchData(); // Call fetchData when the component mounts
    }, [itemId]);



    const handlePrint = () => {
        // Open the print dialog when the button is clicked
        window.print();
    };

    return (
        <div>
            {formData === null ? (
                <p>Loading data...</p>
            ) : (
                <div className="min-h-screen bg-gray-100 flex justify-center items-center">
                    <div className="w-4/5 md:w-2/3 lg:w-1/2 border rounded-lg shadow-lg p-8 bg-white">
                        <form className='flex flex-col'>
                            <div className="space-y-10 ">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Credit Card Application Form</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        <span>V</span>iew<span>P</span>age
                                    </p>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Date
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.date || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Exe-Name
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.exeName || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Dse-Code
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.dseCode || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Card-Select
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.cardSelect || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Surrogate
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.surrogate || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Customer Name
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.custName ? formData.custName.firstName : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.custName ? formData.custName.middleName : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.custName ? formData.custName.lastName : "N/A"}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            DOB
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.dateOfBirth || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Gender
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.gender || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Marital-Status
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.maritalStatus || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Spouse-Name
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.spouseName || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Qualification
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.qualification || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Other
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.other || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pan-Number
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.panNumber || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Mobile-Number
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.mobileNumber || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Alternative-Number
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.altMobileNumber || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.email || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Residence-Address
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.residenceAddress ? formData.residenceAddress.flat : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.residenceAddress ? formData.residenceAddress.street : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.residenceAddress ? formData.residenceAddress.city : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.residenceAddress ? formData.residenceAddress.state : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.residenceAddress ? formData.residenceAddress.landMark : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.residenceAddress ? formData.residenceAddress.pincode : "N/A"}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Permanent-Address
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.permanentAddress ? formData.permanentAddress.flat : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.permanentAddress ? formData.permanentAddress.street : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.permanentAddress ? formData.permanentAddress.city : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.permanentAddress ? formData.permanentAddress.state : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.permanentAddress ? formData.permanentAddress.landMark : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.permanentAddress ? formData.permanentAddress.pincode : "N/A"}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            period of Residence
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.periodResidence || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Residence Is
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.residenceIs || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Company Name
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.companyName || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Company-Address
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.companyAddress ? formData.companyAddress.flat : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.companyAddress ? formData.companyAddress.street : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.companyAddress ? formData.companyAddress.city : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.companyAddress ? formData.companyAddress.state : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.companyAddress ? formData.companyAddress.landMark : "N/A"}</p>

                                            </div>
                                            <div className="flex rounded-md mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.companyAddress ? formData.companyAddress.pincode : "N/A"}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Designation
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.designation || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Tel.No
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.telNo || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Official-Email
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.officeEmail || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Employment Type
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.employmentType || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Employment Details
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.empolymentDetails || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            HDFC Account Number
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.hdfcAcc || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Other Bank Account Number
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.otherAcc || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Remarks
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <p> {formData.remark || "N/A"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 text-center">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={handlePrint}
                                    >
                                        Print
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            )
            }
        </div>
    );
}

export default ViewPage;

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import EditResidenceAddress from './EditResidenceAddress'
import EditPermanentAddress from './EditPermanentAddress'

const selectcard = [
    {
        card: "Select"
    },
    {
        card: "Money Back"
    },
    {
        card: "Business Money Back "
    },
    {
        card: "Indian Oil"
    },
    {
        card: "Millennia"
    },
    {
        card: "Regalia"
    },
    {
        card: "Tata Neu Plus (Rupay) "
    },
    {
        card: "Tata Neu Infnity"
    },
    {
        card: "Shopper Stop Card"
    },
    {
        card: "Swiggy Card"
    },
    {
        card: "Freedom Card"
    },
    {
        card: "Diners Black Card"
    },
    {
        card: "Times Titainium Card"
    },
    {
        card: "Indigo 6E Rewards"
    },

]
const surrogate = [
    {
        type: "Select"
    },
    {
        type: "Salary Slip"
    },
    {
        type: "Card Against Card"
    },
    {
        type: "Floater Card"
    },
    {
        type: "Bajaj Emi"
    },
    {
        type: "ITR"
    },
    {
        type: "Doctor's Surrogate"
    },
    {
        type: "RC Base"
    },
]

const addressdetails = [
    {
        residence: "Select"
    },
    {
        residence: "Owned"
    },
    {
        residence: "Rented"
    },
    {
        residence: "Company Provided"
    },
    {
        residence: "Ancestral/Family"
    },
    {
        residence: "PG Accomadation"
    },
    {
        residence: "Resi Cum Office"
    },
]
const salary = [
    {
        type: 'Select'
    },
    {
        type: 'Private Ltd'
    },
    {
        type: 'Partnership'
    },
    {
        type: 'Proprietorship'
    },
    {
        type: 'Public Ltd'
    },
    {
        type: 'Public Sector'
    },
    {
        type: 'Government'
    },
    {
        type: 'Multinational'
    },
    {
        type: 'Others'
    },
]
const self = [
    {
        type: 'Select'
    },
    {
        type: 'Sole Proprietorship'
    },
    {
        type: 'Partnership'
    },
    {
        type: 'Public Ltd'
    },
    {
        type: 'Private Ltd'
    },
    {
        type: 'Others'
    },
]

const EditModel = ({ data, onSave, onCancel }) => {

    const [editedData, setEditedData] = useState(data); // Initialize with data from props
    console.log(data);


    const handleDateChanged = (dates) => {
        try {
            const todayDate = new Date(dates);
            todayDate.setHours(0, 0, 0, 0);
            console.log("Today's Date:", todayDate);
            setEditedData({
                ...editedData,
                date: todayDate,
            });
        } catch (error) {
            console.error("Error in handleDateChanged:", error);
        }
    };

    const handleDateOfBirthChange = (dob) => {
        try {
            const selectedDate = new Date(dob);
            const formattedDate = selectedDate.toLocaleDateString();
            console.log("Selected Date of Birth:", selectedDate);
            setEditedData({
                ...editedData,
                dateOfBirth: formattedDate,
            });
        } catch (error) {
            console.error("Error in handleDateOfBirthChange:", error);
        }
    };

    const handleEmploymentTypeChange = (event) => {
        const newEmploymentType = event.target.value;
        setEditedData({
            ...editedData,
            employmentType: newEmploymentType,
            employmentDetails: '', // Reset details when employment type changes
        });
    };
    const handleEmploymentDetailsChange = (event) => {
        const newEmploymentDetails = event.target.value;
        setEditedData({
            ...editedData,
            employmentDetails: newEmploymentDetails,
        });
    };
    const handleInputChange = event => {
        const { name, value } = event.target;
        setEditedData({
            ...editedData,
            [name]: value,
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedData((prevData) => ({
            ...prevData,
            custName: {
                ...prevData.custName,
                [name]: value
            }
        }));
    };
    const handleCompanyAddChange = (event) => {
        const { name, value } = event.target;
        setEditedData((prevData) => ({
            ...prevData,
            companyAddress: {
                ...prevData.companyAddress,
                [name]: value
            }
        }))
    }

    const handleSave = async () => {
        onSave(editedData)

    };



    return (

        <form className='flex flex-col justify-center items-center'>
            <div className="space-y-12 ">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Credit Card Application Form</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Edit this from properly
                    </p>
                    <DatePicker className="mt-4" selected={new Date(editedData.date)} onChange={handleDateChanged} />
                    <div div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Executive Name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="exeName"
                                        id="exeName"
                                        value={editedData.exeName}
                                        onChange={handleInputChange}
                                        autoComplete="exeName"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="mIRSHAD ALI"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
                                DSE-Code
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="dseCode"
                                        id="dseCode"
                                        value={editedData.dseCode}
                                        onChange={handleInputChange}
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="mIRSHAD ALI"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="selectcard" className="block text-sm font-medium leading-6 text-gray-900">
                                Select Card
                            </label>
                            <div className="mt-2">

                                <select
                                    id="cardSelect"
                                    name="cardSelect"
                                    value={editedData.cardSelect}
                                    onChange={handleInputChange}
                                    autoComplete="cardSelect"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {selectcard.map((type) => (
                                        <option>
                                            {type.card}

                                        </option>
                                    ))}

                                </select>


                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="surrogate" className="block text-sm font-medium leading-6 text-gray-900">
                                Surrogate
                            </label>
                            <div className="mt-2">

                                <select
                                    id="surrogate"
                                    name="surrogate"
                                    value={editedData.surrogate}
                                    onChange={handleInputChange}
                                    autoComplete="surrogate"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {surrogate.map((choose) => (
                                        <option>
                                            {choose.type}

                                        </option>
                                    ))}

                                </select>


                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">APPLICANT DETAILS</h2>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Customer Name(as per pan)
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={editedData.custName.firstName}
                                        onChange={handleChange}
                                        autoComplete="firstName"
                                        style={{ textTransform: 'uppercase' }}
                                        className="block flex-1 border-0 bg-transparent  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="First Name"
                                        required
                                    />

                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="middleName"
                                        id="middleName"
                                        value={editedData.custName.middleName}
                                        onChange={handleChange}
                                        autoComplete="middleName"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Middle Name"

                                    />

                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={editedData.custName.lastName}
                                        onChange={handleChange}
                                        autoComplete="lastName"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Last Name"
                                        required
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="dateOfBirth" className="block text-sm font-medium leading-6 text-gray-900">
                                Date of Birth
                            </label>
                            <div className="mt-2">

                                <DatePicker
                                    id="dateOfBirth"
                                    name='dateOfBirth'
                                    selected={editedData.dateOfBirth ? new Date(editedData.dateOfBirth) : null}
                                    onChange={handleDateOfBirthChange}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    dateFormat="dd/MM/yyyy"
                                    className="mt-1 p-2 border rounded-md w-full"
                                />

                            </div>
                        </div>



                        <EditResidenceAddress editedData={editedData} setEditedData={setEditedData} />


                        <div className="sm:col-span-4">
                            <label htmlFor="sameadd" className="block text-sm font-medium leading-6 text-gray-900">
                                Same as above (Copy Residential Address to Permanent Address)
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="checkbox"
                                        name="sameAsAbove"
                                        checked={editedData.sameAsAbove}
                                        onChange={e => setEditedData(prevData => ({ ...prevData, sameAsAbove: e.target.checked }))}
                                        id="sameAsAbove"
                                        autoComplete="sameAsAbove"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="mIRSHAD ALI"

                                    />
                                </div>
                            </div>
                        </div>
                        {editedData.sameAsAbove ? (
                            <EditPermanentAddress editedData={{ ...editedData, permanentAddress: editedData.residenceAddress }} setEditedData={setEditedData} />
                        ) : (
                            <EditPermanentAddress editedData={editedData} setEditedData={setEditedData} />
                        )}
                        <div className="sm:col-span-4">
                            <label htmlFor="periodResidence" className="block text-sm font-medium leading-6 text-gray-900">
                                Period at current Residence
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="number"
                                        name="periodResidence"
                                        id="periodResidence"
                                        value={editedData.periodResidence}
                                        onChange={handleInputChange}
                                        autoComplete="periodResidence"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="in years"
                                        required
                                    />
                                </div>
                            </div>


                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="residenceIs" className="block text-sm font-medium leading-6 text-gray-900">
                                Your Residence is
                            </label>
                            <div className="mt-2">

                                <select
                                    id="residenceIs"
                                    name="residenceIs"
                                    value={editedData.residenceIs}
                                    onChange={handleInputChange}
                                    autoComplete="residenceIs"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {addressdetails.map((type) => (
                                        <option>
                                            {type.residence}

                                        </option>
                                    ))}

                                </select>


                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <h2 className="text-base font-semibold py-3 leading-7 text-gray-900">COMPANY DETAILS</h2>
                            <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                                Company Name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="companyName"
                                        id="companyName"
                                        value={editedData.companyName}
                                        onChange={handleInputChange}
                                        autoComplete="companyName"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Company Name"
                                        required
                                    />
                                </div>
                            </div>
                            <label htmlFor="flat" className="block text-sm font-medium leading-6 text-gray-900">
                                Company Address
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="flat"
                                        id="flat"
                                        value={editedData.companyAddress.flat}
                                        onChange={handleCompanyAddChange}
                                        autoComplete="companyAddress.flat"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="flat / door no. & house name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="street"
                                        id="street"
                                        value={editedData.companyAddress.street}
                                        onChange={handleCompanyAddChange}
                                        autoComplete="street"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Street1"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        value={editedData.companyAddress.city}
                                        onChange={handleCompanyAddChange}
                                        autoComplete="city"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="City"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        value={editedData.companyAddress.state}
                                        onChange={handleCompanyAddChange}
                                        autoComplete="state"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="State"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="landMark"
                                        id="landMark"
                                        value={editedData.companyAddress.landMark}
                                        onChange={handleCompanyAddChange}
                                        autoComplete="landMark"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="LandMark"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="number"
                                        name="pincode"
                                        id="pincode"
                                        value={editedData.companyAddress.pincode}
                                        onChange={handleCompanyAddChange}
                                        autoComplete="pincode"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Pincode"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="designation" className="block text-sm font-medium leading-6 text-gray-900">
                                Designation
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="text"
                                        name="designation"
                                        id="designation"
                                        value={editedData.designation}
                                        onChange={handleInputChange}
                                        autoComplete="designation"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Designation"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="telNo" className="block text-sm font-medium leading-6 text-gray-900">
                                Tel.No
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="number"
                                        name="telNo"
                                        id="telNo"
                                        value={editedData.telNo}
                                        onChange={handleInputChange}
                                        autoComplete="telNo"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Tel.no"

                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="officeEmail" className="block text-sm font-medium leading-6 text-gray-900">
                                Office E-mail ID
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="email"
                                        name="officeEmail"
                                        id="officeEmail"
                                        value={editedData.officeEmail}
                                        onChange={handleInputChange}
                                        autoComplete="officeEmail"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Office E-mail ID"

                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <h2 className="text-2xl font-semibold mb-4">Occupation Type</h2>
                            <div className="mb-4">
                                <label htmlFor="Salaried" className='flex items-center mb-2'>
                                    <input
                                        type='radio'
                                        name="Salaried"
                                        id="Salaried"
                                        value="Salaried"
                                        checked={editedData.employmentType === 'Salaried'}
                                        onChange={handleEmploymentTypeChange}
                                        autoComplete='Salaried'
                                        className="mr-2"

                                    />
                                    Salaried
                                </label>


                            </div>
                            <div className="mb-4">
                                <label htmlFor="Self-employment" className='flex items-center mb-2'>
                                    <input
                                        type='radio'
                                        name="Self-employment"
                                        id="Self-employment"
                                        value="Self-employment"
                                        checked={editedData.employmentType === 'Self-employment'}
                                        onChange={handleEmploymentTypeChange}
                                        autoComplete='Self-employment'
                                        className="mr-2"
                                    />
                                    Self-Employed
                                </label>
                            </div>
                            {editedData.employmentType && (
                                <select value={editedData.employmentDetails}
                                    onChange={handleEmploymentDetailsChange}
                                >
                                    <option value="">Select</option>
                                    {editedData.employmentType === 'Salaried' ? (
                                        salary.map((option, index) => (
                                            <option key={index} value={option.type}>
                                                {option.type}
                                            </option>
                                        ))
                                    ) : (
                                        self.map((option, index) => (
                                            <option key={index} value={option.type}>
                                                {option.type}
                                            </option>
                                        ))

                                    )}
                                </select>
                            )}
                        </div>



                        <div className="sm:col-span-4">
                            <label htmlFor="hdfcAcc" className="block text-sm font-medium leading-6 text-gray-900">
                                HDFC/Account No
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="nubmer"
                                        name="hdfcAcc"
                                        id="hdfcAcc"
                                        value={editedData.hdfcAcc}
                                        onChange={handleInputChange}
                                        autoComplete="hdfcAcc"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="HDFC ACCount NO"

                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="otherAcc" className="block text-sm font-medium leading-6 text-gray-900">
                                Other Bank Account No
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                    <input
                                        type="number"
                                        name="otherAcc"
                                        id="otherAcc"
                                        value={editedData.otherAcc}
                                        onChange={handleInputChange}
                                        autoComplete="otherAcc"
                                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Account Number"

                                    />
                                </div>
                            </div>
                        </div>




                        <div className="col-span-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Remark
                            </label>
                            <div className="mt-2">
                                <textarea
                                    type='text'
                                    name='remark'
                                    id='remark'

                                    value={editedData.remark}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                        </div>


                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" onClick={oncancel} className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                onClick={handleSave}
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>


                        </div>

                    </div>
                </div>
            </div>
        </form>

    )
};

export default EditModel;

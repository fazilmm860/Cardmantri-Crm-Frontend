import React from 'react';

function PermanentAddressForm({ formData, setFormData }) {
    const handlePermanentChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            permanentAddress: {
                ...prevData.permanentAddress,
                [field]: value
            }
        }));
    };

    return (
        <div className="sm:col-span-4">

            <label htmlFor="residenceAddress" className="block text-sm font-medium leading-6 text-gray-900">
                Permanent Address
            </label>
            <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                    <input
                        type="text"
                        name="flat"
                        id="flat"
                        value={formData.permanentAddress.flat}
                        onChange={e => handlePermanentChange('flat', e.target.value)}
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
                        value={formData.permanentAddress.street}
                        onChange={e => handlePermanentChange('street', e.target.value)}
                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Street"
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
                        value={formData.permanentAddress.city}
                        onChange={e => handlePermanentChange('city', e.target.value)}
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
                        value={formData.permanentAddress.state}
                        onChange={e => handlePermanentChange('state', e.target.value)} className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                        value={formData.permanentAddress.landMark}
                        onChange={e => handlePermanentChange('landMark', e.target.value)} className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                        value={formData.permanentAddress.pincode}
                        onChange={e => handlePermanentChange('pincode', e.target.value)} className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Pincode"
                        required
                    />
                </div>
            </div>
        </div>

    );
}

export default PermanentAddressForm;

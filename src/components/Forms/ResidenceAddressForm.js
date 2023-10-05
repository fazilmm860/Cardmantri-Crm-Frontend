import React from 'react';

function ResidenceAddressForm({ formData, setFormData }) {
    const handleResidenceChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            residenceAddress: {
                ...prevData.residenceAddress,
                [field]: value
            }
        }));
    };

    return (
        <div className="sm:col-span-4">
            <h2 className="text-base font-semibold py-3 leading-7 text-gray-900">RESIDENCE ADDRESS</h2>
            <label htmlFor="residenceAddress" className="block text-sm font-medium leading-6 text-gray-900">
                Residential Address
            </label>
            <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                    <input
                        type="text"
                        name="flat"
                        id="flat"
                        value={formData.residenceAddress.flat}
                        onChange={e => handleResidenceChange('flat', e.target.value)}

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
                        value={formData.residenceAddress.street}
                        onChange={e => handleResidenceChange('street', e.target.value)}
                        // ...
                        autoComplete="street"
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
                        value={formData.residenceAddress.city}
                        onChange={e => handleResidenceChange('city', e.target.value)}
                        // ...

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
                        value={formData.residenceAddress.state}
                        onChange={e => handleResidenceChange('state', e.target.value)}
                        // ...

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
                        value={formData.residenceAddress.landMark}
                        onChange={e => handleResidenceChange('landMark', e.target.value)}

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
                        value={formData.residenceAddress.pincode}
                        onChange={e => handleResidenceChange('pincode', e.target.value)}

                        className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Pincode"
                        required
                    />
                </div>
            </div>
        </div>
    );
}

export default ResidenceAddressForm;

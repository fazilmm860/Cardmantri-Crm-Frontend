


const SuccessBox = ({ applicationNumber,onClose }) => {

  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-75 w-full h-full absolute"></div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white relative z-10">
        <h2 className="text-2xl font-semibold mb-2">Your application submitted successfully!</h2>
        <p className="text-lg mb-4">Application Number: {applicationNumber}</p>
        <button
           onClick={onClose}     // Reset the formData state
          className="bg-yellow-500 text-black px-3 py-2 rounded-md font-semibold hover:bg-yellow-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessBox;

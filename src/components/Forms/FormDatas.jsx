import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios';
import ResidenceAddressForm from './ResidenceAddressForm';
import PermanentAddressForm from './PermanentAddressForm';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const selectcard=[
  {
    card:"Select"
  },
  {
    card:"Money Back"
  },
  {
    card:"Business Money Back "
  },
  {
    card:"Indian Oil"
  },
  {
    card:"Millennia"
  },
  {
    card:"Regalia"
  },
  {
    card:"Tata Neu Plus (Rupay) "
  },
  {
    card:"Tata Neu Infnity"
  },
  {
    card:"Shopper Stop Card"
  },
  {
    card:"Swiggy Card"
  },
  {
    card:"Freedom Card"
  },
  {
    card:"Diners Black Card"
  },
  {
    card:"Times Titainium Card"
  },
  {
    card:"Indigo 6E Rewards"
  },
 
]
const surrogate=[
  {
    type:"Select"
  },
  {
    type:"Salary Slip"
  },
  {
    type:"Card Against Card"
  },
  {
    type:"Floater Card"
  },
  {
    type:"Bajaj Emi"
  },
  {
    type:"ITR"
  },
  {
    type:"Doctor's Surrogate"
  },
  {
    type:"RC Base"
  },
]

const addressdetails=[
  {
    residence:"Select"
  },
  {
    residence:"Owned"
  },
  {
    residence:"Rented"
  },
  {
    residence:"Company Provided"
  },
  {
    residence:"Ancestral/Family"
  },
  {
    residence:"PG Accomadation"
  },
  {
    residence:"Resi Cum Office"
  },
]
const salary=[

  {
    type:'Private Ltd'
  },
  {
    type:'Partnership'
  },
  {
    type:'Proprietorship'
  },
  {
    type:'Public Ltd'
  },
  {
    type:'Public Sector'
  },
  {
    type:'Government'
  },
  {
    type:'Multinational'
  },
  {
    type:'Others'
  },
]
const self=[

  {
    type:'Sole Proprietorship'
  },
  {
    type:'Partnership'
  },
  {
    type:'Public Ltd'
  },
  {
    type:'Private Ltd'
  },
  {
    type:'Others'
  },
]


const FormDatas = () => {
  
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData,setFormData]=useState({
    date: new Date().toLocaleDateString(),
    applicationNumber:``,
    exeName: '',
    dseCode: '',
    cardSelect: '',
    surrogate: '',
    custName: {
        firstName: '',
        middleName: '',
        lastName: ''
    },
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    spouseName:'',
    qualification: '',
    other: '',
    panNumber: '',
    mobileNumber:'',
    altMobileNumber: '',
    email:'',
    residenceAddress: {
        flat:'',
        street:'',
        city:'',
        state:'',
        landMark:'',
        pincode:''
    },
     sameAsAbove:false,
    permanentAddress: {
        flat: '',
        street: '',
        city: '',
        state: '',
        landMark: '',
        pincode: ''
    },
    periodResidence: '',
    residenceIs: '',
    companyName: '',
    companyAddress: {
        flat: '',
        street: '',
        city: '',
        state: '',
        landMark: '',
        pincode: ''
    },
    designation: '',
    telNo: '',
    officeEmail: '',
    employmentType: '',
    employmentDetails: '',
    aadharFront:null,
    aadharBack:null,
    panCard:null,
    hdfcAcc: '',
    otherAcc: '',
    remark: ''
  })
  const handleDateChanged = (dates) => {
    try {
      const todayDate = new Date(dates);
      todayDate.setHours(0, 0, 0, 0);
      console.log("Today's Date:", todayDate);
      setFormData({
        ...formData,
        date: todayDate,
      });
    } catch (error) {
      console.error("Error in handleDateChanged:", error);
    }
  }; 
  const handleEmploymentTypeChange = (event) => {
    const newEmploymentType = event.target.value;
    setFormData({
      ...formData,
      employmentType: newEmploymentType,
      employmentDetails: '', // Reset details when employment type changes
    });
  };
  const handleEmploymentDetailsChange = (event) => {
    const newEmploymentDetails = event.target.value;
    setFormData({
      ...formData,
      employmentDetails: newEmploymentDetails,
    });
  };
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevData) => ({
    ...prevData,
    custName: {
      ...prevData.custName,
      [name]: value
    }
  }));
};
const handleCompanyAddChange=(event)=>{
const {name,value}=event.target;
setFormData((prevData)=>({
  ...prevData,
  companyAddress:{
    ...prevData.companyAddress,
    [name]:value
  }
}))
}

const handleSubmit=async (event)=>{
  let applicationNumber;
  try{
      event.preventDefault();// prevent the default form submmision

      //Validation check
    if(formData.exeName===''){
      toast.warning('Please enter the executive name',{
        position:'top-center'
      })
    }else if(formData.dseCode===''){       //
      toast.warning('Please enter the  DSE-Code',{
        position:'top-center'
      })
    }else if(formData.cardSelect==='Select'){
      toast.warning(`Please Select the Card`,{
        position:'top-center'
      })
    }else if(formData.surrogate==='Select'){
      toast.warning('Please Select the Surrogate',{
        position:'top-center'
      })
    }else if(formData.custName.firstName===''){
      toast.warning('Please enter the First Name',{
        position:'top-center'
      })
    }else if(formData.custName.lastName===''){
      toast.warning("Please enter the Last Name",{
        position:'top-center'
      })
    }else if(formData.dateOfBirth===''){
      toast.warning("Please Select the DOB",{
        position:'top-center'
      })
    }else if(formData.gender===''){
      toast.warning("please Select the Gender",{
        position:'top-center'
      })
    }else if(formData.maritalStatus===''){
      toast.warning("please Select the Marital Status",{
        position:'top-center'
      })
    }else if (formData.spouseName==='married'){
      toast.warning('Please enter your Spouse Name',{
        position:"top-center"
      })
    }else if(formData.qualification===''){
      toast.warning('Please Select your Qualification',{
        postion:'top-center'
      })
    }else if(formData.other==='other'){
      toast.warning('Please enter the Qualification',{
        position:'top-center'
      })
    }else if (formData.panNumber===''){
      toast.warning('Please enter the  Pan Number',{
        position:'top-center'
      })
    }else if(formData.mobileNumber===''){
      toast.warning('Please enter your Mobile Number',{
        position:'top-center'
      })
    }else if (formData.email===''){
      toast.warning('Please enter your Email',{
        position:'top-center'
      })
    }else if(formData.residenceAddress.flat===''){
      toast.warning('Please add residence flat Number or House Name',{
        position:'top-center'
      })
    }else if(formData.residenceAddress.street===''){
      toast.warning('Please add Street',{
        position:'top-center'
      })
    }else if(formData.residenceAddress.city===''){
      toast.warning('Please add City',{
        position:'top-center'
      })
    }else if(formData.residenceAddress.state===''){
      toast.warning('Please add street',{
        position:'top-center'
      })
    }else if (formData.residenceAddress.landMark===''){
      toast.warning('Please add landMark',{
        position:'top-center'
      })
    }else if(formData.residenceAddress.pincode===''){
      toast.warning('Please add Pincode',{
        position:'top-center'
      })
    }else if (formData.periodResidence ===''){
      toast.warning('Please add How long you are staying there?',{
        position:'top-center'
      })
    }else if(formData.residenceIs ===''){
      toast.warning('Please Residence Is',{
        position:'top-center'
      })
    }else if(formData.companyName === ''){
      toast.warning('Please enter your Company Name',{
        position:'top-center'
      })
    }else if(formData.companyAddress.flat===''){
      toast.warning(`Please enter Company Flat No or House Name`,{
        position:'top-center'
      })
    }else if(formData.companyAddress.street === ''){
      toast.warning('Please enter the street',{
        position:'top-center'
      })
    }else if(formData.companyAddress.city === ''){
      toast.warning('Please enter the city',{
        position:'top-center'
      })
    }else if(formData.companyAddress.state ===''){
      toast.warning('Please enter the State',{
        position:'top-center'
      })
    }else if(formData.companyAddress.landMark === ''){
      toast.warning('Please enter the Landmark',{
        position:'top-center'
      })
    }else if(formData.companyAddress.pincode === ''){
      toast.warning(`Please enter the Pincode`,{
        position:'top-center'
      })
    }else if(formData.designation === ''){
      toast.warning('Please enter the Designation',{
        position:'top-center'
      })
    }else if(formData.employmentType ==='Select'){
      toast.warning(`Please Select the Employment Type `,{
        position:'top-center'
      })
    }else if(formData.employmentDetails === 'Select'){
      toast.warning(`Please Select the Employment Details`,{
        position:'top-center'
      })
    }
    else{
      let formDataToSend = formData;
    
      if (formData.sameAsAbove) {
        formDataToSend = {
          ...formDataToSend,
          permanentAddress: formData.residenceAddress, 
        };
      }
      
      const response = await axios.post(`http://localhost:8000/api/sendData`, formDataToSend)
      // const { applicationNumber } = response.data;
      // alert(`Application Number: ${applicationNumber}`);
      applicationNumber = response.data.applicationNumber; // Assign the value here
    alert(`Application Number: ${applicationNumber}`);
      
     
          if(response.status===201){
              
           
           
          
            console.log(`Data submitted succesfully `);
          
           
            setShowSuccessModal(true);
            setFormData({
              date: new Date().toLocaleDateString(),
              exeName: '', 
              dseCode: '',
              cardSelect: '',
              surrogate: '',
              custName: {
                  firstName: '',
                  middleName: '',
                  lastName: ''
              },
              dateOfBirth: '',
              gender: '',
              maritalStatus: '',
              spouseName:'',
              qualification: '',
              other: '',
              panNumber: '',
              mobileNumber:'',
              altMobileNumber: '',
              email:'',
              residenceAddress: {
                  flat:'',
                  street:'',
                  city:'',
                  state:'',
                  landMark:'',
                  pincode:''
              },
              sameAsAbove: false,
              permanentAddress: {
                  flat: '',
                  street: '',
                  city: '',
                  state: '',
                  landMark: '',
                  pincode: ''
              },
              periodResidence: '',
              residenceIs: '',
              companyName: '',
              companyAddress: {
                  flat: '',
                  street: '',
                  city: '',
                  state: '',
                  landMark: '',
                  pincode: ''
              },
              designation: '',
              telNo: '',
              officeEmail: '',
              employmentType: '',
              employmentDetails: '',
              aadharFront:null,
              aadharBack:null,
              panCard:null,
              hdfcAcc: '',
              otherAcc: '',
              remark: ''
            })
            
            
        }
         toast.success(`Your Form is Successfully Submitted to Mirshad !!! `,{
          position:'top-center'
          })
  
    }
    


    
  }catch(error){
    console.log(error);   
    toast.error('Your Form is not Submitted due to some Error!!',{
      position:'top-center'
    })     
  }

}

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    <div className="border rounded-lg shadow-lg p-8 bg-white">
      <div className='flex flex-col justify-center items-center'>
      <div className="space-y-12 ">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Credit Card Application Form</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Fill this from properly
          </p>
            <DatePicker className="mt-4" selected={new Date(formData.date)} onChange={handleDateChanged}/>
            <div div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
           
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Executive Name <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="exeName"
                    id="exeName"
                    value={formData.exeName}
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Executive Name"
                    required
                  />
                </div>
                
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
              DSE-Code <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="dseCode"
                    id="dseCode"
                    value={formData.dseCode}
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Dse-Code"
                    required
                  />
                </div>
              </div> 
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="selectcard" className="block text-sm font-medium leading-6 text-gray-900">
                Select Card <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
               
                    <select
                    id="cardSelect"
                    name="cardSelect"
                    value={formData.cardSelect}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                     {selectcard.map((type)=>(
                    <option>
                      {type.card}
                    
                    </option>
                    ))}
                    
                    </select>
                
               
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="surrogate" className="block text-sm font-medium leading-6 text-gray-900">
                Surrogate <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
               
                    <select
                    id="surrogate"
                    name="surrogate"
                    value={formData.surrogate}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                     {surrogate.map((choose)=>(
                    <option>
                      {choose.type}
                    
                    </option>
                    ))}
                    
                    </select>
                
               
              </div>
            </div>

            <div className="sm:col-span-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">APPLICANT DETAILS</h2>
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                Customer Name(as per pan) <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.custName.firstName}
                    onChange={handleChange}
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
                    value={formData.custName.middleName}
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
                    value={formData.custName.lastName}
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
               Date of Birth <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
                <input
                  type='date'
                  id="dateOfBirth"
                  name='dateOfBirth'
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>

            </div>
            
            <div className="sm:col-span-4">
            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
               Gender <span style={{color:'red'}}>*</span>
              </label>
                <div className="flex items-center gap-x-3">
                  <input
                    id="gender"
                    name="gender"
                    type="radio"
                    value="male"
                    checked={formData.gender ==='male'}
                    onChange={handleInputChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                    male
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="gender"
                    name="gender"
                    type="radio"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleInputChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    
                  />
                  <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                    female
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="others"
                    name="others"
                    type="radio"
                    value="others"
                    checked={formData.gender ==='others'}
                    onChange={handleInputChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="others" className="block text-sm font-medium leading-6 text-gray-900">
                    others
                  </label>
                </div>
              
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="maritalStatus" className="block text-sm font-medium leading-6 text-gray-900">
                Marital Status <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
              
                    <select
                    id="maritalStatus"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    
                    >
                    <option>Select</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Others</option>
                    </select>
              </div>
              
              {formData.maritalStatus ==='Married'&&(
                 <div className="sm:col-span-4">
                 <label htmlFor="spousename" className="block text-sm font-medium leading-6 text-gray-900">
                   Spouse Name
                 </label>
                 <div className="mt-2">
                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                     <input
                       type="text"
                       name="spouseName"
                       value={formData.spouseName}
                       onChange={handleInputChange}
                       id="spousename"
                       autoComplete="spousename"
                       className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                       placeholder="Spouse Name"
                       required
                     />
                   </div>
                   </div>
                 </div>
              )}
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="qualification" className="block text-sm font-medium leading-6 text-gray-900">
               Qualification <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
              
                    <select
                    id="qualification"                   
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                    >
                    <option>Select</option>
                    <option>10th / 12th</option>
                    <option>Graduate</option>
                    <option>Professional</option>
                    <option>Others</option>
                    </select>
              </div>
              
              {formData.qualification==='Others'&&(
                 <div className="sm:col-span-4">
                 <label htmlFor="others" className="block text-sm font-medium leading-6 text-gray-900">
                  Please Specify
                 </label>
                 <div className="mt-2">
                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                     <input
                       type="text"
                       name="other"
                       value={formData.other}
                       onChange={handleInputChange}
                       id="other"
                       autoComplete="other"
                       className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                       placeholder="Please Specify"
                       required
                     />
                   </div>
                   </div>
                 </div>
              )}
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="panNumber" className="block text-sm font-medium leading-6 text-gray-900">
              Pan Number <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="panNumber"
                    id="panNumber"
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Etpk1043q"
                  />
                </div>
              </div> 
            </div>

            <div className="sm:col-span-4">
                      <label htmlFor="mobileNumber" className="block text-sm font-medium leading-6 text-gray-900">
                      Mobile Number <span style={{color:'red'}}>*</span>
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="number"
                            name="mobileNumber"
                            id="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            autoComplete="mobileNumber"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Customer mobile number"
                            required
                          />
                        </div>
                      </div>
                  </div>

                  <div className="sm:col-span-4">
                      <label htmlFor="altMobileNumber" className="block text-sm font-medium leading-6 text-gray-900">
                      Alt.Mobile Number
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="number"
                            name="altMobileNumber"
                            id="altMobileNumber"
                            value={formData.altMobileNumber}
                            onChange={handleInputChange}
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="alternative number"
                           
                          />
                        </div>
                      </div>
                  </div>

                  <div className="sm:col-span-4"> 
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email ID <span style={{color:'red'}}>*</span>
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            autoComplete="email"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="email"
                            required
                          />
                        </div>
                      </div>
                  </div>
            
                  <ResidenceAddressForm formData={formData} setFormData={setFormData} />
                  

              <div className="sm:col-span-4">
              <label htmlFor="sameadd" className="block text-sm font-medium leading-6 text-gray-900">
              Same as above (Copy Residential Address to Permanent Address)
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="checkbox"
                    name="sameAsAbove"
                    checked={formData.sameAsAbove}
                    onChange={e => setFormData(prevData => ({ ...prevData, sameAsAbove: e.target.checked }))}
                    id="sameAsAbove"                   
                    autoComplete="sameAsAbove"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="mIRSHAD ALI"
                    
                  />
                </div>
              </div> 
            </div>
                 {formData.sameAsAbove ? (
                  <PermanentAddressForm formData={{ ...formData, permanentAddress: formData.residenceAddress }} setFormData={setFormData} />
                ) : (
                  <PermanentAddressForm formData={formData} setFormData={setFormData} />
                )}
                  <div className="sm:col-span-4">
              <label htmlFor="periodResidence" className="block text-sm font-medium leading-6 text-gray-900">
               Period at current Residence <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="number"
                    name="periodResidence"
                    id="periodResidence"
                    value={formData.periodResidence}
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
                Your Residence is <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
               
                    <select
                    id="residenceIs"
                    name="residenceIs"
                    value={formData.residenceIs}
                    onChange={handleInputChange}
                    autoComplete="residenceIs"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                     {addressdetails.map((type)=>(
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
                       Company Name <span style={{color:'red'}}>*</span>
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      
                        <input
                          type="text"
                          name="companyName"
                          id="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          autoComplete="companyName"
                          className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Company Name"
                          required
                        />
                      </div>
                    </div>
                      <label htmlFor="flat" className="block text-sm font-medium leading-6 text-gray-900">
                      Company Address <span style={{color:'red'}}>*</span>
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        
                          <input
                            type="text"
                            name="flat"
                            id="flat"
                            value={formData.companyAddress.flat}
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
                            value={formData.companyAddress.street}
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
                            value={formData.companyAddress.city}
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
                            value={formData.companyAddress.state}
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
                            value={formData.companyAddress.landMark}
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
                            value={formData.companyAddress.pincode}
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
                Designation <span style={{color:'red'}}>*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    value={formData.designation}
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
                    value={formData.telNo}
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
                    value={formData.officeEmail}
                    onChange={handleInputChange}
                    autoComplete="officeEmail"
                    className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Office E-mail ID"
                    
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <h2 className="text-2xl font-semibold mb-4">Occupation Type <span style={{color:'red'}}>*</span></h2>
              <div className="mb-4">
                <label htmlFor="Salaried" className='flex items-center mb-2'>
                  <input
                  type='radio'
                  name="Salaried"
                  id="Salaried"
                  value="Salaried"
                  checked={formData.employmentType === 'Salaried'}
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
                  checked={formData.employmentType === 'Self-employment'}
                  onChange={handleEmploymentTypeChange}
                  autoComplete='Self-employment'
                  className="mr-2"
                  />
                 Self-Employed
                </label>
              </div>
              {formData.employmentType  &&(
                <select value={formData.employmentDetails}
                onChange={handleEmploymentDetailsChange}
                >
                  <option value="">Select</option>
                  {formData.employmentType === 'Salaried' ?(
                    salary.map((option, index)=>(
                      <option key={index} value={option.type}>
                        {option.type}
                      </option>
                    ))
                  ):(
                    self.map((option,index)=>(
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
                                  type="number"
                                  name="hdfcAcc"
                                  id="hdfcAcc"
                                  value={formData.hdfcAcc}
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
                            value={formData.otherAcc}
                            onChange={handleInputChange}
                            autoComplete="otherAcc"
                            className="block flex-1 border-0 bg-transparent text-transform: uppercase py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Account Number"
                           
                          />
                        </div>
                      </div>
                  </div>
                  

            
            
                <div className="col-span-full">
                  <label  className="block text-sm font-medium leading-6 text-gray-900">
                    Remark
                  </label>
                  <div className="mt-2">
                    <textarea
                      type='text'
                      name='remark'
                      id='remark'
                    
                      value={formData.remark}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Give your valuable remarks</p>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <Link to='/image'>  
                  <button type="button" className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600" required>
                    Upload Images
                  </button>
                  </Link>
                  </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  
                  <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                  </button>
             
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save
                    </button>
                </div>

            </div>
          

     </div>
     </div>
    </div>
    <ToastContainer/>
    </div>
    </div>
  )
}

export default FormDatas


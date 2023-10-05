import React from 'react';
import {  Card,  Typography } from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import EditModel from "../edit/EditModel";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../ContextProvider/Context";
import { Box, CircularProgress } from "@mui/material";
import ViewPage from "../viewPage/ViewPage";



const TABLE_HEAD = ["date","Application Number" ,"Exe Name", "DseCode", "Select Card","Surrogate" ,"First Name","Middle Name", "Last Name","DOB","Gender","Marital State",
"Spouse Name","Qualification","Other","Pan Number","Mobile Number","Alt.Mobile Number","Email","Residence.Flat","Residence.Street",
"Residence.City","Residence.state","Residence.Landmark","Residence.Pincode","Permanent.Flat","Permanent.Street","Permanent.City","Permanent.State","Permanent.Landmark",
"Permanent.Pincode","Period at current Residence","Residence is","Company Name","Company.Flat","Company.Street","Company.City","Company.State","Company.LandMark","Company.PinCode",
"Designation","Tel.No","Office E-Mail ID","Occupation-type","Sector","HDFC Account No","Other Bank Account No","Remarks","View","Image","Edit","Delete"];




 function DefaultTable() {
    const [formData, setFormData] = useState([]);

    const [editData, setEditData] = useState(null);

    const handleEditClick=(data)=>{
        setEditData(data)
      }
      const handleEditSave = async (editedData) => {
        try {
          const url = `http://localhost:8000/api`;
      
          const shouldSave = window.confirm('Are you sure you want to save the edited data and send this to mirshad?'); // Confirmation prompt
      
          if (shouldSave) {
            const response = await axios.put(`${url}/edit/${editedData._id}`, editedData);
            console.log(response.data.message);
      
            const updatedFormData = formData.map((item) =>
              item._id === editedData._id ? editedData : item
            );
            setFormData(updatedFormData);
            console.log(`Updated successfully ${JSON.stringify(updatedFormData)}`);
            setEditData(null);
          }
        } catch (error) {
          console.error(`Error in updating data: ${error}`);
        }
      }
      

      const handleEditCancel=()=>{
        setEditData(null)
      };
      
      const handleDeleteClick = async (itemId) => {
        try {
          const shouldDelete = window.confirm('Are you sure you want to delete this item?'); // Confirmation prompt
      
          if (shouldDelete) {
            const response = await axios.delete(`http://localhost:8000/api/delete/${itemId}`);
            console.log(response.data.message);
            // Optionally, you can fetch data again after deletion
            fetchData();
          }
        } catch (error) {
          console.error(`Error in deleting data: ${error}`);
        }
      };
      
useEffect(()=>{
    fetchData();
},[]);
const fetchData=async()=>{
    try{
        
        const response=await axios.get(`http://localhost:8000/api/getdata`)
        setFormData(response.data.message)
        console.log(Array.isArray(response.data.message)); 
        console.log(response.data);
    }catch(error){
        console.error(`Error in fetching data:${error}`);
    }
}
const {logindata,setLoginData}=useContext(LoginContext);

const [data,setData]=useState(false);


const history=useNavigate();

const DashboardValid=async()=>{
    let token=localStorage.getItem("userdatatoken");

    const res=await fetch("http://localhost:8000/api/validuser",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":token
        }
    });
    const data=await res.json();
    
    if(data.status==401 ||!data){
        history("*");
    }else{
        console.log("user verify");
        setLoginData(data)
        history("/admin");
    }
}
useEffect(()=>{
    setTimeout(()=>{
        DashboardValid();
        setData(true)
    },2000)
},[])

const [specificdata,setSpecifcdata]=useState('')
const handleViewClick = (itemId) => {
    // You can set a state variable to control the visibility of the modal
    setSpecifcdata(itemId);
};

const closeViewModal = () => {
    // Close the modal by setting specificData to an empty string or null
    setSpecifcdata("");
};




return (
    
    

    <>
    <Card className="h-full w-full overflow-scroll">
    {
        data ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          
          
        </div> : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
            Loading... &nbsp;
            <CircularProgress />
        </Box>
    }
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        
         { formData.map((item, index) => {
            const custName = item.custName || {};
            const residenceAddress=item.residenceAddress || {};
            const permanentAddress=item.permanentAddress || {};
            const companyAddress=item.companyAddress || {};
            const isLast = index === item.length - 1;
            const classes =  "p-4 border-b border-blue-gray-50";
 
            return (
                <tr key={index}>
                    
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.date}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.applicationNumber}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.exeName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.dseCode}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.cardSelect}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.surrogate}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {custName.firstName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {custName.middleName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {custName.lastName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.dateOfBirth}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.gender}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.maritalStatus}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.spouseName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.qualification}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.other}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.panNumber}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.mobileNumber}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.altMobileNumber}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.email}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                       {residenceAddress.flat}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.street }
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.city }
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.state }
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.landMark }
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {residenceAddress.pincode }
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.flat}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.street}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.city}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.state}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.landMark}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {permanentAddress.pincode}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.periodResidence}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.residenceIs}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.companyName}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.flat}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.street}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.city}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.state}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.landMark}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {companyAddress.pincode}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.designation}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.telNo}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.officeEmail}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.employmentType}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.employmentDetails}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.hdfcAcc}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.otherAcc}
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.remark}
                   
                    </Typography>
                </td>
                  <td className={classes}>
                  <Link to={`/view/${item._id}`}>
                    <Typography
                        as="a"
                       
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                    >
                   
                      <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => handleViewClick(item._id)}
                    >
                     View
                    </button>
                    
                    </Typography>
                    </Link>
                    

                  
             </td>
            

                <td className={classes}>
                <Link to="/getImage">
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                    >
                      <button
                    type="submit"
                      
                      className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                     get-Image
                    </button>
                    </Typography>
                    </Link>
                </td>
           
                <td className={classes}>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                    >
                      <button
                    type="submit"
                      onClick={ ()=>handleEditClick(item)}
                      className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                     Edit
                    </button>
                    </Typography>
                </td>
                <td className={classes}>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        onClick={() => handleDeleteClick(item._id)}
                        color="blue-gray"
                        className="font-medium"
                    >
                       <button
                      type="submit"
                     
                      className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Delete
                    </button>
                    </Typography>
                </td>
                
              </tr>
            
            )
         })}
         {specificdata && (  
                <ViewPage itemId={specificdata} onClose={closeViewModal} />
            )}
        </tbody>
      </table>

    
    </Card>
    {editData && (
        <EditModel
          data={{
            ...editData,
        }}
          onSave={handleEditSave}
          onCancel={handleEditCancel}
        />  
      )}
 

 </>
  );
}


                  
export default DefaultTable
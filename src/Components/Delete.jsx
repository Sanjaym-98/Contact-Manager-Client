import React, { useContext } from 'react';

import { GlobalContext } from './HomePage';
import axios from 'axios';
import "./cards.css"
import "./images/delete.png"
import { blue } from '@mui/material/colors';

import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';


const DeleteCard = (props) => {
    const {deleteArr, setInvokeDelete , fetchContacts,delSuc, setDelSuc } = useContext(GlobalContext)
    // const {deleteArr, setInvokeDeleteCard, getData} = useContext(GlobalContext)
    const token = JSON.parse(localStorage.getItem("token"))

    const handleDelete=async()=>{
       console.log("delete",deleteArr)
        setInvokeDelete(false);
            axios('https://contactmanagerbackend-w58d.onrender.com/api/v1/contacts', {
            method:"delete",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":token
            },
            data:deleteArr
        })
        .then((res)=>{ 
            console.log("entered delete")
            setDelSuc(true)
            fetchContacts()})
        .catch((e)=>console.log(e))
        }

    
    const handleCancel = () => {
        setInvokeDelete(false)
    }
    return (
        <div id='popupCard' className='popup-card'>
            <p className='icondelete'>
            <DeleteForeverSharpIcon sx={{ fontSize: 44, color: blue[400] }}></DeleteForeverSharpIcon>
            </p>
            <div>
                <h3 className='text-danger'>Delete Contacts</h3>
            </div>
            <i className='fa fa-trash text-warning fa-5x'></i>
            <div className='delbtncontainer'>
                <button className='cancelbtn' onClick={handleCancel}>cancel</button>
                <button className='btn btn-danger px-5' onClick={handleDelete}>OK</button>
            </div>
                    
        </div>
    );
}

export default DeleteCard;
import React, { useContext } from 'react';

import { GlobalContext } from './HomePage';
import axios from 'axios';
import "./cards.css"

const DeleteCard = (props) => {
    const {deleteArr, setInvokeDelete , fetchContacts } = useContext(GlobalContext)
    // const {deleteArr, setInvokeDeleteCard, getData} = useContext(GlobalContext)
    const token = JSON.parse(localStorage.getItem("token"))

    const handleDelete=async()=>{
       console.log(deleteArr)
        setInvokeDelete(false);
            axios('https://localhost:5000/api/v1/contacts', {
            method:"delete",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":token
            },
            data:deleteArr
        })
        .then((res)=>{ 
            console.log("entered delete")
            fetchContacts()})
        .catch((e)=>console.log(e))
        }

    
    const handleCancel = () => {
        setInvokeDelete(false)
    }
    return (
        <div id='popupCard' className='popup-card'>
            <div>
                <h4 className='text-danger'>Delete Files</h4>
            </div>
            <i className='fa fa-trash text-warning fa-5x'></i>
            <div>
                <button className='btn btn-danger px-5' onClick={handleCancel}>OK</button>
            </div>
                    
        </div>
    );
}

export default DeleteCard;
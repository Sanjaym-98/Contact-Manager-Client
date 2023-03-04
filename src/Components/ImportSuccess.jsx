import React, { useContext } from 'react';
import { parse } from "papaparse"
import axios from 'axios';
import { GlobalContext } from './HomePage';
import {blue } from '@mui/material/colors';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Button from '@mui/material/Button';
import "./Import.css"

const ImportSuccessCard = (props) => {
    const { setInvokeImport, fetchContacts } = useContext(GlobalContext)
   const token = JSON.parse(localStorage.getItem("token"))

   
    const handleCancel = () => {
        setInvokeImport(false)
    }
    return (
        <div id='popupCard' className='popupCard'>
            
            <div>
                <div>
                    <p className='iconSucc'>
                        
                        <CheckCircleIcon sx={{ fontSize: 50 }} color="primary" className='icon' />
                    </p>
                </div>
                <h3>Imported File Successfully</h3>
                
            </div>
            <div>
            </div>
           
        </div>
    );
}

export default ImportSuccessCard;
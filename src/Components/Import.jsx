import React, { useContext } from 'react';
import { parse } from "papaparse"
import axios from 'axios';
import { GlobalContext } from './HomePage';
import {blue } from '@mui/material/colors';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Button from '@mui/material/Button';
import "./Import.css"

const ImportCard = (props) => {
    const {invSuc, setInvSuc, setInvokeImport, fetchContacts } = useContext(GlobalContext)
   const token = JSON.parse(localStorage.getItem("token"))

    const handleCSVFile=(e)=>{
        console.log("Enter handle csv")
        e.preventDefault()
        setInvokeImport(false)
        Array.from(e.dataTransfer.files).map(async (data)=>{
            let text = await data.text()
            //npm install papaparse
            let result = parse(text, {header:true})
            console.log(result)
            
            axios('https://contactmanager-22.onrender.com/api/v1/contacts',{
            method:"POST",
            headers:{
                "Authorization":token
            },
            data:result.data
        })
        .then((res)=>{
            console.log(res)
            setInvSuc(true)
            fetchContacts()
        }).catch(e=>{
            console.log(e)
        })
        })   
    }
    const handleCancel = () => {
        setInvokeImport(false)
    }
    return (
        <div id='popupCard' className='popupCard'
            onDragOver={(e) => { e.preventDefault() }}
            onDrop={handleCSVFile}>
            <div>
                <div>
                    <p className='icon'>
                        
                        <NoteAddIcon sx={{ fontSize: 50 }} color="primary" className='icon' />
                    </p>
                </div>
                <h3>Import File</h3>
                <h4>Drag & Drop CSV
                    <br/> File here</h4>
            </div>
            <div>
                <input type="file" onChange={(e) => { console.log(e.target) }} style={{ display: 'none' }} />
            </div>
            <i className="fa fa-upload fa-5x text-primary "></i>

            <div>
                <button className='cancelbtn' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default ImportCard;
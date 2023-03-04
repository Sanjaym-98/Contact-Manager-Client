import React, { useContext } from 'react';
import { parse } from "papaparse"
import axios from 'axios';
import { GlobalContext } from './HomePage';
import "./cards.css"

const ImportCard = (props) => {
    const { setInvokeImport, fetchContacts } = useContext(GlobalContext)
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
            
            axios('http://localhost:5000/api/v1/contacts',{
            method:"POST",
            headers:{
                "Authorization":token
            },
            data:result.data
        })
        .then((res)=>{
            console.log(res)
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
                    </p>
                </div>
                <h4>drag & drop file here</h4>
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
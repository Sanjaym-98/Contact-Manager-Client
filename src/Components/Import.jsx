import React, { useContext } from 'react';
import { parse } from "papaparse"
import axios from 'axios';
import { GlobalContext } from './HomePage';
import "./Import.css"

const ImportCard = (props) => {
    const { setInvokeImport } = useContext(GlobalContext)

    const handleCSVFile = (e) => {
        console.log("droppeedd")
        e.preventDefault()
        setInvokeImport(false)
        // Array.from(e.dataTransfer.files).map(async (data) => {
        //     let text = await data.text()
        //     //npm install papaparse
        //     let result = parse(text, { header: true })
            


        // })
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
            <div>
                <button className='cancelbtn' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default ImportCard;
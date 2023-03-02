import React, { useContext } from 'react';

import { GlobalContext } from './HomePage';
import "./Import.css"

const DeleteCard = (props) => {
    const { setInvokeDelete } = useContext(GlobalContext)

    
    const handleCancel = () => {
        setInvokeDelete(false)
    }
    return (
        <div id='popupCard' className='popupCard'>
            
            <div>
                
                <h4>Are you sure to delete Files..</h4>
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

export default DeleteCard;
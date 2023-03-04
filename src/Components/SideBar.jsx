import React from 'react';
import "./SideBar.css"
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate()
    const handlelogout = () => {
        console.log(localStorage)
        localStorage.removeItem('userdetails')
        console.log(localStorage.getItem("userdetails"))
        localStorage.removeItem('token');
        localStorage.clear()
        navigate('/')
    }

    return (
        <div className='side'>
            <div className='side-upper'>
                <h1 className='logo' >Logo</h1>
                <div className='side-dashboard'>
                    <DashboardIcon />
                    <span className='dash'>Dashboard</span>
                </div>
                <div className='side-totalContact'>
                    <p className='total-contact'>
                        <ContactsIcon style={{ color: 'white' }} />
                        <span className='total'>Total Contacts</span>
                        <span className='line'></span>
                    </p>
                </div>
            </div>
            <div className='logout-div'  >
                <div onClick={handlelogout} className="log-out-cont">
                    <LogoutIcon className='logouticon'/>
                    <span className='logout' >Log out</span>
                </div>
                
            </div>
        </div>
    );
}


export default SideBar;
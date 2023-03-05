import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import dontsPic from './images/Group 100.png'
import { Link } from 'react-router-dom';
import './SignIn.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

const Login = (props) => {
    const navigate = useNavigate()
    const [data, setData] = useState({ email: "", password: "" })
    const [visibility, setVisibility] = useState("password")
    const [switchIcon, setSwitchIcon] = useState(true)
    const [valid, setValid] = useState(false)
    // const [message, setMessage] = useState({status:"", message:""})
    // useEffect(()=>{
    //     const getUserDetails = JSON.parse(localStorage.getItem("token"))
    // if(getUserDetails){
    //     navigate("/main")
    // }
    // },[])

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        if (data.password.length > 5) {
            axios.post('https://contactmanager-22.onrender.com/api/v1/login', data)

                .then(result => {
                    console.log(data)
                    console.log(result)
                    localStorage.setItem('token', JSON.stringify(result.data.message.token))
                    localStorage.setItem('userdetails', JSON.stringify(result.data.message.userdetails))
                    setData({ email: "", password: "" })
                    setValid(false)
                    navigate('/homepage')
                }).catch((e) => {

                    console.log(e.message)
                    setValid(true)
                })
        }
    }


    return (
        <React.Fragment>
            <main className='main-cont '>
                <img className='img-1' src={require('./images/Ellipse 31.png')} alt="round" />
                <section className='form-container col-lg-10'>

                    <img src={dontsPic} className="dotsImg1" alt="dots" />

                    <div className="row d-flex align-items-center justify-content-center ">
                        <div className="col-8  d-flex align-items-center justify-content-center" style={{ textAlign: "center" }}>
                            <div className="row">

                                <div className="col">
                                    <div className="row">
                                        <h1 className='logo'>Logo</h1>
                                        <p>Enter your credentials to access your account</p>
                                        <div className="row d-flex justify-content-center align-items-center h-100">
                                            <div className="col-lg-10 ">
                                                <form className='formdata' onSubmit={handleSubmit}>
                                                    <div className='col-sm-12 inputBoxp'>
                                                        <input className='form-control m-2 px-5' type='email' name="email" placeholder='User Id' required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                                                        <EmailIcon sx={{ fontSize: 20 }} className='icond'/>
                                                    </div>

                                                    <div className='col-sm-12 inputBoxp'>
                                                        <input className='form-control m-2 px-5 passwd' type={visibility} name='password' placeholder='Password' value={data.password} required onChange={(e) => setData({ ...data, password: e.target.value })} />
                                                        <span>{switchIcon ? <VisibilityIcon  sx={{ fontSize: 18 }} onClick={() => { setVisibility("text"); setSwitchIcon(!switchIcon) }} className="icond" />
                                                            : <VisibilityOffIcon  sx={{ fontSize: 18 }} onClick={() => { setVisibility("password"); setSwitchIcon(!switchIcon) }} className="icond" />}</span>
                                                        {/* <KeyIcon className='icons'/> */}
                                                        {/* <span>{switchIcon?<VisibilityIcon onClick={()=>{setVisibility("text"); setSwitchIcon(!switchIcon)}} className="visibility"/>
                                                        :<VisibilityOffIcon onClick={()=>{setVisibility("password");setSwitchIcon(!switchIcon)}} className="visibility"/>}</span> */}
                                                    </div>
                                                    {valid ? <small style={{color :"red"}}>Invalid Credintials</small> : ""}
                                                    {/* <button className='signin m-2 p-1 rounded-2'>Sign Inn</button> */}
                                                    <button className='signin m-2 p-1 rounded-2'>Sign In</button>
                                                    <Link to={'/signup'}><button className='signUp m-2 p-1 rounded-2'>Sign Up</button></Link>

                                                </form>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img src={dontsPic} alt="dots" style={{ "width": "20%", "height": "30%", opacity: 0.8, position: "absolute", bottom: "0px", left: "0px", margin: "10px" }} id='dotsImg2' />

                    </div>
                </section>
                <img className='img-2' src={require('./images/Ellipse 32.png')} alt="right dot" />
            </main>
        </React.Fragment>
    );
}

export default Login;
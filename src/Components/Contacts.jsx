import React, { useContext } from "react";
import { GlobalContext } from "./HomePage";
import "./contacts.css"
import IosShareIcon from '@mui/icons-material/IosShare';
import FilterListSharpIcon from '@mui/icons-material/FilterListSharp';
import { red, blue } from '@mui/material/colors';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
const Contacts = () => {

    const { setInvokeImport, contactsArr, setContactsArr, setDeleteArr, setInvokeDelete, handleDeleteMany } = useContext(GlobalContext)

    const handleCheckbox = (e) => {
        const { id, checked } = e.target
        if (id === "selectAll") {
            const tempArr = contactsArr.map(user => { return { ...user, isChecked: checked } })
            setContactsArr(tempArr)
        }
        else {
            const tempArr = contactsArr.map((data) => data._id === id ? { ...data, isChecked: checked } : data)
            setContactsArr(tempArr)
        }

    }
    return (
        <div>
            <>
                <div className="headerbody">
                    <div className="btncontainers">
                        <div className="leftBtns">
                            <div className="headerCmn decH">
                                <CalendarMonthSharpIcon sx={{ fontSize: 22 }}></CalendarMonthSharpIcon>
                                <p className="calender">  Select Date</p>
                                <ExpandMoreSharpIcon></ExpandMoreSharpIcon>
                            </div>
                            <div className="headerCmn decH">
                                <FilterListSharpIcon></FilterListSharpIcon>
                                <p> Filter |</p>
                                <ExpandMoreSharpIcon></ExpandMoreSharpIcon>
                            </div>
                        </div>
                        <div className="rightBtns">
                            <div className="headerCmn decH" onClick={() => {
                                setInvokeDelete(false)
                                setInvokeImport(true)

                            }}>
                                <ImportExportSharpIcon></ImportExportSharpIcon>
                                <p id="headBtn" className="headBtn" > Import</p>
                            </div>
                            <div className="headerCmn decH" onClick={() => {
                                setInvokeImport(false)
                                // setInvokeDelete(true)
                                handleDeleteMany()
                            }}>
                                <DeleteOutlineSharpIcon></DeleteOutlineSharpIcon>
                                <p className="headBtn" > Delete</p>
                            </div>
                            <div className="headerCmn decH">
                                <IosShareIcon></IosShareIcon>
                                <p className="headBtn" >Export</p>

                            </div>
                        </div>

                    </div>


                </div>

            </>
            <>

                <table id="tableh" className='table table-striped'>
                    <thead className='table-header text-bg-secondary'>
                        <tr className='danger'>
                            <th>
                                <input id={"selectAll"}
                                    checked={contactsArr.filter(data => data?.isChecked !== true).length < 1}
                                    onChange={handleCheckbox} type='checkbox' />
                            </th>
                            <th>Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Company</th>
                            <th scope="col">Industry</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Country</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contactsArr.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <input id={data._id}
                                                onChange={handleCheckbox}
                                                checked={data?.isChecked || false}
                                                type='checkbox' />
                                        </td>
                                        <td>{data?.name}</td>
                                        <td>{data?.designation}</td>
                                        <td>{data?.company}</td>
                                        <td>{data?.industry}</td>
                                        {/* <td>{data?.email}</td> */}
                                        <td class="tooltip">{data?.email}
                                            <span class="tooltiptext">{data?.email}</span>
                                        </td>                                        <td>{data?.phonenumber}</td>
                                        <td>{data?.country}</td>
                                        {/* <td><button className='btn' id={data._id} onClick={(e) => {
                                            setInvokeDelete(true)
                                            setDeleteArr([data._id])
                                        }
                                        }><i className='fa fa-trash m-1 text-danger' onClick={() =>{handleDelete()}}></i></button></td> */}
                                        <td><span></span>
                                            <button className='btn' id={data._id} >
                                                <ModeEditOutlinedIcon sx={{ fontSize: 18, color: blue[300] }}></ModeEditOutlinedIcon> <hr />
                                                <DeleteOutlineSharpIcon sx={{ fontSize: 20, color: red[300] }} onClick={(e) => {
                                                    setInvokeDelete(true)
                                                    setDeleteArr([data._id])
                                                }
                                                } className='sucess' />

                                            </button></td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
            </>
        </div>
    )
}
export default Contacts;
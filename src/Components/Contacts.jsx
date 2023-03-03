import React, { useContext } from "react";
import { GlobalContext } from "./HomePage";
import "./contacts.css"

const Contacts = () => {

    const { setInvokeImport, contactsArr, setContactsArr, setDeleteArr, setInvokeDelete } = useContext(GlobalContext)

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
                    <input type="date" />

                    <select id="filter">
                        <option>Filter</option>
                    </select>
                    <div className="belowHeader">
                        <button onClick={() => {
                            setInvokeDelete(false)
                            setInvokeImport(true)
                        }}> Import</button>
                        <button onClick={() => {
                            setInvokeImport(false)
                            setInvokeDelete(true)
                        }}>Delete</button>
                        <button>Export</button>
                    </div>
                </div>
            </>
            <>

                <table className='table table-striped'>
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
                                        <td>{data?.email}</td>
                                        <td>{data?.phonenumber}</td>
                                        <td>{data?.country}</td>
                                        <td><button className='btn' id={data._id} onClick={(e) => {
                                            setInvokeDelete(true)
                                            setDeleteArr([data._id])
                                        }
                                        }><i className='fa fa-trash m-1 text-danger'></i></button></td>
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
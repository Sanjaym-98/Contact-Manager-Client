import React,{ useState, useEffect} from "react";
import Header from "./Header";
import Contacts from "./Contacts";
import "./HomePage.css"
import ImportCard from "./Import";
import DeleteCard from "./Delete";
import axios from "axios";




export const GlobalContext = React.createContext()

const HomePage = () => {

    const [invokeImport, setInvokeImport] = useState(false)
    const [invokeDelete,setInvokeDelete] = useState(false)
    const [invokeImportSuccess, setInvokeImportSuccess] = useState(false)
    const [invokeDeleteSuccess,setInvokeDeleteSuccess] = useState(false)
    const [deleteArr, setDeleteArr] = useState([])
    const [contactsArr, setContactsArr] = useState([])

    const token = JSON.parse(localStorage.getItem("token"))
    useEffect(() => {
        fetchContacts()
    }, [])
    function fetchContacts() {
        axios('https://localhost/app/v1/contacts', {
            method: 'get',
            headers: {
                "Authorization": token
            }
        }).then((result) => {
            setContactsArr(result.data.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    
    
    //handle delete multiple by checkbox
    const handleDeleteMany=()=>{
        setInvokeDelete(true)
        const tempArr = contactsArr.filter((data)=>{return data.isChecked})
        .map(data=>data._id)
        
        setDeleteArr(tempArr)
    }
    

    console.log(invokeImport)
    return (
        <GlobalContext.Provider value={{invokeDeleteSuccess,setInvokeDeleteSuccess,invokeImportSuccess, setInvokeImportSuccess,deleteArr, handleDeleteMany, setDeleteArr, setContactsArr, contactsArr, invokeImport, setInvokeImport, invokeDelete,setInvokeDelete, fetchContacts}} >
        <div className="mainContainer">
        

            <div className="aside">
                Aside
            </div>
            <div className="bodycontainer">
                <div className="header">
                    
                    <Header />
                </div>
                <div className="contentbody">
                     
                    
                     <Contacts />
                </div>
                
            </div>
            {invokeImport ? <ImportCard /> : ""}
            {invokeDelete ? <DeleteCard /> : ""}

        </div>
        </GlobalContext.Provider>
    )
}


export default HomePage;
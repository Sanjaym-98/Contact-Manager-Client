import React,{ReactDOM, useState} from "react";
import Header from "./Header";
import Contacts from "./Contacts";
import "./HomePage.css"
import ImportCard from "./Import";
import DeleteCard from "./Delete";




export const GlobalContext = React.createContext()

const HomePage = () => {

    const [invokeImport, setInvokeImport] = useState(false)
    const [invokeDelete,setInvokeDelete] = useState(false)
    

    console.log(invokeImport)
    return (
        <GlobalContext.Provider value={{invokeImport, setInvokeImport, invokeDelete,setInvokeDelete}} >
        <div className="mainContainer">
        

            <div className="aside">
                Aside
            </div>
            <div className="bodycontainer">
                <div className="header">
                    Header
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
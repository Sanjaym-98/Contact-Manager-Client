import React,{ReactDOM, useContext} from "react";
import "./Header.css"
import { GlobalContext } from "./HomePage";

const Header = () =>{
    const {setInvokeImport} = useContext(GlobalContext)
    const {setInvokeDelete} = useContext(GlobalContext)
    return(
        <div className="">
            <div>
                <input type="text" placeholder="Enter your search" />
            </div><br></br>
            <div className="headerbody">
                <input type="date" />
                
                <select id="filter">
                    <option>Filter</option>
                </select>
                <button onClick={() => {
                    setInvokeDelete(false)
                    setInvokeImport(true)}}> Import</button>
                <button onClick={() => {
                    setInvokeImport(false)
                    setInvokeDelete(true)}}>Delete</button>
            </div>
        </div>
    )
}
export default Header;
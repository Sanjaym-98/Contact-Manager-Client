import React,{ReactDOM, useContext} from "react";
import "./Header.css"
import { GlobalContext } from "./HomePage";

const Header = () =>{
    const {setInvokeImport} = useContext(GlobalContext)
    const {setInvokeDelete} = useContext(GlobalContext)
    return(
        <div className="">
            <div className="headercontainer">
                <h3>Total Contacts</h3>
                <input type="text"  placeholder="Search your mail here"/>
                <div className="usercontainer">
                    <div>
                        <img className="headerimage" src=""  alt="img"/>
                    </div>
                    <div>
                        <small><p>Name</p></small>
                        <small><p>Super Admin</p></small>
                        
                    </div>
                </div>
            </div>
        <hr/>

            
        </div>
    )
}
export default Header;

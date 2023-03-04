import React,{ReactDOM,useState, useContext, useEffect} from "react";
import "./Header.css"
import { GlobalContext } from "./HomePage";
import axios from "axios";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Header = () =>{
    const {setInvokeImport} = useContext(GlobalContext)
    const {setInvokeDelete, setContactsArr, fetchContacts} = useContext(GlobalContext)
    const [search, setSearch] = useState("")
  //search by email
  useEffect(() => {
    if (search === "") {
        fetchContacts()
    }
    else {
      axios(`http://localhost:5000/api/v1/contacts/${search}`, {
        method: "get",
        headers: {
          "Authorization": JSON.parse(localStorage.getItem("token"))
        }
      }).then((result) => {
        console.log(result.data)
        setContactsArr(result.data.contacts)
      }).catch((e) => {
        console.log(e)
      })
    }
  }, [search])
    return(
        <div className="">
            <div className="headercontainer">
                <h3>Total Contacts</h3>
                <div className="searchdiv">
                <input  type="text"  placeholder="Search your mail here" onChange={(e) => {setSearch(e.target.value)}}/><SearchSharpIcon sx={{ fontSize: 32 }} />
                </div>
                <div className="usercontainer">
                    <div>
                        <AccountCircleSharpIcon sx={{ fontSize: 58 }}></AccountCircleSharpIcon>
                    </div> <hr style={{ margin:"2px",width:"1px",height:"48px", backgroundColor:"grey"}}/>
                    <div>
                        <small><p>Kerry </p></small>
                        <small><p>Super admin</p></small>
                        
                    </div>
                </div>
            </div>
        <hr/>

            
        </div>
    )
}
export default Header;

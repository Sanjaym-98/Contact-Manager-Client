
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Login from './Components/SignIn';
import Signup from "./Components/SignUp";
import HomePage from './Components/HomePage';
import { dividerClasses } from '@mui/material';
const App=()=> {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/homepage' element={<HomePage/>}/>
  </Routes>
  </BrowserRouter>
  </>

 )
}

export default App;

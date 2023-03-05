
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Login from './Components/SignIn';
import Signup from "./Components/SignUp";
import HomePage from './Components/HomePage';
import PostLogout from './Components/PostLogout';
const App=()=> {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route element={<PostLogout/>}/>
    <Route path='/homepage' element={<HomePage/>}/>
  </Routes>
  </BrowserRouter>
  </>

 )
}

export default App;


import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Login from './Components/SignIn';
import Signup from "./Components/SignUp"

const App=()=> {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
  </>
 )
}

export default App;

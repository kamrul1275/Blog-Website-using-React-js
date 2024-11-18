

// let [data, setData] =useState();

import { BrowserRouter,Route, Routes } from "react-router-dom"
import Contac from './Page/Contac';
import Home from './Page/Home';
import About from './Page/About';
import Login from './Page/Login';
import Register from './Page/Register';
import Header from "./Component/Header";
import Service from "./Page/Service";
import  Notfound from './Page/Notfound';
import EditUser from "./Page/EditUser";
import Dashboard from "./Component/Dashboard";
import Logout from "./Component/Logout";


function App() {






  return (
 <>
 
<BrowserRouter>

<Header></Header>

<Routes>

  <Route path="/" element={<Home></Home>} />
  <Route path="/dashboard" element={<Dashboard></Dashboard>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contac></Contac>} />
  <Route path="/service" element={<Service/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/logout" element={<Logout/>} />
  <Route path="/register" element={<Register/>} />

  <Route path="/edit/user/id" element={<EditUser/>} />
  <Route path="*" element={<Notfound/>} />
  


</Routes>

</BrowserRouter>





  </>
  )
}
export default App

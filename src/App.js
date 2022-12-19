
import './App.css';

import { Home } from './component/Home.jsx';
import { NavBar } from './component/NavBar.jsx';
import { Footer } from './component/Footer.js'
import { About } from './component/About.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ContactUs } from './component/ContactUs.js';
import { Login } from './component/Login.js';
import { Registration } from './component/Registration.js';
import { Product1 } from './component/Product1.js';
import { Product2 } from './component/Product2.js';
import { Product3 } from './component/Product3.js';
import { UserList } from './component/UserList';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>


        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/Product1' element={<Product1></Product1>}></Route>
          <Route path='/Product2' element={<Product2></Product2>}></Route>
          <Route path='/Product3' element={<Product3></Product3>}></Route>
          <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
          <Route path='/AboutUs' element={<About></About>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/Registration' element={<Registration></Registration>}></Route>
          <Route path='/Admin' element={<UserList></UserList>}></Route>

        </Routes>

      </BrowserRouter>

    </>

  );
}

export default App;

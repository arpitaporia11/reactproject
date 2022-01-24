import React, { lazy, Suspense } from 'react'
import {Route,Routes,BrowserRouter as Router}from 'react-router-dom';
import Login from '../Auth/Login/Login';
import Registration from '../Auth/Registration/Registration';
// import About from '../Components/About';
import Cart from '../Components/Cart';
import Contact from '../Components/Contact';
import Home from '../Components/Home';
import PNF from '../Components/PNF';
import Product from '../Components/Product';
import Header from '../Layout/Header';
import IsAuth from './IsAuth';
import Profile from '../Auth/Profile/Profile';
import { ProtectedRoutes } from './ProtectedRoutes';

const About=lazy(()=>import('../Components/About')); 



function RootRoute() {
    // const [user,setUser]=useState(null);
    // useEffect(()=>{
    //     const userToken=localStorage.getItem('token');
    //     userToken && JSON.parse(userToken) ? setUser(true):setUser(false);
    // },[])
    return (
        <div>
            <Router>
                <Header/>
                <Suspense fallback={<h3>Lazily Loading....</h3>} >
                <Routes>
      <Route element={<ProtectedRoutes/>}>
      <Route path="about" element={<About/>}></Route>
 <Route path="contact" element={<Contact/>}></Route>
 <Route path="product" element={<Product/>}></Route>
 <Route path="cart" element={<Cart/>}></Route>
<Route path="logout" element={<Profile/>}></Route>
      </Route>      
<Route path="" element={<Home/>}></Route>
<Route path="registration" element={<Registration/>}></Route>
<Route path="login" element={<Login/>}></Route>
{/* <Route path="product" element={<Product/>}></Route> */}
<Route path="auth" element={<IsAuth/>}></Route>
<Route path="*" element={<PNF/>}></Route>
                </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default RootRoute



import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./IsAuth.css";
const IsAuth = () => {
    const navigate=useNavigate();
    const func=()=>{
        navigate("/login")
    }
    return (
        <div className="body">
            {/* <h2 className="auth">Please authenticate to continue</h2> */}
            {/* <button onClick={func}>Click to Authenticate</button> */}
            <Card body className="authenticate">Please login to continue
            <br/><br/>
            <button onClick={func} className="button">Login to Authenticate</button> 
            </Card><br/><br/><br/><br/>
            <section className="section footer bg-dark text-white">
      <div className="container">
     <div className="row">
   <div className="col-md-4"> 
   <h6>Website Information</h6>
   <hr/>
   <p className="text-white">
   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s   
   </p>
   </div>
   <div className="col-md-4">
 <h6>Quick Links</h6>
 <hr/>
 <div><Link to="home">Home</Link></div>
 <div><Link to="about">About</Link></div>
 <div><Link to="product">Product</Link></div>
 <div><Link to="contact">Contact</Link></div>
   </div>
   <div className="col-md-4">
 <h6>Contact Information</h6>
 <hr/>
 <div><p className="text-white mb-1">#64,Bangalore Karnataka India</p></div>
 <div><p className="text-white mb-1">+91 8888XXXXX8</p></div>
 <div><p className="text-white mb-1">+91 8888XXXXX8</p></div>
 <div><p className="text-white mb-1">email@doamin.com</p></div>
   </div>
     </div>
      </div>
        </section>     
        </div>
    )
}

export default IsAuth

import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
    return (
        <div>
               <section className="py-4 bg-success">
                <div className="container">
                <div className="row">
                <div className="col-md-4 my-auto">
                <h4><b>Contact Us</b></h4>
                </div>
                <div className="col-md-8 my-auto">
                <div className="float-end">
                <b> Home/Contact Us</b>
                </div>
                </div>
                </div>
                </div>
            </section>
            <section className="section">
         <div className="container">
         <div className="card shadow">
         <div className="card-body">
        <div className="row">
      <div className="col-md-6">
     <h6 fontSize="120px"><b>CONTACT FORM</b></h6>
     <hr/>
     <div className="form-group">
    <label className="mb-1"><b>First Name</b></label>
    <input type="text" name="fname" className="form-control" placeholder="Enter Your first name"/>
     </div>
     <div className="form-group">
    <label className="mb-1"><b>Last Name</b></label>
    <input type="text" name="lname" className="form-control" placeholder="Enter Your last name"/>
     </div>
     <div className="form-group">
    <label className="mb-1"><b>Phone Number</b></label>
    <input type="text" name="phone" className="form-control" placeholder="Enter Your phone number"/>
     </div>
     <div className="form-group">
    <label className="mb-1"><b>Email</b></label>
    <input type="text" name="email" className="form-control" placeholder="Enter email address"/>
     </div>
     <div className="form-group">
    <label className="mb-1"><b>Message</b></label>
   <textarea rows="3" className="form-control"placeholder="Type your message..."></textarea>
     </div>
     <div className="form-group py-3">
   <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
     </div>
      </div>
      <div className="col-md-6 border-start">
      <h5 className="main-heading">Address Information</h5>
      <div className="underline mx-auto" ></div>
      <p>#64,Bangalore Karnataka India</p>
      <p>+91 8888XXXXX8</p>
      <p>email@doamin.com</p>
      <img src="map.jpg" width="400px" height="300px" alt="map"/>
      </div>
        </div>
         </div>
         </div>
         </div>
            </section> 
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

export default Contact

import React from 'react'
import {NavLink,Link } from 'react-router-dom'
import "./About.css";

const About = () => {
    return (
        <div>
            <section className="py-4 bg-success">
                <div className="container">
                <div className="row">
                <div className="col-md-4 my-auto">
                <h4><b>About Us</b></h4>
                </div>
                <div className="col-md-8 my-auto">
                <div className="float-end">
                <b>Home/About Us</b>
                </div>
                </div>
                </div>
                </div>
            </section>
            <section className="section bg-light border-bottom">
             <div className="container">
            <div className="row">
           <div className="col-md-6">
         <h1 className="text-primary fw-bold mb-4">OUR WEBSITE</h1>
         <p className="lead mb-4">
         DigiHost is a brand and an individual entity, in a similar way we believe that every brand or company whether in the same industry or not, is an individual with their own needs and how they wish to present themselves to all their stakeholders and not only their current but also potential clients. Thus our conscientious and nimble team at DigiHost is always in search for ways to make you and your brand stand out from the rest.
         </p>
         <NavLink to="/contact" className="btn btn-outline-info px-3">Contact Us</NavLink>
           </div>
           <div className="col-md-6 d-flex justify-content-center">
               <img src="about-us.jpg" alt="About Us" height="300px" width="400px"/>
           </div>
            </div>
             </div>
            </section>
            <section className="section bg-c-light border-top">
         <div className="container">
       <div className="row">
    <div className="col-md-12 mb-4 text-center">
   <h3 className="main-heading">Vision Mission and Values</h3>
   <div className="underline mx-auto"></div>
    </div>
    <div className="col-md-4 text-center">
 <h6>Our Vision</h6>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
    <div className="col-md-4 text-center">
 <h6>Our Mision</h6>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
    <div className="col-md-4 text-center">
 <h6>Core Values</h6>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
       </div>
         </div>
            </section>

            <section className="section border-top">
         <div className="container">
       <div className="row">
    <div className="col-md-12 mb-4 text-center">
   <h3 className="main-heading">Our Services</h3>
   <div className="underline mx-auto"></div>
    </div>
    <div className="col-md-4">
  <div className="card shadow">
  <img src="about-us.jpg" className="w-10 border-bottom" alt="Services"></img>
 <div className="card-body">
<h6>Services1</h6>
<div className="underline mx-auto"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
</p>
<Link to="contact" className="btn btn-link">read more</Link>
 </div>
  </div>
    </div>
    <div className="col-md-4">
  <div className="card shadow">
  <img src="about-us.jpg" className="w-10  border-bottom" alt="Services"></img>
 <div className="card-body">
<h6>Services2</h6>
<div className="underline mx-auto"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
</p>
<Link to="contact" className="btn btn-link">read more</Link>
 </div>
  </div>
    </div>
    <div className="col-md-4">
  <div className="card shadow">
  <img src="about-us.jpg" className="w-10 border-bottom" alt="Services"></img>
 <div className="card-body">
<h6>Services3</h6>
<div className="underline mx-auto"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
</p>
<Link to="contact" className="btn btn-link">read more</Link>
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
 <h6 className="quicklink">Quick Links</h6>
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

export default About

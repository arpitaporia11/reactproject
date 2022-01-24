import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink,Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import "./Home.css";
const Home = () => {
    return (
        <div>
        <section>
        <Carousel fade>
  <Carousel.Item>
    <img
      src="samsung1.jpg" height="420px" width="100%"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      src="shopping.jpg" height="420px" width="100%"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      src="samsung3.jpg" height="420px" width="100%"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      src="samsung.jpg" height="420px" width="100%"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</section>
        <section className="hero">
      <h4 className="trade"><b>Trade-in-offer</b></h4>
      <h2 className="trade"><b>SUPER VALUE DEALS</b></h2>
      <h1 className="trade" className="home-product"><b>ON ALL PRODUCTS</b></h1>
      <p className="trade"><b>Save More With Coupons & Up To 70% Off!</b></p>
      <NavLink to="/product" className="shop">ShopNow</NavLink>
        </section>
        <br/>
        <section className="product1">
      <h2 className="feature">Featured Products</h2>
      <p className="paragraph">Summer Collection New Morden Design</p>
      <div className="pro-container">
     <div className="pro">
  <img src="image/f1.jpg" alt=""/>
  <div className="des">
<span>adidas</span>
<h5>Cartoon Astronaut T-Shirts</h5>
<h4>$78</h4>
<FaShoppingCart color="black" fontSize="20px"/>
  </div>
     </div>
     <div className="pro">
  <img src="image/f2.jpg" alt=""/>
  <div className="des">
<span>adidas</span>
<h5>Cartoon Astronaut T-Shirts</h5>
<h4>$85</h4>
<FaShoppingCart color="black" fontSize="20px"/>
  </div>
     </div>
     <div className="pro">
  <img src="image/f3.jpg" alt=""/>
  <div className="des">
<span>adidas</span>
<h5>Cartoon Astronaut T-Shirts</h5>
<h4>$90</h4>
<FaShoppingCart color="black" fontSize="20px"/>
  </div>
     </div>
     <div className="pro">
  <img src="image/f4.jpg" alt=""/>
  <div className="des">
<span>adidas</span>
<h5>Cartoon Astronaut T-Shirts</h5>
<h4>$95</h4>
<FaShoppingCart color="black" fontSize="20px"/>
  </div>
     </div>
      </div>
        </section><br/><br/>
        <section className="banner">
      <h4 className="repair">Repair Servvices</h4>
      <h2 className="tshirt">Up to <span>70% Off</span> - All T-Shirts & Accessories</h2>
      <button className="explore">Explore More</button>
        </section><br/>
        <section className="product1">
      <h2 className="arrival">New Arrivals</h2>
      <p className="paragraph">Summer Collection New Morden Design</p>
      <div className="pro-container">
     <div className="pro">
  <img src="image/n1.jpg" alt=""/>
  <div className="des">
<span>adidas</span>
<h5>Cartoon Astronaut T-Shirts</h5>
<h4>$78</h4>
<FaShoppingCart color="black" fontSize="20px"/>
  </div>
     </div>
     <div className="pro">
  <img src="image/n2.jpg" alt=""/>
  <div className="des">
<span>adidas</span>
<h5>Cartoon Astronaut T-Shirts</h5>
<h4>$85</h4>
<FaShoppingCart color="black" fontSize="20px"/>
  </div>
     </div>
     <div className="pro">
  <img src="image/n3.jpg" alt=""/>
  <div className="des">
<span>adidas</span>
<h5>Cartoon Astronaut T-Shirts</h5>
<h4>$87</h4>
<FaShoppingCart color="black" fontSize="20px"/>
  </div>
     </div>
     <div className="pro">
  <img src="image/n4.jpg" alt=""/>
  <div className="des">
<span>adidas</span>
<h5>Cartoon Astronaut T-Shirts</h5>
<h4>$88</h4>
<FaShoppingCart color="black" fontSize="20px"/>
  </div>
     </div>
      </div>
        </section><br/><br/>
        <section className="banner3">
        <div className="banner-box">
        <h2>SEASONAL SALE</h2>
       <h3>Winter Collection -50% Off</h3>
       </div>
       <div className=" banner-box banner-box2">
        <h2>NEW FOOTWEAR COLLECTION</h2>
       <h3>Spring/Winter 2022</h3>
       </div>
       <div className=" banner-box banner-box3">
        <h2>T-SHIRTS</h2>
       <h3>Spring/Winter 2022</h3>
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

export default Home

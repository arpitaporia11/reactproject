import React,{useEffect} from 'react'
import {Container,FormControl,Nav,Dropdown,Badge, Navbar, Button} from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai';
import { Link,useLocation } from 'react-router-dom';
import { CartState } from '../Context/Context';
// import { useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = ({logout}) => {
  let location=useLocation();
  useEffect(() => {
    console.log("Location: ",location, "\nPathName: ",location.pathname);
  }, [location]);
  const data="Arpita";


  const{
    state:{cart},
    dispatch,
    productDispatch
  }=CartState();


// const navigate=useNavigate();
// const loggingOut=()=>{
//   window.localStorage.clear();
//   logout();
//   navigate('/');
// }

  return (
    <div>
 <Navbar bg="info" variant="dark">
    <Container>
      <Navbar.Brand href="/product"><b>ShoppingCart</b></Navbar.Brand>
      <Nav>
      <Nav.Link as={Link} to="/" className={`mylink ${location.pathname==="/"?"active":" "}`}><b>HOME</b></Nav.Link>
      <Nav.Link as={Link} to="/about" className={`${location.pathname==="/about"?"active":" "}`}className="nav"><b>ABOUT</b></Nav.Link>
      <Nav.Link as={Link} to="/contact" className={`${location.pathname==="/contact"?"active":" "}`}className="nav"><b>CONTACT</b></Nav.Link>
      <Nav.Link as={Link} to="/product" className={`${location.pathname==="/product"?"active":" "}`}className="nav"><b>PRODUCT</b></Nav.Link>
      {/* <Nav.Link as={Link} to="/registration" className={`${location.pathname==="/registration"?"active":" "}`}className="nav"><b>REGISTRATION</b></Nav.Link> */}
    <Nav.Link as={Link} to="/login" className={`${location.pathname==="/login"?"active":" "}`}className="nav"><b>LOGIN</b></Nav.Link>
    <Nav.Link as={Link} to="/logout" className="nav1">logout</Nav.Link>
      <Dropdown alignRight >
          <Dropdown.Toggle variant="success" style={{marginLeft:"100px"}}>
          <FaShoppingCart color="white" fontSize="20px"/>
          <Badge fontSize="15px">{cart.length}</Badge>
          </Dropdown.Toggle>
         <Dropdown.Menu style={{minWidth:340}}>
         {cart.length>0?(
           <>
             {
               cart.map(prod=>(
                 <span className="cartitem" key={prod.id}>
                 <img
                   src={prod.image}
                   className="cartItemImg"
                   alt={prod.name}
                 />
                 <div className="cartItemDetail">
                 <span>{prod.name}</span>
                 <span>₹{prod.price.split(".")[0]}</span>
                 </div>
                 <AiFillDelete
                 fontSize="20px"
                 style={{cursor:"pointer"}}
                 onClick={()=>
                   dispatch({
                     type:"REMOVE_FROM_CART",
                     payload:prod,
                   })
                 }
                 />
              </span>
             ))}
             <Link to="/cart">
               <Button style={{width:"95%",margin:"0 10px"}}>Go To Cart</Button>
             </Link>
           </>
         ):(<span style={{padding:10}}>Cart is Empty!</span>)}

         </Dropdown.Menu>
          </Dropdown>
      </Nav>
      <Navbar.Text className='search'>
       <FormControl style={{width:300}} placeholder='Search a Product...' className="m-auto"
         onChange={(e)=>{
            productDispatch({
                type:"FILTER_BY_SEARCH",
                payload:e.target.value,
            });
            }}
       />
      </Navbar.Text>
      {/* <Button onClick={loggingOut} className="logout">Log Out</Button> */}
    </Container>
  </Navbar>
    </div>
  )
}

export default Header

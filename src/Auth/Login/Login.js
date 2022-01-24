import React from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import{useFormik} from 'formik';
import {useNavigate ,NavLink} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

const ValidateContact=(formValue)=>{
  const errors={};
  const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
  const validatePass=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
 
  if(!formValue.email){
    errors.email="Please Enter Your Email ID";
  }else if(!validateEmail.test(formValue.email)){
    errors.email="Invalid Email";
  }
  if(!formValue.password){
    errors.password="Please Enter Valid Password";
  }else if(!validatePass.test(formValue.password)){
    errors.password="password start with a capital letter small letter one special and numeric character";
  }

  console.log("Error: ",errors);
  return errors;
}
const Login = () => {

  const diffToast=()=>{
toast.success("Login Successfull!",{
  position:"top-center"
});
  }
  const navigate=useNavigate();
  const formik=useFormik({
      initialValues:{
        email:'',
        password:'',
      },
      validate:ValidateContact,
      onSubmit:(values)=>{
        console.log("Received values",values);
        // let user={username:values.username,email:values.email,password:values.password}
        // console.log("user value:",user);
        axios.post("https://project-node-1.herokuapp.com/postLoginData",values)
        .then(res=>{
          console.log("Axios response",res);
          window.localStorage.setItem("Token",res.data.token)
          navigate("/product");
        })
        .catch(err=>{
          console.warn("Axiox error",err);
        })
    }});
  return (
    <div>
        <div className="bgimg">
       <div className="centerdiv">
       <img src="login.jpg" className="profilepic"/>
       <h2 className="add">Login</h2>
       <form onSubmit={formik.handleSubmit}onSubmit={formik.handleSubmit}>
          <div>
           <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputbox" placeholder="Enter Your Email"/>
           {formik.touched.email && formik.errors.email ?(<span style={{color:'red'}}>{formik.errors.email}</span>):null}
          </div>
          <br/>
          <div>
           <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputbox" placeholder="Enter Your Password"/>
           {formik.touched.password && formik.errors.password ?(<span style={{color:'red'}}>{formik.errors.password}</span>):null}
          </div>
          <br/>
          <div>
            <Button type="submit" onClick={diffToast} disabled={!formik.isValid && formik.dirty} value="submit" className="button">LOGIN HERE</Button>
          </div><br/>
            <p className="paragraph1">Not a Member?</p> <button className="member"><NavLink to="/registration" >signup now</NavLink></button>
       </form>
       </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default Login

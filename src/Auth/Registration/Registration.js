import React from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import{useFormik} from 'formik';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./Registration.css";

const ValidateContact=(formValue)=>{
  const errors={};
  const validateName=RegExp('^([A-Z]{1})+([a-z]{3,})$');
  const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
  const validatePass=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
  // const validatePhone=RegExp('^([5-9]{1})+([0-9]+$/i)');

  if(!formValue.username){
    errors.username="please enter first name";
  }else if(formValue.username.lenght<5){
    errors.username="Please enter atleast 5 character";
  }else if(!validateName.test(formValue.username)){
    errors.username="Please enter first name starting with capital letter";
  } else if(formValue.username.lenght>8){
    errors.username="Maximum 8 character is required";
  }
 
  if(!formValue.lname){
    errors.lname="please enter last name";
  }else if(formValue.lname.lenght<6){
    errors.lname="Please enter atleast 5 character";
  }else if(!validateName.test(formValue.lname)){
    errors.lname="Please enter last name starting with capital letter";
  } else if(formValue.lname.lenght>9){
    errors.lname="Maximum 9 character is required";
  }
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

  if(!formValue.phone){
    errors.phone="Please enter Your Phone Number";
        }else if(formValue.phone.length!==10){
          errors.phone="phone number must be in 10 digits";
        }

  console.log("Error: ",errors);
  return errors;
}

const Registration = () => {

  const diffToast=()=>{
    toast.success("You Have Successfully Register!",{
      position:"top-center"
    });
      }

  const navigate=useNavigate();
  const formik=useFormik({
      initialValues:{
        username:'',
        lname:'',
        email:'',
        password:'',
      phone:''
      },
      validate:ValidateContact,
      onSubmit:(values)=>{
        console.log("Received values",values);
        let user={username:values.username,email:values.email,password:values.password}
        console.log("user value:",user);
        axios.post("https://project-node-1.herokuapp.com/postUserData",values)
        .then(res=>{
          console.log("Axios response",res);
          navigate('/login');
        })
        .catch(err=>{
          console.warn("Axiox error",err);
        })
    }});
  return (
    <>
    <div className="bgimg">
       <div className="centerdiv">
       <img src="https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-128.png" className="profilepic"/>
       <h2 className="add">Registration</h2>
       <form onSubmit={formik.handleSubmit}onSubmit={formik.handleSubmit}>
       <div>
           <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputbox" placeholder="Enter Your First Name"/>
           {formik.touched.username && formik.errors.username ?(<span style={{color:'red'}}>{formik.errors.username}</span>):null}
          </div>
          <br/>
          <div>
           <input type="text" name="lname" value={formik.values.lname} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputbox" placeholder="Enter Your Last Name"/>
           {formik.touched.lname && formik.errors.lname ?(<span style={{color:'red'}}>{formik.errors.lname}</span>):null}
          </div>
          <br/>
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
           <input type="text" name="phone" maxLength= "10" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="inputbox" placeholder="Enter Your Phone Number"/>
           {formik.touched.phone && formik.errors.phone ?(<span style={{color:'red'}}>{formik.errors.phone}</span>):null}
          </div>
          <br/>
          <div>
            <Button type="submit"  onClick={diffToast}  disabled={!formik.isValid && formik.dirty} value="submit" className="button">REGISTER HERE</Button>
          </div>
       </form>
       </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default Registration

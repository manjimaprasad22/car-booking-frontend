import axios from 'axios';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const [Name, setname] = useState()
  const [Email, setemail] = useState()
  const [Pswd, setpassword] = useState()

  const userinfo = JSON.parse(localStorage.getItem("userinfo"))

if(userinfo){
  navigate("/home")
}

  const submit=async(e)=>{

 

    e.preventDefault();
    try {
      const config={
        headers:{
          "Content-type":"application/json"
        }
      }
    const {data} = await axios.post('user/register',{Name,Email,Pswd},config) 
    console.log("guu",data);
    localStorage.setItem("userinfo",JSON.stringify(data))
      navigate("/home")
    } catch (error) {
      alert(error)
    }
    
  }
  return (
    <div><div className='box'> 
    <form onSubmit={submit} className='forms'>
    Name
    <MDBInput className='mb-4 text' type='text' id='form1Example3'  onChange={(nam)=>{setname(nam.target.value)}}/>
        Email
    <MDBInput className='mb-4' type='email' id='form1Example3' onChange={(nam)=>{setemail(nam.target.value)}} />
    Password
    <MDBInput className='mb-4' type='password' id='form1Example3' onChange={(nam)=>{setpassword(nam.target.value)}}/>

   

    <MDBBtn type='submit' >
      Sign in
    </MDBBtn>
  </form>
  </div></div>
  )
}

export default Register
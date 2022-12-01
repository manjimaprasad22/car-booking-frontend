import React, { useState } from 'react'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Login = () => {
  
  const navigate = useNavigate()
  const [Email, setemail] = useState()
  const [Pswd, setpassword] = useState()
  const submit=async(e)=>{
    e.preventDefault();
try {
  const config={
    headers:{
      "Content-type":"application/json"
    }
  }

  const {data} = await axios.post('user/login',{Email,Pswd},config)
  console.log(data);
  navigate("/home")

} catch (error) {
  console.log(error);
  alert(error)
}


  }
    return (
       <div className='box'> 
        <form className='forms' onSubmit={submit}>
            Email
        <MDBInput className='mb-4' type='email' id='form1Example1' onChange={(nam)=>{setemail(nam.target.value)}} />
        Password
        <MDBInput className='mb-4' type='password' id='form1Example2'onChange={(nam)=>{setpassword(nam.target.value)}} />
  
        <MDBRow className='mb-4'>
          <MDBCol className='d-flex justify-content-center'>
            <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
          </MDBCol>
          <MDBCol>
            <a href='#!'>Forgot password?</a>
          </MDBCol>
        </MDBRow>
  
        <MDBBtn type='submit'>
          Login
        </MDBBtn>
      </form>
      </div>
      );
}

export default Login
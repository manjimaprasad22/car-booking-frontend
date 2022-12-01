import { MDBBtn, MDBNavbarLink } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
   
        <div className='login'>
         
            <MDBBtn outline color="secondary" size="sm" type='button' float="right">
          <MDBNavbarLink href='/'>
          login
        </MDBNavbarLink>
        </MDBBtn>
        <div style={{marginLeft:"5px"}}>
        <MDBBtn outline color="secondary" size="sm" type='button'>
        <MDBNavbarLink href='/register'>
          sign in
          </MDBNavbarLink>
        </MDBBtn></div>
    </div>

  )
}

export default Sidenav
import { MDBBtn, MDBNavbarLink } from 'mdb-react-ui-kit'
import React, { useContext, useEffect } from 'react'
import { NewContext } from './Route'

const Logout = () => {
    
    
  return (
    <div className='login'>
         
            <MDBBtn outline color="secondary" size="sm" type='button' float="right">
          <MDBNavbarLink  href=''>
          Logout
        </MDBNavbarLink>
        </MDBBtn>
        
    </div>
  )
}

export default Logout
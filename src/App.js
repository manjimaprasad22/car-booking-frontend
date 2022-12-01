import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

import Sidenav from './Sidenav';
function App() {
  axios.get('/user/user').then(({data})=>{
    console.log(data);
  })
  const [showBasic, setShowBasic] = useState(false)
  return (
    <div className="App" style={{position:"relative"}}>

    <MDBNavbar expand='lg' light bgColor='dark'>
      <MDBContainer fluid >
        <MDBNavbarBrand href='#' id='titl'>BookYourCar</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon fas icon="align-justify" />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}  >
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'  href='/home'>
                <p className="nav">Home</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><p className="nav">About Us</p></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><p className="nav">Services</p></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/booking'><p className="nav">Booking</p></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
    </div>
  );
}

export default App;

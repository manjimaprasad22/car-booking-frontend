import { MDBBtn, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import Form from 'react-bootstrap/Form';

const Booking = () => {
  return (
    <div className='box3'>
    <div className='box2'>
        <form className='box1'>
        <MDBRow className='mb-4'>
        <MDBCol>
        <Form.Select>
        <option>State1</option>
        <option>State2</option>
        <option>State3</option>
        <option>State4</option>
        <option>State5</option>
      </Form.Select>
      </MDBCol>
      <MDBCol>
        <Form.Select>
        <option>District1</option>
        <option>District2</option>
        <option>District3</option>
        <option>District4</option>
        <option>District5</option>
      </Form.Select>
      </MDBCol>
    
        <MDBCol>
          <MDBInput id='form6Example1' placeholder='from' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' placeholder='to' />
        </MDBCol>
      
      <MDBCol>
      <input type="date"></input>
      </MDBCol>
      <MDBCol>
        <input type="time"></input>
      </MDBCol>
      </MDBRow>

      <MDBBtn className='mb-4' type='submit' >
        search
      </MDBBtn>
    </form>
    </div>
    </div>
  )
}

export default Booking
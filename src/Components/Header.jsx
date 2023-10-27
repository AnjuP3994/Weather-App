import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light className='p-3 shadow' style={{backgroundColor:'black', fontFamily: 'Young Serif, serif'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/10127/10127236.png'
              height='60'
              alt=''
              loading='lazy'
              className='ms-3'
            />
            <h1 className='mt-2 ms-2 text-info' style={{fontWeight:'900'}}>Weather App</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
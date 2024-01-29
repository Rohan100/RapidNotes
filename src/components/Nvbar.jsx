import React from 'react'
import "./Navbar.css"
import rplogo from '../assets/RapidNotes-logos_white.png'
import { Navbar,Container,Nav } from 'react-bootstrap'
function Nvbar() {
  return (
    <Navbar className='navbar-transparent nvbar'>
        <Container className='d-flex nav_holder'>
          <Navbar.Brand href="#home" className='flex-fill flex-grow-1' >
            <img
              src={rplogo}
              className="logo d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
          <div className='flex-grow-0 nav_links d-flex justify-content-between'>
            <div>
              <a>Home</a>
            </div>
            <div >
              <a>Search</a>
            </div>
            
          </div>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Nvbar
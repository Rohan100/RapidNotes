import React, { useEffect, useState } from 'react'
import "../../css/Navbar.css"
import rplogo from '../../../assets/RapidNotes-logos_white.png'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import Sidebar from '../Navbar/Sidebar';
function Nvbar() {
  const [search,setSearch] =  useState(false);
  const [hide,setHide] = useState(true);
  useEffect(() => {
    setHide(true)
  },[])
  return (
    <>
    <Navbar className='navbar-transparent nvbar'>
        <MdMenu className='sidemenu-icon' onClick={() => setHide((s) => !s)}/>
        <Navbar.Brand href="#home" className='flex-fill flex-grow-1' >
          <img
            src={rplogo}
            className="logo d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className=' d-flex'>
          <div className='nav_links d-flex ms-auto'>
          <div className='search_container flex-grow-1 ms-auto '>
              <div className={`${search ? 'search show-search' : 'search'}`}>
                <input type='search' className='search_input' placeholder='Search ...' ></input>
                <div onClick={() => setSearch(s => !s)}  className='search_button'>
                  <FaSearch  className='search_icon' />
                  <RxCross1 className='search_close'/>
                </div>
              </div>
            
            </div>
           
            <div className='align-self-center'>
              <Button variant="outline-primary">Sign up</Button>
            </div>
            <div className='align-self-center'>
              <Button variant="outline-primary">Sign in</Button>
            </div>
            
          </div>
        </Navbar.Collapse>
    </Navbar>
    <Sidebar hide={hide} setHide={setHide}/>
    </>
  )
}

export default Nvbar
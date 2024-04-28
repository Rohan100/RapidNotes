import React, { useContext, useEffect, useState } from 'react'
import "../../css/Navbar.css"
import rplogo from '../../../assets/RapidNotes-logos_white.png'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import avatarpic from '../../../assets/avatarpic.jpg'
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import Sidebar from './Sidebar';
import { Dropdown } from 'react-bootstrap';
import SignInSignUp from './SignInSignUp';
import { UserAuth } from '../../../store/AuthContext';
function Nvbar({ setUser }) {
  const [search, setSearch] = useState(false);
  const [hide, setHide] = useState(true);
  const { logOut, user } = UserAuth();
  useEffect(() => {
    setHide(true)
    console.log(user)
  }, [])
  const signOut = async () => {
    try{
      await logOut();
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <Navbar className='navbar-transparent nvbar'>
        <MdMenu className='sidemenu-icon' onClick={() => setHide((s) => !s)} />
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
                <div onClick={() => setSearch(s => !s)} className='search_button'>
                  <FaSearch className='search_icon' />
                  <RxCross1 className='search_close' />
                </div>
              </div>

            </div>

            <div className='align-self-center'>
             {!user && <SignInSignUp />}
            </div>
            <div className='align-self-center'>
              {user && <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="profile-pic">
                    <img src={user.photoURL || avatarpic} alt="" srcset="" />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={signOut} >Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>}
            </div>

          </div>
        </Navbar.Collapse>
      </Navbar>
      <Sidebar hide={hide} setHide={setHide} />
    </>
  )
}

export default Nvbar
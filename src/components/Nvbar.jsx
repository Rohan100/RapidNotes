import React, { useState } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import rplogo from '../assets/RapidNotes-logos_white.png'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { Modal, Button, Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Nvbar() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  })
  const handleLogin =()=>{
    signInWithEmailAndPassword(auth, loginState.email, loginState.password).then((res) => {handleClose(); 
      })
      .catch((err) => console.log("Error: ", err))
  }
  const handleSubmission = () => {
    // if(!values.name || !values.email || !values.pass){
    //   setErrorMsg('All fields are required');
    //   return;
    // }else{
    //   setErrorMsg("");
    // }
    // 


    createUserWithEmailAndPassword(auth, values.email, values.password).then((res) => {handleRegistrationClose(); 
      })
      .catch((err) => console.log("Error: ", err))
  } 

  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState(false);
  const [show, setShow] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRegistrationShow = () => setShowRegistrationModal(true);
  const handleRegistrationClose = () => setShowRegistrationModal(false);
  
  return (
    <Navbar className='navbar-transparent nvbar'>
      <Container className='d-flex flex-wrap nav_holder'>
        <Navbar.Brand href="#home" className='flex-fill flex-grow-1' >
          <img
            src={rplogo}
            className="logo d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className=' d-flex'>
          <div className='nav_links d-flex ms-auto'>


            <div className='align-self-center'>
              <button>Upload</button>
            </div>
            <div className='align-self-center'>
              <button onClick={handleShow}>Login</button>
            </div>
            <div className='search_container flex-grow-1 ms-auto '>
              <div className={`${search ? 'search show-search' : 'search'}`}>
                <input type='search' className='search_input' placeholder='Search ...' ></input>
                <div onClick={() => setSearch(s => !s)} className='search_button'>
                  <FaSearch className='search_icon' />
                  <RxCross1 className='search_close' />
                </div>
              </div>
              <Modal show={show} onHide={handleClose} >
                <Modal.Header onClick={handleClose} className='text-light ' style={{ color: 'white', backgroundColor: '#17171c' }}>

                  <img
                    src={rplogo}
                    className="logo d-inline-block align-top" style={{ width: '150px', height: 'auto' }}
                  />{' '}
                  <Modal.Title className="w-100 font-weight-bold  text-light" style={{ position: 'absolute', paddingLeft: '185px' }}>
                    Sign in
                  </Modal.Title>
                  <button style={{ paddingLeft: '250px' }}><ImCross /></button>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#17171c' }}>
                  <Form>
                    <Form.Group controlId="defaultForm-email">
                      <Form.Label style={{ padding: '10px' }} className="text-light">Your email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        className="validate text-white"
                        value={loginState.email}
                        onChange={(event)=> 
                          setLoginState((prev) => ({ ...prev, email: event.target.value}))
                        }
                        style={{ backgroundColor: '#17171c' }}
                      />
                    </Form.Group>

                    <Form.Group controlId="defaultForm-pass">
                      <Form.Label style={{ padding: '10px' }} className="text-light">Your password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        className="validate text-light "
                        value={loginState.password}
                        onChange={(event)=> 
                          setLoginState((prev) => ({ ...prev, password: event.target.value}))
                        }
                        style={{ backgroundColor: '#17171c' }}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center " style={{ backgroundColor: '#17171c' }}>
                  <Button onClick={handleLogin} type='submit' className='text-light' variant="default">
                    Login
                  </Button>
                  <button className='text-white' onClick={handleRegistrationShow}>Create Account</button>
                </Modal.Footer>
              </Modal>
            </div>

            <div>
              <Modal show={showRegistrationModal} onHide={handleRegistrationClose}>
                <Modal.Header onClick={handleRegistrationClose} className='text-light ' style={{ color: 'white', backgroundColor: '#17171c' }}>

                  <img
                    src={rplogo}
                    className="logo d-inline-block align-top" style={{ width: '150px', height: 'auto' }}
                  />{' '}
                  <Modal.Title className="w-100 font-weight-bold  text-light" style={{ position: 'absolute', paddingLeft: '185px' }}>
                    Register
                  </Modal.Title>
                  <button style={{ paddingLeft: '250px' }}><ImCross /></button>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#17171c' }}>
                  <Form>
                    <Form.Group controlId="defaultForm-username">
                      <Form.Label style={{ padding: '10px' }} className="text-light">Your Username</Form.Label>
                      <Form.Control
                        type="username"
                        placeholder="Enter your username"
                        className="validate text-white"
                        onChange={(prev)=> 
                          setValues((prev) => ({ ...prev, name: event.target.value}))
                        }
                        style={{ backgroundColor: '#17171c' }}
                      />
                      <Form.Text className="text-muted">
                        {/* Additional text if needed */}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="defaultForm-email">
                      <Form.Label style={{ padding: '10px' }} className="text-light">Your email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        className="validate text-white"
                        onChange={(prev)=> 
                          setValues((prev) => ({ ...prev, email: event.target.value}))
                        }
                        style={{ backgroundColor: '#17171c' }}
                      />
                      <Form.Text className="text-muted">
                        {/* Additional text if needed */}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="defaultForm-pass">
                      <Form.Label style={{ padding: '10px' }} className="text-light">Your password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        className="validate text-light "
                        onChange={(prev)=> 
                          setValues((prev) => ({ ...prev, password: event.target.value}))
                        }
                        style={{ backgroundColor: '#17171c' }}
                      />
                {/* <b className='errMsg'> {errorMsg} </b> */}
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center " style={{ backgroundColor: '#17171c' }}>
                  <Button className='text-light' variant="default" onClick={handleSubmission}>
                    Register
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nvbar
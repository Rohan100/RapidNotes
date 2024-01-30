import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import "./Navbar.css"
import rplogo from '../assets/RapidNotes-logos_white.png'
import { ImCross } from "react-icons/im";
import { Navbar, Container, Nav } from 'react-bootstrap'

function Nvbar() {


  const [show, setShow] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRegistrationShow = () => setShowRegistrationModal(true);
  const handleRegistrationClose = () => setShowRegistrationModal(false);

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
            <div>
              <button className='ex_button' onClick={handleShow}>Login</button>
            </div>
            <div>
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
                        style={{ backgroundColor: '#17171c' }}
                      />
                    </Form.Group>

                    <Form.Group controlId="defaultForm-pass">
                      <Form.Label style={{ padding: '10px' }} className="text-light">Your password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        className="validate text-light "
                        style={{ backgroundColor: '#17171c' }}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center " style={{ backgroundColor: '#17171c' }}>
                  <Button type='submit' className='text-light' variant="default">
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
                        style={{ backgroundColor: '#17171c' }}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center " style={{ backgroundColor: '#17171c' }}>
                  <Button className='text-light' variant="default" onClick={handleRegistrationClose}>
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
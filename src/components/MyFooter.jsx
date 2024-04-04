import React from 'react'
import rplogo from '../assets/RapidNotes-logos_white.png'
import { Container } from 'react-bootstrap'
import './css/MyFooter.css'
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function MyFooter() {
  return (
    <div className='myfooter d-grid'>
      <Container className='first'>
        <div>
          <img
            src={rplogo}
            alt='logo'
            className='footer-logo'
          />
          <div className='address'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Praesentium veritatis porro officia<br /> ut pariatur qui odit!
          </div>
          <div className='media-logos'>
            <div className="igs">
              <FaFacebookF />
            </div>
            <div className="igs">
              <RiInstagramFill />
            </div>
            <div className="igs">
              <FaGithub />
            </div>
            <div className="igs">
              <FaLinkedin />
            </div>
            <div className="igs">
              <FaSquareXTwitter />
            </div>
          </div>
        </div>

      </Container>
      <Container className='second d-flex flex-column justify-content-around'>
        {/* <div className="footer-column">
          <div className="nav-headin"></div>
        </div> */}
        <div className="footer-nav-heading">
          Featured Linkes
        </div>
        <div className="footer-nav-wrap">
        {
          [
            "Saab",
             "Volvo",
             "BMW",
             "Saab",
             "Volvo",
             "BMW",
              "Saab",
             "Volvo",
             "BMW",
              "Saab",
             "Volvo",
             "BMW",
              "Saab",
             "Volvo",
             "BMW"
           ].map(i => <div>{i}</div>)
        }

        </div>
      </Container>

      <div className='lastline'>
            © Porto 2024. Published By RapidNotes
      </div>
    </div>
  )
}

export default MyFooter
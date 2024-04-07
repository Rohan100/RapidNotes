import React from 'react'
import '../../css/Cards.css';
import akLogo from '../../../assets/Ak.jpeg';
import avatar from '../../../assets/avatar.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Cards() {
    return (
        <div class="card-container">
            <div className="Card">
                    <img src={akLogo}  alt="Avatar" />
                <div className='user_details'>
                    <h5>Ankush Khairnar</h5>
                    <span>Web Developer</span>
                    <p>Develop's Dynamic Websites and Design Web Templates.</p>
                    <p>KBTCOE</p>
                    <p>Department: IT</p>
                </div>
                <hr />
                <ul className='social-media-icons'>
                    <li>
                        <a href="#" style={{ background: 'linear-gradient(45deg, #2980b9, #2c3e50)' }}><i>
                            <FontAwesomeIcon icon={faInstagram} />
                        </i>
                        </a>
                        <span>Instagram</span>

                    </li>
                    <li>
                        <a href="#" style={{ background: 'linear-gradient(45deg, #2980b9, #2c3e50)' }}><i>
                        <FontAwesomeIcon icon={faLinkedin} />
                        </i>
                        </a>
                        <span>Linkedin</span>
                    </li>
                    <li>
                        <a href="#" style={{ background: 'linear-gradient(45deg, #2980b9, #2c3e50)' }}><i>
                        <FontAwesomeIcon icon={faGithub} />
                        </i>
                        </a>
                        <span>Github</span>
                    </li>
                </ul>
            </div>
            <div className='Card'>
                <img src={avatar}  alt="Avatar" />
                <div className='user_details'>
                    <h5>Rohan Nagare</h5>
                    <span>Web Developer</span>
                    <p>Develop's Dynamic Websites and Design Web Templates.</p>
                    <p>KBTCOE</p>
                    <p>Department: IT</p>
                </div>
                <hr />
                <ul className='social-media-icons'>
                    <li>
                        <a href="#" style={{ background: 'linear-gradient(45deg, #2980b9, #2c3e50)' }}><i>
                            <FontAwesomeIcon icon={faInstagram} />
                        </i>
                        </a>
                        <span>Instagram</span>

                    </li>
                    <li>
                        <a href="#" style={{ background: 'linear-gradient(45deg, #2980b9, #2c3e50)' }}><i>
                        <FontAwesomeIcon icon={faLinkedin} />
                        </i>
                        </a>
                        <span>Linkedin</span>
                    </li>
                    <li>
                        <a href="#" style={{ background: 'linear-gradient(45deg, #2980b9, #2c3e50)' }}><i>
                        <FontAwesomeIcon icon={faGithub} />
                        </i>
                        </a>
                        <span>Github</span>
                    </li>
                </ul>
            </div>
            <div className='Card'>
                <img  alt="Avatar" />
                <div className='user_details'>
                    <h5>Om Dhumal</h5>
                    <span>Web Developer</span>
                    <p>Develop's Dynamic Websites and Design Web Templates.</p>
                    <p>KBTCOE</p>
                    <p>Department: IT</p>
                </div>
                <hr />
                <ul className='social-media-icons'>
                    <li>
                        <a href="#" style={{ background: 'linear-gradient(45deg, #2980b9, #2c3e50)' }}><i>
                            <FontAwesomeIcon icon={faInstagram} />
                        </i>
                        </a>
                        <span>Instagram</span>

                    </li>
                    <li>
                        <a href="#" style={{ background: 'linear-gradient(45deg, #2980b9, #2c3e50)' }}><i>
                        <FontAwesomeIcon icon={faLinkedin} />
                        </i>
                        </a>
                        <span>Linkedin</span>
                    </li>
                    <li>
                        <a href="#" style={{ background: 'linear-gradient(45deg, #2980b9, #2c3e50)' }}><i>
                        <FontAwesomeIcon icon={faGithub} />
                        </i>
                        </a>
                        <span>Github</span>
                    </li>
                </ul>
            </div>
           
        </div>

    )
}

export default Cards
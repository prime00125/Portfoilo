import React from 'react'
import '../ComStyles/MainPage.css';
import Navbar from './Navbar';
import { faEnvelope,faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin,faSquareInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
function MainPage() {
  return (
    <div className="App">
    <Navbar/>
    <div className="backgroundPic">
    </div>
    <div className="profile"></div>
    <div className='name'><p>Manjunath R M</p></div>
    <div className='links'><div>
   <a href="tel:+918951769070" target='_blank'> <FontAwesomeIcon icon={faPhone} shake />    +91 8951769070</a>
   <a href="mailto:manjunathrmrakiaish@gmail.com" target='_blank'> <FontAwesomeIcon icon={faEnvelope} bounce />     manjunathrmrakiaish@gmail.com</a>
   <a href="https://github.com/prime00125" target='_blank'> <FontAwesomeIcon icon={faGithub} fade /> Github</a></div><div>
   <a href="https://www.instagram.com/optimus_prime.001/" target='_blank'> <FontAwesomeIcon icon={faSquareInstagram} fade />  Instagram</a>
   <a href="https://www.linkedin.com/in/manjunath-rm-942675224/" target='_blank'> <FontAwesomeIcon icon={faLinkedin} fade /> Linkedin</a>
   </div> </div>
    </div>
  )
}

export default MainPage
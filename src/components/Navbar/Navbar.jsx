// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="" alt="my logo"/>
      <ul className="nav-menu">
        <li>
        <Link to="home" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li><Link to="about" smooth={true} duration={300}>
            About me
          </Link></li>
        <li><Link to="work" smooth={true} duration={300}>
            Projects
          </Link></li>
        <li><Link to="certificate" smooth={true} duration={300}>
            Certificates
          </Link></li>
        <li><Link to="contact" smooth={true} duration={300}>
            Contact me
          </Link></li>
      </ul>
    </div>
  )
}

export default Navbar

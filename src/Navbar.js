import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <div>
          <div className="main__navbar">
          <Link activeClass="active" to="home" spy={true} smooth={true}
          offset={0} duration={500}>Home</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true}
            offset={0} duration={500}>Skills</Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true}
            offset={0} duration={500}>Projects</Link>
          </div>
        </div>
    )
}

export default Navbar

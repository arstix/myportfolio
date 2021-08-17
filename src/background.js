import React from 'react'
import './background.css'
import Button from '@material-ui/core/Button';
import Typing from 'react-typing-animation';
import { Link } from 'react-scroll'

function Background() {
    return (
        <div className="background" id="home">
        <div className="main__navbar">
        <Link activeClass="active" to="home" spy={true} smooth={true}
        offset={0} duration={500}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true}
          offset={0} duration={500}>Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true}
          offset={0} duration={500}>Projects</Link>
        </div>
          <h1 className="background__h1" style={{textAlign:"center", paddingTop:"14%"}}>Beyond your imagination.</h1>
          <br />
          <br />
          <h2 style={{textAlign:"center"}}>Hello, I am Runjie Chen. <br />A Web Developer based in Spain.</h2>
          <br />
          <Typing speed={10}>
          <p style={{textAlign: "center"}}>Let's make something cool together!</p>
          </Typing>
          <Button variant="contained" disableElevation>
          <Link activeClass="active" to="projects" spy={true} smooth={true}
          offset={0} duration={500}>Discover my Abilities</Link>
            </Button>
        </div>
    )
}

export default Background

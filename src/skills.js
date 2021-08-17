import React, {useState, useEffect, useRef} from 'react'
import './skills.css'
import LinearProgress from '@material-ui/core/LinearProgress';
import Tweet from './images/twitter.png'
import Amazon from './images/amazon.png'
import Calculationster from './images/calculationster.png'
import Crypto from './images/cryptotracker.png'
import Github from './images/github.png'

function Skills() {

  const projects = useRef(null)


    return (
        <div ref={projects} className="skills__div" id="projects">
            <h1 className="skills__highlight">Highlight Projects</h1>
            <div className="twitter__div">
                <a target="_blank" href="https://twitter-backend-mern.herokuapp.com/"><img className="twitter__png" src={Tweet} /></a>
                <div className="title__skills">
                  <h1>Twitter Clone</h1>
                  <br />
                  <p>This full-stack Twitter clone was made with the MERN stack. Users can create their own profile, login with it and tweet with other people.</p>
                  <br />
                  <p></p>
                  <h4>What languages were used?</h4>
                  <li>MongoDB</li>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <a target="_blank" href="https://github.com/arstix/twitter-mern"><img src={Github} className="github__icon"/></a>
                </div>
          </div>
          <div className="twitter__div">
              <a target="_blank" href="https://clone-4ed58.web.app/"><img className="twitter__png" src={Amazon} /></a>
              <div className="title__skills">
                <h1>Amazon Clone</h1>
                <br />
                <p>This is a fully functional Amazon clone which gives the user the ability to add to cart, create and pay the products. You can connect your Stripe with the API integration.</p>
                <br />
                <p></p>
                <h4>What languages were used?</h4>
                <li>Firebase</li>
                <li>React</li>
                <li>Javascript</li>
                <a target="_blank" href="https://github.com/arstix/amazon-clone"><img src={Github} className="github__icon"/></a>
              </div>
        </div>
        <div className="twitter__div">
              <a target="_blank" href="https://cryptotracker13.herokuapp.com/"><img className="twitter__png" src={Crypto} /></a>
            <div className="title__skills">
              <h1>Crypto Tracker</h1>
              <br />
              <p>A passion project developed to make the life easier for investors who can't keep track of all the cryptos they own.</p>
              <br />
              <p></p>
              <h4>What languages were used?</h4>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <a target="_blank" href="https://github.com/arstix/cryptotracker"><img src={Github} className="github__icon"/></a>
            </div>
      </div>
        <h1>Team Projects</h1>
        <div className="twitter__div">
          <a target="_blank" href="https://calculationster.itch.io/calculationster"><img className="twitter__png" src={Calculationster} /></a>
            <div className="title__skills">
              <h1>Calculationster Game</h1>
              <br />
              <p>Calculationster consists of a math game focused for kids and children to learn more about maths. It contains storytelling, special effects and special items to make the game more entertaining.</p>
              <br />
              <p></p>
              <h4>What languages were used?</h4>
              <li>Javascript</li>
              <li>CSS</li>
              <li>HTML</li>
              <a target="_blank" href="https://github.com/es-rene99/calculationster"><img src={Github} className="github__icon"/></a>
            </div>
      </div>
        </div>
    )
}

export default Skills

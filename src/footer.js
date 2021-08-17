import React from 'react'
import './footer.css'
import { FaLinkedin } from 'react-icons/fa';


function footer() {
    return (
      <div>
        <div className="footer__div">
        <div className="footer__copyright">
          <p>© 2021 by <a href="https://github.com/arstix" target="_blank">Arstix </a>🎈</p>
        </div>
          <div className="linkedin__div">
            <a href="https://www.linkedin.com/in/runjie-chen-b01613173/" target="_blank"><p>Linkedin</p></a>
          </div>
            <a href="https://github.com/arstix" target="_blank"><p>Github</p></a>
            <a href="https://runjiechenportfolio.herokuapp.com/" target="_blank"><p>Website</p></a>
        </div>
      </div>
    )
}

export default footer

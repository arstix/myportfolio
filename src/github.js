import React, {useState} from 'react'
import Git from './images/github.png'
import './github.css'
import Typing from 'react-typing-animation';
import Resume from './images/resume.png'

function Github() {
  const [value, setValue] = useState(false)
  const toggleGithub = () => {
    if (value === false) {
      setValue(true)
    } else {
      setValue(false)
    }
  }
  console.log(value)
    return (
        <div className="projects__github">
        <Typing speed={10}>
        <h2 style={{marginBottom:"20px"}}>STOP!</h2>
        </Typing>
        <button className="projects__button" style={{marginBottom:"20px"}} onClick={toggleGithub}>Click me for a surprise! 🎯</button>
          {value ? (<><div style={{display:"flex", margin:"0 auto"}}><a href="https://github.com/arstix"><img src={Git} style={{width: "55px", margin:"0 auto"}}/></a><a href="https://runjiechenportfolio.herokuapp.com/"><img src={Resume} style={{width: "55px", margin:"0 auto"}}/></a></div></>) : ""}
    </div>
    )
}

export default Github

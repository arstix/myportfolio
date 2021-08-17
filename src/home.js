import React, {useState, useEffect} from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import './home.css'

function Home() {

  const [progress, setProgress] = useState(0)
  const [progress2, setProgress2] = useState(0)
  const [progress3, setProgress3] = useState(0)
  const [progress4, setProgress4] = useState(0)
  const [progress5, setProgress5] = useState(0)

  useEffect(() => {
      const timer = setInterval(() => {
        setProgress(80)
        setProgress2(90)
        setProgress3(70)
        setProgress4(60)
        setProgress5(50)
      }, 500)

  }, [])

    return (
      <div className="home__skills" id="skills">
        <div className="home__whois">
          <h1>Who am I?</h1>
          <br />
          <p>A passionate, hard-working, team-oriented, self-taught, self-driven web developer that likes to get the job done.</p>
          <br />
          <p>I'm a driven person who will hold myself accountable and take responsibility for all the projects that need to be finished.</p>
          <br />
          <p>My experience working at different projects has taught me what I will expect working as a developer and the necessary abilities to perform correctly on a team environment.</p>
          <br />
          <p>Sincerely,</p>
          <p>Arstix 🦁</p>
        </div>
        <div className="timer___skillsdiv">
            <div className="linear__timer">
              <h1>HTML</h1>
              <LinearProgress className="linear___progress" variant="buffer" value={progress}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress}/>
            </div>
            <div className="linear__timer">
            <h1>CSS</h1>
              <LinearProgress className="linear___progress" variant="buffer" value={progress2}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress2}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress2}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress2}/>
            </div>
            <div className="linear__timer">
            <h1>JavaScript</h1>
              <LinearProgress className="linear___progress" variant="buffer" value={progress3}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress3}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress3}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress3}/>
            </div>
            <div className="linear__timer">
            <h1>React</h1>
              <LinearProgress className="linear___progress" variant="buffer" value={progress4}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress4}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress4}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress4}/>
            </div>
            <div className="linear__timer">
            <h1>Node.js</h1>
              <LinearProgress className="linear___progress" variant="buffer" value={progress5}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress5}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress5}/>
              <LinearProgress className="linear___progress" variant="buffer" value={progress5}/>
            </div>
        </div>
        </div>
          )
}

export default Home

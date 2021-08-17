import Navbar from './Navbar'
import Skills from './skills.js'
import Background from './background.js'
import Home from './home.js'
import Github from './github.js'
import Footer from './footer.js'
import './App.css'

function App() {
  return (
    <div className="App">
          <Background />
          <Home />
          <Github />
          <Skills />
          <Footer />
    </div>
  );
}

export default App;

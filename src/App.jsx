import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Timeline from './Components/Timeline'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <About/>
      <Skills/>
      <Timeline/>
      <Projects/>
      <Contact/>
    </>
  )
}


export default App

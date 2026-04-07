import { useState } from 'react'
import { NavBar } from './component/NavigationBar'
import { Home } from './component/Home'
import { About } from './component/About'
import { Projects } from './component/Projects'
import Formation from './component/Formation'
import { Skills } from './component/Skills'
import { Contact } from './component/Contact'
import { Footer } from './component/Footer'
import { Hello } from './component/Hello'
function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Formation/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
 /*
 return <>
 <Hello/>
 </>*/
}

export default App

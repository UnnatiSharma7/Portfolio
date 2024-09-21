import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Project from './components/Project'
import Skills from './components/Skills'
import Bio from './components/Bio'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img" ></div>
      <div className="relative z-10 flex flex-col
      items-center p-4 space-y-8
      container mx-auto">
        <Navbar></Navbar>
  <Herosection></Herosection>
  <Project></Project>
  <Bio></Bio>
  <Skills></Skills>
  <Education></Education>
  <Contact></Contact>
  <Footer></Footer>
      </div>
 </div>
  )
}

export default App
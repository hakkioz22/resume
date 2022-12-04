import React from 'react'
import About from './components/about/about'
import Header from './components/header/header'
import Intro from './components/intro/intro'
import Resume from './components/resume/resume'
import Services from './components/service/services'

const App = () => {
  return (
    <>
    <Header/>
    <Intro/>
    <About/>
    <Services/>
    <Resume/>
    </>
  )
}

export default App
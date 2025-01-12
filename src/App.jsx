import React from 'react'
import About from './components/about/About'
import Nav from './components/nav/nav'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Services from './components/services/Services'



const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Contact />
        <Footer />
    </>
  )
}

export default App
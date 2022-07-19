import React from 'react'
import { About, Contact, Experience, Footer, Header, 
  NavBar, Portfolio, Services, Testimonials } from "./components"

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Portfolio />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
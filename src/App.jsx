import React from 'react'
import { About, Contact, Experience, Footer, Header, 
  NavBar, Portfolio, Services, Testimonials } from "./components"

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
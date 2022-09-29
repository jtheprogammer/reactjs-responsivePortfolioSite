import React, { useEffect, useRef, useState } from 'react'
import { About, Contact, Experience, Footer, Header, 
  NavBar, Portfolio, Services, Testimonials } from "./components"

const App = () => {

  //   useEffect(() => {
  //   for (let item of navBarItems) {
  //     if (document.getElementById(`#${experienceRef}`).scrollHeight === windowHeight) {
  //     console.log(item.link)
  //     }
  //   }
  // })


  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Experience />
      {/* <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App
import React, { useEffect, useRef, useState } from "react";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  NavBar,
  Portfolio,
  Services,
  Testimonials,
} from "./components";
import { ActiveNavContextProvider } from "./context";

const App = () => {
  return (
    <>
      <ActiveNavContextProvider>
        <NavBar />
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </ActiveNavContextProvider>
    </>
  );
};

export default App;

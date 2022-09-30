import React, { useContext, useMemo, useRef, useState } from "react";

import navBarItems from "./navBarItems";
import "./NavBar.css";
import useWindowHeight from "../../custom_hooks/useWindowHeight";
import { useEffect } from "react";
import { ActiveNavContext } from "../../context";



const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [navStyle, setNavStyle] = useState("NavBar__top")
  const windowHeight = useWindowHeight();
  const { headerRef,
    aboutRef ,
    experienceRef,
    portfolioRef,
    servicesRef,
    testimonialsRef,
    contactRef, } =
  useContext(ActiveNavContext);



  useEffect(() => {
    console.log(headerRef.current.scrollHeight)
    
    if (windowHeight <= headerRef.current.scrollTop) {
      setNavStyle("NavBar__top")
    } else {
      setNavStyle("NavBar__fixed")
    }
  }, [windowHeight, navStyle, headerRef])

  useEffect(() => {
    const refs = [ headerRef,
      aboutRef ,
      experienceRef,
      portfolioRef,
      servicesRef,
      testimonialsRef,
      contactRef, ]
    for (let item of navBarItems) {
      // console.log(windowHeight)
      // console.log(aboutRef.current.scrollHeight)
      // console.log(item.link)
      for (let ref of refs) {
        // console.log(item)
        // console.log(ref)
      }

      // if (item.link === aboutRef.current.id && (aboutRef.current.scrollHeight <= windowHeight*2)) {
      // setActiveNav(`#${aboutRef.current.id}`)
      // console.log("aboutRef.current.scrollHeight")
      // }
    }
  }, [activeNav, windowHeight, headerRef, aboutRef ,
    experienceRef,
    portfolioRef,
    servicesRef,
    testimonialsRef,
    contactRef,])



  return (
    <nav 
      className={navStyle}
    >
      <div className="NavBar__left">
        <h1>JLC</h1>
      </div>

      <div className="NavBar__right">
      {navBarItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.link}`}
          onClick={() => setActiveNav(`#${item.link}`)}
          className={activeNav === `#${item.link}` ? "active" : ""}
        >
          {navStyle === "NavBar__top" ? <>{item.name}</> : <>{item.icon}</>}
        </a>
      ))}
      </div>
    </nav>
  );
};

export default NavBar;

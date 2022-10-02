import React, { useContext, useMemo, useRef, useState } from "react";

import navBarItems from "./navBarItems";
import "./NavBar.css";
import useWindowHeight from "../../custom_hooks/useWindowHeight";
import { useEffect } from "react";
import { ActiveNavContext } from "../../context";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [navStyle, setNavStyle] = useState("NavBar__top");
  const windowHeight = useWindowHeight();
  const {
    headerRef,
    aboutRef,
    experienceRef,
    portfolioRef,
    servicesRef,
    testimonialsRef,
    contactRef,
  } = useContext(ActiveNavContext);

  useEffect(() => {
    if (windowHeight <= headerRef.current.scrollTop) {
      setNavStyle("NavBar__top");
    } else {
      setNavStyle("NavBar__fixed");
    }
  }, [windowHeight, navStyle, headerRef]);

  useEffect(() => {
    for (let item of navBarItems) {
      // console.log(testimonialsRef.current.scrollHeight)
      if (
        item.name.toLowerCase() === headerRef.current.id &&
        windowHeight <= headerRef.current.scrollHeight
      ) {
        setActiveNav(`#`);
      } else if (
        item.name.toLowerCase() === aboutRef.current.id &&
        aboutRef.current.scrollHeight <= windowHeight
      ) {
        setActiveNav(`#${aboutRef.current.id}`);
      } else if (
        item.name.toLowerCase() === experienceRef.current.id &&
        experienceRef.current.scrollHeight <= windowHeight
      ) {
        setActiveNav(`#${experienceRef.current.id}`);
      }
      else if (
        item.name.toLowerCase() === portfolioRef.current.id &&
        portfolioRef.current.scrollHeight*1.2 <= windowHeight
      ) {
        setActiveNav(`#${portfolioRef.current.id}`);
      }  else if (
        item.name.toLowerCase() === servicesRef.current.id &&
        servicesRef.current.scrollHeight*9.8 <= windowHeight
      ) {
        setActiveNav(`#${servicesRef.current.id}`);
      }  else if (
        item.name.toLowerCase() === testimonialsRef.current.id &&
        testimonialsRef.current.scrollHeight*11.5 <= windowHeight
      ) {
        setActiveNav(`#${testimonialsRef.current.id}`);
      }     else if (
        item.name.toLowerCase() === contactRef.current.id &&
        contactRef.current.scrollHeight*13 <= windowHeight
      ) {
        setActiveNav(`#${contactRef.current.id}`);
      }        
      

    }
  }, [
    activeNav,
    windowHeight,
    headerRef,
    aboutRef,
    experienceRef,
    portfolioRef,
    servicesRef,
    testimonialsRef,
    contactRef,
  ]);

  return (
    <nav className={navStyle}>
      <div className="NavBar__left">
        <h1>
          JLC<sub>jr.</sub>
        </h1>
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

import React, { useState } from "react";

import navBarItems from "./navBarItems";
import "./NavBar.css";
import useWindowHeight from "../../custom_hooks/useWindowHeight";
import { useEffect } from "react";



const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [navStyle, setNavStyle] = useState("NavBar__top")
  const windowHeight = useWindowHeight();

  useEffect(() => {
    if (windowHeight < 80) {
      setNavStyle("NavBar__top")
    } else {
      setNavStyle("NavBar__fixed")
    }
  }, [windowHeight, navStyle])


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

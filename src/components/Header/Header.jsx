import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import TextLoop from "react-text-loop";

import "./Header.css";
import HeaderSocials from "./HeaderSocials";
import Resume from "../../assets/Text/JoseLuisCruz-Resume.pdf";
import Me from "../../assets/Images/Me.png";
import NavBar from "../NavBar/NavBar";
import useWindowHeight from "../../custom_hooks/useWindowHeight";

const textLoopItems = [
  "Developer",
  "Engineer",
  "UI/UX Designer",
  "Data Analyst",
  "Educator",
];

const Header = () => {
  const [headerStyle, setHeaderStyle] = useState("")
  const windowHeight = useWindowHeight();

  useEffect(() => {
    if (windowHeight >= 80) {
      setHeaderStyle("mt-140")
    } else {
      setHeaderStyle("")
    }
  }, [windowHeight, headerStyle])

  return (
    <header className={`${headerStyle}`} id="home">
      <div className={`container header__container`}>
        <div className="header__greeting">
          <span>
            <h1>👋</h1>&nbsp;&nbsp;&nbsp;
            <h2>Hello I'm</h2>
          </span>
          <h1>Jose Luis Cruz</h1>
          {/* <h2>
            <span>
            {"Aspiring "}&nbsp;
            <TextLoop children={textLoopItems} interval={2500} />
            </span>
          </h2> */}
        </div>


      <div className="cta">
        <a href={Resume} className="btn" download>
          My Resume
        </a>
        <a href="#contact" className="btn btn-primary">
          Hire Me!
        </a>
      </div>

      <div className="header__content">
        <div className="me">
          <img src={Me} alt="Selfie of me, Jose." />
        </div>
      </div>

      {/* <div>
        <a href="#contact" className="scroll_down">
          Scroll Down
          <FontAwesomeIcon icon={faAngleRight} />
        </a>

        <HeaderSocials />
      </div> */}
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUser,
  faCode,
  faBriefcase,
  faScrewdriverWrench,
  faThumbsUp,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faHouseChimney} />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faUser} />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faCode} />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faBriefcase} />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faScrewdriverWrench} />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FontAwesomeIcon icon={faMessage} />
      </a>
    </nav>
  );
};

export default NavBar;

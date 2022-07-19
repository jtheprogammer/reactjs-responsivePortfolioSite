import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import TextLoop from 'react-text-loop'

import Resume from "../../assets/Text/JoseLuisCruz-Resume.pdf"
import Me from "../../assets/Images/Me.png"
import HeaderSocials from './HeaderSocials'
import { text } from '@fortawesome/fontawesome-svg-core'

const textLoopItems = ["Developer", "Engineer", "UI/UX Designer", "Data Analyst", "Educator"]

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__greeting">
          <h1>👋</h1>
        <h3>Hello I'm</h3>
        </div>
        <h1>Jose Luis Cruz</h1>
        <h2>
          {"Aspiring "}
          <TextLoop children={textLoopItems} interval={2000} />
        </h2>
        
        <div className="cta">
          <a
            href={Resume}
            className="btn"
            download
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="btn btn-primary"
          >
            Hire Me!
          </a>
        </div>
        

        <div className="me">
          <img src={Me} alt="Selfie of me, Jose." />
        </div>

        <a
            href="#contact"
            className="scroll_down"
          >
            Scroll Down
            <FontAwesomeIcon icon={faAngleRight} />
        </a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header
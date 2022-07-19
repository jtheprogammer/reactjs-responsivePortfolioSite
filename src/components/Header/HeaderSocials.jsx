import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jose-cruz-9a0677220/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://github.com/jtheprogammer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  )
}

export default HeaderSocials
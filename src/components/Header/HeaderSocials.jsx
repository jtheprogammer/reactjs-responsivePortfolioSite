import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

export const socialItems = [
  {
    link: "https://www.linkedin.com/in/jose-luis-cruz-jr/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    link: "https://github.com/jtpgmr",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    link: "https://stackoverflow.com/users/18595271/jose-luis-cruz",
    icon: <FontAwesomeIcon icon={faStackOverflow} />
  }
];

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {socialItems.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noreferrer">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;

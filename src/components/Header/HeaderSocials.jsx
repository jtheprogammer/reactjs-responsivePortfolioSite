import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const socialItems = [
  {
    link: "https://www.linkedin.com/in/jose-cruz-9a0677220/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    link: "https://github.com/jtheprogammer",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
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

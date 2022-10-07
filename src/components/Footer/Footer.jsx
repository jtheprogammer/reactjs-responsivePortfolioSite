import navBarItems from "../NavBar/navBarItems";
import { socialItems } from "./../Header/HeaderSocials";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__navlinks">
        {navBarItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item.link}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="footer__socials">
        {socialItems.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        ))}
      </div>

      <div className="footer__copyright">
        <small>&copy;2022 Jose Luis Cruz, Jr. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

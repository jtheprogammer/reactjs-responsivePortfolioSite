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

const navBarItems = [
  {
    name: "Home",
    link: "",
    linkName: "home",
    icon: <FontAwesomeIcon icon={faHouseChimney} />,
  },
  {
    name: "About",
    link: "about",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    name: "Experience",
    link: "experience",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    name: "Portfolio",
    link: "portfolio",
    icon: <FontAwesomeIcon icon={faCode} />,
  },
  {
    name: "Services",
    link: "services",
    icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
  },
  {
    name: "Testimonials",
    link: "testimonials",
    icon: <FontAwesomeIcon icon={faThumbsUp} />,
  },
  {
    name: "Contact",
    link: "contact",
    icon: <FontAwesomeIcon icon={faMessage} />,
  },
];

export default navBarItems;
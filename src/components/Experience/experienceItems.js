import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faPython,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import {
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMaterialui,
  SiMysql,
} from "react-icons/si";

export const experienceItems = {
  frontend: {
    title: "Frontend Development",
    skills: [
      {
        id: "frontend1",
        tool: "HTML",
        icon: <FontAwesomeIcon 
               icon={faHtml5} className="experience__details-icon" style={{ color: "#F66B0E"}} />,
        description: "HTML5",
      },
      {
        id: "frontend2",
        tool: "CSS",
        icon: <FontAwesomeIcon 
        icon={faCss3Alt} className="experience__details-icon" style={{ color: "#264de4"}} />,
        description: "HTML5",
      },
      {
        id: "frontend3",
        tool: "Bootstrap",
        icon: <FontAwesomeIcon 
        icon={faBootstrap} className="experience__details-icon" style={{ color:"#8465b3"}} />,
        description: "HTML5",
      },
      {
        id: "frontend4",
        tool: "JS",
        icon: <FontAwesomeIcon 
        icon={faJsSquare} className="experience__details-icon" style={{ color:"#F8CB2E"}} />,
        description: "HTML5",
      },
      {
        id: "frontend5",
        tool: "ReactJS",
        icon: <FontAwesomeIcon 
        icon={faReact} className="experience__details-icon" style={{ color:"#6FDFDF", background: "black", borderRadius: "50%", padding: "0.25rem" }} />,
        description: "HTML5",
      },
      {
        id: "frontend6",
        tool: "React Native",
        icon: <FontAwesomeIcon 
        icon={faReact} className="experience__details-icon" style={{ color:"#6FDFDF", background: "gray", borderRadius: "50%", padding: "0.25rem" }} />,
        description: "HTML5",
      },
      {
        id: "frontend7",
        tool: "Material UI",
        icon: <SiMaterialui className="experience__details-icon" style={{ color:"#007FFF"}} />,
        description: "HTML5",
      },
    ],
  },
  backend: {
    title: "Backend Development",
    skills: [
      {
        id: "backend1",
        tool: "NodeJS",
        icon: <FontAwesomeIcon 
        icon={faNodeJs} className="experience__details-icon" style={{ color:"#026e00", background: "black", borderRadius: "30%", padding: "0.025rem"}} />,
        description: "",
      },
      {
        id: "backend2",
        tool: "ExpressJS",
        icon: <SiExpress className="experience__details-icon" style={{ color:"#F66B0E"}} />,
        description: "",
      },
      {
        id: "backend3",
        tool: "Python",
        icon: <FontAwesomeIcon 
        icon={faPython} className="experience__details-icon" style={{ color:"#ffe873", background: "#306998", borderRadius: "30%", padding: "0.1rem"}} />,
        description: "",
      },
      {
        id: "backend4",
        tool: "Django",
        icon: <SiDjango className="experience__details-icon" style={{ color:"lightslategray" }} />,
        description: "Includes creating RESTful APIs with Django REST Framework",
      },
      {
        id: "backend5",
        tool: "Relational DBs",
        icon: <SiMysql className="experience__details-icon" style={{ color:"#0E86D4", fontSize: "3rem"}} />,
        description: "Includes MySQL, PostGreSQL and SQLite",
      },
      {
        id: "backend5",
        tool: "NoSQL DBs",
        icon: <SiMongodb className="experience__details-icon" style={{ color:"#3fa037"}} />,
        description: "Includes MongoDB and Google Firebase",
      },
    ],
  },
};

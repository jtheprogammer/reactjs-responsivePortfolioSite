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
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import {
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMaterialui,
  SiMysql,
  SiPowerbi,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiD3Dotjs
} from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5"

export const experienceItems = {
  frontend: {
    title: "Frontend Development",
    skills: [
      {
        id: "frontend1",
        tool: "HTML",
        icon: <FontAwesomeIcon 
               icon={faHtml5} className="experience__details-icon" style={{ color: "#F66B0E"}} />,
      },
      {
        id: "frontend2",
        tool: "CSS",
        icon: <FontAwesomeIcon 
        icon={faCss3Alt} className="experience__details-icon" style={{ color: "#264de4"}} />,
      },
      {
        id: "frontend3",
        tool: "Bootstrap",
        icon: <FontAwesomeIcon 
        icon={faBootstrap} className="experience__details-icon" style={{ color:"#8465b3"}} />,
      },
      {
        id: "frontend4",
        tool: "JS",
        icon: <FontAwesomeIcon 
        icon={faJsSquare} className="experience__details-icon" style={{ color:"#F8CB2E"}} />,
      },
      {
        id: "frontend5",
        tool: "ReactJS",
        icon: <FontAwesomeIcon 
        icon={faReact} className="experience__details-icon" style={{ color:"#6FDFDF", background: "black", borderRadius: "50%", padding: "0.25rem" }} />,
      },
      {
        id: "frontend6",
        tool: "React Native",
        icon: <FontAwesomeIcon 
        icon={faReact} className="experience__details-icon" style={{ color:"#6FDFDF", background: "gray", borderRadius: "50%", padding: "0.25rem" }} />,
      },
      {
        id: "frontend7",
        tool: "Material UI",
        icon: <SiMaterialui className="experience__details-icon" style={{ color:"#007FFF"}} />,
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
      },
      {
        id: "backend2",
        tool: "ExpressJS",
        icon: <SiExpress className="experience__details-icon" style={{ color:"#F66B0E"}} />,
      },
      {
        id: "backend3",
        tool: "Python",
        icon: <FontAwesomeIcon 
        icon={faPython} className="experience__details-icon" style={{ color:"#ffe873", background: "#306998", borderRadius: "30%", padding: "0.1rem"}} />,
      },
      {
        id: "backend4",
        tool: "Django",
        icon: <SiDjango className="experience__details-icon" style={{ color:"lightslategray" }} />,
      },
      {
        id: "backend5",
        tool: "Relational DBs",
        icon: <SiMysql className="experience__details-icon" style={{ color:"#0E86D4", fontSize: "3rem"}} />,
      },
      {
        id: "backend6",
        tool: "NoSQL DBs",
        icon: <SiMongodb className="experience__details-icon" style={{ color:"#3fa037"}} />,
      },
    ],
  },
  dataAnalysis: {
    title: "Data Analysis",
    skills: [
      {
        id: "da1",
        tool: "Excel",
        icon: <FontAwesomeIcon 
        icon={faFileExcel} className="experience__details-icon" style={{ color:"#1D6F42" }} />,
      },
      {
        id: "da2",
        tool: "Pandas",
        icon: <SiPandas className="experience__details-icon" style={{ color:"#130654", background: "#fff", padding: "2px 0 2px 0", borderRadius: "7.5px" }} />,
      },
      {
        id: "da3",
        tool: "NumPy",
        icon: <SiNumpy className="experience__details-icon" style={{ color:"#7ad7f0"}} />,
      },
      {
        id: "da4",
        tool: "Scikit-learn",
        icon: <SiScikitlearn className="experience__details-icon" style={{ color:"F28C28" }} />,
      },
      {
        id: "da5",
        tool: "PowerBI",
        icon: <SiPowerbi className="experience__details-icon" style={{ color:"#f2c80f", background: "#000", padding: "4px", borderRadius: "7.5px" }} />,
      },
      {
        id: "da6",
        tool: "Tableau",
        icon: <IoLogoTableau className="experience__details-icon" style={{ color:"#fff"}} />,
      },
      {
        id: "da7",
        tool: "Streamlit",
        icon: <SiStreamlit className="experience__details-icon" style={{ color:"#f63366"}} />,
      },
      {
        id: "da8",
        tool: "D3.js",
        icon: <SiD3Dotjs className="experience__details-icon" style={{ color:"#F9A03C"}} />,
      },
    ],
  },
};

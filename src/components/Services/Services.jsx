import React from "react";
import { VscServerProcess } from "react-icons/vsc"
import { RiBarChart2Fill } from "react-icons/ri"
import { WebLogo } from "./ServicesSvgs";
import "./Services.css";

export const ServiceList = [
  {
    icon: WebLogo,
    title: "Web Development",
    description: "I enjoy building UIs and web apps with a clean design and content structure, that provides a smooth user experience.",
    tools: "HTML, CSS, JS, ReactJS, Bootstrap, Material-UI, Tailwind, Redux, GitHub, VSCode",
  },
  {
    icon: <VscServerProcess style={{ height: "48px", width: "50px", color: "#008bff" }} />,
    title: "Information Technology",
    description: "Adept understanding of concepts pertaining to software, hardware, networking and cybersecurity.",
    tools: "Windows, MacOS, Linux, Virtualization, Cloud Services",
  },
  {
    icon: <RiBarChart2Fill style={{ height: "48px", width: "50px", color: "#008bff" }} />,
    title: "Data Analysis",
    description: "I use business intelligence tools and software with data science programming libraries in order to analyze and interpret, and create data create dynamic dashboards that filter data and display key peformance and business indicators.",
    tools: "Python, Anaconda, Jupyter Notebook NumPy, Pandas, PowerBI, Excel, Tableau",
  },
];

const Services = ({ item }) => {
  const ServiceContent = ServiceList.slice(0, item);

  return (
    <section id="services">
      <h4>Take a Look At</h4>
      <h2>The Services I Offer</h2>
      <div className="container services__container">
        {ServiceContent.map((val, i) => (
          <div className="services__service" key={i}>
            <center>
              <div className="services__service-icon">{val.icon}</div>
              <div className="services__service-content">
                <h3>{val.title}</h3>
                <p>{val.description}</p>
                <h4>Tools I use</h4>
                <p className="services__service-content-tools">{val.tools}</p>
              </div>
            </center>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

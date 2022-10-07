import { useContext } from "react";
import { VscServerProcess } from "react-icons/vsc";
import { RiBarChart2Fill } from "react-icons/ri";
import { WebLogo } from "./ServicesSvgs";
import "./Services.css";
import { ActiveNavContext } from "../../context";

export const ServiceList = [
  {
    icon: WebLogo,
    title: "Web Development",
    description:
      "I enjoy creating UIs with a clean design and content structure, that provide a smooth user experience. I also create and leverage APIs to enhance the functionality of my web apps.",
    tools:
      "HTML, CSS, JS, ReactJS, Bootstrap, Material-UI, Tailwind, Redux, GitHub, VSCode",
    animation: <></>,
  },
  {
    icon: (
      <VscServerProcess
        style={{ height: "48px", width: "50px", color: "#008bff" }}
      />
    ),
    title: "Information Technology",
    description:
      "I have an adept understanding of concepts pertaining to software, hardware, networking and cybersecurity.",
    tools: "Windows, MacOS, Linux, Virtualization, Cloud Services",
    animation: (
      <></>
      // <div className="circle">
      //   <div className="wifi"></div>
      // </div>
    ),
  },
  {
    icon: (
      <RiBarChart2Fill
        style={{ height: "48px", width: "50px", color: "#008bff" }}
      />
    ),
    title: "Data Analysis",
    description:
      "I use BI tools and software alongside data science programming libraries in order to analyze, visualize, and interpret data, and then display the KPIs in dynamic dashboards.",
    tools:
      "Python, Anaconda, Jupyter Notebook NumPy, Pandas, PowerBI, Excel, Tableau",
    animation: <></>,
  },
];

const Services = ({ item }) => {
  const ServiceContent = ServiceList.slice(0, item);
  const { servicesRef } = useContext(ActiveNavContext);

  return (
    <section id="services" ref={servicesRef}>
      <div className="section__header">
        <h4>Take a Look at</h4>
        <h2>The Services I Offer</h2>
      </div>
      <div className="gears-container">
        <div className="gear-rotate"></div>
        <div className="gear-rotate-left"></div>
      </div>
      <div className="container services__container">
        {ServiceContent.map((val, i) => (
          <div className="services__service" key={i}>
            <center>
              <div className="services__service-icon">{val.icon}</div>
              <div className="services__service-content">
                <h3>{val.title}</h3>
                <p>{val.description}</p>
                {/* <h4>Tools I use</h4>
                <p className="services__service-content-tools">{val.tools}</p> */}
                <div className="services__animation">{val.animation}</div>
              </div>
            </center>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

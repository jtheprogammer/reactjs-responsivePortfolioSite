import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { aboutTabsItems } from "./aboutTabsItems";
import "./AboutTabs.css";

const AboutTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="tabs__container">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {Object.keys(aboutTabsItems).map((item, index) => (
            <Tab
              key={index}
              className={
                tabIndex === index
                  ? "react-tabs__tab active"
                  : "react-tabs__tab"
              }
            >
              {aboutTabsItems[item].tabName}
            </Tab>
          ))}
        </TabList>

        {Object.keys(aboutTabsItems).map((item, index) => (
          <TabPanel key={index}>
            <div className="tab__panel">
              <ul>
                {Object.keys(aboutTabsItems[item].tabPanel).map((li) => (
                  <li key={aboutTabsItems[item].tabPanel[li].id}>
                    <h3>{aboutTabsItems[item].tabPanel[li].title}</h3>
                    <h5>
                      <i>{aboutTabsItems[item].tabPanel[li]?.degree}</i>
                    </h5>
                    <h4>{aboutTabsItems[item].tabPanel[li].description}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default AboutTabs;

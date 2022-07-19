import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./AboutTabs.css";

const AboutTabs = () => {
  const [tabIndex, setTabIndex] = useState(0); 

  let tab1 = "My Story",
    tab2 = "Education & Certification";
  return (
    <div className="tabs__container">
      <Tabs 
        selectedIndex={tabIndex} 
        onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab 
            className={tabIndex === 0 ? "active-tab" : "react-tabs__tab"}>{tab1}</Tab>
          <Tab 
            className={tabIndex === 1 ? "active-tab" : "react-tabs__tab"}>{tab2}</Tab>
        </TabList>

        <TabPanel>
          <div className="tab__panel">
            <ul>
              <li>
                <h3>
                  Web Development - Development
                </h3>
                <h4>
                  Build websites and web apps using javascript and its frameworks.
                </h4>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab__panel">
            <ul>
              <li>
              <h3>
                  Web Development - Development
                </h3>
                <h4>
                  Build websites and web apps using javascript and its frameworks.
                </h4>
              </li>
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AboutTabs;

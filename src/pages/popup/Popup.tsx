import React, { useState } from "react";
import "./Popup.css";
import { BundleTab, WebsiteTab, WordsTab } from "./components/tabs";

const tabData = [
  { id: "tab1", label: "Websites", component: <WebsiteTab /> },
  { id: "tab2", label: "Bundle", component: <BundleTab /> },
  { id: "tab3", label: "Words", component: <WordsTab /> },
];

const Popup: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="popup-container">
      <nav>
        {tabData.map(({ id, label }) => (
          <button
            key={id}
            className={`button-tab ${activeTab === id ? "tab-active" : ""}`}
            onClick={() => handleTabClick(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      {tabData.map(({ id, component }) => (
        <div key={id} style={{ display: activeTab === id ? "block" : "none" }}>
          {component}
        </div>
      ))}
    </div>
  );
};

export default Popup;

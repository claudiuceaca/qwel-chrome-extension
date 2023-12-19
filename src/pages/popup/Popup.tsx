import React, { useState } from "react";
import "./Popup.css";
import BlockedBundlesTab from "./components/tabs/BlockedBundlesTab";
import BlockedWebsitesTab from "./components/tabs/BlockedWebsitesTab";
import BlockedWordsTab from "./components/tabs/BlockedWordsTab";

const Popup: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="popup-container">
      <nav>
        <button
          className={`button-tab ${activeTab === "tab1" ? "tab-active" : ""}`}
          onClick={() => handleTabClick("tab1")}>Websites</button>
        <button
          className={`button-tab ${activeTab === "tab2" ? "tab-active" : ""}`}
          onClick={() => handleTabClick("tab2")}>Bundle</button>
        <button
          className={`button-tab ${activeTab === "tab3" ? "tab-active" : ""}`}
          onClick={() => handleTabClick("tab3")}>Words</button>
      </nav>

      {activeTab === "tab1" && (
        <BlockedWebsitesTab />
      )}

      {activeTab === "tab2" && (
        <BlockedBundlesTab />
      )}

      {activeTab === "tab3" && (
        <BlockedWordsTab />
      )}
    </div>
  );
};

export default Popup;
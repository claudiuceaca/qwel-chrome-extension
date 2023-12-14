import React from "react";
import BlockedSite from "./components/BlockedSite";
import useBlockedSites from "../../hooks/useBlockedSites";
import "./Popup.css";
import InputPopup from "./components/InputPopup";
import { UseBlockedSitesProps } from "../../types";

const Popup: React.FC = () => {
  const { blockedSites, addSiteToBlockedList, removeSiteFromBlockedList }:
    UseBlockedSitesProps = useBlockedSites();

  return (
    <div className="popup-container">
      <h2>Black Sited List</h2>
      <div className="blocked-sites-list">
        <ul>
          {blockedSites.map((site: string, index: number) => (
            <BlockedSite
              key={index}
              site={site}
              onRemove={() => removeSiteFromBlockedList(index)}
            />
          ))}

        </ul>
      </div>

      <InputPopup addSiteToBlockedList={addSiteToBlockedList} />
    </div>
  );
};

export default Popup;

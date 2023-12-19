import useBlockedSites from "../../../../hooks/useBlockedSites";
import { UseBlockedSitesProps } from "../../../../types";
import BlockedSite from "../BlockedSite";
import InputPopup from "../InputPopup";

const BlockedWebsitesTab = () => {
  const { blockedSites, addSiteToBlockedList, removeSiteFromBlockedList }:
    UseBlockedSitesProps = useBlockedSites();
  return (
    <div>
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
  )
}

export default BlockedWebsitesTab
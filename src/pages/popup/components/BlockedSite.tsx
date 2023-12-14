import React from "react";

export interface BlockedSiteProps {
  site: string;
}

const BlockedSite: React.FC<BlockedSiteProps> = ({ site }) => {
  return (
    <li className="blocked-site">
      {site}
    </li>
  );
};

export default BlockedSite;

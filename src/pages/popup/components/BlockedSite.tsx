import React from "react";

interface BlockedSiteProps {
  site: string;
  onRemove: () => void;
}

const BlockedSite: React.FC<BlockedSiteProps> = ({ site, onRemove }) => {
  return (
    <li className="blocked-site">
      {site}
      <button onClick={onRemove} className="button-remove">
        X
      </button>
    </li>
  );
};

export default BlockedSite;

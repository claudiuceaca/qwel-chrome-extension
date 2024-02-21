import React, { useState } from "react";

interface InputPopupProps {
  addSiteToBlockedList: (newSite: string) => void;
}

const InputPopup: React.FC<InputPopupProps> = ({ addSiteToBlockedList }) => {
  const [newSite, setNewSite] = useState<string>("");

  return (
    <div className="popup-input__container">
      <input
        type="text"
        placeholder="Add site on black list "
        value={newSite}
        onChange={(e) => setNewSite(e.target.value)}
      />
      <button
        onClick={() => addSiteToBlockedList(newSite)}
        className="button-add"
      >
        Add
      </button>
    </div>
  );
};

export default InputPopup;

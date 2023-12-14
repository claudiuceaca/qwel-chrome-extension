import { useState, useEffect } from "react";
import { UseBlockedSitesProps } from "../types";

const useBlockedSites = (): UseBlockedSitesProps => {
  const [blockedSites, setBlockedSites] = useState<string[]>([]);

  useEffect(() => {
    const storedSitesString = localStorage.getItem("blockedSites");
    if (storedSitesString) {
      const storedSites = JSON.parse(storedSitesString) as string[];
      setBlockedSites(storedSites);
    }
  }, []);

  const addSiteToBlockedList = (newSite: string): void => {
    if (newSite.trim() !== "") {
      setBlockedSites((prevSites) => [...prevSites, newSite]);

      localStorage.setItem(
        "blockedSites",
        JSON.stringify([...blockedSites, newSite])
      );
    }
  };

  const removeSiteFromBlockedList = (indexToRemove: number): void => {
    const updatedSites = blockedSites.filter(
      (_, index) => index !== indexToRemove
    );
    setBlockedSites(updatedSites);

    localStorage.setItem("blockedSites", JSON.stringify(updatedSites));
  };

  return {
    blockedSites,
    addSiteToBlockedList,
    removeSiteFromBlockedList,
  };
};

export default useBlockedSites;

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

  return {
    blockedSites,
    addSiteToBlockedList,
  };
};

export default useBlockedSites;

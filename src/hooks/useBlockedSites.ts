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
      const domainRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

      if (domainRegex.test(newSite)) {
        try {
          const url = new URL(`https://${newSite}`);
          const domain = url.hostname;

          if (!blockedSites.includes(domain)) {
            setBlockedSites((prevSites) => [...prevSites, domain]);

            localStorage.setItem(
              "blockedSites",
              JSON.stringify([...blockedSites, domain])
            );
          } else {
            console.log(`Domain ${domain} exists already in the blocked list.`);
          }
        } catch (error) {
          const invalidURLError = error as {
            message: string;
          };
          console.error("URL invalid:", invalidURLError.message);
        }
      } else {
        console.log("Invalid domain format. Use something.something.");
      }
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
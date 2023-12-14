export interface UseBlockedSitesProps {
    blockedSites: string[];
    addSiteToBlockedList: (newSite: string) => void;
    removeSiteFromBlockedList: (indexToRemove: number) => void;
}
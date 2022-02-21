import { createContext } from "react";
import { LeaderboardEntryStore } from "./LeaderboardEntryStore";

export const rootStoreContext = createContext({
  leaderboardEntryStore: new LeaderboardEntryStore()
});
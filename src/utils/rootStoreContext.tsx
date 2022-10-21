import { RootStore } from "../stores/rootStore";
import React, { createContext, FC } from "react";

export const StoreContext = createContext<RootStore | undefined>(undefined);

export const RootStoreProvider: FC = ({ children }) => {
  const root = new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};

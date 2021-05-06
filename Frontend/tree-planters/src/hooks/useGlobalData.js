//Allows other components to access data of all trees or all donations

import React, { useContext, useState } from "react";

const GlobalDataContext = React.createContext();
const GlobalDataUpdateContext = React.createContext();

export function useGlobalData() {
  return [useContext(GlobalDataContext), useContext(GlobalDataUpdateContext)];
}

export function GlobalDataProvider({ children }) {
  const [globalData, setGlobalData] = useState({
    trees: [],
    donations: []
  });

  return (
    <GlobalDataContext.Provider value={globalData}>
      <GlobalDataUpdateContext.Provider value={setGlobalData}>
        {children}
      </GlobalDataUpdateContext.Provider>
    </GlobalDataContext.Provider>
  );
}


import React, { createContext, useState, useContext } from 'react';

const HomeContext = createContext();

export function useHomeContext() {
  return useContext(HomeContext);
}

export function HomeProvider({ children }) {
  const [state, setState] = useState({
    showStacks: true,
    showNetworks: false,
    showTokens: false,
    showAvailabilityLayer: false,
    showIdentifiers: false,
  });

  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <HomeContext.Provider value={{ state, updateState }}>
      {children}
    </HomeContext.Provider>
  );
}

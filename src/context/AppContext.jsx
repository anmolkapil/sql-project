import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [savedQueries, setSavedQueries] = useState({});
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [activeTab, setActiveTab] = useState(1);

  //Fetch Saved Queries from Browser Local Storage
  useEffect(() => {
    const localQueries = JSON.parse(localStorage.getItem('savedQueries')) || {};
    setSavedQueries(localQueries);
  }, []);

  const appContextValue = {
    savedQueries,
    setSavedQueries,
    selectedQuery,
    setSelectedQuery,
    activeTab,
    setActiveTab,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}

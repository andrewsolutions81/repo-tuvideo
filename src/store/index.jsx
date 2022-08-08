import {
  createContext, useEffect, useState,
} from 'react';

const AppContext = createContext();
const [channel, setChannel] = useState();

useEffect(() => {
  const fetchData = async () => {
    const data = await fetch('https://tuvideo-backend.herokuapp.com/api/videos/62f0762f96c42425d915fe0f');
    setChannel(data);
  };
  fetchData();
});

export function AppProvider({ children }) {
  return <AppContext.Provider value={channel}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const context = AppContext(channel);

  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};

export default AppContext;

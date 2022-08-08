import {
  createContext, useEffect, useState,
} from 'react';
import { getChannel } from '../services/channels';

const AppContext = createContext();
const [channel, setChannel] = useState();

useEffect(() => {
  const fetchData = async () => {
    const data = await getChannel(1);
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

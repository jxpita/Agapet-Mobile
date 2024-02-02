// NavigationContext.js

import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext({
  isTabBarVisible: true,
  setIsTabBarVisible: () => {},
});

export const useNavigationVisibility = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);

  return (
    <NavigationContext.Provider value={{ isTabBarVisible, setIsTabBarVisible }}>
      {children}
    </NavigationContext.Provider>
  );
};

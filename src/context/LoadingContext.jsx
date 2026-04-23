import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLayoutLoading, setIsLayoutLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLayoutLoading, setIsLayoutLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

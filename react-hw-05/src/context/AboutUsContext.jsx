import React, { createContext, useContext } from 'react';

const AboutUsContext = createContext();

export const useAboutUs = () => useContext(AboutUsContext);

export const AboutUsProvider = ({ children }) => {
  const aboutUsInfo = {
    heading: "About Us",
    text: "We are a team of dedicated professionals committed to providing top-notch services.",
    team: [
      { name: "John Doe", position: "CEO" },
      { name: "Jane Smith", position: "CTO" },
      { name: "Alice Johnson", position: "CFO" },
      { name: "Bob Brown", position: "COO" },
      { name: "Charlie Davis", position: "CMO" },
    ],
  };

  return (
    <AboutUsContext.Provider value={aboutUsInfo}>
      {children}
    </AboutUsContext.Provider>
  );
};
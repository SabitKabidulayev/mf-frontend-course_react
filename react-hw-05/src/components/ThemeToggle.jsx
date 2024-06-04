import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <label>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      Dark Mode
    </label>
  );
};

export default ThemeToggle;
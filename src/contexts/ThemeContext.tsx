
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeColor = '#FF3860' | '#FFD700' | '#00A7E1' | '#14B8A6' | '#8B5CF6';

interface ThemeContextType {
  darkMode: boolean;
  themeColor: ThemeColor;
  toggleDarkMode: () => void;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load values from localStorage or use defaults
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    const saved = localStorage.getItem('themeColor');
    return (saved as ThemeColor) || '#FF3860';
  });

  // Apply theme to document when context values change
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    localStorage.setItem('themeColor', themeColor);
    
    // Apply to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply theme color as a CSS variable
    document.documentElement.style.setProperty('--theme-color', themeColor);
    
    // Update CSS variables based on the theme
    document.documentElement.style.setProperty('--primary', darkMode ? '196 100% 47%' : '196 100% 47%');
    document.documentElement.style.setProperty('--accent', darkMode ? '349 89% 60%' : '349 89% 60%');
  }, [darkMode, themeColor]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, themeColor, toggleDarkMode, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  light: {
    name: 'light',
    colors: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      background: '#ffffff',
      surface: '#f8f9fa',
      surfaceAlt: '#ffffff',
      text: '#333333',
      textSecondary: '#666666',
      textMuted: '#999999',
      border: '#e9ecef',
      borderLight: '#f0f0f0',
      shadow: 'rgba(0,0,0,0.1)',
      shadowHover: 'rgba(0,0,0,0.15)',
      overlay: 'rgba(0,0,0,0.3)',
      success: '#28a745',
      error: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      surface: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
    }
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      background: '#1a1a1a',
      surface: '#2d2d2d',
      surfaceAlt: '#3a3a3a',
      text: '#ffffff',
      textSecondary: '#cccccc',
      textMuted: '#999999',
      border: '#444444',
      borderLight: '#555555',
      shadow: 'rgba(0,0,0,0.3)',
      shadowHover: 'rgba(0,0,0,0.4)',
      overlay: 'rgba(0,0,0,0.6)',
      success: '#28a745',
      error: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      surface: 'linear-gradient(135deg, #2d2d2d 0%, #3a3a3a 100%)'
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Always default to light mode first
    const savedTheme = localStorage.getItem('foodie-theme');
    if (savedTheme && themes[savedTheme]) {
      return savedTheme;
    }

    // Always default to light mode instead of system preference
    return 'light';
  });

  const theme = themes[currentTheme];

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('foodie-theme', newTheme);
  };

  const setTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('foodie-theme', themeName);
    }
  };

  // Apply theme to document root for global CSS variables
  useEffect(() => {
    const root = document.documentElement;
    const colors = theme.colors;

    // Set CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
    });

    // Set theme class on body
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${currentTheme}`);

    // Set background color on body
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
  }, [theme, currentTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('foodie-theme')) {
        setCurrentTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const value = {
    theme,
    currentTheme,
    toggleTheme,
    setTheme,
    isDark: currentTheme === 'dark',
    isLight: currentTheme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
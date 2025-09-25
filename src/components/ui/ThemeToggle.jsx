import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = ({ size = 'medium', showLabel = true, className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  const sizeConfig = {
    small: { iconSize: 16, padding: '8px', fontSize: '0.875rem' },
    medium: { iconSize: 20, padding: '12px 16px', fontSize: '1rem' },
    large: { iconSize: 24, padding: '16px 20px', fontSize: '1.125rem' }
  };

  const config = sizeConfig[size];

  return (
    <motion.button
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: showLabel ? '8px' : '0',
        padding: config.padding,
        background: theme.colors.surface,
        color: theme.colors.text,
        border: `2px solid ${theme.colors.border}`,
        borderRadius: '12px',
        cursor: 'pointer',
        fontSize: config.fontSize,
        fontWeight: '500',
        transition: 'all 0.3s ease',
        boxShadow: `0 2px 8px ${theme.colors.shadow}`
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 4px 16px ${theme.colors.shadowHover}`
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = theme.colors.primary;
        e.currentTarget.style.background = theme.colors.surfaceAlt;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = theme.colors.border;
        e.currentTarget.style.background = theme.colors.surface;
      }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0.8 : 1
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isDark ? (
          <Moon size={config.iconSize} color={theme.colors.primary} />
        ) : (
          <Sun size={config.iconSize} color={theme.colors.primary} />
        )}
      </motion.div>

      {showLabel && (
        <motion.span
          initial={false}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.2,
            delay: 0.1
          }}
        >
          {isDark ? 'Dark' : 'Light'} Mode
        </motion.span>
      )}
    </motion.button>
  );
};

// Compact version for navbars
export const CompactThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        background: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = theme.colors.primary;
        e.currentTarget.style.borderColor = theme.colors.primary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = theme.colors.surface;
        e.currentTarget.style.borderColor = theme.colors.border;
      }}
    >
      <motion.div
        animate={{
          rotate: isDark ? 180 : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        {isDark ? (
          <Moon size={18} color="white" />
        ) : (
          <Sun size={18} color="white" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
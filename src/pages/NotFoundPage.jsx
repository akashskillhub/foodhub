import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';
import { useTheme } from '../context/ThemeContext';

const NotFoundPage = () => {
  const { theme } = useTheme();

  return (
    <div style={{ minHeight: '100vh', background: theme.colors.background }}>
      <SimpleNavbar />

      <div style={{
        paddingTop: '80px',
        paddingBottom: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 140px)'
      }}>
        <div className="container" style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '8rem',
                fontWeight: 'bold',
                color: theme.colors.primary,
                marginBottom: '0',
                lineHeight: '1',
                textShadow: `0 4px 20px ${theme.colors.shadow}`
              }}
            >
              404
            </motion.h1>

            {/* Error Message */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: '2rem',
                color: theme.colors.text,
                marginBottom: '16px',
                fontWeight: 'bold'
              }}
            >
              Page Not Found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                color: theme.colors.textSecondary,
                fontSize: '1.2rem',
                lineHeight: '1.6',
                marginBottom: '40px'
              }}
            >
              Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <Link
                to="/"
                style={{
                  background: theme.colors.primary,
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 8px 25px ${theme.colors.shadowHover}`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <Home size={20} />
                Go to Homepage
              </Link>

              <button
                onClick={() => window.history.back()}
                style={{
                  background: 'transparent',
                  color: theme.colors.text,
                  border: `2px solid ${theme.colors.border}`,
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = theme.colors.primary;
                  e.target.style.color = theme.colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = theme.colors.border;
                  e.target.style.color = theme.colors.text;
                }}
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </motion.div>

            {/* Search Suggestion */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{
                background: theme.colors.surface,
                padding: '24px',
                borderRadius: '16px',
                marginTop: '40px',
                border: `1px solid ${theme.colors.border}`
              }}
            >
              <Search size={24} color={theme.colors.primary} style={{ marginBottom: '12px' }} />
              <h3 style={{
                fontSize: '1.2rem',
                color: theme.colors.text,
                marginBottom: '8px',
                fontWeight: 'bold'
              }}>
                Looking for something specific?
              </h3>
              <p style={{
                color: theme.colors.textSecondary,
                fontSize: '1rem',
                marginBottom: '16px'
              }}>
                Try searching our menu or browse our popular categories.
              </p>
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link
                  to="/menu"
                  style={{
                    background: theme.colors.surfaceAlt,
                    color: theme.colors.text,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    border: `1px solid ${theme.colors.border}`
                  }}
                >
                  Browse Menu
                </Link>
                <Link
                  to="/about"
                  style={{
                    background: theme.colors.surfaceAlt,
                    color: theme.colors.text,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    border: `1px solid ${theme.colors.border}`
                  }}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  style={{
                    background: theme.colors.surfaceAlt,
                    color: theme.colors.text,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    border: `1px solid ${theme.colors.border}`
                  }}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default NotFoundPage;
import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Info, Shield } from 'lucide-react';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';
import { useTheme } from '../context/ThemeContext';

const CookiePolicyPage = () => {
  const { theme } = useTheme();

  const cookieTypes = [
    {
      type: "Essential Cookies",
      icon: <Shield size={24} />,
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      type: "Performance Cookies",
      icon: <Settings size={24} />,
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site."
    },
    {
      type: "Functionality Cookies",
      icon: <Cookie size={24} />,
      description: "These cookies enable the website to provide enhanced functionality and personalisation."
    },
    {
      type: "Marketing Cookies",
      icon: <Info size={24} />,
      description: "These cookies may be set through our site by our advertising partners."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: theme.colors.background }}>
      <SimpleNavbar />

      <div style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <Cookie size={48} color={theme.colors.primary} style={{ marginBottom: '20px' }} />
            <h1 style={{
              fontSize: '3rem',
              color: theme.colors.text,
              marginBottom: '16px',
              fontWeight: 'bold'
            }}>
              Cookie Policy
            </h1>
            <p style={{
              color: theme.colors.textSecondary,
              fontSize: '1.2rem',
              lineHeight: '1.6'
            }}>
              Learn how FoodieHub uses cookies to enhance your browsing experience.
            </p>
          </motion.div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '2rem',
              color: theme.colors.text,
              marginBottom: '24px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              Types of Cookies We Use
            </h2>

            <div style={{ display: 'grid', gap: '24px' }}>
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: theme.colors.surfaceAlt,
                    padding: '24px',
                    borderRadius: '12px',
                    boxShadow: `0 2px 12px ${theme.colors.shadow}`,
                    border: `1px solid ${theme.colors.border}`,
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    background: theme.colors.primary,
                    color: 'white',
                    padding: '12px',
                    borderRadius: '50%',
                    flexShrink: 0
                  }}>
                    {cookie.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      color: theme.colors.text,
                      marginBottom: '12px',
                      fontWeight: 'bold'
                    }}>
                      {cookie.type}
                    </h3>
                    <p style={{
                      color: theme.colors.textSecondary,
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {cookie.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              background: theme.colors.primary,
              color: 'white',
              padding: '40px',
              borderRadius: '16px',
              textAlign: 'center'
            }}
          >
            <Cookie size={32} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Questions about Cookies?</h3>
            <p style={{ fontSize: '1rem', marginBottom: '24px', opacity: 0.9 }}>
              If you have any questions about our Cookie Policy, please contact us.
            </p>
            <a
              href="/contact"
              style={{
                background: 'white',
                color: theme.colors.primary,
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default CookiePolicyPage;
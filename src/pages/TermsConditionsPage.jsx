import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle } from 'lucide-react';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';
import { useTheme } from '../context/ThemeContext';

const TermsConditionsPage = () => {
  const { theme } = useTheme();

  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using FoodieHub's services, you accept and agree to be bound by the terms and provision of this agreement. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the materials on FoodieHub's website for personal, non-commercial transitory viewing only. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Disclaimer",
      content: "The materials on FoodieHub's website are provided on an 'as is' basis. FoodieHub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Limitations",
      content: "In no event shall FoodieHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FoodieHub's website."
    },
    {
      title: "Account Terms",
      content: "When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account."
    },
    {
      title: "Prohibited Uses",
      content: "You may not use our service for any illegal or unauthorized purpose nor may you, in the use of the service, violate any laws in your jurisdiction including but not limited to copyright laws."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: theme.colors.background }}>
      <SimpleNavbar />

      <div style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <FileText size={48} color={theme.colors.primary} />
            </div>
            <h1 style={{
              fontSize: '3rem',
              color: theme.colors.text,
              marginBottom: '16px',
              fontWeight: 'bold'
            }}>
              Terms & Conditions
            </h1>
            <p style={{
              color: theme.colors.textSecondary,
              fontSize: '1.2rem',
              lineHeight: '1.6'
            }}>
              Please read these terms and conditions carefully before using our service.
            </p>
            <div style={{
              background: theme.colors.surface,
              padding: '16px',
              borderRadius: '12px',
              marginTop: '24px',
              border: `1px solid ${theme.colors.border}`
            }}>
              <p style={{
                color: theme.colors.textSecondary,
                fontSize: '0.9rem',
                margin: 0
              }}>
                <strong>Last Updated:</strong> January 1, 2024
              </p>
            </div>
          </motion.div>

          {/* Content Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: theme.colors.surfaceAlt,
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: `0 4px 20px ${theme.colors.shadow}`,
                  border: `1px solid ${theme.colors.border}`
                }}
              >
                <h2 style={{
                  fontSize: '1.5rem',
                  color: theme.colors.text,
                  marginBottom: '16px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <Shield size={24} color={theme.colors.primary} />
                  {section.title}
                </h2>
                <p style={{
                  color: theme.colors.textSecondary,
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              background: theme.colors.primary,
              color: 'white',
              padding: '40px',
              borderRadius: '16px',
              textAlign: 'center',
              marginTop: '40px'
            }}
          >
            <AlertCircle size={32} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Questions about our Terms?</h3>
            <p style={{ fontSize: '1rem', marginBottom: '24px', opacity: 0.9 }}>
              If you have any questions about these Terms and Conditions, please contact us.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a
                href="/contact"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = theme.colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.2)';
                  e.target.style.color = 'white';
                }}
              >
                Contact Us
              </a>
              <a
                href="/help"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = theme.colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.2)';
                  e.target.style.color = 'white';
                }}
              >
                Help & Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default TermsConditionsPage;
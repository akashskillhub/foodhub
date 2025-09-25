import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';
import { useTheme } from '../context/ThemeContext';

const LegalPage = () => {
  const { theme } = useTheme();

  const legalDocuments = [
    {
      title: "Terms & Conditions",
      description: "Our terms of service and user agreement that govern your use of FoodieHub's platform and services.",
      icon: <FileText size={24} />,
      link: "/terms"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information and data privacy practices.",
      icon: <Shield size={24} />,
      link: "/privacy"
    },
    {
      title: "Cookie Policy",
      description: "Information about how we use cookies and similar technologies on our website and apps.",
      icon: <AlertTriangle size={24} />,
      link: "/cookies"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: theme.colors.background }}>
      <SimpleNavbar />

      <div style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px',
            background: theme.colors.surface,
            padding: '80px 20px',
            borderBottom: `1px solid ${theme.colors.border}`
          }}
        >
          <Scale size={64} color={theme.colors.primary} style={{ marginBottom: '24px' }} />
          <h1 style={{
            fontSize: '3.5rem',
            color: theme.colors.text,
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            Legal Information
          </h1>
          <p style={{
            color: theme.colors.textSecondary,
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Important legal documents and policies that govern your use of FoodieHub services.
          </p>
        </motion.div>

        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>

          {/* Legal Documents */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '60px' }}>
            {legalDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={doc.link}
                  style={{
                    display: 'block',
                    background: theme.colors.surfaceAlt,
                    padding: '32px',
                    borderRadius: '16px',
                    boxShadow: `0 4px 20px ${theme.colors.shadow}`,
                    border: `1px solid ${theme.colors.border}`,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 8px 30px ${theme.colors.shadowHover}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = `0 4px 20px ${theme.colors.shadow}`;
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{
                      background: theme.colors.primary,
                      color: 'white',
                      padding: '16px',
                      borderRadius: '12px',
                      flexShrink: 0
                    }}>
                      {doc.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        color: theme.colors.text,
                        marginBottom: '12px',
                        fontWeight: 'bold'
                      }}>
                        {doc.title}
                      </h3>
                      <p style={{
                        color: theme.colors.textSecondary,
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {doc.description}
                      </p>
                    </div>
                    <div style={{
                      color: theme.colors.primary,
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}>
                      →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Compliance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: theme.colors.surfaceAlt,
              padding: '40px',
              borderRadius: '16px',
              marginBottom: '40px',
              boxShadow: `0 4px 20px ${theme.colors.shadow}`,
              border: `1px solid ${theme.colors.border}`
            }}
          >
            <h2 style={{
              fontSize: '2rem',
              color: theme.colors.text,
              marginBottom: '20px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              Legal Compliance
            </h2>
            <p style={{
              color: theme.colors.textSecondary,
              fontSize: '1.1rem',
              lineHeight: '1.7',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              FoodieHub is committed to operating in full compliance with all applicable laws and regulations.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p style={{
              color: theme.colors.textSecondary,
              fontSize: '1rem',
              lineHeight: '1.7',
              textAlign: 'center'
            }}>
              We regularly review and update our policies to ensure continued compliance with evolving legal requirements
              and industry best practices.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              background: theme.colors.primary,
              color: 'white',
              padding: '40px',
              borderRadius: '16px',
              textAlign: 'center'
            }}
          >
            <Scale size={32} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Legal Questions?</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.9 }}>
              If you have any legal questions or need clarification about our policies, please contact our legal team.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a
                href="/contact"
                style={{
                  background: 'white',
                  color: theme.colors.primary,
                  padding: '16px 32px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}
              >
                Contact Legal Team
              </a>
              <a
                href="/help"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: '2px solid white',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
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

export default LegalPage;
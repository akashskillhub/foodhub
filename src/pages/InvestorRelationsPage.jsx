import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, Calendar, DollarSign, Users, BarChart3 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';

const InvestorRelationsPage = () => {
  const { theme } = useTheme();

  const financialHighlights = [
    {
      title: 'Revenue Growth',
      value: '+45%',
      description: 'Year-over-year growth',
      icon: TrendingUp,
      color: '#28a745'
    },
    {
      title: 'Active Restaurants',
      value: '10,000+',
      description: 'Partner restaurants',
      icon: Users,
      color: '#ff6b35'
    },
    {
      title: 'Monthly Orders',
      value: '2.5M',
      description: 'Orders processed',
      icon: BarChart3,
      color: '#17a2b8'
    },
    {
      title: 'Market Cap',
      value: '$1.2B',
      description: 'Current valuation',
      icon: DollarSign,
      color: '#6f42c1'
    }
  ];

  const reports = [
    {
      title: 'Q3 2024 Earnings Report',
      date: 'November 15, 2024',
      type: 'Quarterly Report',
      fileSize: '2.3 MB'
    },
    {
      title: 'Annual Report 2023',
      date: 'March 31, 2024',
      type: 'Annual Report',
      fileSize: '5.7 MB'
    },
    {
      title: 'Q2 2024 Financial Results',
      date: 'August 20, 2024',
      type: 'Quarterly Report',
      fileSize: '1.8 MB'
    },
    {
      title: 'ESG Report 2024',
      date: 'June 10, 2024',
      type: 'Sustainability Report',
      fileSize: '3.2 MB'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Q4 2024 Earnings Call',
      date: 'February 28, 2025',
      time: '4:00 PM EST',
      type: 'Earnings Call'
    },
    {
      title: 'Investor Day 2025',
      date: 'March 15, 2025',
      time: '9:00 AM EST',
      type: 'Investor Event'
    },
    {
      title: 'Annual Shareholder Meeting',
      date: 'May 20, 2025',
      time: '10:00 AM EST',
      type: 'AGM'
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: theme.colors.background, minHeight: '100vh' }}>
      <SimpleNavbar />

      <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0', textAlign: 'center' }}
          >
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              color: theme.colors.text,
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Investor Relations
            </h1>
            <p style={{
              fontSize: '1.3rem',
              color: theme.colors.textSecondary,
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Building the future of food delivery with transparent communication and strong financial performance
            </p>
          </motion.section>

          {/* Financial Highlights */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: theme.colors.text,
              marginBottom: '50px',
              textAlign: 'center'
            }}>
              Financial Highlights
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginBottom: '60px'
            }}>
              {financialHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: theme.colors.surface,
                    padding: '40px 30px',
                    borderRadius: '20px',
                    textAlign: 'center',
                    boxShadow: theme.shadows.medium,
                    border: `1px solid ${theme.colors.border}`,
                    transition: 'transform 0.3s ease'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: `${item.color}15`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    border: `3px solid ${item.color}`
                  }}>
                    <item.icon size={32} color={item.color} />
                  </div>
                  <h3 style={{
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    color: item.color,
                    marginBottom: '8px'
                  }}>
                    {item.value}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: theme.colors.text,
                    marginBottom: '8px'
                  }}>
                    {item.title}
                  </p>
                  <p style={{ color: theme.colors.textSecondary }}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Reports & Documents */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: theme.colors.text,
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              Financial Reports & Documents
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {reports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: theme.colors.surface,
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: theme.shadows.small,
                    border: `1px solid ${theme.colors.border}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.02, boxShadow: theme.shadows.medium }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: `${theme.colors.primary}15`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FileText size={24} color={theme.colors.primary} />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: theme.colors.text,
                        marginBottom: '4px'
                      }}>
                        {report.title}
                      </h3>
                      <p style={{ color: theme.colors.textSecondary, fontSize: '0.9rem' }}>
                        {report.type} • {report.fileSize}
                      </p>
                    </div>
                  </div>
                  <p style={{
                    color: theme.colors.textSecondary,
                    marginBottom: '15px',
                    fontSize: '0.95rem'
                  }}>
                    Published: {report.date}
                  </p>
                  <button style={{
                    background: theme.colors.primary,
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    width: '100%',
                    fontSize: '0.95rem'
                  }}>
                    Download PDF
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Upcoming Events */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: theme.colors.text,
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              Upcoming Events
            </h2>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: theme.colors.surface,
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: theme.shadows.small,
                    border: `1px solid ${theme.colors.border}`,
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: `${theme.colors.primary}15`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Calendar size={28} color={theme.colors.primary} />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        color: theme.colors.text,
                        marginBottom: '8px'
                      }}>
                        {event.title}
                      </h3>
                      <p style={{ color: theme.colors.textSecondary }}>
                        {event.date} at {event.time}
                      </p>
                      <span style={{
                        background: `${theme.colors.primary}20`,
                        color: theme.colors.primary,
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <button style={{
                    background: 'transparent',
                    border: `2px solid ${theme.colors.primary}`,
                    color: theme.colors.primary,
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '0.95rem'
                  }}>
                    Register
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              color: 'white',
              padding: '60px 40px',
              borderRadius: '20px',
              textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                Investor Contact
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
                Have questions about our financial performance or investment opportunities?
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Email</h3>
                  <p style={{ opacity: 0.9 }}>investors@foodiehub.com</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Phone</h3>
                  <p style={{ opacity: 0.9 }}>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Address</h3>
                  <p style={{ opacity: 0.9 }}>123 Business Ave, Mumbai, India</p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default InvestorRelationsPage;
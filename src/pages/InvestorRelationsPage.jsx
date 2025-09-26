import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, Calendar, DollarSign, Users, BarChart3, Download, ExternalLink, PieChart } from 'lucide-react';

const InvestorRelationsPage = () => {
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
      title: 'Gross Revenue',
      value: '₹850M',
      description: 'Annual run rate',
      icon: DollarSign,
      color: '#ffc107'
    }
  ];

  const reports = [
    {
      title: 'Annual Report 2024',
      description: 'Comprehensive overview of our business performance and strategic initiatives',
      date: 'March 2024',
      type: 'PDF',
      size: '2.4 MB'
    },
    {
      title: 'Q3 2024 Earnings',
      description: 'Third quarter financial results and business metrics',
      date: 'October 2024',
      type: 'PDF',
      size: '1.8 MB'
    },
    {
      title: 'Sustainability Report',
      description: 'Our environmental and social impact initiatives and progress',
      date: 'June 2024',
      type: 'PDF',
      size: '3.1 MB'
    },
    {
      title: 'Investor Presentation',
      description: 'Latest investor deck with market opportunity and growth strategy',
      date: 'November 2024',
      type: 'PDF',
      size: '5.2 MB'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Q4 2024 Earnings Call',
      date: 'February 15, 2025',
      time: '10:00 AM IST',
      description: 'Live discussion of quarterly results with management'
    },
    {
      title: 'Annual Investor Day',
      date: 'March 20, 2025',
      time: '2:00 PM IST',
      description: 'Deep dive into strategy, market opportunities, and long-term vision'
    },
    {
      title: 'Technology Innovation Showcase',
      date: 'April 10, 2025',
      time: '11:00 AM IST',
      description: 'Demonstration of latest technology initiatives and AI capabilities'
    }
  ];

  const keyMetrics = [
    { label: 'Market Cap', value: '₹12.5B', change: '+23%' },
    { label: 'Revenue (TTM)', value: '₹2.1B', change: '+45%' },
    { label: 'Gross Margin', value: '68%', change: '+2.3%' },
    { label: 'Customer Lifetime Value', value: '₹2,400', change: '+15%' },
    { label: 'Monthly Active Users', value: '5.2M', change: '+38%' },
    { label: 'Average Order Value', value: '₹420', change: '+12%' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fc', paddingTop: '100px' }}>
      <div style={{ paddingTop: '20px', paddingBottom: '60px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px',
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
            color: 'white',
            padding: '80px 20px',
            borderRadius: '0 0 20px 20px'
          }}
        >
          <TrendingUp size={64} style={{ marginBottom: '24px' }} />
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Investor Relations
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Building sustainable growth and delivering value to our shareholders
          </p>
        </motion.div>

        {/* Financial Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            maxWidth: '1200px',
            margin: '0 auto 80px',
            padding: '0 20px'
          }}
        >
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '50px',
            color: '#333'
          }}>
            Financial Highlights
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {financialHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e0e0e0'
                }}
              >
                <div style={{
                  background: item.color,
                  color: 'white',
                  borderRadius: '50%',
                  width: '70px',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <item.icon size={28} />
                </div>
                <h3 style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: item.color,
                  marginBottom: '8px'
                }}>
                  {item.value}
                </h3>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  color: '#666',
                  margin: 0,
                  fontSize: '14px'
                }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            maxWidth: '1200px',
            margin: '0 auto 80px',
            padding: '0 20px'
          }}
        >
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '50px',
            color: '#333'
          }}>
            Key Performance Metrics
          </h2>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid #e0e0e0'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '30px'
            }}>
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '5px'
                  }}>
                    {metric.value}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#666',
                    marginBottom: '8px'
                  }}>
                    {metric.label}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: metric.change.startsWith('+') ? '#28a745' : '#dc3545',
                    fontWeight: 'bold',
                    background: metric.change.startsWith('+') ? '#e8f5e8' : '#fdeaea',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    display: 'inline-block'
                  }}>
                    {metric.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Financial Reports */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            maxWidth: '1200px',
            margin: '0 auto 80px',
            padding: '0 20px'
          }}
        >
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '50px',
            color: '#333'
          }}>
            Financial Reports & Documents
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px'
          }}>
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e0e0e0'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '15px'
                }}>
                  <FileText size={24} style={{ color: '#ff6b35' }} />
                  <div style={{
                    background: '#f8f9fa',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: '#666'
                  }}>
                    {report.type} • {report.size}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#333'
                }}>
                  {report.title}
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  marginBottom: '15px'
                }}>
                  {report.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{
                    color: '#999',
                    fontSize: '13px'
                  }}>
                    {report.date}
                  </span>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#ff6b35',
                    color: 'white',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#e55a2b'}
                  onMouseOut={(e) => e.target.style.background = '#ff6b35'}
                  >
                    <Download size={14} />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Upcoming Events */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}
        >
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '50px',
            color: '#333'
          }}>
            Upcoming Events
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginBottom: '60px'
          }}>
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e0e0e0',
                  borderLeft: '4px solid #ff6b35'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <Calendar size={20} style={{ color: '#ff6b35', marginRight: '8px' }} />
                  <span style={{
                    background: '#fff3e0',
                    color: '#ff6b35',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {event.date}
                  </span>
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#333'
                }}>
                  {event.title}
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  marginBottom: '12px'
                }}>
                  {event.description}
                </p>
                <div style={{
                  color: '#ff6b35',
                  fontSize: '13px',
                  fontWeight: 'bold'
                }}>
                  {event.time}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact IR */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{
            textAlign: 'center',
            padding: '0 20px'
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
            color: 'white',
            padding: '60px 40px',
            borderRadius: '20px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <PieChart size={60} style={{ marginBottom: '25px' }} />
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Investor Relations Contact
            </h2>
            <p style={{
              fontSize: '16px',
              marginBottom: '30px',
              opacity: 0.9
            }}>
              For investor inquiries, financial information, or to schedule meetings with our IR team
            </p>
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="mailto:ir@foodhub.com"
                style={{
                  display: 'inline-block',
                  background: 'white',
                  color: '#ff6b35',
                  padding: '12px 25px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                Email IR Team
              </a>
              <button style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '12px 25px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#ff6b35';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
              }}
              >
                Request Meeting
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default InvestorRelationsPage;
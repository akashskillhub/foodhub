import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Shield, AlertTriangle, Users, Building2, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalPage = () => {
  const legalDocuments = [
    {
      title: "Terms & Conditions",
      description: "Our terms of service and user agreement that govern your use of FoodHub's platform and services.",
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

  const companyInfo = {
    name: "FoodHub Technologies Pvt. Ltd.",
    address: "123 Tech Park, Innovation Street, Bengaluru, Karnataka 560001, India",
    phone: "+91 80 1234 5678",
    email: "legal@foodhub.com",
    cin: "U72900KA2020PTC123456",
    gst: "29AABCU9603R1ZZ"
  };

  const legalNotices = [
    {
      title: "Intellectual Property Rights",
      content: "All content, trademarks, logos, and intellectual property on this platform are owned by FoodHub Technologies Pvt. Ltd. Unauthorized use is strictly prohibited."
    },
    {
      title: "Disclaimer",
      content: "While we strive to provide accurate information, FoodHub makes no warranties about the completeness, reliability, or accuracy of information on this platform."
    },
    {
      title: "Limitation of Liability",
      content: "FoodHub's liability is limited to the maximum extent permitted by applicable law. We are not liable for indirect, incidental, or consequential damages."
    },
    {
      title: "Governing Law",
      content: "These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka."
    }
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
          <Scale size={64} style={{ marginBottom: '24px' }} />
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Legal Information
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Important legal documents, policies, and company information
          </p>
        </motion.div>

        {/* Legal Documents */}
        <motion.div
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
            Legal Documents
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {legalDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Link
                  to={doc.link}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    background: 'white',
                    padding: '40px 30px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    background: '#ff6b35',
                    color: 'white',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    {doc.icon}
                  </div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                    color: '#333'
                  }}>
                    {doc.title}
                  </h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {doc.description}
                  </p>
                  <div style={{
                    marginTop: '20px',
                    color: '#ff6b35',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    Read More →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
            Company Information
          </h2>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '50px 40px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid #e0e0e0'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <Building2 size={24} style={{ color: '#ff6b35', marginRight: '12px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', margin: 0 }}>
                    Company Details
                  </h3>
                </div>
                <p style={{ color: '#666', marginBottom: '10px', lineHeight: '1.6' }}>
                  <strong>Name:</strong> {companyInfo.name}
                </p>
                <p style={{ color: '#666', marginBottom: '10px', lineHeight: '1.6' }}>
                  <strong>CIN:</strong> {companyInfo.cin}
                </p>
                <p style={{ color: '#666', marginBottom: '0', lineHeight: '1.6' }}>
                  <strong>GST:</strong> {companyInfo.gst}
                </p>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <Users size={24} style={{ color: '#ff6b35', marginRight: '12px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', margin: 0 }}>
                    Contact Information
                  </h3>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <Mail size={16} style={{ color: '#ff6b35', marginRight: '8px', marginTop: '2px' }} />
                  <span style={{ color: '#666' }}>{companyInfo.email}</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <Phone size={16} style={{ color: '#ff6b35', marginRight: '8px' }} />
                  <span style={{ color: '#666' }}>{companyInfo.phone}</span>
                </div>
                <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                  <strong>Address:</strong> {companyInfo.address}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legal Notices */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
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
            Legal Notices
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {legalNotices.map((notice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e0e0e0'
                }}
              >
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '15px'
                }}>
                  {notice.title}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  fontSize: '14px',
                  margin: 0
                }}>
                  {notice.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact for Legal Queries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            textAlign: 'center',
            marginTop: '80px',
            padding: '0 20px'
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
            color: 'white',
            padding: '50px 40px',
            borderRadius: '20px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <Scale size={48} style={{ marginBottom: '20px' }} />
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              Legal Queries?
            </h2>
            <p style={{
              fontSize: '16px',
              marginBottom: '25px',
              opacity: 0.9
            }}>
              For any legal questions or concerns, please reach out to our legal team
            </p>
            <a
              href={`mailto:${companyInfo.email}`}
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
              Contact Legal Team
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award, MapPin, Calendar } from 'lucide-react';

const CompanyOverviewPage = () => {
  const stats = [
    { icon: <Users size={32} />, number: '10M+', label: 'Happy Customers' },
    { icon: <Building2 size={32} />, number: '500+', label: 'Restaurant Partners' },
    { icon: <MapPin size={32} />, number: '50+', label: 'Cities Covered' },
    { icon: <Calendar size={32} />, number: '5+', label: 'Years of Service' }
  ];

  const values = [
    {
      title: "Customer First",
      icon: <Users size={24} />,
      description: "We prioritize customer satisfaction in everything we do. Our customer-centric approach drives every decision we make."
    },
    {
      title: "Quality Assured",
      icon: <Award size={24} />,
      description: "We maintain the highest standards of food quality and service excellence across all our partner restaurants."
    },
    {
      title: "Innovation",
      icon: <Target size={24} />,
      description: "We continuously innovate to provide better food delivery experiences and cutting-edge technology solutions."
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
            padding: '60px 20px',
            borderRadius: '0 0 20px 20px'
          }}
        >
          <Building2 size={64} color="white" style={{ marginBottom: '24px' }} />
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: 'white'
          }}>
            Company Overview
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Building the future of food delivery, one meal at a time
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            marginBottom: '80px'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                textAlign: 'center',
                background: 'white',
                padding: '40px 30px',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #e0e0e0'
              }}
            >
              <div style={{
                background: '#ff6b35',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white'
              }}>
                {stat.icon}
              </div>
              <h3 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#333'
              }}>
                {stat.number}
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#666',
                margin: 0
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            maxWidth: '1200px',
            margin: '0 auto 80px',
            padding: '0 20px'
          }}
        >
          <div style={{
            textAlign: 'center',
            background: 'white',
            padding: '60px 40px',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid #e0e0e0'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              marginBottom: '24px',
              color: '#333'
            }}>
              Our Mission
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              To revolutionize the food delivery industry by connecting people with their favorite meals through
              innovative technology, exceptional service, and a commitment to quality. We strive to create
              meaningful experiences that bring communities together, one delivery at a time.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
            Our Values
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e0e0e0',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  background: '#ff6b35',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: '#333'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#666',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '80px',
            padding: '0 20px'
          }}
        >
          <div style={{
            background: '#ff6b35',
            color: 'white',
            padding: '50px 40px',
            borderRadius: '20px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Join Our Journey
            </h2>
            <p style={{
              fontSize: '18px',
              marginBottom: '30px',
              opacity: 0.9
            }}>
              Ready to be part of the future of food delivery?
            </p>
            <button style={{
              background: 'white',
              color: '#ff6b35',
              border: 'none',
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}>
              Explore Opportunities
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyOverviewPage;
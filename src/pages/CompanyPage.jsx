import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, Users, Award, Globe, TrendingUp, Heart, Zap } from 'lucide-react';

const CompanyPage = () => {
  const milestones = [
    { year: '2020', event: 'FoodHub Founded', description: 'Started as a small local delivery service with a big vision' },
    { year: '2021', event: '10K+ Orders', description: 'Reached our first major milestone with growing customer base' },
    { year: '2022', event: 'Multi-City Expansion', description: 'Expanded to 25+ major cities across the country' },
    { year: '2023', event: '100K+ Customers', description: 'Built a loyal community of food enthusiasts' },
    { year: '2024', event: 'Innovation Focus', description: 'Launched AI-powered recommendations and smart delivery' }
  ];

  const values = [
    {
      icon: <Target size={48} color="#ff6b35" />,
      title: 'Customer First',
      description: 'Everything we do is centered around delivering exceptional customer experiences and satisfaction.'
    },
    {
      icon: <Users size={48} color="#ff6b35" />,
      title: 'Community',
      description: 'We build strong relationships with restaurants, delivery partners, and customers in every city we serve.'
    },
    {
      icon: <Award size={48} color="#ff6b35" />,
      title: 'Quality',
      description: 'We maintain the highest standards in food quality, service delivery, and technology innovation.'
    },
    {
      icon: <Heart size={48} color="#ff6b35" />,
      title: 'Passion',
      description: 'We are passionate about food, technology, and creating memorable experiences for everyone.'
    },
    {
      icon: <Zap size={48} color="#ff6b35" />,
      title: 'Speed',
      description: 'Fast, reliable delivery is at the core of what we do, ensuring your food arrives hot and fresh.'
    },
    {
      icon: <Globe size={48} color="#ff6b35" />,
      title: 'Growth',
      description: 'We continuously expand our reach while maintaining our commitment to local communities.'
    }
  ];

  const stats = [
    { number: '500K+', label: 'Happy Customers', icon: <Users size={24} /> },
    { number: '10K+', label: 'Restaurant Partners', icon: <Building2 size={24} /> },
    { number: '50+', label: 'Cities Served', icon: <Globe size={24} /> },
    { number: '99%', label: 'Satisfaction Rate', icon: <Award size={24} /> }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fc', paddingTop: '100px' }}>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
          color: 'white',
          padding: '80px 20px',
          textAlign: 'center',
          borderRadius: '0 0 20px 20px'
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Building2 size={80} style={{ marginBottom: '30px' }} />
          <h1 style={{
            fontSize: '56px',
            fontWeight: 'bold',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, white, rgba(255,255,255,0.8))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            About FoodHub
          </h1>
          <p style={{
            fontSize: '22px',
            maxWidth: '700px',
            margin: '0 auto',
            opacity: 0.95,
            lineHeight: '1.6'
          }}>
            Revolutionizing food delivery through innovation, quality, and exceptional customer service since 2020
          </p>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: 'white',
                padding: '40px 20px',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #e0e0e0'
              }}
            >
              <div style={{
                color: '#ff6b35',
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {stat.icon}
              </div>
              <h3 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '8px'
              }}>
                {stat.number}
              </h3>
              <p style={{
                color: '#666',
                fontSize: '16px',
                margin: 0
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ padding: '0 20px 80px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '60px 40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#333'
          }}>
            Our Story
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Founded in 2020 with a simple mission: to connect people with delicious food from their favorite restaurants.
            What started as a local delivery service has grown into a nationwide platform serving hundreds of thousands
            of customers. We believe that good food brings people together, and we're proud to be part of that connection.
            <br /><br />
            Our journey has been driven by innovation, customer feedback, and a relentless pursuit of excellence.
            From our humble beginnings to becoming a trusted name in food delivery, we've never lost sight of what
            matters most: delivering not just food, but happiness to your doorstep.
          </p>
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ padding: '0 20px 80px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <h2 style={{
          textAlign: 'center',
          fontSize: '42px',
          fontWeight: 'bold',
          marginBottom: '60px',
          color: '#333'
        }}>
          Our Journey
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(to bottom, #ff6b35, #f7931e)',
            transform: 'translateX(-50%)',
            borderRadius: '2px'
          }} />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '60px',
                position: 'relative'
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '50%',
                width: '20px',
                height: '20px',
                background: '#ff6b35',
                borderRadius: '50%',
                transform: 'translateX(-50%)',
                border: '4px solid white',
                boxShadow: '0 0 0 4px #ff6b35',
                zIndex: 2
              }} />

              {/* Content */}
              <div style={{
                width: '45%',
                marginLeft: index % 2 === 0 ? '0' : '55%',
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #e0e0e0'
              }}>
                <div style={{
                  background: '#ff6b35',
                  color: 'white',
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}>
                  {milestone.year}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: '#333'
                }}>
                  {milestone.event}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ padding: '0 20px 80px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <h2 style={{
          textAlign: 'center',
          fontSize: '42px',
          fontWeight: 'bold',
          marginBottom: '60px',
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
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #e0e0e0'
              }}
            >
              <div style={{ marginBottom: '25px' }}>
                {value.icon}
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '15px',
                color: '#333'
              }}>
                {value.title}
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                margin: 0
              }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        style={{ padding: '0 20px 60px', maxWidth: '800px', margin: '0 auto' }}
      >
        <div style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
          color: 'white',
          padding: '60px 40px',
          borderRadius: '20px',
          textAlign: 'center'
        }}>
          <TrendingUp size={60} style={{ marginBottom: '25px' }} />
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Join Our Journey
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '35px',
            opacity: 0.95
          }}>
            Be part of the food delivery revolution. Whether you're a customer,
            restaurant partner, or potential team member, we'd love to have you aboard!
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'white',
              color: '#ff6b35',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Start Ordering
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '15px 30px',
              borderRadius: '10px',
              fontSize: '16px',
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
              Partner With Us
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CompanyPage;
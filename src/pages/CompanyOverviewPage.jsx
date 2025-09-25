import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award, MapPin, Calendar } from 'lucide-react';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';
import { useTheme } from '../context/ThemeContext';

const CompanyOverviewPage = () => {
  const { theme } = useTheme();

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
      description: "We prioritize customer satisfaction in everything we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
            padding: '60px 20px',
            borderBottom: `1px solid ${theme.colors.border}`
          }}
        >
          <Building2 size={64} color={theme.colors.primary} style={{ marginBottom: '24px' }} />
          <h1 style={{
            fontSize: '3.5rem',
            color: theme.colors.text,
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            About FoodieHub
          </h1>
          <p style={{
            color: theme.colors.textSecondary,
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Connecting food lovers with their favorite restaurants through innovative technology and exceptional service.
          </p>
        </motion.div>

        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: '80px' }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px'
            }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    background: theme.colors.surfaceAlt,
                    padding: '32px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    boxShadow: `0 4px 20px ${theme.colors.shadow}`,
                    border: `1px solid ${theme.colors.border}`
                  }}
                >
                  <div style={{
                    background: theme.colors.primary,
                    color: 'white',
                    padding: '16px',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    marginBottom: '16px'
                  }}>
                    {stat.icon}
                  </div>
                  <h3 style={{
                    fontSize: '2.5rem',
                    color: theme.colors.text,
                    marginBottom: '8px',
                    fontWeight: 'bold'
                  }}>
                    {stat.number}
                  </h3>
                  <p style={{
                    color: theme.colors.textSecondary,
                    fontSize: '1.1rem'
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: theme.colors.surfaceAlt,
              padding: '50px',
              borderRadius: '20px',
              marginBottom: '60px',
              boxShadow: `0 4px 20px ${theme.colors.shadow}`,
              border: `1px solid ${theme.colors.border}`
            }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              color: theme.colors.text,
              marginBottom: '24px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              Our Mission
            </h2>
            <p style={{
              color: theme.colors.textSecondary,
              fontSize: '1.2rem',
              lineHeight: '1.8',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              To revolutionize the food delivery industry by connecting people with great food experiences.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              color: theme.colors.text,
              marginBottom: '40px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              Our Values
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  style={{
                    background: theme.colors.surfaceAlt,
                    padding: '32px',
                    borderRadius: '16px',
                    boxShadow: `0 4px 20px ${theme.colors.shadow}`,
                    border: `1px solid ${theme.colors.border}`,
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    background: theme.colors.primary,
                    color: 'white',
                    padding: '16px',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    marginBottom: '20px'
                  }}>
                    {value.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: theme.colors.text,
                    marginBottom: '16px',
                    fontWeight: 'bold'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{
                    color: theme.colors.textSecondary,
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{
              background: theme.colors.primary,
              color: 'white',
              padding: '50px',
              borderRadius: '20px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Join Our Journey</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.9 }}>
              Be part of the food delivery revolution. Explore opportunities to grow with us.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a
                href="/careers"
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
                View Careers
              </a>
              <a
                href="/partner"
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
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default CompanyOverviewPage;
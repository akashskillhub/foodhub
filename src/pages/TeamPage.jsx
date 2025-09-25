import React from 'react';
import { motion } from 'framer-motion';
import { Users, Linkedin, Twitter, Github } from 'lucide-react';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';
import { useTheme } from '../context/ThemeContext';

const TeamPage = () => {
  const { theme } = useTheme();

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "10+ years in tech and food industry. Passionate about connecting people with great food experiences."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Former Google engineer with expertise in scalable systems and mobile applications."
    },
    {
      name: "Emily Davis",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Logistics expert ensuring smooth delivery operations across all our partner cities."
    },
    {
      name: "David Rodriguez",
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Creative strategist with 8 years experience in digital marketing and brand building."
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
          <Users size={64} color={theme.colors.primary} style={{ marginBottom: '24px' }} />
          <h1 style={{
            fontSize: '3.5rem',
            color: theme.colors.text,
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            Meet Our Team
          </h1>
          <p style={{
            color: theme.colors.textSecondary,
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            The passionate individuals behind FoodieHub's success. We're dedicated to revolutionizing food delivery.
          </p>
        </motion.div>

        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>

          {/* Team Members Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '60px'
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: theme.colors.surfaceAlt,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: `0 8px 32px ${theme.colors.shadow}`,
                  border: `1px solid ${theme.colors.border}`,
                  textAlign: 'center'
                }}
              >
                <div style={{ padding: '32px 24px' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginBottom: '20px',
                      border: `4px solid ${theme.colors.primary}`
                    }}
                  />
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: theme.colors.text,
                    marginBottom: '8px',
                    fontWeight: 'bold'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    color: theme.colors.primary,
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    {member.role}
                  </p>
                  <p style={{
                    color: theme.colors.textSecondary,
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    {member.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px'
                  }}>
                    <a href="#" style={{
                      background: theme.colors.surface,
                      padding: '8px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: theme.colors.textSecondary,
                      textDecoration: 'none'
                    }}>
                      <Linkedin size={18} />
                    </a>
                    <a href="#" style={{
                      background: theme.colors.surface,
                      padding: '8px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: theme.colors.textSecondary,
                      textDecoration: 'none'
                    }}>
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              background: theme.colors.primary,
              color: 'white',
              padding: '50px',
              borderRadius: '20px',
              textAlign: 'center'
            }}
          >
            <Users size={48} style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Want to Join Our Team?</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.9 }}>
              We're always looking for talented individuals who share our passion for food and technology.
            </p>
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
              View Open Positions
            </a>
          </motion.div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default TeamPage;
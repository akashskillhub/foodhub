import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Users, TrendingUp, MapPin, Clock } from 'lucide-react';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';

const CareersPage = () => {
  const benefits = [
    { icon: <Heart size={32} color="#ff6b35" />, title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs' },
    { icon: <TrendingUp size={32} color="#ff6b35" />, title: 'Growth Opportunities', description: 'Clear career paths and professional development' },
    { icon: <Users size={32} color="#ff6b35" />, title: 'Great Team', description: 'Work with passionate, talented individuals' },
    { icon: <Clock size={32} color="#ff6b35" />, title: 'Work-Life Balance', description: 'Flexible hours and remote work options' }
  ];

  const openings = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable food delivery solutions.',
      requirements: ['5+ years React/Node.js experience', 'Experience with microservices', 'Strong problem-solving skills']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead product strategy and development for our mobile and web platforms.',
      requirements: ['3+ years product management', 'Experience with consumer apps', 'Data-driven mindset']
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Drive user acquisition and engagement through creative marketing campaigns.',
      requirements: ['Digital marketing experience', 'Social media expertise', 'Creative thinking']
    },
    {
      title: 'Delivery Operations Coordinator',
      department: 'Operations',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Optimize delivery routes and manage our delivery partner network.',
      requirements: ['Operations experience', 'Logistics knowledge', 'Strong communication']
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <SimpleNavbar />

      <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
        {/* Hero Section */}
        <section style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', color: 'white', padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center' }}
            >
              <Briefcase size={80} style={{ marginBottom: '24px' }} />
              <h1 style={{ fontSize: '3rem', marginBottom: '24px', fontWeight: 'bold' }}>Join Our Team</h1>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                Help us revolutionize the food delivery industry. We're looking for passionate individuals
                who want to make a difference in how people experience food.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          {/* Why Work With Us */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '80px 0', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '50px' }}>Why Work With Us?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0'
                  }}
                >
                  <div style={{ marginBottom: '20px' }}>{benefit.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '16px' }}>{benefit.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Open Positions */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '50px', textAlign: 'center' }}>Open Positions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {openings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '8px', fontWeight: 'bold' }}>
                        {job.title}
                      </h3>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ color: '#ff6b35', fontWeight: 'bold' }}>{job.department}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#666' }}>
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <span style={{
                          background: '#e8f5e8',
                          color: '#28a745',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          fontWeight: 'bold'
                        }}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                    {job.description}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '12px', fontWeight: 'bold' }}>
                      Requirements:
                    </h4>
                    <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                      {job.requirements.map((req, idx) => (
                        <li key={idx} style={{ marginBottom: '4px' }}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    style={{
                      background: '#ff6b35',
                      color: 'white',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e55a2b';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#ff6b35';
                    }}
                  >
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Application Process */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <div style={{ background: '#f8f9fa', borderRadius: '20px', padding: '50px' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '40px', textAlign: 'center' }}>
                Application Process
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                {[
                  { step: '1', title: 'Apply Online', description: 'Submit your application and resume' },
                  { step: '2', title: 'Initial Review', description: 'We review your application within 5 days' },
                  { step: '3', title: 'Phone Screen', description: 'Brief phone conversation with HR' },
                  { step: '4', title: 'Final Interview', description: 'Meet the team and discuss the role' },
                  { step: '5', title: 'Decision', description: 'We make our decision within 7 days' }
                ].map((process, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: '#ff6b35',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      margin: '0 auto 16px'
                    }}>
                      {process.step}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '8px' }}>
                      {process.title}
                    </h3>
                    <p style={{ color: '#666', fontSize: '0.95rem' }}>
                      {process.description}
                    </p>
                  </div>
                ))}
              </div>
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
              borderRadius: '20px',
              padding: '50px',
              textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Don't See a Perfect Fit?</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
                We're always looking for talented individuals to join our team.
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div style={{ marginBottom: '30px' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
                  <strong>Email:</strong> careers@foodiehub.com
                </p>
                <p style={{ fontSize: '1.1rem' }}>
                  <strong>Subject:</strong> Future Opportunities - [Your Role/Department]
                </p>
              </div>
              <button
                style={{
                  background: 'white',
                  color: '#ff6b35',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Send Resume
              </button>
            </div>
          </motion.section>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default CareersPage;
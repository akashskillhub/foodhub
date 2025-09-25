import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, Users, Award, Globe, TrendingUp } from 'lucide-react';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';

const CompanyPage = () => {
  const milestones = [
    { year: '2020', event: 'FoodieHub Founded', description: 'Started as a small local delivery service' },
    { year: '2021', event: '1000+ Orders', description: 'Reached our first major milestone' },
    { year: '2022', event: 'Multi-City Expansion', description: 'Expanded to 5 major cities' },
    { year: '2023', event: '50K+ Customers', description: 'Built a loyal customer base' },
    { year: '2024', event: 'Innovation Focus', description: 'Launched AI-powered recommendations' }
  ];

  const values = [
    {
      icon: <Target size={48} color="#ff6b35" />,
      title: 'Customer First',
      description: 'Everything we do is centered around delivering exceptional customer experiences.'
    },
    {
      icon: <Users size={48} color="#ff6b35" />,
      title: 'Community',
      description: 'We build strong relationships with restaurants, delivery partners, and customers.'
    },
    {
      icon: <Award size={48} color="#ff6b35" />,
      title: 'Quality',
      description: 'We maintain the highest standards in food quality, service, and technology.'
    },
    {
      icon: <Globe size={48} color="#ff6b35" />,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices and local sourcing.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers', icon: <Users size={24} /> },
    { number: '500+', label: 'Restaurant Partners', icon: <Building2 size={24} /> },
    { number: '25+', label: 'Cities Served', icon: <Globe size={24} /> },
    { number: '4.8/5', label: 'Customer Rating', icon: <Award size={24} /> }
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
              <Building2 size={80} style={{ marginBottom: '24px' }} />
              <h1 style={{ fontSize: '3rem', marginBottom: '24px', fontWeight: 'bold' }}>About FoodieHub</h1>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                Revolutionizing food delivery through technology, quality, and exceptional service.
                Connecting communities one meal at a time since 2020.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '80px 0', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '30px' }}>Our Mission</h2>
            <div style={{ background: 'white', borderRadius: '20px', padding: '50px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#333', marginBottom: '30px' }}>
                "To make delicious, quality food accessible to everyone, everywhere, while supporting local restaurants and creating meaningful employment opportunities in our communities."
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                <TrendingUp size={32} color="#ff6b35" />
                <Target size={32} color="#ff6b35" />
                <Users size={32} color="#ff6b35" />
              </div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '50px', textAlign: 'center' }}>Our Values</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {values.map((value, index) => (
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
                  <div style={{ marginBottom: '20px' }}>{value.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '16px' }}>{value.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <div style={{ background: '#f8f9fa', borderRadius: '20px', padding: '50px' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '40px', textAlign: 'center' }}>Our Impact</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{ textAlign: 'center' }}
                  >
                    <div style={{ color: '#ff6b35', marginBottom: '16px' }}>{stat.icon}</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '8px' }}>
                      {stat.number}
                    </div>
                    <div style={{ color: '#666', fontSize: '1.1rem' }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '50px', textAlign: 'center' }}>Our Journey</h2>
            <div style={{ position: 'relative' }}>
              {/* Timeline line */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                height: '100%',
                background: '#ff6b35',
                opacity: 0.3
              }} />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  style={{
                    display: 'flex',
                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                    marginBottom: '40px',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    width: '45%',
                    position: 'relative'
                  }}>
                    {/* Timeline dot */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      [index % 2 === 0 ? 'right' : 'left']: '-25px',
                      transform: 'translateY(-50%)',
                      width: '20px',
                      height: '20px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      border: '3px solid white',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }} />

                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '8px' }}>
                      {milestone.year}
                    </div>
                    <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '12px' }}>
                      {milestone.event}
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                      {milestone.description}
                    </p>
                  </div>
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
            <div style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', color: 'white', borderRadius: '20px', padding: '50px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Get In Touch</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
                Have questions about our company or interested in partnerships?
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '40px' }}>
                <div>
                  <Building2 size={32} style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Headquarters</h3>
                  <p style={{ opacity: 0.9 }}>123 Food Street<br />Culinary City, FC 12345</p>
                </div>
                <div>
                  <Users size={32} style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>General Inquiries</h3>
                  <p style={{ opacity: 0.9 }}>info@foodiehub.com<br />+1 (555) 123-4567</p>
                </div>
                <div>
                  <Globe size={32} style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Business Hours</h3>
                  <p style={{ opacity: 0.9 }}>Mon - Fri: 9AM - 6PM<br />Weekend: 10AM - 4PM</p>
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

export default CompanyPage;
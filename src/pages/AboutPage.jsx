import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c819ca9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      description: '15+ years of culinary experience in fine dining restaurants.'
    },
    {
      name: 'Mike Chen',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      description: 'Expert in logistics and ensuring fast, reliable delivery.'
    },
    {
      name: 'Emily Davis',
      role: 'Customer Experience Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      description: 'Passionate about creating exceptional customer experiences.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '100+', label: 'Menu Items' },
    { number: '25+', label: 'Delivery Areas' },
    { number: '4.8', label: 'Average Rating' }
  ];

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>About FoodieHub</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              We're passionate about delivering fresh, delicious meals right to your doorstep.
              Our mission is to make quality food accessible to everyone, anytime, anywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#333' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: '#666' }}>
                Founded in 2020, FoodieHub started as a small local delivery service with a big dream:
                to connect food lovers with the best restaurants in their area. What began as a passion
                project has grown into a thriving platform serving thousands of customers daily.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                We believe that great food brings people together. Whether it's a family dinner,
                a quick lunch, or a late-night snack, we're here to make sure you get exactly
                what you're craving, when you're craving it.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Our kitchen"
                style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#333' }}
          >
            Our Values
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              {
                icon: '🍽️',
                title: 'Quality First',
                description: 'We partner only with restaurants that meet our high standards for freshness and taste.'
              },
              {
                icon: '⚡',
                title: 'Fast Delivery',
                description: 'Our efficient logistics ensure your food arrives hot and fresh, within 30 minutes.'
              },
              {
                icon: '🤝',
                title: 'Customer Care',
                description: 'Your satisfaction is our priority. We\'re here to help 24/7 with any questions or concerns.'
              },
              {
                icon: '🌱',
                title: 'Sustainability',
                description: 'We\'re committed to eco-friendly packaging and supporting local, sustainable food sources.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #f0f0f0'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#333' }}>{value.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', background: '#ff6b35', color: 'white' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}
          >
            By the Numbers
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>{stat.number}</div>
                <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#333' }}
          >
            Meet Our Team
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '20px'
                  }}
                />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#333' }}>{member.name}</h3>
                <p style={{ color: '#ff6b35', fontWeight: 'bold', marginBottom: '16px' }}>{member.role}</p>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
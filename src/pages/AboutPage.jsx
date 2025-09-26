import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1594824618909-bb5c28c86d16?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
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

  const features = [
    {
      icon: '🚚',
      title: 'Lightning Fast Delivery',
      description: 'Get your favorite meals delivered in under 30 minutes with real-time tracking.'
    },
    {
      icon: '🍴',
      title: 'Curated Restaurants',
      description: 'Handpicked partner restaurants serving authentic, delicious food you can trust.'
    },
    {
      icon: '💳',
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-level security for your peace of mind.'
    },
    {
      icon: '⭐',
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any questions or concerns.'
    }
  ];

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.95) 0%, rgba(247, 147, 30, 0.95) 100%), url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=cover&w=1920&h=800&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '120px 0',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '10px 20px',
                borderRadius: '25px',
                display: 'inline-block',
                marginBottom: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>🍕 Founded in 2020</span>
              </div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '30px', fontWeight: '800', lineHeight: '1.1' }}>
                About <br />
                <span style={{
                  background: 'linear-gradient(45deg, #ffffff, #ffe8d6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>FoodieHub</span>
              </h1>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.7', marginBottom: '30px', opacity: '0.95' }}>
                We're passionate about delivering fresh, delicious meals right to your doorstep.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: '0.9' }}>
                Our mission is to make quality food accessible to everyone, anytime, anywhere.
              </p>
              <div style={{ marginTop: '40px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>50K+</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Happy Customers</div>
                </div>
                <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.3)' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>100+</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Restaurant Partners</div>
                </div>
                <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.3)' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>25+</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Cities Served</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ position: 'relative' }}
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '30px',
                padding: '40px',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '2.5rem'
                  }}>
                    🚀
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Vision</h3>
                  <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: '0.9' }}>
                    To revolutionize food delivery by connecting communities with their favorite local restaurants through innovative technology and exceptional service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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

      {/* Why Choose Us Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: 'white' }}
          >
            Why Choose FoodieHub?
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '40px',
                  borderRadius: '24px',
                  textAlign: 'center',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(15px)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                whileHover={{
                  y: -15,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-15px)';
                  e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  width: '90px',
                  height: '90px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px',
                  fontSize: '2.2rem',
                  boxShadow: '0 10px 25px rgba(255, 107, 53, 0.4)',
                  border: '4px solid rgba(255, 255, 255, 0.3)'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '18px', fontWeight: '700', color: '#333' }}>{feature.title}</h3>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '1.05rem', margin: '0', fontWeight: '400' }}>{feature.description}</p>
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
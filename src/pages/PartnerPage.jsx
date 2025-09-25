import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Users, Truck, Utensils, Clock, DollarSign, CheckCircle } from 'lucide-react';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';

const PartnerPage = () => {
  const [partnerType, setPartnerType] = useState('restaurant');

  const partnerTypes = [
    {
      id: 'restaurant',
      title: 'Restaurant Partner',
      icon: <Utensils size={48} color="#ff6b35" />,
      description: 'Join our network of restaurant partners and reach more customers',
      benefits: [
        'Increase your customer base by 300%',
        'Zero commission for the first month',
        'Marketing support and promotions',
        'Real-time analytics dashboard',
        'Dedicated account manager'
      ]
    },
    {
      id: 'delivery',
      title: 'Delivery Partner',
      icon: <Truck size={48} color="#ff6b35" />,
      description: 'Earn money delivering food with flexible schedules',
      benefits: [
        'Earn $15-25 per hour',
        'Flexible working hours',
        'Weekly payments',
        'Fuel reimbursement available',
        'Insurance coverage provided'
      ]
    }
  ];

  const stats = [
    { icon: <Utensils size={32} />, number: '500+', label: 'Restaurant Partners' },
    { icon: <Users size={32} />, number: '50K+', label: 'Happy Customers' },
    { icon: <TrendingUp size={32} />, number: '300%', label: 'Average Revenue Increase' },
    { icon: <Clock size={32} />, number: '30min', label: 'Average Delivery Time' }
  ];

  const requirements = {
    restaurant: [
      'Valid business license and permits',
      'Food safety certification',
      'Minimum 4.0 rating on review platforms',
      'Ability to fulfill orders within 20 minutes',
      'Professional kitchen setup'
    ],
    delivery: [
      'Valid driver\'s license',
      'Own vehicle (car, bike, or scooter)',
      'Smartphone with GPS capability',
      'Background check clearance',
      'Minimum age of 18 years'
    ]
  };

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
              <Handshake size={80} style={{ marginBottom: '24px' }} />
              <h1 style={{ fontSize: '3rem', marginBottom: '24px', fontWeight: 'bold' }}>Partner with FoodieHub</h1>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                Join thousands of restaurants and delivery partners who are growing their business with us.
                Let's build the future of food delivery together.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          {/* Partner Types */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '80px 0 60px' }}
          >
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '50px', textAlign: 'center' }}>
              Choose Your Partnership
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '40px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: partnerType === type.id ? '3px solid #ff6b35' : '1px solid #f0f0f0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setPartnerType(type.id)}
                  onMouseEnter={(e) => {
                    if (partnerType !== type.id) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (partnerType !== type.id) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                    }
                  }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    {type.icon}
                    <h3 style={{ fontSize: '1.8rem', color: '#333', margin: '20px 0 16px', fontWeight: 'bold' }}>
                      {type.title}
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>{type.description}</p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '16px', fontWeight: 'bold' }}>
                      Benefits:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '12px',
                          color: '#666'
                        }}>
                          <CheckCircle size={16} color="#28a745" style={{ marginRight: '12px', flexShrink: 0 }} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <div style={{ background: '#f8f9fa', borderRadius: '20px', padding: '60px' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '50px', textAlign: 'center' }}>
                Why Choose FoodieHub?
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
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

          {/* Requirements */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '60px 0' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '2rem', color: '#333', marginBottom: '30px' }}>
                  Requirements for {partnerTypes.find(t => t.id === partnerType)?.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {requirements[partnerType].map((req, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '16px',
                      color: '#666',
                      fontSize: '1.1rem'
                    }}>
                      <CheckCircle size={20} color="#28a745" style={{ marginRight: '16px', flexShrink: 0 }} />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '2rem', color: '#333', marginBottom: '30px' }}>How It Works</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {[
                    { step: 1, title: 'Apply Online', desc: 'Fill out our partnership application form' },
                    { step: 2, title: 'Review Process', desc: 'We review your application within 48 hours' },
                    { step: 3, title: 'Onboarding', desc: 'Complete setup and training with our team' },
                    { step: 4, title: 'Go Live', desc: 'Start receiving orders and earning money' }
                  ].map((process, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: '#ff6b35',
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>
                        {process.step}
                      </div>
                      <div>
                        <h4 style={{ color: '#333', marginBottom: '4px', fontSize: '1.2rem' }}>
                          {process.title}
                        </h4>
                        <p style={{ color: '#666', lineHeight: '1.5' }}>{process.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Application Form */}
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
              padding: '60px',
              textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Ready to Get Started?</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 40px' }}>
                Join our growing network of partners and start increasing your revenue today.
                The application process is quick and easy.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <div style={{ textAlign: 'center' }}>
                  <DollarSign size={32} style={{ marginBottom: '16px' }} />
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>No Setup Fees</h4>
                  <p style={{ opacity: 0.9 }}>Get started at no cost</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Clock size={32} style={{ marginBottom: '16px' }} />
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Quick Approval</h4>
                  <p style={{ opacity: 0.9 }}>48-hour review process</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Users size={32} style={{ marginBottom: '16px' }} />
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Dedicated Support</h4>
                  <p style={{ opacity: 0.9 }}>Personal account manager</p>
                </div>
              </div>

              <button
                style={{
                  background: 'white',
                  color: '#ff6b35',
                  border: 'none',
                  padding: '18px 36px',
                  borderRadius: '12px',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                Apply Now as {partnerTypes.find(t => t.id === partnerType)?.title}
              </button>

              <p style={{ marginTop: '24px', fontSize: '0.95rem', opacity: 0.8 }}>
                Questions? Contact our partnership team at <strong>partners@foodiehub.com</strong>
              </p>
            </div>
          </motion.section>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default PartnerPage;
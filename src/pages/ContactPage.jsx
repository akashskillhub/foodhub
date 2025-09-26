import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      subtitle: 'Mon-Sun: 8AM - 11PM'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['hello@foodiehub.com', 'support@foodiehub.com'],
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Our Location',
      details: ['SKILLHUB, 3rd Floor, Veer Shanti Building', 'Kranti Chowk, Kotla Colony, Samta Nagar', 'Chhatrapati Sambhajinagar, Maharashtra 431001'],
      subtitle: 'Above Primia Hero Showroom, beside Sumit Hall',
      mapUrl: 'https://www.google.com/maps/dir//SKILLHUB,+3rd+Floor,+Veer+Shanti+Building,+Kranti+Chowk,+above+Primia+Hero+Showroom,+beside+sumit+hall,+Kotla+Colony,+Samta+Nagar,+Chhatrapati+Sambhajinagar,+Maharashtra+431001/@19.8731211,75.2450025,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdb99178077eb41:0x61cae7bcf705976e!2m2!1d75.3274042!2d19.87314?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: <Clock size={24} />,
      title: 'Delivery Hours',
      details: ['Mon-Thu: 10AM - 11PM', 'Fri-Sun: 10AM - 12AM'],
      subtitle: '7 days a week'
    }
  ];

  const faqs = [
    {
      question: 'What are your delivery areas?',
      answer: 'We currently deliver to over 25 areas within the city. Check our delivery map during checkout to see if we deliver to your location.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Most orders are delivered within 25-45 minutes. During peak hours, it may take up to 60 minutes.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, PayPal, and cash on delivery.'
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Orders can be cancelled within 5 minutes of placing them. After that, please contact our support team.'
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes! Orders over $100 get 10% off, and orders over $200 get 15% off automatically.'
    }
  ];

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', color: 'white', padding: '60px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            {/* Animated Top Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '30px'
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px'
                }}
              >
                📞
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: '3rem',
                marginBottom: '20px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
              }}
            >
              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                📞
              </motion.span>
              Get In Touch
              <motion.span
                animate={{
                  rotate: [0, -15, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5
                }}
              >
                💬
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: '1.2rem',
                opacity: 0.9,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                flexWrap: 'wrap'
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ❤️
              </motion.span>
              We'd love to hear from you! Reach out with any questions, feedback, or suggestions.
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                ✨
              </motion.span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #f0f0f0'
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  style={{
                    color: '#ff6b35',
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -2, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.5
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                      color: 'white',
                      padding: '15px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(255,107,53,0.3)'
                    }}
                  >
                    {info.icon}
                  </motion.div>
                </motion.div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} style={{ margin: '5px 0', color: '#666', fontWeight: 'bold' }}>{detail}</p>
                ))}
                <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '10px' }}>{info.subtitle}</p>
                {info.mapUrl && (
                  <a
                    href={info.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '15px',
                      padding: '8px 16px',
                      background: '#ff6b35',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#e55a2b'}
                    onMouseLeave={(e) => e.target.style.background = '#ff6b35'}
                  >
                    📍 View on Google Maps
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                background: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: '2rem',
                  marginBottom: '30px',
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
              >
                <motion.span
                  animate={{
                    x: [0, 5, -5, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Send size={28} color="#ff6b35" />
                </motion.span>
                Send us a Message
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                >
                  ✉️
                </motion.span>
              </motion.h2>

              {submitted && (
                <div style={{
                  background: '#d4edda',
                  color: '#155724',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                    placeholder="What's this about?"
                  />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: isSubmitting ? '#ccc' : '#ff6b35',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        🔄
                      </motion.span>
                      Sending...
                    </span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <motion.span
                        whileHover={{
                          x: 3,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Send size={18} />
                      </motion.span>
                      Send Message
                      <motion.span
                        animate={{
                          x: [0, 2, 0],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        🚀
                      </motion.span>
                    </span>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                background: '#e9ecef',
                height: '500px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#666',
                backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=500&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(255, 107, 53, 0.8)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'white'
              }}>
                <MapPin size={48} style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Visit Our Location</h3>
                <p style={{ textAlign: 'center' }}>
                  123 Food Street<br />
                  Culinary District, CD 12345
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#333' }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}
              >
                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#ff6b35' }}>
                  {faq.question}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
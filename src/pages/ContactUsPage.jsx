import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: <Phone size={32} color="#ff6b35" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      detail: '+1 (555) 123-4567',
      availability: '24/7 Customer Support'
    },
    {
      icon: <Mail size={32} color="#ff6b35" />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      detail: 'support@foodiehub.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: <MessageCircle size={32} color="#ff6b35" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      detail: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM'
    },
    {
      icon: <MapPin size={32} color="#ff6b35" />,
      title: 'Visit Us',
      description: 'Come to our headquarters',
      detail: '123 Food Street, Culinary City',
      availability: 'Mon-Fri: 9AM-5PM'
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
              <Mail size={80} style={{ marginBottom: '24px' }} />
              <h1 style={{ fontSize: '3rem', marginBottom: '24px', fontWeight: 'bold' }}>Contact Us</h1>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                We're here to help! Reach out to us with any questions, feedback, or concerns.
                Our dedicated support team is ready to assist you.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          {/* Contact Methods */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '80px 0 60px' }}
          >
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '50px', textAlign: 'center' }}>
              How Can We Help You?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {contactMethods.map((method, index) => (
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
                    border: '1px solid #f0f0f0',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ marginBottom: '20px' }}>{method.icon}</div>
                  <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '12px' }}>{method.title}</h3>
                  <p style={{ color: '#666', marginBottom: '16px', lineHeight: '1.6' }}>{method.description}</p>
                  <p style={{ color: '#ff6b35', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px' }}>
                    {method.detail}
                  </p>
                  <p style={{ color: '#999', fontSize: '0.9rem' }}>{method.availability}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Form & Info */}
          <section style={{ padding: '40px 0' }}>
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
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                <h3 style={{ fontSize: '2rem', color: '#333', marginBottom: '24px' }}>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', color: '#333', marginBottom: '8px', fontWeight: 'bold' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #f0f0f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                      onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', color: '#333', marginBottom: '8px', fontWeight: 'bold' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #f0f0f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                      onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', color: '#333', marginBottom: '8px', fontWeight: 'bold' }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #f0f0f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="order-issue">Order Issue</option>
                      <option value="delivery-problem">Delivery Problem</option>
                      <option value="account-help">Account Help</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="feedback">General Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', color: '#333', marginBottom: '8px', fontWeight: 'bold' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #f0f0f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        resize: 'vertical',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                      onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#ff6b35',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e55a2b';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#ff6b35';
                    }}
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  marginBottom: '30px'
                }}>
                  <h3 style={{ fontSize: '2rem', color: '#333', marginBottom: '24px' }}>Get In Touch</h3>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <Phone size={20} color="#ff6b35" />
                      <strong style={{ color: '#333' }}>Phone Support</strong>
                    </div>
                    <p style={{ color: '#666', marginLeft: '32px' }}>+1 (555) 123-4567</p>
                    <p style={{ color: '#999', marginLeft: '32px', fontSize: '0.9rem' }}>Available 24/7</p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <Mail size={20} color="#ff6b35" />
                      <strong style={{ color: '#333' }}>Email Support</strong>
                    </div>
                    <p style={{ color: '#666', marginLeft: '32px' }}>support@foodiehub.com</p>
                    <p style={{ color: '#999', marginLeft: '32px', fontSize: '0.9rem' }}>Response within 2 hours</p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <MapPin size={20} color="#ff6b35" />
                      <strong style={{ color: '#333' }}>Address</strong>
                    </div>
                    <p style={{ color: '#666', marginLeft: '32px' }}>
                      123 Food Street<br />
                      Culinary City, FC 12345<br />
                      United States
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <Clock size={20} color="#ff6b35" />
                      <strong style={{ color: '#333' }}>Business Hours</strong>
                    </div>
                    <p style={{ color: '#666', marginLeft: '32px' }}>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM<br />
                      <span style={{ color: '#ff6b35', fontWeight: 'bold' }}>Customer Support: 24/7</span>
                    </p>
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  color: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Emergency Support</h3>
                  <p style={{ marginBottom: '16px', opacity: 0.9 }}>
                    For urgent order issues or emergencies:
                  </p>
                  <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>+1 (555) 911-FOOD</p>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default ContactUsPage;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, Phone } from 'lucide-react';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';
import ImprovedFAQ from '../components/ui/ImprovedFAQ';

const HelpSupportPage = () => {

  const faqs = [
    {
      category: 'Orders',
      questions: [
        {
          q: 'How do I place an order?',
          a: 'Simply browse our menu, add items to your cart, enter your delivery details, and complete payment. You\'ll receive confirmation via email and SMS.'
        },
        {
          q: 'Can I modify my order after placing it?',
          a: 'Orders can be modified within 2 minutes of placement. After that, contact customer support immediately for assistance.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept credit cards, debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery (where available).'
        }
      ]
    },
    {
      category: 'Delivery',
      questions: [
        {
          q: 'How long does delivery take?',
          a: 'Most orders are delivered within 30-45 minutes. Delivery time may vary based on restaurant preparation time and your location.'
        },
        {
          q: 'How do I track my order?',
          a: 'You can track your order in real-time through our app or website. You\'ll also receive SMS updates at key stages.'
        },
        {
          q: 'What if my order is late?',
          a: 'If your order is significantly delayed, contact our support team. We may offer compensation or a full refund depending on the situation.'
        }
      ]
    },
    {
      category: 'Account',
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click "Sign Up" and enter your email, phone number, and create a password. You can also sign up using Google or Facebook.'
        },
        {
          q: 'I forgot my password. What should I do?',
          a: 'Click "Forgot Password" on the login page and enter your email. We\'ll send you a reset link within minutes.'
        },
        {
          q: 'How do I update my profile information?',
          a: 'Go to Account Settings in your profile menu. You can update your name, email, phone number, and delivery addresses.'
        }
      ]
    },
    {
      category: 'Refunds',
      questions: [
        {
          q: 'How do I request a refund?',
          a: 'Contact customer support with your order details and reason for the refund request. Most refunds are processed within 3-7 business days.'
        },
        {
          q: 'What is your refund policy?',
          a: 'We offer full refunds for undelivered orders, incorrect orders, or food quality issues reported within 30 minutes of delivery.'
        }
      ]
    }
  ];


  const quickActions = [
    {
      title: 'Track Order',
      description: 'Check the status of your current order',
      action: 'Go to Orders',
      color: '#28a745'
    },
    {
      title: 'Report Issue',
      description: 'Report a problem with your order',
      action: 'Contact Support',
      color: '#dc3545'
    },
    {
      title: 'Account Help',
      description: 'Manage your account settings',
      action: 'Account Settings',
      color: '#17a2b8'
    },
    {
      title: 'Payment Help',
      description: 'Issues with payments and billing',
      action: 'Payment Support',
      color: '#ffc107'
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <SimpleNavbar />

      <div style={{ paddingTop: '80px', paddingBottom: '50px', background: '#f8f9fa' }}>

        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          {/* Quick Actions */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '40px 0' }}
          >
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '40px', textAlign: 'center' }}>
              Quick Actions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: 'white',
                    padding: '30px',
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
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: action.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    ?
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '12px' }}>{action.title}</h3>
                  <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.5' }}>{action.description}</p>
                  <button style={{
                    background: action.color,
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                    {action.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '40px 0' }}
          >
            <ImprovedFAQ faqs={faqs} />
          </motion.section>

          {/* Contact Support */}
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Still Need Help?</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
                Can't find what you're looking for? Our support team is here to help you 24/7.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  minWidth: '200px'
                }}>
                  <MessageCircle size={32} style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Live Chat</h3>
                  <p style={{ marginBottom: '16px', opacity: 0.9 }}>Chat with our support team</p>
                  <button style={{
                    background: 'white',
                    color: '#ff6b35',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                    Start Chat
                  </button>
                </div>

                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  minWidth: '200px'
                }}>
                  <Phone size={32} style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Call Us</h3>
                  <p style={{ marginBottom: '16px', opacity: 0.9 }}>+1 (555) 123-4567</p>
                  <button style={{
                    background: 'white',
                    color: '#ff6b35',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                    Call Now
                  </button>
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

export default HelpSupportPage;
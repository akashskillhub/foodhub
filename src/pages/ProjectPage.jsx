import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Zap,
  Shield,
  Users,
  Globe,
  GitBranch,
  Package,
  Monitor,
  Database,
  Server,
  Layers
} from 'lucide-react';

const ProjectPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const technologies = [
    {
      name: 'React 18',
      description: 'Modern React with Hooks and Context API',
      icon: <Code size={32} />,
      color: '#61dafb'
    },
    {
      name: 'Vite',
      description: 'Lightning fast build tool and dev server',
      icon: <Zap size={32} />,
      color: '#646cff'
    },
    {
      name: 'React Router',
      description: 'Client-side routing for SPA navigation',
      icon: <GitBranch size={32} />,
      color: '#ca4245'
    },
    {
      name: 'Framer Motion',
      description: 'Smooth animations and transitions',
      icon: <Layers size={32} />,
      color: '#0055ff'
    },
    {
      name: 'Context API',
      description: 'State management without external libraries',
      icon: <Database size={32} />,
      color: '#ff6b35'
    },
    {
      name: 'Responsive Design',
      description: 'Mobile-first approach with CSS Grid & Flexbox',
      icon: <Smartphone size={32} />,
      color: '#28a745'
    }
  ];

  const features = [
    {
      title: 'User Authentication System',
      description: 'Complete login/signup flow with demo users (user@example.com, admin@example.com)',
      highlights: ['Session management', 'Role-based access', 'Protected routes', 'User profiles']
    },
    {
      title: 'Shopping Cart & Checkout',
      description: 'Full e-commerce functionality with persistent cart and order processing',
      highlights: ['Add/remove items', 'Quantity updates', 'Order simulation', 'Payment options']
    },
    {
      title: 'Menu Management',
      description: 'Dynamic menu system with categories, search, and filtering capabilities',
      highlights: ['Category filtering', 'Search functionality', 'Item details', 'Nutrition info']
    },
    {
      title: 'Admin Dashboard',
      description: 'Complete admin panel for managing menu items, orders, and analytics',
      highlights: ['Menu CRUD operations', 'Order management', 'Sales analytics', 'User statistics']
    },
    {
      title: 'Order History & Tracking',
      description: 'Users can view their order history with detailed status tracking',
      highlights: ['Order timeline', 'Status updates', 'Reorder functionality', 'Order statistics']
    },
    {
      title: 'Responsive UI/UX',
      description: 'Modern, mobile-first design with smooth animations and interactions',
      highlights: ['Mobile responsive', 'Smooth animations', 'Intuitive navigation', 'Modern aesthetics']
    }
  ];

  const architecture = [
    {
      layer: 'Presentation Layer',
      components: ['React Components', 'Pages', 'Layout Components', 'UI Components'],
      icon: <Monitor size={24} />,
      color: '#ff6b35'
    },
    {
      layer: 'State Management',
      components: ['Context Providers', 'useReducer Hooks', 'Local Storage', 'Session Management'],
      icon: <Database size={24} />,
      color: '#28a745'
    },
    {
      layer: 'Routing & Navigation',
      components: ['React Router', 'Protected Routes', 'Navigation Guards', 'URL Management'],
      icon: <GitBranch size={24} />,
      color: '#17a2b8'
    },
    {
      layer: 'Core Logic',
      components: ['Business Logic', 'Data Processing', 'Validation', 'Utilities'],
      icon: <Server size={24} />,
      color: '#6f42c1'
    }
  ];

  const projectStats = [
    { label: 'Components', value: '25+', description: 'Reusable React components' },
    { label: 'Pages', value: '10', description: 'Complete application pages' },
    { label: 'Context Providers', value: '3', description: 'Global state management' },
    { label: 'Features', value: '20+', description: 'Core functionalities' }
  ];

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 0'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', fontWeight: 'bold' }}>
              FoodieHub Project
            </h1>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '40px', opacity: 0.9 }}>
              A complete React-based food delivery web application showcasing modern web development
              practices, responsive design, and comprehensive e-commerce functionality.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '12px 24px',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Code size={20} />
                React 18
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '12px 24px',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Zap size={20} />
                Vite
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '12px 24px',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Smartphone size={20} />
                Mobile First
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
              Project Overview
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              FoodieHub is a comprehensive food delivery web application built entirely with React and modern
              web technologies. It demonstrates full-stack frontend capabilities including user authentication,
              e-commerce functionality, admin management, and responsive design principles.
            </p>
          </motion.div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '10px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#333' }}
          >
            Technology Stack
          </motion.h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #f0f0f0',
                  transition: 'transform 0.3s ease'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div style={{ color: tech.color, marginBottom: '20px' }}>
                  {tech.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: '#333' }}>
                  {tech.name}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#333' }}
          >
            Key Features
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px', alignItems: 'start' }}>
            {/* Feature Navigation */}
            <div style={{ position: 'sticky', top: '100px' }}>
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    width: '100%',
                    padding: '20px',
                    marginBottom: '12px',
                    background: activeFeature === index ? '#ff6b35' : 'white',
                    color: activeFeature === index ? 'white' : '#333',
                    border: '2px solid #ff6b35',
                    borderRadius: '12px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {feature.title}
                </motion.button>
              ))}
            </div>

            {/* Feature Details */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
                {features[activeFeature].title}
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
                {features[activeFeature].description}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                {features[activeFeature].highlights.map((highlight, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px',
                      background: '#f8f9fa',
                      borderRadius: '8px',
                      border: '2px solid #e9ecef'
                    }}
                  >
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: '#ff6b35',
                      borderRadius: '50%'
                    }} />
                    <span style={{ fontSize: '0.9rem', color: '#555' }}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#333' }}
          >
            Application Architecture
          </motion.h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
            {architecture.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                  padding: '30px',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  border: `3px solid ${layer.color}15`
                }}
              >
                <div style={{
                  background: `${layer.color}15`,
                  color: layer.color,
                  padding: '20px',
                  borderRadius: '12px'
                }}>
                  {layer.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: layer.color }}>
                    {layer.layer}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {layer.components.map((component, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '6px 12px',
                          background: '#f8f9fa',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          color: '#666',
                          border: '1px solid #e9ecef'
                        }}
                      >
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        color: 'white'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
              Project Highlights
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              marginTop: '50px'
            }}>
              {[
                {
                  icon: <Shield size={32} />,
                  title: 'Security First',
                  description: 'Proper authentication flow with role-based access control and protected routes'
                },
                {
                  icon: <Users size={32} />,
                  title: 'User-Centric Design',
                  description: 'Intuitive interface designed for both customers and administrators'
                },
                {
                  icon: <Globe size={32} />,
                  title: 'Modern Web Standards',
                  description: 'Built with latest React patterns, ES6+, and modern CSS techniques'
                },
                {
                  icon: <Package size={32} />,
                  title: 'Production Ready',
                  description: 'Optimized build process with Vite for fast development and deployment'
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  style={{
                    textAlign: 'center',
                    padding: '20px'
                  }}
                >
                  <div style={{ marginBottom: '20px', opacity: 0.9 }}>
                    {highlight.icon}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>
                    {highlight.title}
                  </h3>
                  <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Credentials */}
      <section style={{ padding: '60px 0', background: '#f8f9fa' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
              Demo Credentials
            </h3>
            <p style={{ color: '#666', marginBottom: '30px' }}>
              Use these credentials to explore the full functionality:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              <div style={{
                padding: '20px',
                background: '#e7f3ff',
                borderRadius: '12px',
                border: '2px solid #bee5eb'
              }}>
                <div style={{ fontWeight: 'bold', color: '#0c5460', marginBottom: '10px' }}>
                  Regular User
                </div>
                <div style={{ fontSize: '0.9rem', color: '#0c5460' }}>
                  Email: user@example.com<br />
                  Password: password123
                </div>
              </div>
              <div style={{
                padding: '20px',
                background: '#fff3cd',
                borderRadius: '12px',
                border: '2px solid #ffeaa7'
              }}>
                <div style={{ fontWeight: 'bold', color: '#856404', marginBottom: '10px' }}>
                  Admin User
                </div>
                <div style={{ fontSize: '0.9rem', color: '#856404' }}>
                  Email: admin@example.com<br />
                  Password: password123
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
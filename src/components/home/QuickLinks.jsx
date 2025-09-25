import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Clock, Truck, Star, Phone, Gift } from 'lucide-react';
import './QuickLinks.css';

/**
 * Quick Links Component
 * Features:
 * - Navigation shortcuts to key pages
 * - Service highlights with icons
 * - Call-to-action buttons
 * - Animated cards with hover effects
 */

const QuickLinks = () => {
  const links = [
    {
      id: 1,
      title: 'Browse Menu',
      description: 'Explore our diverse selection of delicious dishes',
      icon: <UtensilsCrossed size={32} />,
      link: '/menu',
      color: '#ff6b35',
      bgColor: '#fff5f2'
    },
    {
      id: 2,
      title: 'Quick Order',
      description: 'Reorder your favorite meals in just one click',
      icon: <Clock size={32} />,
      link: '/menu',
      color: '#28a745',
      bgColor: '#f2f8f5'
    },
    {
      id: 3,
      title: 'Track Delivery',
      description: 'Real-time tracking of your order delivery',
      icon: <Truck size={32} />,
      link: '/orders',
      color: '#007bff',
      bgColor: '#f2f7ff'
    },
    {
      id: 4,
      title: 'Customer Reviews',
      description: 'Read what our satisfied customers are saying',
      icon: <Star size={32} />,
      link: '/reviews',
      color: '#ffc107',
      bgColor: '#fffcf2'
    },
    {
      id: 5,
      title: 'Contact Us',
      description: 'Get in touch for any queries or feedback',
      icon: <Phone size={32} />,
      link: '/contact',
      color: '#6f42c1',
      bgColor: '#f7f3ff'
    },
    {
      id: 6,
      title: 'Special Offers',
      description: 'Discover amazing deals and discounts',
      icon: <Gift size={32} />,
      link: '/offers',
      color: '#e91e63',
      bgColor: '#fff2f7'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="quick-links section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Quick Access</h2>
          <p className="section-subtitle">
            Everything you need is just a click away. Navigate easily through our services and features
          </p>
        </motion.div>

        <motion.div
          className="links-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {links.map((linkItem) => (
            <motion.div
              key={linkItem.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={linkItem.link} className="quick-link-card">
                <div
                  className="icon-container"
                  style={{
                    backgroundColor: linkItem.bgColor,
                    color: linkItem.color
                  }}
                >
                  {linkItem.icon}
                </div>

                <div className="link-content">
                  <h3 className="link-title">{linkItem.title}</h3>
                  <p className="link-description">{linkItem.description}</p>
                </div>

                <div
                  className="link-arrow"
                  style={{ color: linkItem.color }}
                >
                  →
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Guarantees */}
        <motion.div
          className="service-guarantees"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="guarantee-item">
            <div className="guarantee-icon">🚀</div>
            <div className="guarantee-text">
              <strong>30 Min Delivery</strong>
              <span>Or it's on us</span>
            </div>
          </div>

          <div className="guarantee-item">
            <div className="guarantee-icon">🔄</div>
            <div className="guarantee-text">
              <strong>100% Fresh</strong>
              <span>Quality guaranteed</span>
            </div>
          </div>

          <div className="guarantee-item">
            <div className="guarantee-icon">🛡️</div>
            <div className="guarantee-text">
              <strong>Secure Payment</strong>
              <span>Safe & encrypted</span>
            </div>
          </div>

          <div className="guarantee-item">
            <div className="guarantee-icon">💬</div>
            <div className="guarantee-text">
              <strong>24/7 Support</strong>
              <span>Always here to help</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gift, Clock, Percent } from 'lucide-react';
import './PromotionsBanner.css';

const PromotionsBanner = () => {
  const promotions = [
    {
      title: "First Order 20% OFF",
      description: "New customers get 20% discount",
      code: "FIRST20",
      icon: <Percent size={24} />,
      color: "#ff6b35"
    },
    {
      title: "Free Delivery",
      description: "On orders above $25",
      code: "FREEDEL25",
      icon: <Gift size={24} />,
      color: "#28a745"
    },
    {
      title: "Happy Hour",
      description: "15% off between 2-5 PM",
      code: "HAPPY15",
      icon: <Clock size={24} />,
      color: "#007bff"
    }
  ];

  return (
    <section className="promotions-banner">
      <div className="promotions-container">
        {promotions.map((promo, index) => (
          <motion.div
            key={index}
            className="promo-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="promo-icon" style={{ backgroundColor: `${promo.color}20`, color: promo.color }}>
              {promo.icon}
            </div>
            <div className="promo-content">
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
              <span className="promo-code">Code: {promo.code}</span>
            </div>
            <Link to="/menu" className="promo-button" style={{ backgroundColor: promo.color }}>
              Order Now
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PromotionsBanner;
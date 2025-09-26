import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Star, Truck } from 'lucide-react';
import './HeroBanner.css';

/**
 * Hero Banner Component
 * Features:
 * - Eye-catching hero section with food imagery
 * - Call-to-action buttons
 * - Key selling points (delivery time, rating, etc.)
 * - Animated elements for visual appeal
 */

const HeroBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="hero-banner">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>

            <span className="hero-highlight">Delicious Food <br />Delivered Fast</span> 🍕
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Craving something delicious? Order from our extensive menu of mouth-watering dishes,
            prepared fresh and delivered hot to your doorstep in under 30 minutes.
          </motion.p>

          <motion.div className="hero-features" variants={itemVariants}>
            <div className="hero-feature">
              <Clock size={20} />
              <span>30min delivery</span>
            </div>
            <div className="hero-feature">
              <Star size={20} />
              <span>4.8★ rated</span>
            </div>
            <div className="hero-feature">
              <Truck size={20} />
              <span>Free delivery $25+</span>
            </div>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <Link to="/menu" className="hero-button primary">
              Order Now
              <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="hero-button secondary">
              Learn More
            </Link>
          </motion.div>


        </motion.div>

        <motion.div
          className="hero-image"
          variants={floatingVariants}
          animate="animate"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1733259709671-9dbf22bf02cc?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Delicious Pizza"
            className="hero-food-image"
          />
          <div className="hero-image-decoration">
            <div className="decoration-circle decoration-1"></div>
            <div className="decoration-circle decoration-2"></div>
            <div className="decoration-circle decoration-3"></div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="floating-elements">
        <motion.div
          className="floating-element element-1"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🍔
        </motion.div>
        <motion.div
          className="floating-element element-2"
          animate={{
            y: [20, -20, 20],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🍕
        </motion.div>
        <motion.div
          className="floating-element element-3"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🥗
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
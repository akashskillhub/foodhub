import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Bell, Gift } from 'lucide-react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <motion.div
          className="newsletter-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="newsletter-icon">
            <Mail size={48} />
          </div>
          <h2>Stay in the Loop!</h2>
          <p>Get exclusive offers, new menu updates, and foodie tips delivered to your inbox</p>

          <div className="newsletter-benefits">
            <div className="benefit">
              <Bell size={16} />
              <span>Early access to new dishes</span>
            </div>
            <div className="benefit">
              <Gift size={16} />
              <span>Exclusive discounts & offers</span>
            </div>
          </div>

          {isSubscribed ? (
            <div className="success-message">
              <p>🎉 Thanks for subscribing! Check your email for a welcome gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe Now
              </button>
            </form>
          )}

          <p className="newsletter-note">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
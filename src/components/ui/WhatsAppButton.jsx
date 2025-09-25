import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

/**
 * WhatsApp Button Component
 * Features:
 * - Floating WhatsApp button with animation
 * - Expandable chat preview card
 * - Configurable phone number and default message
 * - Mobile-responsive design
 */

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '7022233008';
  const defaultMessage = "Hi! I'm interested in FoodieHub's services. Can we discuss my food order requirements?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="whatsapp-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="whatsapp-card"
          >
            <div className="whatsapp-card-header">
              <div className="whatsapp-card-title">
                <div className="whatsapp-icon-container">
                  <FaWhatsapp className="whatsapp-icon" />
                </div>
                Start a conversation
              </div>
              <button
                className="close-button"
                onClick={() => setIsOpen(false)}
                aria-label="Close WhatsApp chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="whatsapp-card-content">
              <p className="whatsapp-message">
                Hi there! 👋 How can we help you today? Click below to start a WhatsApp conversation with our team.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="whatsapp-chat-button"
              >
                <FaWhatsapp size={16} />
                Chat on WhatsApp
              </button>
              <div className="status-indicator">
                <div className="status-dot"></div>
                Usually replies within 1 hour
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="whatsapp-float-button"
          aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        >
          {isOpen ? <X size={24} /> : <FaWhatsapp size={24} />}
        </button>
      </motion.div>
    </div>
  );
};

export default WhatsAppButton;
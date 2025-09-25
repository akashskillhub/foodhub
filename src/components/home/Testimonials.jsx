import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

/**
 * Testimonials Component
 * Features:
 * - Customer reviews and ratings
 * - Responsive testimonial cards
 * - Star ratings display
 * - Animated testimonial carousel
 */

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Enthusiast",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332b1b4?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Amazing food quality and super fast delivery! The pizza was still hot when it arrived. Definitely my go-to food delivery service.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "FoodieHub has become essential for our office lunch orders. Great variety, consistent quality, and reliable delivery timing.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Love the app interface and the food quality is outstanding. The customer service team is also very responsive and helpful.",
      date: "3 days ago"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Chef",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      comment: "As a chef myself, I appreciate the attention to detail in food preparation. The ingredients are fresh and the presentation is excellent.",
      date: "5 days ago"
    }
  ];

  return (
    <section className="testimonials section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="quote-icon">
                <Quote size={24} />
              </div>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                  />
                ))}
              </div>

              <p className="testimonial-comment">
                "{testimonial.comment}"
              </p>

              <div className="testimonial-footer">
                <div className="author-info">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="author-avatar"
                  />
                  <div className="author-details">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
                <span className="testimonial-date">{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="testimonial-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="stat-item">
            <span className="stat-number">4.8</span>
            <span className="stat-label">Average Rating</span>
            <div className="stat-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="star filled" />
              ))}
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-number">2,500+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Satisfaction Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15K+</span>
            <span className="stat-label">Positive Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
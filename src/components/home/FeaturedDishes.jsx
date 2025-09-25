import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Clock, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAdmin } from '../../context/AdminContext';
import './FeaturedDishes.css';

/**
 * Featured Dishes Component
 * Features:
 * - Display popular/featured menu items
 * - Add to cart functionality
 * - Star ratings and reviews
 * - Smooth animations
 * - Mobile-responsive grid layout
 */

const FeaturedDishes = () => {
  const { addItem } = useCart();
  const { menuItems } = useAdmin();

  // Get featured dishes (highest rated items)
  const featuredDishes = menuItems
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const handleAddToCart = (dish) => {
    addItem({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      category: dish.category
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="featured-dishes section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Dishes</h2>
          <p className="section-subtitle">
            Discover our most popular and highly-rated dishes, crafted with love and the finest ingredients
          </p>
        </motion.div>

        <motion.div
          className="dishes-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredDishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="dish-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="dish-image-container">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="dish-image"
                  loading="lazy"
                />
                <div className="dish-overlay">
                  <button
                    className="favorite-button"
                    aria-label="Add to favorites"
                  >
                    <Heart size={20} />
                  </button>
                  <div className="dish-category">{dish.category}</div>
                </div>
              </div>

              <div className="dish-content">
                <div className="dish-header">
                  <h3 className="dish-name">{dish.name}</h3>
                  <div className="dish-rating">
                    <Star size={16} className="star-icon" />
                    <span className="rating-value">{dish.rating}</span>
                    <span className="review-count">({dish.reviews})</span>
                  </div>
                </div>

                <p className="dish-description">{dish.description}</p>

                <div className="dish-info">
                  <div className="dish-time">
                    <Clock size={16} />
                    <span>15-20 min</span>
                  </div>
                  <div className="dish-price">${dish.price}</div>
                </div>

                <div className="dish-actions">
                  <Link
                    to={`/dish/${dish.id}`}
                    className="view-details-button"
                  >
                    View Details
                  </Link>
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCart(dish)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="view-all-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link to="/menu" className="view-all-button">
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
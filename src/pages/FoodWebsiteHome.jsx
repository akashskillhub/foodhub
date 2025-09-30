import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import MenuItem from '../components/common/MenuItem';
import RestaurantListing from '../components/restaurant/RestaurantListing';
import HeroBanner from '../components/home/HeroBanner';
import PromotionsBanner from '../components/home/PromotionsBanner';
// Featured dishes data
const featuredDishes = [
  {
    id: 1,
    name: "Butter Chicken",
    price: 320,
    type: "nonveg",
    rating: 4.8,
    deliveryTime: 25,
    category: "North Indian",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=400&fit=crop&crop=center",
    description: "Tender chicken in rich, creamy tomato curry"
  },
  {
    id: 2,
    name: "Paneer Tikka Masala",
    price: 280,
    type: "veg",
    rating: 4.6,
    deliveryTime: 20,
    category: "North Indian",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop&crop=center",
    description: "Grilled cottage cheese in spicy masala gravy"
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 350,
    type: "nonveg",
    rating: 4.9,
    deliveryTime: 35,
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop&crop=center",
    description: "Fragrant basmati rice with succulent chicken pieces"
  },
  {
    id: 4,
    name: "Masala Dosa",
    price: 180,
    type: "veg",
    rating: 4.5,
    deliveryTime: 15,
    category: "South Indian",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=400&fit=crop&crop=center",
    description: "Crispy crepe with spiced potato filling"
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing food quality and super fast delivery! The butter chicken was absolutely delicious.",
    location: "New York"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    comment: "Best food delivery service in town. Fresh ingredients and authentic flavors every time.",
    location: "Los Angeles"
  },
  {
    id: 3,
    name: "Priya Sharma",
    rating: 4,
    comment: "Great variety of vegetarian options. The paneer dishes are my favorite!",
    location: "Chicago"
  }
];

// Cities data
const citiesData = [
  "Best Restaurants in Bangalore",
  "Best Restaurants in Pune",
  "Best Restaurants in Mumbai",
  "Best Restaurants in Delhi",
  "Best Restaurants in Hyderabad",
  "Best Restaurants in Kolkata",
  "Best Restaurants in Chennai",
  "Best Restaurants in Chandigarh",
  "Best Restaurants in Ahmedabad",
  "Best Restaurants in Jaipur",
  "Best Restaurants in Nagpur"
];

// Cuisines data
const cuisinesData = [
  "Chinese Restaurant Near Me",
  "South Indian Restaurant Near Me",
  "Indian Restaurant Near Me",
  "Kerala Restaurant Near Me",
  "Korean Restaurant Near Me",
  "North Indian Restaurant Near Me",
  "Seafood Restaurant Near Me",
  "Bengali Restaurant Near Me",
  "Punjabi Restaurant Near Me",
  "Italian Restaurant Near Me",
  "Andhra Restaurant Near Me"
];

// Explore restaurants data
const exploreData = [
  "Explore Restaurants Near Me",
  "Explore Top Rated Restaurants Near Me"
];

/**
 * FoodWebsiteHome Component
 * Complete homepage for the food delivery website
 * Features all essential sections with React Bootstrap styling
 */
function FoodWebsiteHome() {
  const [showMoreCities, setShowMoreCities] = useState(false);
  const [showMoreCuisines, setShowMoreCuisines] = useState(false);

  const visibleCities = showMoreCities ? citiesData : citiesData.slice(0, 6);
  const visibleCuisines = showMoreCuisines ? cuisinesData : cuisinesData.slice(0, 6);

  return (
    <div className="food-website-home">

      {/* Featured Food Categories - Swiggy Style */}
      <Container className="py-4">
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold mb-1">What's on your mind?</h2>
          </Col>
        </Row>

        {/* Horizontal Scrollable Food Categories */}
        <div className="position-relative mb-4 food-carousel-container">
          <div
            className="d-flex gap-4 pb-3 food-carousel"
            style={{
              width: 'max-content'
            }}
          >
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                className="flex-shrink-0 text-center"
                style={{ minWidth: '144px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="rounded-circle mx-auto mb-2 position-relative overflow-hidden"
                  style={{
                    width: '144px',
                    height: '144px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x400/fc8019/white?text=${dish.name}`;
                    }}
                  />
                </div>
                <h6 className="fw-semibold mb-0 text-truncate" style={{ fontSize: '16px', color: '#02060c' }}>
                  {dish.name}
                </h6>
              </motion.div>
            ))}

            {/* Additional food categories */}
            {[
              { name: "Biryani", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=400&fit=crop&crop=center" },
              { name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop&crop=center" },
              { name: "Chinese", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=400&fit=crop&crop=center" },
              { name: "Desserts", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop&crop=center" },
              { name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&crop=center" },
              { name: "Rolls", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=400&fit=crop&crop=center" }
            ].map((category, index) => (
              <motion.div
                key={`category-${index}`}
                className="flex-shrink-0 text-center"
                style={{ minWidth: '144px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (featuredDishes.length + index) * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="rounded-circle mx-auto mb-2 position-relative overflow-hidden"
                  style={{
                    width: '144px',
                    height: '144px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x400/fc8019/white?text=${category.name}`;
                    }}
                  />
                </div>
                <h6 className="fw-semibold mb-0 text-truncate" style={{ fontSize: '16px', color: '#02060c' }}>
                  {category.name}
                </h6>
              </motion.div>
            ))}

            {/* Duplicate items for seamless loop */}
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={`duplicate-${dish.id}`}
                className="flex-shrink-0 text-center"
                style={{ minWidth: '144px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="rounded-circle mx-auto mb-2 position-relative overflow-hidden"
                  style={{
                    width: '144px',
                    height: '144px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x400/fc8019/white?text=${dish.name}`;
                    }}
                  />
                </div>
                <h6 className="fw-semibold mb-0 text-truncate" style={{ fontSize: '16px', color: '#02060c' }}>
                  {dish.name}
                </h6>
              </motion.div>
            ))}

            {/* Additional food categories duplicated */}
            {[
              { name: "Biryani", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=400&fit=crop&crop=center" },
              { name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop&crop=center" },
              { name: "Chinese", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=400&fit=crop&crop=center" },
              { name: "Desserts", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop&crop=center" },
              { name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&crop=center" },
              { name: "Rolls", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=400&fit=crop&crop=center" }
            ].map((category, index) => (
              <motion.div
                key={`duplicate-category-${index}`}
                className="flex-shrink-0 text-center"
                style={{ minWidth: '144px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (featuredDishes.length + index) * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="rounded-circle mx-auto mb-2 position-relative overflow-hidden"
                  style={{
                    width: '144px',
                    height: '144px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x400/fc8019/white?text=${category.name}`;
                    }}
                  />
                </div>
                <h6 className="fw-semibold mb-0 text-truncate" style={{ fontSize: '16px', color: '#02060c' }}>
                  {category.name}
                </h6>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom CSS for continuous scrolling animation */}
        <style>{`
          @keyframes scroll-horizontal {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Desktop - Auto scroll animation */
          @media (min-width: 769px) {
            .food-carousel-container {
              overflow: hidden;
            }

            .food-carousel {
              animation: scroll-horizontal 20s linear infinite;
            }

            .food-carousel:hover {
              animation-play-state: paused;
            }
          }

          /* Mobile - Manual touch scroll */
          @media (max-width: 768px) {
            .food-carousel-container {
              overflow-x: auto;
              overflow-y: hidden;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
              -ms-overflow-style: none;
            }

            .food-carousel-container::-webkit-scrollbar {
              display: none;
            }

            .food-carousel {
              animation: none !important;
            }
          }

          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </Container>

      {/* Restaurant Listing Section */}
      <RestaurantListing />

      {/* Popular Dishes Section */}
      <Container className="py-5">
        <Row className="mb-5">
          <Col>
            <div className="text-center">
              <h2 className="display-5 fw-bold">Trending This Week</h2>
              <p className="lead text-muted">
                Most loved dishes ordered by food lovers
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={3} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 position-relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="position-relative">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=200&fit=crop&crop=center"
                    alt="Margherita Pizza"
                    style={{
                      height: '200px',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, #fc8019 0%, #ff9500 100%)',
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '80px'
                    }}
                  >
                    🍕
                  </div>
                  <Badge
                    className="position-absolute"
                    style={{
                      top: '15px',
                      right: '15px',
                      backgroundColor: '#fc8019',
                      fontSize: '12px',
                      padding: '8px 12px'
                    }}
                  >
                    #1 Trending
                  </Badge>
                </div>
                <Card.Body className="p-4 text-center">
                  <h5 className="fw-bold mb-2">Margherita Pizza</h5>
                  <p className="text-muted small mb-3">Ordered 2,847 times this week</p>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <span style={{ color: '#fc8019' }}>🔥</span>
                    <span className="fw-medium text-success">+127% from last week</span>
                  </div>
                </Card.Body>
              </Card>

            </motion.div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 position-relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="position-relative">
                  <img
                    src="https://images.unsplash.com/photo-1563379091139-54d423e6bfeb?w=400&h=200&fit=crop&crop=center"
                    alt="Chicken Biryani"
                    style={{
                      height: '200px',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, #fc8019 0%, #ff9500 100%)',
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '80px'
                    }}
                  >
                    🍛
                  </div>
                  <Badge
                    className="position-absolute"
                    style={{
                      top: '15px',
                      right: '15px',
                      backgroundColor: '#60b246',
                      fontSize: '12px',
                      padding: '8px 12px'
                    }}
                  >
                    #2 Trending
                  </Badge>
                </div>
                <Card.Body className="p-4 text-center">
                  <h5 className="fw-bold mb-2">Chicken Biryani</h5>
                  <p className="text-muted small mb-3">Ordered 2,156 times this week</p>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <span style={{ color: '#fc8019' }}>🔥</span>
                    <span className="fw-medium text-success">+89% from last week</span>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 position-relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="position-relative">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=200&fit=crop&crop=center"
                    alt="Classic Burger"
                    style={{
                      height: '200px',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, #fc8019 0%, #ff9500 100%)',
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '80px'
                    }}
                  >
                    🍔
                  </div>
                  <Badge
                    className="position-absolute"
                    style={{
                      top: '15px',
                      right: '15px',
                      backgroundColor: '#fc8019',
                      fontSize: '12px',
                      padding: '8px 12px'
                    }}
                  >
                    #3 Trending
                  </Badge>
                </div>
                <Card.Body className="p-4 text-center">
                  <h5 className="fw-bold mb-2">Classic Burger</h5>
                  <p className="text-muted small mb-3">Ordered 1,834 times this week</p>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <span style={{ color: '#fc8019' }}>🔥</span>
                    <span className="fw-medium text-success">+65% from last week</span>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 position-relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="position-relative">


                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=200&fit=crop&crop=center"
                    alt="Ramen Noodles"
                    style={{
                      height: '200px',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, #fc8019 0%, #ff9500 100%)',
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '80px'
                    }}
                  >
                    🍜
                  </div>
                  <Badge
                    className="position-absolute"
                    style={{
                      top: '15px',
                      right: '15px',
                      backgroundColor: '#fc8019',
                      fontSize: '12px',
                      padding: '8px 12px'
                    }}
                  >
                    #4 Trending
                  </Badge>
                </div>
                <Card.Body className="p-4 text-center">
                  <h5 className="fw-bold mb-2">Ramen Noodles</h5>
                  <p className="text-muted small mb-3">Ordered 1,567 times this week</p>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <span style={{ color: '#fc8019' }}>🔥</span>
                    <span className="fw-medium text-success">+43% from last week</span>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <LinkContainer to="/menu">
              <Button
                size="lg"
                className="px-5 py-3"
                variant="" style={{
                  backgroundColor: '#ff9900', // solid orange
                  border: 'none',
                  color: 'white',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}
                onMouseEnter={e => e.target.style.backgroundColor = '#ff9900'} // hover color
                onMouseLeave={e => e.target.style.backgroundColor = '#ff9900'}
              >
                Order Your Favorites Now
              </Button>
            </LinkContainer>
          </Col>
        </Row>

      </Container>
      <PromotionsBanner />
      <HeroBanner />

      {/* Best Places to Eat Across Cities Section */}
      <motion.section
        className="py-5"
        style={{ backgroundColor: '#f8f9fa' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-4" style={{ fontSize: '32px', color: '#282c3f' }}>
              Best Places to Eat Across Cities
            </h2>
          </motion.div>

          <Row>
            {visibleCities.map((city, index) => (
              <Col lg={3} md={4} sm={6} key={index} className="mb-3">
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 8px 25px rgba(252,128,25,0.15)',
                    borderColor: '#fc8019'
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  className="h-100"
                >
                  <Card
                    className="h-100 border-0 shadow-sm"
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      borderLeft: '4px solid #fc8019'
                    }}
                  >
                    <Card.Body className="d-flex align-items-center py-3 px-4">
                      <span
                        className="text-dark fw-medium"
                        style={{ fontSize: '16px' }}
                      >
                        {city}
                      </span>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline-primary"
              onClick={() => setShowMoreCities(!showMoreCities)}
              className="d-flex align-items-center gap-2 mx-auto"
              style={{
                borderColor: '#fc8019',
                color: '#fc8019',
                fontWeight: '500'
              }}
            >
              {showMoreCities ? (
                <>Show Less <ChevronUp size={18} /></>
              ) : (
                <>Show More <ChevronDown size={18} /></>
              )}
            </Button>
          </motion.div>
        </Container>
      </motion.section>

      {/* Best Cuisines Near Me Section */}
      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-4" style={{ fontSize: '32px', color: '#282c3f' }}>
              Best Cuisines Near Me
            </h2>
          </motion.div>

          <Row>
            {visibleCuisines.map((cuisine, index) => (
              <Col lg={3} md={4} sm={6} key={index} className="mb-3">
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 8px 25px rgba(252,128,25,0.15)',
                    borderColor: '#fc8019'
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  className="h-100"
                >
                  <Card
                    className="h-100 border-0 shadow-sm"
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      borderLeft: '4px solid #fc8019'
                    }}
                  >
                    <Card.Body className="d-flex align-items-center py-3 px-4">
                      <span
                        className="text-dark fw-medium"
                        style={{ fontSize: '16px' }}
                      >
                        {cuisine}
                      </span>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline-warning"
              onClick={() => setShowMoreCuisines(!showMoreCuisines)}
              className="d-flex align-items-center gap-2 mx-auto"
              style={{
                borderColor: '#fc8019',
                color: '#fc8019',
                fontWeight: '500'
              }}
            >
              {showMoreCuisines ? (
                <>Show Less <ChevronUp size={18} /></>
              ) : (
                <>Show More <ChevronDown size={18} /></>
              )}
            </Button>
          </motion.div>
        </Container>
      </motion.section>

      {/* Explore Restaurants Section - Orange Theme */}
      <motion.section
        className="py-5 position-relative"
        style={{
          background: 'linear-gradient(135deg, #fc8019 0%, #ff6b35 50%, #f7931e 100%)',
          overflow: 'hidden'
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Pattern */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            top: 0,
            left: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.12'%3E%3Cpath d='M40 40c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zm0-4c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.4
          }}
        />

        {/* Decorative Food Icons */}
        <div className="position-absolute" style={{ top: '20px', left: '10%', fontSize: '40px', opacity: 0.15 }}>🍕</div>
        <div className="position-absolute" style={{ top: '60px', right: '15%', fontSize: '35px', opacity: 0.15 }}>🍔</div>
        <div className="position-absolute" style={{ bottom: '40px', left: '20%', fontSize: '30px', opacity: 0.15 }}>🍜</div>
        <div className="position-absolute" style={{ bottom: '80px', right: '10%', fontSize: '45px', opacity: 0.15 }}>🍛</div>

        <Container className="position-relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold mb-3 text-white" style={{ fontSize: '42px', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              Explore Restaurants Near Me
            </h2>
            <p className="text-white fs-5 mb-0" style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
              Discover amazing restaurants, authentic cuisines, and unforgettable dining experiences right in your neighborhood
            </p>
          </motion.div>

          <Row className="g-4">
            <Col lg={6} md={12}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  rotate: 1
                }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="h-100"
              >
                <Card
                  className="border-0 shadow-xl h-100"
                  style={{
                    cursor: 'pointer',
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: '25px',
                    minHeight: '180px',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                  }}
                >
                  <Card.Body className="d-flex align-items-center text-center py-5 px-4">
                    <div className="w-100">
                      <div
                        className="mx-auto mb-4 position-relative"
                        style={{
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          boxShadow: '0 8px 20px rgba(252, 128, 25, 0.3)',
                          border: '3px solid rgba(252, 128, 25, 0.2)'
                        }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop&crop=center"
                          alt="Restaurant"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(135deg, #fc8019 0%, #ff9500 100%)',
                            display: 'none',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '40px',
                            color: 'white'
                          }}
                        >
                          🍽️
                        </div>
                      </div>
                      <h4 className="fw-bold mb-3" style={{ color: '#282c3f', fontSize: '22px' }}>
                        Browse All Restaurants
                      </h4>
                      <p className="text-muted mb-0" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                        Explore thousands of restaurants offering diverse cuisines and flavors
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col lg={6} md={12}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  rotate: -1
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="h-100"
              >
                <Card
                  className="border-0 shadow-xl h-100"
                  style={{
                    cursor: 'pointer',
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: '25px',
                    minHeight: '180px',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                  }}
                >
                  <Card.Body className="d-flex align-items-center text-center py-5 px-4">
                    <div className="w-100">
                      <div
                        className="mx-auto mb-4 position-relative"
                        style={{
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          boxShadow: '0 8px 20px rgba(252, 128, 25, 0.3)',
                          border: '3px solid rgba(252, 128, 25, 0.2)'
                        }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop&crop=center"
                          alt="Top Rated Restaurant"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(135deg, #fc8019 0%, #ff9500 100%)',
                            display: 'none',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '40px',
                            color: 'white'
                          }}
                        >
                          ⭐
                        </div>
                      </div>
                      <h4 className="fw-bold mb-3" style={{ color: '#282c3f', fontSize: '22px' }}>
                        Top Rated Favorites
                      </h4>
                      <p className="text-muted mb-0" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                        Discover highly-rated restaurants loved by thousands of customers
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <LinkContainer to="/menu">
              <Button
                size="lg"
                className="px-5 py-3 fw-bold"
                style={{
                  backgroundColor: '#fc8019', // solid orange
                  borderColor: '#fc8019',
                  color: 'white', // text white
                  borderRadius: '30px',
                  fontSize: '18px',
                  boxShadow: '0 8px 20px rgba(252,128,25,0.3)',
                  minWidth: '200px',
                  transition: 'all 0.3s ease', // smooth hover transition
                }}
                onMouseEnter={e => {
                  e.target.style.backgroundColor = '#e67300'; // darker orange on hover
                  e.target.style.boxShadow = '0 10px 25px rgba(252,128,25,0.4)';
                }}
                onMouseLeave={e => {
                  e.target.style.backgroundColor = '#fc8019'; // original orange
                  e.target.style.boxShadow = '0 8px 20px rgba(252,128,25,0.3)';
                }}
              >
                Start Exploring
              </Button>

            </LinkContainer>
          </motion.div>
        </Container>
      </motion.section>


    </div>
  );
}

export default FoodWebsiteHome;
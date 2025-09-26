import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '../context/ToastContext';

const OffersPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const offers = [
    {
      id: 1,
      title: "Welcome Bonus",
      code: "WELCOME30",
      description: "Get ₹100 OFF on your first order + Free delivery. Perfect start to your food journey!",
      discount: "₹100 OFF",
      minOrder: 299,
      validUntil: "31st Dec 2024",
      type: "new-user",
      color: "#28a745"
    },
    {
      id: 2,
      title: "Free Delivery Deal",
      code: "FREEDEL",
      description: "Zero delivery charges on all orders above ₹399. Save more, eat more!",
      discount: "₹0 DELIVERY",
      minOrder: 399,
      validUntil: "Every Day",
      type: "delivery",
      color: "#17a2b8"
    },
    {
      id: 3,
      title: "Pizza BOGO Fest",
      code: "PIZZABOGO",
      description: "Buy any large pizza and get a medium pizza of equal or lesser value absolutely FREE!",
      discount: "1+1 FREE",
      minOrder: 450,
      validUntil: "30th Dec 2024",
      type: "special",
      color: "#ff6b35"
    },
    {
      id: 4,
      title: "Weekend Warriors",
      code: "WEEKEND35",
      description: "35% OFF on all orders during Friday-Sunday. Weekend celebrations just got tastier!",
      discount: "35% OFF",
      minOrder: 249,
      validUntil: "Fri-Sun Only",
      type: "weekend",
      color: "#dc3545"
    },
    {
      id: 5,
      title: "Student Meal Deal",
      code: "STUDENT20",
      description: "Special 20% discount for students + Free dessert with valid student ID verification",
      discount: "20% OFF",
      minOrder: 199,
      validUntil: "Academic Year",
      type: "student",
      color: "#6f42c1"
    },
    {
      id: 6,
      title: "Family Mega Deal",
      code: "FAMILY50",
      description: "Flat 50% OFF on family combo meals. Feed the whole family at half the price!",
      discount: "50% OFF",
      minOrder: 799,
      validUntil: "31st Dec 2024",
      type: "family",
      color: "#fd7e14"
    },
    {
      id: 7,
      title: "Late Night Hunger",
      code: "MIDNIGHT25",
      description: "25% OFF on all orders placed between 11 PM - 2 AM. Satisfy those midnight cravings!",
      discount: "25% OFF",
      minOrder: 199,
      validUntil: "Daily 11PM-2AM",
      type: "midnight",
      color: "#9c27b0"
    },
    {
      id: 8,
      title: "Biryani Bonanza",
      code: "BIRYANI40",
      description: "40% OFF on all biryani varieties + Free raita and pickle. Authentic flavors await!",
      discount: "40% OFF",
      minOrder: 349,
      validUntil: "28th Dec 2024",
      type: "special",
      color: "#ff9800"
    },
    {
      id: 9,
      title: "Corporate Lunch",
      code: "OFFICE30",
      description: "30% OFF on bulk orders for office lunch. Minimum 5 meals required. Perfect for teams!",
      discount: "30% OFF",
      minOrder: 999,
      validUntil: "Mon-Fri Only",
      type: "corporate",
      color: "#2196f3"
    },
    {
      id: 10,
      title: "Flash Sale",
      code: "FLASH60",
      description: "MEGA 60% OFF on selected items only! Limited time offer. Hurry up, don't miss out!",
      discount: "60% OFF",
      minOrder: 299,
      validUntil: "Next 2 Hours",
      type: "flash",
      color: "#e91e63"
    },
    {
      id: 11,
      title: "Health Special",
      code: "HEALTHY15",
      description: "15% OFF on all salads, soups & healthy meals + Free green smoothie. Stay fit, eat right!",
      discount: "15% OFF",
      minOrder: 249,
      validUntil: "31st Dec 2024",
      type: "healthy",
      color: "#4caf50"
    },
    {
      id: 12,
      title: "Dessert Delight",
      code: "SWEET25",
      description: "25% OFF on all desserts and beverages. Make every meal end on a sweet note!",
      discount: "25% OFF",
      minOrder: 149,
      validUntil: "Every Day",
      type: "dessert",
      color: "#ff5722"
    }
  ];

  const copyCode = async (code) => {
    try {
      // First try modern clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
        showToast(`✅ Coupon code "${code}" copied to clipboard!`, 'success');
        return;
      }

      // Fallback method for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        showToast(`✅ Coupon code "${code}" copied!`, 'success');
      } else {
        showToast(`📋 Copy this code: ${code}`, 'info');
      }
    } catch (err) {
      console.error('Copy failed:', err);
      showToast(`📋 Please copy manually: ${code}`, 'warning');
    }
  };

  return (
    <div style={{ backgroundColor: '#f8f9fc', minHeight: '100vh', paddingTop: '100px' }}>
      <Container>
        {/* Header */}
        <motion.div
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            marginBottom: '30px'
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            🎉 Special Offers
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '0' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Save more on your favorite dishes with these amazing deals!
          </motion.p>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          style={{
            background: 'white',
            borderRadius: '15px',
            padding: '20px',
            marginBottom: '30px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Row>
            <Col md={4} className="text-center mb-3">
              <motion.h3
                style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '5px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {offers.length}
              </motion.h3>
              <motion.p
                style={{ color: '#636e72', marginBottom: '0' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                Active Offers
              </motion.p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <motion.h3
                style={{ color: '#ff6b35', fontWeight: 'bold', marginBottom: '5px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                60%
              </motion.h3>
              <motion.p
                style={{ color: '#636e72', marginBottom: '0' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Max Discount
              </motion.p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <motion.h3
                style={{ color: '#17a2b8', fontWeight: 'bold', marginBottom: '5px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                Free
              </motion.h3>
              <motion.p
                style={{ color: '#636e72', marginBottom: '0' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Delivery Available
              </motion.p>
            </Col>
          </Row>
        </motion.div>

        {/* Offers Grid */}
        <Row>
          {offers.map((offer, index) => (
            <Col lg={4} md={6} key={offer.id} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card style={{
                  border: 'none',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  position: 'relative',
                  cursor: 'pointer'
                }}>
                {/* Discount Badge */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: offer.color,
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 2
                }}>
                  {offer.discount}
                </div>

                <div style={{
                  background: `linear-gradient(135deg, ${offer.color}20 0%, ${offer.color}10 100%)`,
                  padding: '30px 20px 20px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
                    {offer.type === 'new-user' && '🎁'}
                    {offer.type === 'delivery' && '🚚'}
                    {offer.type === 'special' && '🍕'}
                    {offer.type === 'weekend' && '🎉'}
                    {offer.type === 'student' && '🎓'}
                    {offer.type === 'family' && '👨‍👩‍👧‍👦'}
                    {offer.type === 'midnight' && '🌙'}
                    {offer.type === 'corporate' && '🏢'}
                    {offer.type === 'flash' && '⚡'}
                    {offer.type === 'healthy' && '🥗'}
                    {offer.type === 'dessert' && '🍰'}
                  </div>
                  <h5 style={{ fontWeight: 'bold', color: '#2d3436', marginBottom: '10px' }}>
                    {offer.title}
                  </h5>
                </div>

                <Card.Body style={{ padding: '20px' }}>
                  <p style={{ color: '#636e72', fontSize: '14px', marginBottom: '15px' }}>
                    {offer.description}
                  </p>

                  <div className="mb-3">
                    <div style={{ fontSize: '12px', color: '#636e72', marginBottom: '5px' }}>
                      Min. Order: ₹{offer.minOrder}
                    </div>
                    <div style={{ fontSize: '12px', color: '#636e72' }}>
                      Valid till: {offer.validUntil}
                    </div>
                  </div>

                  {/* Coupon Code */}
                  <div style={{
                    background: '#f8f9fc',
                    border: '2px dashed #ff6b35',
                    borderRadius: '12px',
                    padding: '15px',
                    textAlign: 'center',
                    marginBottom: '15px'
                  }}>
                    <div style={{ fontSize: '12px', color: '#636e72', marginBottom: '5px' }}>
                      Coupon Code
                    </div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#ff6b35',
                      letterSpacing: '1px'
                    }}>
                      {offer.code}
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <motion.div style={{ flex: 1 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        onClick={() => copyCode(offer.code)}
                        style={{
                          background: 'transparent',
                          border: '2px solid #0984e3',
                          color: '#0984e3',
                          borderRadius: '12px',
                          padding: '8px 16px',
                          fontWeight: '600',
                          width: '100%'
                        }}
                      >
                        Copy Code
                      </Button>
                    </motion.div>
                    <motion.div style={{ flex: 1 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        onClick={() => navigate('/menu')}
                        style={{
                          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                          border: 'none',
                          color: 'white',
                          borderRadius: '12px',
                          padding: '8px 16px',
                          fontWeight: '600',
                          width: '100%'
                        }}
                      >
                        Use Now
                      </Button>
                    </motion.div>
                  </div>
                </Card.Body>
              </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* How to Use Section */}
        <motion.div
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '30px',
            marginTop: '30px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.h4
            style={{ color: '#2d3436', marginBottom: '20px', fontWeight: 'bold' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            📝 How to Use Offers
          </motion.h4>
          <Row>
            {[
              { number: 1, title: "Choose Your Offer", description: "Select from available offers", delay: 1.8 },
              { number: 2, title: "Copy Coupon Code", description: "Click \"Copy Code\" button", delay: 2.0 },
              { number: 3, title: "Apply at Checkout", description: "Enter code and enjoy savings", delay: 2.2 }
            ].map((step, index) => (
              <Col md={4} className="mb-3" key={index}>
                <motion.div
                  className="d-flex align-items-center"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: step.delay }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    style={{
                      background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                      color: 'white',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      marginRight: '15px'
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.number}
                  </motion.div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#2d3436' }}>{step.title}</div>
                    <div style={{ fontSize: '14px', color: '#636e72' }}>{step.description}</div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default OffersPage;
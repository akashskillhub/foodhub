import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Star, Clock, Truck, Award } from 'lucide-react';
import { menuItems } from '../data/menuData';

const Home: React.FC = () => {
  const featuredItems = menuItems.filter(item => item.isPopular).slice(0, 3);
  const newItems = menuItems.filter(item => item.isNew).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section position-relative py-5 mb-5" style={{
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        minHeight: '60vh'
      }}>
        <Container className="h-100">
          <Row className="align-items-center h-100">
            <Col lg={6}>
              <div className="text-white">
                <h1 className="display-4 fw-bold mb-4">
                  Delicious Food Delivered Fast! 🚀
                </h1>
                <p className="lead mb-4">
                  Craving something delicious? Order from our extensive menu of mouth-watering dishes,
                  prepared fresh and delivered hot to your doorstep in under 30 minutes.
                </p>
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <Clock size={20} className="me-2" />
                    <span>Fast 30-minute delivery</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Star size={20} className="me-2" />
                    <span>4.8/5 Customer Rating</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Truck size={20} className="me-2" />
                    <span>Free delivery on orders $25+</span>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Button as={Link} to="/menu" size="lg" variant="light" className="fw-bold">
                    Order Now
                  </Button>
                  <Button as={Link} to="/menu" size="lg" variant="outline-light">
                    View Menu
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop"
                alt="Delicious Food"
                className="img-fluid rounded shadow-lg"
                effect="blur"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        {/* Features Section */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-6 fw-bold mb-5">Why Choose FoodHub?</h2>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={3} className="text-center mb-4">
            <div className="bg-primary bg-opacity-10 rounded-circle p-4 d-inline-flex mb-3">
              <Clock size={48} className="text-primary" />
            </div>
            <h5 className="fw-bold">Fast Delivery</h5>
            <p>Get your food delivered in 30 minutes or less, guaranteed fresh and hot.</p>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-success bg-opacity-10 rounded-circle p-4 d-inline-flex mb-3">
              <Award size={48} className="text-success" />
            </div>
            <h5 className="fw-bold">Quality Food</h5>
            <p>We use only the freshest ingredients and prepare everything to order.</p>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-warning bg-opacity-10 rounded-circle p-4 d-inline-flex mb-3">
              <Star size={48} className="text-warning" />
            </div>
            <h5 className="fw-bold">Top Rated</h5>
            <p>Over 10,000 satisfied customers with an average rating of 4.8 stars.</p>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-info bg-opacity-10 rounded-circle p-4 d-inline-flex mb-3">
              <Truck size={48} className="text-info" />
            </div>
            <h5 className="fw-bold">Free Delivery</h5>
            <p>Enjoy free delivery on all orders over $25. No hidden fees!</p>
          </Col>
        </Row>

        {/* Featured Items */}
        <Row className="mb-5">
          <Col>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-bold">🔥 Popular Dishes</h3>
              <Button as={Link} to="/menu" variant="outline-primary">
                View All
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
          {featuredItems.map((item) => (
            <Col lg={4} md={6} key={item.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0 hover-shadow">
                <div className="position-relative">
                  <LazyLoadImage
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    height="200"
                    effect="blur"
                  />
                  {item.isPopular && (
                    <span className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded-end">
                      Popular
                    </span>
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <h5 className="card-title fw-bold">{item.name}</h5>
                  <p className="card-text text-muted flex-grow-1">{item.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="h5 fw-bold text-primary mb-0">${item.price}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <Star size={16} className="text-warning me-1" />
                      <span className="small">{item.rating} ({item.reviews})</span>
                    </div>
                  </div>
                  <Button
                    as={Link}
                    to={`/menu/${item.id}`}
                    variant="primary"
                    className="mt-3 w-100"
                  >
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* New Items */}
        {newItems.length > 0 && (
          <>
            <Row className="mb-5">
              <Col>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-bold">✨ New Arrivals</h3>
                  <Button as={Link} to="/menu" variant="outline-success">
                    Explore New
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              {newItems.map((item) => (
                <Col lg={4} md={6} key={item.id} className="mb-4">
                  <Card className="h-100 shadow-sm border-0 hover-shadow">
                    <div className="position-relative">
                      <LazyLoadImage
                        src={item.image}
                        alt={item.name}
                        className="card-img-top"
                        height="200"
                        effect="blur"
                      />
                      {item.isNew && (
                        <span className="position-absolute top-0 start-0 bg-success text-white px-2 py-1 rounded-end">
                          New
                        </span>
                      )}
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="card-text text-muted flex-grow-1">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="h5 fw-bold text-success mb-0">${item.price}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <Star size={16} className="text-warning me-1" />
                          <span className="small">{item.rating} ({item.reviews})</span>
                        </div>
                      </div>
                      <Button
                        as={Link}
                        to={`/menu/${item.id}`}
                        variant="success"
                        className="mt-3 w-100"
                      >
                        Try Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}

        {/* Promotional Banner */}
        <Row className="mb-5">
          <Col>
            <div className="bg-gradient p-5 rounded text-white text-center" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
              <h2 className="display-5 fw-bold mb-3">🎉 Special Offer!</h2>
              <p className="lead mb-4">
                Get 20% off on your first order when you sign up for our newsletter!
              </p>
              <Button variant="light" size="lg" className="fw-bold">
                Claim Offer
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .hover-shadow {
          transition: box-shadow 0.3s ease;
        }
        .hover-shadow:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
        .hero-section {
          background-attachment: fixed;
        }
      `}</style>
    </>
  );
};

export default Home;
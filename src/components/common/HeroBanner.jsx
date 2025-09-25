import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * HeroBanner Component
 * Main banner section for the homepage
 * Features:
 * - Carousel with multiple slides
 * - Call-to-action buttons
 * - Responsive design
 * - High-quality food images
 */
function HeroBanner() {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      title: 'Delicious Food Delivered Fast',
      subtitle: 'Fresh ingredients, authentic flavors, delivered to your doorstep',
      ctaText: 'Order Now',
      ctaLink: '/menu'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      title: 'Authentic Recipes, Modern Delivery',
      subtitle: 'Experience the taste of tradition with the convenience of today',
      ctaText: 'Explore Menu',
      ctaLink: '/menu'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      title: 'Special Offers Every Day',
      subtitle: 'Get up to 30% off on your favorite dishes. Limited time offers!',
      ctaText: 'View Offers',
      ctaLink: '/menu'
    }
  ];

  return (
    <section className="hero-banner">
      <Carousel fade controls={true} indicators={true} interval={5000}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '70vh',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Container>
                <Row className="justify-content-center text-center">
                  <Col lg={8} xl={6}>
                    <Carousel.Caption className="position-static p-0">
                      <h1 className="display-4 fw-bold text-white mb-4">
                        {slide.title}
                      </h1>
                      <p className="lead text-white-50 mb-4 fs-5">
                        {slide.subtitle}
                      </p>
                      <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <LinkContainer to={slide.ctaLink}>
                          <Button variant="primary" size="lg" className="px-4 py-2">
                            {slide.ctaText}
                          </Button>
                        </LinkContainer>
                        <LinkContainer to="/about">
                          <Button variant="outline-light" size="lg" className="px-4 py-2">
                            Learn More
                          </Button>
                        </LinkContainer>
                      </div>
                    </Carousel.Caption>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

    </section>
  );
}

export default HeroBanner;
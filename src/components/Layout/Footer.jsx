import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button, Form, InputGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Footer Component
 * Features:
 * - Restaurant information and contact details
 * - Social media links
 * - Newsletter subscription
 * - Quick navigation links
 * - Opening hours and address
 */

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate newsletter subscription
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '7022233008';
    const message = 'Hi! I would like to know more about your menu and services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          {/* Brand & Description */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-primary mb-3">🍕 FoodHub</h5>
            <p className="text-muted">
              Delicious food delivered to your doorstep. Fresh ingredients,
              authentic flavors, and exceptional service.
            </p>
            <div className="d-flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="text-primary">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-primary">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-primary">
                <Twitter size={20} />
              </a>
              <Button variant="link" onClick={handleWhatsAppClick} className="p-0 text-primary">
                <FaWhatsapp size={20} />
              </Button>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <Nav className="flex-column">
              <LinkContainer to="/">
                <Nav.Link className="text-muted p-0 mb-2">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/menu">
                <Nav.Link className="text-muted p-0 mb-2">Menu</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="text-muted p-0 mb-2">About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="text-muted p-0 mb-2">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>

          {/* Account */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3">Account</h6>
            <Nav className="flex-column">
              <LinkContainer to="/login">
                <Nav.Link className="text-muted p-0 mb-2">Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link className="text-muted p-0 mb-2">Sign Up</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/orders">
                <Nav.Link className="text-muted p-0 mb-2">Order History</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/account">
                <Nav.Link className="text-muted p-0 mb-2">My Account</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>

          {/* Contact Info */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3">Contact Info</h6>
            <div className="text-muted small">
              <div className="d-flex align-items-center mb-2">
                <MapPin size={16} className="me-2" />
                <span>123 Food Street, Taste City, FC 12345</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Phone size={16} className="me-2" />
                <a href="tel:+17022233008" className="text-muted text-decoration-none">
                  +1 (702) 223-3008
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Mail size={16} className="me-2" />
                <a href="mailto:info@foodhub.com" className="text-muted text-decoration-none">
                  info@foodhub.com
                </a>
              </div>

              <div>
                <strong>Opening Hours</strong>
                <div className="mt-1">
                  <div>Mon-Thu: 11AM-10PM</div>
                  <div>Fri-Sat: 11AM-11PM</div>
                  <div>Sunday: 12PM-9PM</div>
                </div>
              </div>
            </div>
          </Col>

          {/* Newsletter */}
          <Col lg={3} md={12} className="mb-4">
            <h6 className="mb-3">Stay Updated</h6>
            <p className="text-muted small">
              Subscribe to our newsletter for exclusive offers!
            </p>

            {isSubscribed ? (
              <div className="alert alert-success py-2">
                ✅ Thank you for subscribing!
              </div>
            ) : (
              <Form onSubmit={handleNewsletterSubmit}>
                <InputGroup size="sm">
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                  <Button type="submit" variant="primary">
                    Subscribe
                  </Button>
                </InputGroup>
              </Form>
            )}

            <div className="mt-3">
              <p className="small mb-2">Download Our App</p>
              <div className="d-flex gap-2">
                <Button variant="outline-light" size="sm">📱 App Store</Button>
                <Button variant="outline-light" size="sm">🤖 Google Play</Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="border-top border-secondary pt-3 mt-4">
          <Col md={6}>
            <small className="text-muted">
              © 2024 FoodHub. All rights reserved.
            </small>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav className="justify-content-md-end">
              <LinkContainer to="/privacy">
                <Nav.Link className="text-muted p-0 me-3 small">Privacy Policy</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/terms">
                <Nav.Link className="text-muted p-0 me-3 small">Terms of Service</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cookies">
                <Nav.Link className="text-muted p-0 small">Cookie Policy</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
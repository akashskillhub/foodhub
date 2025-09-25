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
    <footer className="bg-white text-dark py-5 mt-5 border-top">
      <Container>
        <Row>
          {/* Brand & Description */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="mb-3" style={{ color: '#fc8019' }}>🍕 FoodHub</h5>
            <p className="text-secondary">
              Delicious food delivered to your doorstep. Fresh ingredients,
              authentic flavors, and exceptional service.
            </p>
            <div className="d-flex gap-3 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="text-secondary hover-orange">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-secondary hover-orange">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-secondary hover-orange">
                <Twitter size={20} />
              </a>
              <Button variant="link" onClick={handleWhatsAppClick} className="p-0 text-secondary hover-orange">
                <FaWhatsapp size={20} />
              </Button>
            </div>
            <div className="d-flex gap-2">
              <Button size="sm" style={{ backgroundColor: '#fc8019', borderColor: '#fc8019', fontSize: '12px' }}>
                📱 App Store
              </Button>
              <Button size="sm" style={{ backgroundColor: '#fc8019', borderColor: '#fc8019', fontSize: '12px' }}>
                🤖 Google Play
              </Button>
            </div>
          </Col>

          {/* Company */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3 fw-bold">Company</h6>
            <Nav className="flex-column">
              <LinkContainer to="/">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/careers">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Careers</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/corporate">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Corporate</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>

          {/* Legal */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3 fw-bold">Legal</h6>
            <Nav className="flex-column">
              <LinkContainer to="/terms">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Terms & Conditions</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/privacy">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Privacy Policy</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cookies">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Cookie Policy</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/legal">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Legal</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>

          {/* Help & Support */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3 fw-bold">Help & Support</h6>
            <Nav className="flex-column">
              <LinkContainer to="/help">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Help Center</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/support">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Customer Support</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faq">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">FAQ</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/partner">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Partner with us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link className="text-secondary p-0 mb-2 hover-orange">Sign Up</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>

          {/* Contact & Newsletter */}
          <Col lg={3} md={12} className="mb-4">
            <h6 className="mb-3 fw-bold">Stay Connected</h6>
            <div className="text-secondary small mb-3">
              <div className="d-flex align-items-center mb-2">
                <MapPin size={16} className="me-2" style={{ color: '#fc8019' }} />
                <span>123 Food Street, Taste City, FC 12345</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Phone size={16} className="me-2" style={{ color: '#fc8019' }} />
                <a href="tel:+17022233008" className="text-secondary text-decoration-none hover-orange">
                  +1 (702) 223-3008
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Mail size={16} className="me-2" style={{ color: '#fc8019' }} />
                <a href="mailto:info@foodhub.com" className="text-secondary text-decoration-none hover-orange">
                  info@foodhub.com
                </a>
              </div>
            </div>

            <p className="text-secondary small mb-2">
              Subscribe for exclusive offers!
            </p>

            {isSubscribed ? (
              <div className="alert alert-success py-2 small">
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
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: '#fc8019',
                      borderColor: '#fc8019'
                    }}
                  >
                    Subscribe
                  </Button>
                </InputGroup>
              </Form>
            )}
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="border-top border-light pt-3 mt-4">
          <Col md={6}>
            <small className="text-secondary">
              © 2024 FoodHub. All rights reserved.
            </small>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav className="justify-content-md-end">
              <LinkContainer to="/privacy">
                <Nav.Link className="text-secondary p-0 me-3 small">Privacy Policy</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/terms">
                <Nav.Link className="text-secondary p-0 me-3 small">Terms of Service</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cookies">
                <Nav.Link className="text-secondary p-0 small">Cookie Policy</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
        </Row>
      </Container>

      <style>{`
        .hover-orange:hover {
          color: #fc8019 !important;
          transition: color 0.3s ease;
        }

        .hover-orange {
          transition: color 0.3s ease;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
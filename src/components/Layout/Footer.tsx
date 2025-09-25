import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic here
    alert('Thank you for subscribing to our newsletter!');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hello! I would like to place an order.', '_blank');
  };

  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">🍕 FoodHub</h5>
            <p className="mb-3">
              Delicious food delivered fresh to your doorstep. We pride ourselves on quality ingredients and exceptional taste.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-light">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-light">
                <Twitter size={24} />
              </a>
              <Button
                variant="success"
                size="sm"
                onClick={handleWhatsApp}
                className="d-flex align-items-center gap-1"
              >
                <MessageCircle size={16} />
                WhatsApp
              </Button>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="/menu" className="text-light text-decoration-none">Menu</a></li>
              <li className="mb-2"><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li className="mb-2"><a href="/reviews" className="text-light text-decoration-none">Reviews</a></li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <div className="mb-2 d-flex align-items-center">
              <MapPin size={16} className="me-2" />
              <span>123 Food Street, City, State 12345</span>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <Phone size={16} className="me-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <Mail size={16} className="me-2" />
              <span>info@foodhub.com</span>
            </div>
            <div className="mt-3">
              <strong>Hours:</strong><br />
              Mon-Sun: 9:00 AM - 11:00 PM
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p>Subscribe to get special offers and updates!</p>
            <Form onSubmit={handleNewsletterSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  required
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col md={6}>
            <p className="mb-0">&copy; 2024 FoodHub. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#" className="text-light text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-light text-decoration-none me-3">Terms of Service</a>
            <a href="#" className="text-light text-decoration-none">Cookie Policy</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
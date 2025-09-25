import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Headphones, Mail, Phone, Clock, MessageCircle } from 'lucide-react';

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    category: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Support form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', orderNumber: '', category: '', message: '' });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const supportOptions = [
    {
      icon: <Phone size={32} />,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "+1 (702) 223-3008",
      availability: "24/7 Available"
    },
    {
      icon: <Mail size={32} />,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@foodhub.com",
      availability: "Response within 2 hours"
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Start Chat",
      availability: "Available 6 AM - 12 AM"
    }
  ];

  return (
    <Container className="py-5">
      <Row>
        <Col>
          {/* Header */}
          <div className="text-center mb-5">
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#fc8019',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <Headphones size={40} style={{ color: 'white' }} />
            </div>
            <h1 className="display-4 fw-bold mb-3">Customer Support</h1>
            <p className="lead text-secondary">
              We're here to help! Get in touch with our support team
            </p>
          </div>

          {/* Quick Contact Options */}
          <Row className="mb-5">
            {supportOptions.map((option, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <div style={{ color: '#fc8019', marginBottom: '16px' }}>
                      {option.icon}
                    </div>
                    <h5 className="fw-bold mb-2">{option.title}</h5>
                    <p className="text-muted mb-3">{option.description}</p>
                    <div className="mb-2">
                      <strong style={{ color: '#fc8019' }}>{option.contact}</strong>
                    </div>
                    <small className="text-muted">{option.availability}</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row>
            {/* Support Form */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="mb-4">Send us a Message</h3>

                  {showSuccess && (
                    <Alert variant="success" className="d-flex align-items-center">
                      <MessageCircle size={20} className="me-2" />
                      <div>
                        <strong>Message sent successfully!</strong><br />
                        We'll get back to you within 2 hours.
                      </div>
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Order Number (Optional)</Form.Label>
                          <Form.Control
                            type="text"
                            value={formData.orderNumber}
                            onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                            placeholder="#FH123456"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Category</Form.Label>
                          <Form.Select
                            required
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          >
                            <option value="">Select a category</option>
                            <option value="order">Order Issues</option>
                            <option value="delivery">Delivery Problems</option>
                            <option value="payment">Payment & Billing</option>
                            <option value="account">Account Issues</option>
                            <option value="restaurant">Restaurant Complaint</option>
                            <option value="technical">Technical Support</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your issue in detail..."
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      style={{ backgroundColor: '#fc8019', borderColor: '#fc8019' }}
                      size="lg"
                      className="px-4"
                    >
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Quick Info */}
            <Col lg={4}>
              <Card className="border-0 shadow-sm mb-4">
                <Card.Body className="p-4">
                  <h5 className="mb-3 d-flex align-items-center">
                    <Clock size={20} className="me-2" style={{ color: '#fc8019' }} />
                    Support Hours
                  </h5>
                  <div className="text-muted">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Monday - Friday:</span>
                      <span>6 AM - 12 AM</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Saturday - Sunday:</span>
                      <span>8 AM - 10 PM</span>
                    </div>
                    <small className="text-success">
                      <strong>Phone support available 24/7</strong>
                    </small>
                  </div>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 className="mb-3">Common Issues</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="/faq" className="text-decoration-none" style={{ color: '#fc8019' }}>
                        • Order tracking problems
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/faq" className="text-decoration-none" style={{ color: '#fc8019' }}>
                        • Payment issues
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/faq" className="text-decoration-none" style={{ color: '#fc8019' }}>
                        • Delivery delays
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/faq" className="text-decoration-none" style={{ color: '#fc8019' }}>
                        • Account problems
                      </a>
                    </li>
                    <li>
                      <a href="/faq" className="text-decoration-none" style={{ color: '#fc8019' }}>
                        • View all FAQs →
                      </a>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SupportPage;
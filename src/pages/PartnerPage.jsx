import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Handshake, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react';

const PartnerPage = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    cuisineType: '',
    experience: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Partner form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      restaurantName: '',
      ownerName: '',
      email: '',
      phone: '',
      address: '',
      cuisineType: '',
      experience: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const benefits = [
    {
      icon: <TrendingUp size={32} />,
      title: "Increase Sales",
      description: "Reach thousands of hungry customers and boost your revenue by up to 40%"
    },
    {
      icon: <Users size={32} />,
      title: "Expand Customer Base",
      description: "Connect with new customers who might never have discovered your restaurant"
    },
    {
      icon: <Clock size={32} />,
      title: "Easy Management",
      description: "Simple dashboard to manage orders, menu, and track your earnings in real-time"
    },
    {
      icon: <DollarSign size={32} />,
      title: "Competitive Commission",
      description: "Industry-leading commission rates and fast weekly payouts to your account"
    }
  ];

  const features = [
    "Free listing and menu setup",
    "Real-time order notifications",
    "Customer feedback and ratings",
    "Marketing and promotional support",
    "Dedicated partner support team",
    "Analytics and sales reports",
    "Multiple payment options for customers",
    "No setup fees or hidden charges"
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
              <Handshake size={40} style={{ color: 'white' }} />
            </div>
            <h1 className="display-4 fw-bold mb-3">Partner with FoodHub</h1>
            <p className="lead text-secondary">
              Join thousands of restaurants already growing their business with us
            </p>
          </div>

          {/* Benefits */}
          <Row className="mb-5">
            <Col>
              <h2 className="text-center mb-4">Why Partner with Us?</h2>
              <Row className="g-4">
                {benefits.map((benefit, index) => (
                  <Col lg={3} md={6} key={index}>
                    <Card className="h-100 border-0 shadow-sm text-center">
                      <Card.Body className="p-4">
                        <div style={{ color: '#fc8019', marginBottom: '16px' }}>
                          {benefit.icon}
                        </div>
                        <h5 className="fw-bold mb-2">{benefit.title}</h5>
                        <p className="text-muted small mb-0">
                          {benefit.description}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <Row>
            {/* Partnership Form */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="mb-4">Apply to Become a Partner</h3>

                  {showSuccess && (
                    <Alert variant="success" className="d-flex align-items-center">
                      <CheckCircle size={20} className="me-2" />
                      <div>
                        <strong>Application submitted successfully!</strong><br />
                        We'll review your application and get back to you within 2-3 business days.
                      </div>
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Restaurant Name *</Form.Label>
                          <Form.Control
                            type="text"
                            required
                            value={formData.restaurantName}
                            onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                            placeholder="Your restaurant name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Owner/Manager Name *</Form.Label>
                          <Form.Control
                            type="text"
                            required
                            value={formData.ownerName}
                            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                            placeholder="Your full name"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Phone Number *</Form.Label>
                          <Form.Control
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 123-4567"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Restaurant Address *</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Full restaurant address"
                      />
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Cuisine Type *</Form.Label>
                          <Form.Select
                            required
                            value={formData.cuisineType}
                            onChange={(e) => setFormData({ ...formData, cuisineType: e.target.value })}
                          >
                            <option value="">Select cuisine type</option>
                            <option value="american">American</option>
                            <option value="asian">Asian</option>
                            <option value="chinese">Chinese</option>
                            <option value="indian">Indian</option>
                            <option value="italian">Italian</option>
                            <option value="mexican">Mexican</option>
                            <option value="mediterranean">Mediterranean</option>
                            <option value="thai">Thai</option>
                            <option value="japanese">Japanese</option>
                            <option value="fast-food">Fast Food</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Years in Business</Form.Label>
                          <Form.Select
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          >
                            <option value="">Select experience</option>
                            <option value="new">Just starting</option>
                            <option value="1-2">1-2 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5-10">5-10 years</option>
                            <option value="10+">10+ years</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Additional Information</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your restaurant, special dishes, current delivery setup, etc."
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      style={{ backgroundColor: '#fc8019', borderColor: '#fc8019' }}
                      size="lg"
                      className="px-4"
                    >
                      Submit Application
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Features & Info */}
            <Col lg={4}>
              <Card className="border-0 shadow-sm mb-4">
                <Card.Body className="p-4">
                  <h5 className="mb-3">What You Get</h5>
                  <ul className="list-unstyled">
                    {features.map((feature, index) => (
                      <li key={index} className="mb-2 d-flex align-items-start">
                        <CheckCircle size={16} style={{ color: '#fc8019', marginTop: '2px' }} className="me-2 flex-shrink-0" />
                        <span className="small">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 className="mb-3">Get Started in 3 Steps</h5>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          backgroundColor: '#fc8019',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}
                        className="me-3"
                      >
                        1
                      </div>
                      <span className="fw-bold">Apply Online</span>
                    </div>
                    <p className="small text-muted ms-5">Submit your restaurant details through our simple form</p>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          backgroundColor: '#fc8019',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}
                        className="me-3"
                      >
                        2
                      </div>
                      <span className="fw-bold">Get Approved</span>
                    </div>
                    <p className="small text-muted ms-5">We'll review your application and contact you within 2-3 days</p>
                  </div>

                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          backgroundColor: '#fc8019',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}
                        className="me-3"
                      >
                        3
                      </div>
                      <span className="fw-bold">Start Earning</span>
                    </div>
                    <p className="small text-muted ms-5">Set up your menu and start receiving orders immediately</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PartnerPage;
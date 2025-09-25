import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Accordion, Tab, Tabs } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  Building,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Headphones,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

/**
 * Corporate Page Component
 * Business solutions and corporate services page
 * Similar to Swiggy's corporate offerings
 */
function CorporatePage() {
  const [activeTab, setActiveTab] = useState('office-meals');
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    employees: '',
    requirements: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Corporate inquiry submitted:', formData);
    // Handle form submission
  };

  // Corporate services data
  const services = [
    {
      id: 'office-meals',
      title: 'Office Meals',
      icon: <Building size={40} style={{ color: '#fc8019' }} />,
      description: 'Daily meal solutions for your office',
      features: [
        'Customizable meal plans',
        'Bulk ordering discounts',
        'Scheduled deliveries',
        'Corporate billing'
      ]
    },
    {
      id: 'events-catering',
      title: 'Events & Catering',
      icon: <Users size={40} style={{ color: '#fc8019' }} />,
      description: 'Large scale event catering services',
      features: [
        'Event planning support',
        'Bulk catering options',
        'Custom menu creation',
        'On-time delivery guarantee'
      ]
    },
    {
      id: 'employee-benefits',
      title: 'Employee Benefits',
      icon: <Star size={40} style={{ color: '#fc8019' }} />,
      description: 'Food benefits and meal allowances',
      features: [
        'Meal voucher programs',
        'Employee meal credits',
        'Flexible spending options',
        'Tax-efficient benefits'
      ]
    }
  ];

  // Pricing plans
  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹2,999',
      period: '/month',
      employees: 'Up to 50 employees',
      features: [
        'Basic meal ordering',
        'Standard delivery',
        'Email support',
        'Monthly billing'
      ],
      color: 'primary',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹5,999',
      period: '/month',
      employees: 'Up to 200 employees',
      features: [
        'Advanced meal planning',
        'Priority delivery',
        'Dedicated account manager',
        'Custom menu options',
        'Analytics dashboard'
      ],
      color: 'success',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      employees: '200+ employees',
      features: [
        'Full customization',
        'Multi-location support',
        'API integrations',
        '24/7 priority support',
        'Custom billing solutions',
        'Dedicated success manager'
      ],
      color: 'warning',
      popular: false
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      company: 'TechCorp Solutions',
      logo: '🏢',
      testimonial: 'FoodHub Corporate has transformed our office dining experience. The variety and quality are exceptional.',
      person: 'Sarah Johnson',
      designation: 'HR Manager'
    },
    {
      company: 'StartupHub',
      logo: '🚀',
      testimonial: 'Perfect solution for our growing team. The flexible plans adapt to our changing needs.',
      person: 'Mike Chen',
      designation: 'Operations Lead'
    },
    {
      company: 'Global Enterprises',
      logo: '🌐',
      testimonial: 'Excellent service and support. Our employees love the meal options and convenience.',
      person: 'Priya Sharma',
      designation: 'People Operations'
    }
  ];

  return (
    <div className="corporate-page">
      {/* Hero Section */}
      <section className="hero-section py-5" style={{
        background: 'linear-gradient(135deg, #fc8019 0%, #ff9533 100%)',
        color: 'white'
      }}>
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-4">
                  Corporate Food Solutions
                </h1>
                <p className="lead mb-4">
                  Power your workplace with delicious, convenient, and affordable meal solutions.
                  From daily office meals to large events, we've got you covered.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Button size="lg" className="px-4 py-2" style={{ backgroundColor: 'white', borderColor: '#fc8019', color: '#fc8019' }}>
                    Get Started Today
                  </Button>
                  <Button size="lg" className="px-4 py-2" style={{ backgroundColor: 'transparent', borderColor: 'white', color: 'white' }}>
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="hero-stats">
                  <Row>
                    <Col sm={4} className="mb-3">
                      <div className="stat-item">
                        <h3 className="h2 fw-bold">500+</h3>
                        <p>Companies</p>
                      </div>
                    </Col>
                    <Col sm={4} className="mb-3">
                      <div className="stat-item">
                        <h3 className="h2 fw-bold">50K+</h3>
                        <p>Employees Fed</p>
                      </div>
                    </Col>
                    <Col sm={4} className="mb-3">
                      <div className="stat-item">
                        <h3 className="h2 fw-bold">98%</h3>
                        <p>Satisfaction</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="text-center">
                <h2 className="display-5 fw-bold mb-3">Our Corporate Services</h2>
                <p className="lead text-muted">
                  Comprehensive food solutions tailored for businesses of all sizes
                </p>
              </div>
            </Col>
          </Row>

          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="nav-justified mb-4"
          >
            {services.map((service) => (
              <Tab
                key={service.id}
                eventKey={service.id}
                title={
                  <div className="d-flex align-items-center gap-2">
                    {service.icon}
                    <span>{service.title}</span>
                  </div>
                }
              >
                <Row className="mt-4">
                  <Col lg={6}>
                    <h3 className="h4 fw-bold mb-3">{service.title}</h3>
                    <p className="text-muted mb-4">{service.description}</p>

                    <ul className="list-unstyled">
                      {service.features.map((feature, index) => (
                        <li key={index} className="d-flex align-items-center mb-2">
                          <CheckCircle size={20} className="text-success me-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="mt-3" style={{ backgroundColor: '#fc8019', borderColor: '#fc8019' }}>
                      Learn More <ArrowRight size={18} className="ms-2" />
                    </Button>
                  </Col>
                  <Col lg={6}>
                    <div className="service-image bg-light rounded p-4 text-center">
                      <div style={{ fontSize: '80px' }}>
                        {service.id === 'office-meals' && '🍽️'}
                        {service.id === 'events-catering' && '🎉'}
                        {service.id === 'employee-benefits' && '🎁'}
                      </div>
                      <p className="text-muted mt-3">
                        Professional {service.title.toLowerCase()} solutions
                      </p>
                    </div>
                  </Col>
                </Row>
              </Tab>
            ))}
          </Tabs>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="text-center">
                <h2 className="display-5 fw-bold mb-3">Why Choose FoodHub Corporate?</h2>
                <p className="lead text-muted">
                  We understand the unique needs of corporate food service
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <Clock size={50} style={{ color: '#fc8019' }} />
                  </div>
                  <Card.Title className="h5">Timely Delivery</Card.Title>
                  <Card.Text>
                    Guaranteed on-time delivery for all your corporate meal requirements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <Shield size={50} style={{ color: '#fc8019' }} />
                  </div>
                  <Card.Title className="h5">Quality Assured</Card.Title>
                  <Card.Text>
                    Strict quality controls and hygiene standards for corporate catering.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <TrendingUp size={50} style={{ color: '#fc8019' }} />
                  </div>
                  <Card.Title className="h5">Cost Effective</Card.Title>
                  <Card.Text>
                    Bulk pricing and corporate discounts to optimize your food budget.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <Headphones size={50} className="text-info" />
                  </div>
                  <Card.Title className="h5">Dedicated Support</Card.Title>
                  <Card.Text>
                    Personal account managers and 24/7 support for enterprise clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <Users size={50} className="text-danger" />
                  </div>
                  <Card.Title className="h5">Scalable Solutions</Card.Title>
                  <Card.Text>
                    Flexible plans that grow with your business and employee count.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <CheckCircle size={50} style={{ color: '#fc8019' }} />
                  </div>
                  <Card.Title className="h5">Easy Management</Card.Title>
                  <Card.Text>
                    Simple ordering system and real-time tracking for all orders.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Plans */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="text-center">
                <h2 className="display-5 fw-bold mb-3">Corporate Pricing Plans</h2>
                <p className="lead text-muted">
                  Choose the perfect plan for your organization
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {pricingPlans.map((plan, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className={`border-0 shadow h-100 ${plan.popular ? 'border-success' : ''}`}>
                  {plan.popular && (
                    <div className="text-center">
                      <Badge bg="success" className="px-3 py-1 rounded-pill">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <Card.Body className="text-center p-4">
                    <Card.Title className="h4 fw-bold mb-3">{plan.name}</Card.Title>
                    <div className="mb-3">
                      <span className="display-6 fw-bold" style={{ color: '#fc8019' }}>{plan.price}</span>
                      <span className="text-muted">{plan.period}</span>
                    </div>
                    <p className="text-muted mb-4">{plan.employees}</p>

                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="d-flex align-items-center mb-2">
                          <CheckCircle size={16} className="text-success me-2" />
                          <span className="small">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.popular ? 'success' : 'outline-primary'}
                      className="w-100"
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Client Testimonials */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="text-center">
                <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
                <p className="lead text-muted">
                  Trusted by leading companies across industries
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} key={index} className="mb-4">
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span style={{ fontSize: '40px' }}>{testimonial.logo}</span>
                      <div className="ms-3">
                        <h6 className="fw-bold mb-0">{testimonial.company}</h6>
                      </div>
                    </div>
                    <Card.Text className="mb-3">
                      "{testimonial.testimonial}"
                    </Card.Text>
                    <div className="text-muted small">
                      <strong>{testimonial.person}</strong><br />
                      {testimonial.designation}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <h2 className="fw-bold mb-4">Get Started Today</h2>
              <p className="text-muted mb-4">
                Ready to transform your workplace dining experience? Contact us for a customized quote.
              </p>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Company Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Contact Person *</Form.Label>
                      <Form.Control
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Number of Employees</Form.Label>
                  <Form.Select
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                  >
                    <option value="">Select range</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Requirements</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder="Tell us about your corporate food requirements..."
                  />
                </Form.Group>

                <Button type="submit" size="lg" className="px-4" style={{ backgroundColor: '#fc8019', borderColor: '#fc8019' }}>
                  Request Quote
                </Button>
              </Form>
            </Col>

            <Col lg={6}>
              <div className="contact-info">
                <h3 className="fw-bold mb-4">Contact Information</h3>

                <div className="contact-item d-flex align-items-start mb-3">
                  <Phone size={24} className="me-3 mt-1" style={{ color: '#fc8019' }} />
                  <div>
                    <h6 className="fw-bold">Phone</h6>
                    <p className="text-muted mb-0">+1 (555) 123-4567</p>
                    <p className="text-muted">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-start mb-3">
                  <Mail size={24} className="me-3 mt-1" style={{ color: '#fc8019' }} />
                  <div>
                    <h6 className="fw-bold">Email</h6>
                    <p className="text-muted mb-0">corporate@foodhub.com</p>
                    <p className="text-muted">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-start mb-3">
                  <MapPin size={24} className="me-3 mt-1" style={{ color: '#fc8019' }} />
                  <div>
                    <h6 className="fw-bold">Address</h6>
                    <p className="text-muted mb-0">123 Business Plaza</p>
                    <p className="text-muted">Corporate City, CC 12345</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h6 className="fw-bold">Why Choose Us?</h6>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center mb-2">
                      <CheckCircle size={16} className="text-success me-2" />
                      <span className="small">Free consultation and setup</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <CheckCircle size={16} className="text-success me-2" />
                      <span className="small">Flexible contract terms</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <CheckCircle size={16} className="text-success me-2" />
                      <span className="small">30-day money-back guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default CorporatePage;
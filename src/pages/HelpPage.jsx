import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion, Button, Form, InputGroup } from 'react-bootstrap';
import { Search, MessageCircle, Phone, Mail, Clock, HelpCircle, ShoppingBag, CreditCard, Truck } from 'lucide-react';

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: 'Orders & Delivery',
      icon: <ShoppingBag size={20} />,
      questions: [
        {
          question: 'How long does delivery take?',
          answer: 'Our average delivery time is 30-45 minutes. However, during peak hours or bad weather, it might take slightly longer. You can track your order in real-time through our app.'
        },
        {
          question: 'What are your delivery charges?',
          answer: 'Delivery charges vary by distance and order value. Orders above ₹300 get free delivery within 5km. For orders below ₹300, delivery charges range from ₹20-₹50.'
        },
        {
          question: 'Can I cancel my order?',
          answer: 'Yes, you can cancel your order within 2 minutes of placing it without any charges. After that, cancellation depends on the restaurant\'s preparation status.'
        },
        {
          question: 'How do I track my order?',
          answer: 'You can track your order in real-time through the "Orders" section in your account or through the tracking link sent via SMS.'
        }
      ]
    },
    {
      category: 'Payment & Refunds',
      icon: <CreditCard size={20} />,
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit/debit cards, UPI, net banking, digital wallets, and cash on delivery (in select areas).'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Yes, all payments are processed through secure, encrypted channels. We don\'t store your payment information on our servers.'
        },
        {
          question: 'How do refunds work?',
          answer: 'Refunds are processed within 3-5 business days to your original payment method. For cash on delivery orders, refunds are processed to your FoodHub wallet.'
        },
        {
          question: 'What if I was charged incorrectly?',
          answer: 'Contact our support team immediately with your order details. We\'ll investigate and process a refund if there was an error.'
        }
      ]
    },
    {
      category: 'Account & App',
      icon: <HelpCircle size={20} />,
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Click on "Sign In" in the top right corner, then select "Create Account". You can sign up using your email, phone number, or social media accounts.'
        },
        {
          question: 'I forgot my password. What should I do?',
          answer: 'Click on "Forgot Password" on the login page. We\'ll send you a reset link to your registered email address.'
        },
        {
          question: 'How do I update my delivery address?',
          answer: 'Go to your account settings and select "Manage Addresses". You can add, edit, or delete addresses from there.'
        },
        {
          question: 'Can I save my favorite restaurants?',
          answer: 'Yes! Click the heart icon on any restaurant card to add it to your favorites. You can access them from your account dashboard.'
        }
      ]
    },
    {
      category: 'Food Quality & Safety',
      icon: <Truck size={20} />,
      questions: [
        {
          question: 'What if my food arrives cold or spilled?',
          answer: 'We apologize for the inconvenience. Please contact our support team immediately with photos of the issue, and we\'ll arrange a replacement or full refund.'
        },
        {
          question: 'Are the restaurants verified?',
          answer: 'Yes, all our partner restaurants are verified and must meet our food safety and quality standards. We conduct regular audits to ensure compliance.'
        },
        {
          question: 'What about food allergies?',
          answer: 'Please check the ingredients list for each dish and contact the restaurant directly for specific allergy information. We recommend mentioning allergies in order notes.'
        },
        {
          question: 'Do you have vegetarian/vegan options?',
          answer: 'Yes! You can filter restaurants and dishes by vegetarian, vegan, and other dietary preferences using our search filters.'
        }
      ]
    }
  ];

  const contactOptions = [
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: <MessageCircle size={24} />,
      action: 'Start Chat',
      available: '24/7'
    },
    {
      title: 'Call Us',
      description: '+1 (555) 123-FOOD',
      icon: <Phone size={24} />,
      action: 'Call Now',
      available: '9 AM - 11 PM'
    },
    {
      title: 'Email Support',
      description: 'help@foodhub.com',
      icon: <Mail size={24} />,
      action: 'Send Email',
      available: 'Response within 2 hours'
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      searchTerm === '' ||
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <Container className="py-5">
      {/* Header */}
      <Row className="mb-5">
        <Col>
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-3">How can we help you?</h1>
            <p className="lead text-muted mb-4">
              Find answers to frequently asked questions or get in touch with our support team
            </p>

            {/* Search Bar */}
            <Row className="justify-content-center">
              <Col lg={6}>
                <InputGroup size="lg">
                  <InputGroup.Text>
                    <Search size={20} className="text-muted" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search for help topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Quick Contact Options */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center mb-4">Need immediate assistance?</h3>
          <Row className="g-3">
            {contactOptions.map((option, index) => (
              <Col lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <div className="mb-3" style={{ color: '#fc8019' }}>
                      {option.icon}
                    </div>
                    <h5 className="fw-bold">{option.title}</h5>
                    <p className="text-muted mb-3">{option.description}</p>
                    <div className="d-flex align-items-center justify-content-center gap-2 text-success mb-3">
                      <Clock size={16} />
                      <small>{option.available}</small>
                    </div>
                    <Button
                      className="w-100"
                      style={{ backgroundColor: '#fc8019', borderColor: '#fc8019' }}
                    >
                      {option.action}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* FAQ Sections */}
      <Row>
        <Col>
          <h3 className="mb-4">Frequently Asked Questions</h3>

          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="mb-4 border-0 shadow-sm">
                <Card.Header className="bg-light border-0 py-3">
                  <div className="d-flex align-items-center">
                    <div className="text-primary me-3">
                      {category.icon}
                    </div>
                    <h5 className="mb-0 fw-bold">{category.category}</h5>
                  </div>
                </Card.Header>
                <Card.Body className="p-0">
                  <Accordion flush>
                    {category.questions.map((faq, faqIndex) => (
                      <Accordion.Item key={faqIndex} eventKey={`${categoryIndex}-${faqIndex}`}>
                        <Accordion.Header>
                          <span className="fw-medium">{faq.question}</span>
                        </Accordion.Header>
                        <Accordion.Body className="text-muted">
                          {faq.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Card className="text-center py-5 border-0 shadow-sm">
              <Card.Body>
                <div className="mb-3">
                  <Search size={48} className="text-muted" />
                </div>
                <h5>No results found</h5>
                <p className="text-muted">
                  Try different keywords or browse our FAQ categories above
                </p>
                <Button
                  onClick={() => setSearchTerm('')}
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#fc8019',
                    color: '#fc8019'
                  }}
                >
                  Clear Search
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      {/* Contact Form */}
      <Row className="mt-5">
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Header className="text-white text-center py-4" style={{ backgroundColor: '#fc8019' }}>
              <h4 className="mb-0">Still need help? Contact us!</h4>
              <p className="mb-0 opacity-75">We'll get back to you within 2 hours</p>
            </Card.Header>
            <Card.Body className="p-4">
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Order Number (Optional)</Form.Label>
                      <Form.Control type="text" placeholder="Enter order number" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Issue Category</Form.Label>
                      <Form.Select>
                        <option>Select category</option>
                        <option>Order Issue</option>
                        <option>Payment Problem</option>
                        <option>Food Quality</option>
                        <option>Delivery Issue</option>
                        <option>Account Problem</option>
                        <option>Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Label>Describe your issue</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Please describe your issue in detail..."
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    size="lg"
                    className="px-5"
                    style={{ backgroundColor: '#fc8019', borderColor: '#fc8019' }}
                  >
                    Submit Request
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HelpPage;
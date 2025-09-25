import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion, Form, InputGroup, Button } from 'react-bootstrap';
import { HelpCircle, Search } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: "Orders & Delivery",
      questions: [
        {
          question: "How long does delivery take?",
          answer: "Delivery typically takes 30-45 minutes depending on your location and restaurant preparation time. We provide real-time tracking so you can monitor your order."
        },
        {
          question: "Can I modify my order after placing it?",
          answer: "You can modify your order within 2 minutes of placing it. After that, please contact customer support as the restaurant may have already started preparing your order."
        },
        {
          question: "What are the delivery charges?",
          answer: "Delivery charges vary by location and distance. You'll see the exact delivery fee before confirming your order. Free delivery is available for orders above $25."
        },
        {
          question: "Do you deliver 24/7?",
          answer: "Delivery hours depend on restaurant availability. Most restaurants operate from 7 AM to 11 PM, but some offer 24/7 service. Check individual restaurant timings on their page."
        }
      ]
    },
    {
      category: "Account & Payments",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click 'Sign Up' in the top menu, enter your details, and verify your email. You can also sign up during checkout for faster future orders."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery (where available)."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard encryption and never store your complete payment details. All transactions are processed through secure payment gateways."
        },
        {
          question: "How do I get a refund?",
          answer: "Refunds are processed automatically for cancelled orders. For food quality issues, contact support within 30 minutes of delivery for a full refund."
        }
      ]
    },
    {
      category: "Food & Restaurants",
      questions: [
        {
          question: "How do you ensure food quality?",
          answer: "We partner only with licensed restaurants that meet our quality standards. All restaurants are regularly audited, and we have a rating system based on customer feedback."
        },
        {
          question: "Can I track my order?",
          answer: "Yes! Once your order is confirmed, you'll receive a tracking link. You can see when your food is being prepared, picked up, and its live location during delivery."
        },
        {
          question: "Do you have vegetarian/vegan options?",
          answer: "Absolutely! Use our filters to find restaurants with vegetarian, vegan, gluten-free, and other dietary options. Each dish is clearly labeled with dietary information."
        },
        {
          question: "What if my order is wrong or missing items?",
          answer: "Contact our support team immediately through the app or website. We'll either send the missing items or provide a full refund for the affected items."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "The app/website isn't working properly",
          answer: "Try refreshing the page or restarting the app. Clear your browser cache or update the app to the latest version. If issues persist, contact our tech support."
        },
        {
          question: "I'm not receiving order notifications",
          answer: "Check your notification settings in the app and ensure notifications are enabled. Also verify your email address and phone number are correct in your profile."
        },
        {
          question: "How do I change my delivery address?",
          answer: "You can update your delivery address in your profile settings or during checkout. Make sure to set your location accurately for faster delivery."
        },
        {
          question: "Can I schedule orders for later?",
          answer: "Yes! Select 'Schedule Order' during checkout and choose your preferred delivery time. You can schedule orders up to 7 days in advance."
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
              <HelpCircle size={40} style={{ color: 'white' }} />
            </div>
            <h1 className="display-4 fw-bold mb-3">Frequently Asked Questions</h1>
            <p className="lead text-secondary">
              Find answers to common questions about FoodHub
            </p>
          </div>

          {/* Search */}
          <Row className="justify-content-center mb-5">
            <Col md={8} lg={6}>
              <InputGroup size="lg">
                <InputGroup.Text>
                  <Search size={20} className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>

          {/* FAQ Categories */}
          <Row>
            <Col lg={10} className="mx-auto">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-5">
                  <h3 className="mb-4" style={{ color: '#fc8019' }}>
                    {category.category}
                  </h3>
                  <Accordion>
                    {category.questions.map((faq, faqIndex) => (
                      <Accordion.Item
                        key={faqIndex}
                        eventKey={`${categoryIndex}-${faqIndex}`}
                      >
                        <Accordion.Header>
                          <strong>{faq.question}</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                          {faq.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              ))}
            </Col>
          </Row>

          {/* Contact CTA */}
          <Card className="text-center border-0 mt-5" style={{ backgroundColor: '#fc8019' }}>
            <Card.Body className="p-5 text-white">
              <HelpCircle size={48} className="mb-3" />
              <h3 className="mb-3">Still Need Help?</h3>
              <p className="mb-4 opacity-75">
                Can't find what you're looking for? Our support team is here to help 24/7.
              </p>
              <Button
                href="/support"
                variant="light"
                size="lg"
                className="px-4"
                style={{ color: '#fc8019' }}
              >
                Contact Support
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQPage;
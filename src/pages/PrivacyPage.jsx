import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Shield } from 'lucide-react';

const PrivacyPage = () => {
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
              <Shield size={40} style={{ color: 'white' }} />
            </div>
            <h1 className="display-4 fw-bold mb-3">Privacy Policy</h1>
            <p className="lead text-secondary">
              Last updated: January 2024
            </p>
          </div>

          {/* Content */}
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-5">
                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Information We Collect</h2>
                    <p className="text-secondary mb-3">
                      At FoodHub, we collect information you provide directly to us, such as when you create an account,
                      place an order, or contact us for support. This includes:
                    </p>
                    <ul className="text-secondary">
                      <li className="mb-2">Personal information (name, email address, phone number)</li>
                      <li className="mb-2">Delivery addresses and payment information</li>
                      <li className="mb-2">Order history and food preferences</li>
                      <li className="mb-2">Communications with our support team</li>
                    </ul>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>How We Use Your Information</h2>
                    <p className="text-secondary mb-3">
                      We use the information we collect to:
                    </p>
                    <ul className="text-secondary">
                      <li className="mb-2">Process and deliver your food orders</li>
                      <li className="mb-2">Provide customer service and support</li>
                      <li className="mb-2">Send order confirmations and delivery updates</li>
                      <li className="mb-2">Improve our services and user experience</li>
                      <li className="mb-2">Send promotional offers (with your consent)</li>
                      <li className="mb-2">Prevent fraud and ensure platform security</li>
                    </ul>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Information Sharing</h2>
                    <p className="text-secondary mb-3">
                      We share your information only in the following circumstances:
                    </p>
                    <ul className="text-secondary">
                      <li className="mb-2">
                        <strong>With Restaurants:</strong> We share order details with restaurants to fulfill your orders
                      </li>
                      <li className="mb-2">
                        <strong>With Delivery Partners:</strong> We share delivery information to ensure successful delivery
                      </li>
                      <li className="mb-2">
                        <strong>With Payment Processors:</strong> We share payment information to process transactions securely
                      </li>
                      <li className="mb-2">
                        <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights
                      </li>
                    </ul>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Data Security</h2>
                    <p className="text-secondary mb-3">
                      We implement appropriate security measures to protect your personal information against unauthorized
                      access, alteration, disclosure, or destruction. This includes:
                    </p>
                    <ul className="text-secondary">
                      <li className="mb-2">Encryption of sensitive data in transit and at rest</li>
                      <li className="mb-2">Regular security assessments and updates</li>
                      <li className="mb-2">Restricted access to personal information on a need-to-know basis</li>
                      <li className="mb-2">Secure payment processing through certified providers</li>
                    </ul>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Your Rights</h2>
                    <p className="text-secondary mb-3">
                      You have the right to:
                    </p>
                    <ul className="text-secondary">
                      <li className="mb-2">Access and update your personal information</li>
                      <li className="mb-2">Delete your account and associated data</li>
                      <li className="mb-2">Opt out of promotional communications</li>
                      <li className="mb-2">Request a copy of your data</li>
                      <li className="mb-2">Restrict processing of your information</li>
                    </ul>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Cookies and Tracking</h2>
                    <p className="text-secondary mb-3">
                      We use cookies and similar technologies to enhance your experience, analyze usage patterns,
                      and provide personalized content. You can control cookie settings through your browser preferences.
                    </p>
                    <p className="text-secondary">
                      For more details, please see our <a href="/cookies" style={{ color: '#fc8019', textDecoration: 'none' }}>Cookie Policy</a>.
                    </p>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Contact Us</h2>
                    <p className="text-secondary mb-3">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                      <p className="mb-2"><strong>Email:</strong> privacy@foodhub.com</p>
                      <p className="mb-2"><strong>Phone:</strong> +1 (702) 223-3008</p>
                      <p className="mb-0"><strong>Address:</strong> 123 Food Street, Taste City, FC 12345</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Changes to This Policy</h2>
                    <p className="text-secondary">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by
                      posting the new Privacy Policy on this page and updating the "Last updated" date at the top
                      of this policy.
                    </p>
                  </section>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPage;
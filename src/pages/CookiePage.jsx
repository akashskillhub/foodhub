import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Cookie } from 'lucide-react';

const CookiePage = () => {
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
              <Cookie size={40} style={{ color: 'white' }} />
            </div>
            <h1 className="display-4 fw-bold mb-3">Cookie Policy</h1>
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
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>What Are Cookies?</h2>
                    <p className="text-secondary mb-3">
                      Cookies are small text files that are stored on your computer or mobile device when you visit our website.
                      They help us provide you with a better experience by remembering your preferences and understanding how
                      you use our service.
                    </p>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Types of Cookies We Use</h2>

                    <div className="mb-4">
                      <h4 className="mb-3">Essential Cookies</h4>
                      <p className="text-secondary mb-3">
                        These cookies are necessary for the website to function properly. They enable core functionality
                        such as security, network management, and accessibility.
                      </p>
                      <ul className="text-secondary">
                        <li className="mb-2">Authentication cookies to keep you logged in</li>
                        <li className="mb-2">Shopping cart cookies to remember your orders</li>
                        <li className="mb-2">Security cookies to protect against fraud</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-3">Performance Cookies</h4>
                      <p className="text-secondary mb-3">
                        These cookies collect information about how visitors use our website, helping us improve
                        performance and user experience.
                      </p>
                      <ul className="text-secondary">
                        <li className="mb-2">Google Analytics for website traffic analysis</li>
                        <li className="mb-2">Performance monitoring cookies</li>
                        <li className="mb-2">Error tracking and debugging cookies</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-3">Functionality Cookies</h4>
                      <p className="text-secondary mb-3">
                        These cookies remember choices you make to improve your experience and provide enhanced features.
                      </p>
                      <ul className="text-secondary">
                        <li className="mb-2">Language and region preferences</li>
                        <li className="mb-2">Remembering your delivery address</li>
                        <li className="mb-2">Customized content and recommendations</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-3">Advertising Cookies</h4>
                      <p className="text-secondary mb-3">
                        These cookies are used to deliver advertisements more relevant to you and your interests.
                        They may be set by us or by third-party providers.
                      </p>
                      <ul className="text-secondary">
                        <li className="mb-2">Facebook Pixel for targeted advertising</li>
                        <li className="mb-2">Google Ads for remarketing campaigns</li>
                        <li className="mb-2">Social media integration cookies</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Managing Your Cookie Preferences</h2>
                    <p className="text-secondary mb-3">
                      You have control over how cookies are used on your device:
                    </p>
                    <ul className="text-secondary">
                      <li className="mb-2">
                        <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings
                      </li>
                      <li className="mb-2">
                        <strong>Opt-Out Links:</strong> Many advertising networks provide opt-out mechanisms
                      </li>
                      <li className="mb-2">
                        <strong>Cookie Banner:</strong> Use our cookie consent banner to manage preferences
                      </li>
                      <li className="mb-2">
                        <strong>Delete Existing Cookies:</strong> You can delete cookies that have already been set
                      </li>
                    </ul>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Third-Party Cookies</h2>
                    <p className="text-secondary mb-3">
                      Some cookies are set by third-party services that appear on our pages:
                    </p>
                    <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <h5>Google Analytics</h5>
                          <p className="small text-muted mb-0">Website traffic analysis and user behavior tracking</p>
                        </div>
                        <div className="col-md-4 mb-3">
                          <h5>Payment Processors</h5>
                          <p className="small text-muted mb-0">Secure payment processing and fraud prevention</p>
                        </div>
                        <div className="col-md-4 mb-3">
                          <h5>Social Media</h5>
                          <p className="small text-muted mb-0">Social sharing buttons and embedded content</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Impact of Disabling Cookies</h2>
                    <p className="text-secondary mb-3">
                      If you choose to disable cookies, some features may not work as expected:
                    </p>
                    <ul className="text-secondary">
                      <li className="mb-2">You may need to log in each time you visit</li>
                      <li className="mb-2">Your shopping cart may not remember items</li>
                      <li className="mb-2">Personalized recommendations may not be available</li>
                      <li className="mb-2">Some site functionality may be limited</li>
                    </ul>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Updates to This Policy</h2>
                    <p className="text-secondary">
                      We may update this Cookie Policy to reflect changes in our practices or for other operational,
                      legal, or regulatory reasons. Please revisit this page regularly to stay informed about our
                      use of cookies.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>Contact Us</h2>
                    <p className="text-secondary mb-3">
                      If you have any questions about our use of cookies, please contact us:
                    </p>
                    <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                      <p className="mb-2"><strong>Email:</strong> privacy@foodhub.com</p>
                      <p className="mb-2"><strong>Phone:</strong> +1 (702) 223-3008</p>
                      <p className="mb-0"><strong>Address:</strong> 123 Food Street, Taste City, FC 12345</p>
                    </div>
                  </section>
                </Card.Body>
              </Card>

              {/* Cookie Preferences CTA */}
              <Card className="border-0 shadow-sm mt-4" style={{ backgroundColor: '#fc8019' }}>
                <Card.Body className="p-4 text-center text-white">
                  <Cookie size={32} className="mb-3" />
                  <h4 className="mb-3">Manage Your Cookie Preferences</h4>
                  <p className="mb-3 opacity-75">
                    You can change your cookie settings at any time through your browser or by contacting us.
                  </p>
                  <Button
                    variant="light"
                    size="lg"
                    style={{ color: '#fc8019' }}
                  >
                    Cookie Settings
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CookiePage;
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FileText } from 'lucide-react';

const TermsPage = () => {
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
              <FileText size={40} style={{ color: 'white' }} />
            </div>
            <h1 className="display-4 fw-bold mb-3">Terms & Conditions</h1>
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
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>1. Agreement to Terms</h2>
                    <p className="text-secondary mb-3">
                      By accessing and using FoodHub's services, you accept and agree to be bound by the terms and provision of this agreement.
                      If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <p className="text-secondary">
                      These Terms and Conditions govern your use of our food delivery platform and services provided by FoodHub.
                    </p>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>2. Service Description</h2>
                    <p className="text-secondary mb-3">
                      FoodHub is an online platform that connects customers with restaurants and food establishments for food ordering and delivery services.
                    </p>
                    <p className="text-secondary">
                      We facilitate orders but do not prepare, handle, or deliver food directly. All food preparation and initial handling is done by partner restaurants.
                    </p>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>3. User Responsibilities</h2>
                    <ul className="text-secondary">
                      <li className="mb-2">Provide accurate delivery information and contact details</li>
                      <li className="mb-2">Make payment for orders as agreed</li>
                      <li className="mb-2">Comply with all applicable laws and regulations</li>
                      <li className="mb-2">Not misuse our platform or services</li>
                      <li className="mb-2">Treat delivery personnel and restaurant staff with respect</li>
                    </ul>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>4. Orders and Payment</h2>
                    <p className="text-secondary mb-3">
                      All orders are subject to availability and acceptance by the restaurant. Prices may vary and are subject to change without notice.
                    </p>
                    <p className="text-secondary mb-3">
                      Payment must be made at the time of ordering. We accept credit cards, debit cards, and cash on delivery where available.
                    </p>
                    <p className="text-secondary">
                      Delivery fees and service charges will be clearly displayed before order confirmation.
                    </p>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>5. Cancellation and Refunds</h2>
                    <p className="text-secondary mb-3">
                      Orders can be cancelled within 2 minutes of placement. After this time, cancellation may not be possible if preparation has begun.
                    </p>
                    <p className="text-secondary mb-3">
                      Refunds for cancelled orders will be processed within 3-7 business days to the original payment method.
                    </p>
                    <p className="text-secondary">
                      In case of food quality issues, please contact our customer support within 30 minutes of delivery for resolution.
                    </p>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>6. Delivery</h2>
                    <p className="text-secondary mb-3">
                      Delivery times are estimates and may vary based on restaurant preparation time, weather, traffic, and order volume.
                    </p>
                    <p className="text-secondary">
                      We are not responsible for delays caused by factors beyond our control. Delivery personnel will attempt to contact you if unable to locate the delivery address.
                    </p>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>7. Limitation of Liability</h2>
                    <p className="text-secondary mb-3">
                      FoodHub acts as an intermediary platform and is not liable for food quality, preparation, or food safety issues that are the responsibility of partner restaurants.
                    </p>
                    <p className="text-secondary">
                      Our liability is limited to the order value and does not extend to consequential or indirect damages.
                    </p>
                  </section>

                  <section className="mb-5">
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>8. Privacy</h2>
                    <p className="text-secondary">
                      Your privacy is important to us. Please review our <a href="/privacy" style={{ color: '#fc8019', textDecoration: 'none' }}>Privacy Policy</a> to understand how we collect, use, and protect your personal information.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-4" style={{ color: '#fc8019' }}>9. Contact Information</h2>
                    <p className="text-secondary mb-3">
                      For any questions about these Terms & Conditions, please contact us:
                    </p>
                    <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                      <p className="mb-2"><strong>Email:</strong> legal@foodhub.com</p>
                      <p className="mb-2"><strong>Phone:</strong> +1 (702) 223-3008</p>
                      <p className="mb-0"><strong>Address:</strong> 123 Food Street, Taste City, FC 12345</p>
                    </div>
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

export default TermsPage;
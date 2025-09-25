import React from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Clock, Truck, MessageCircle } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  const location = useLocation();
  const { orderNumber, total } = location.state || {};

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I just placed order ${orderNumber}. Can you please confirm the status?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={6}>
          <Card className="border-0 shadow-sm text-center">
            <Card.Body className="p-5">
              <div className="mb-4">
                <CheckCircle size={80} className="text-success mb-3" />
                <h1 className="display-6 fw-bold text-success mb-2">Order Confirmed!</h1>
                <p className="lead text-muted">
                  Thank you for choosing FoodHub. Your order has been placed successfully.
                </p>
              </div>

              {orderNumber && (
                <Alert variant="info" className="mb-4">
                  <div className="fw-bold">Order Number: {orderNumber}</div>
                  {total && <div>Total Amount: ${total}</div>}
                </Alert>
              )}

              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <Clock size={32} className="text-primary mb-2" />
                  <h6 className="fw-bold">Estimated Time</h6>
                  <small className="text-muted">30-45 minutes</small>
                </Col>
                <Col md={4} className="mb-3">
                  <Truck size={32} className="text-success mb-2" />
                  <h6 className="fw-bold">Delivery Status</h6>
                  <small className="text-muted">Being prepared</small>
                </Col>
                <Col md={4} className="mb-3">
                  <MessageCircle size={32} className="text-info mb-2" />
                  <h6 className="fw-bold">Updates</h6>
                  <small className="text-muted">Via SMS & Email</small>
                </Col>
              </Row>

              <div className="d-grid gap-2 mb-4">
                <Button
                  variant="success"
                  size="lg"
                  onClick={handleWhatsApp}
                  className="d-flex align-items-center justify-content-center"
                >
                  <MessageCircle size={20} className="me-2" />
                  Contact us on WhatsApp
                </Button>
                <Button as={Link} to="/menu" variant="outline-primary">
                  Continue Shopping
                </Button>
              </div>

              <div className="text-center">
                <small className="text-muted">
                  You'll receive SMS and email updates about your order status.
                  <br />
                  Need help? Call us at <a href="tel:+15551234567">(555) 123-4567</a>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderSuccess;
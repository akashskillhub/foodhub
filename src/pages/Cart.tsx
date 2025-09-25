import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login?redirect=checkout');
    } else {
      navigate('/checkout');
    }
  };

  if (state.items.length === 0) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={6} className="text-center">
            <div className="mb-4">
              <ShoppingCart size={64} className="text-muted mb-3" />
              <h2 className="fw-bold mb-3">Your cart is empty</h2>
              <p className="text-muted mb-4">
                Looks like you haven't added any delicious items to your cart yet.
              </p>
              <Button as={Link} to="/menu" variant="primary" size="lg">
                Start Shopping
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="display-6 fw-bold">Shopping Cart</h1>
            <Badge bg="primary" pill className="fs-6">
              {state.itemCount} items
            </Badge>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Cart Items */}
        <Col lg={8}>
          <Card className="shadow-sm border-0 mb-4">
            <Card.Header className="bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Cart Items</h5>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={clearCart}
                >
                  Clear All
                </Button>
              </div>
            </Card.Header>
            <ListGroup variant="flush">
              {state.items.map((item) => (
                <ListGroup.Item key={item.id} className="p-3">
                  <Row className="align-items-center">
                    <Col md={2}>
                      <LazyLoadImage
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        effect="blur"
                        style={{ height: '80px', width: '80px', objectFit: 'cover' }}
                      />
                    </Col>
                    <Col md={4}>
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                      <small className="text-muted text-capitalize">
                        {item.category.replace('_', ' ')}
                      </small>
                    </Col>
                    <Col md={2}>
                      <span className="fw-bold text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                    </Col>
                    <Col md={3}>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <Minus size={16} />
                        </Button>
                        <span className="mx-3 fw-bold">{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                    </Col>
                    <Col md={1} className="text-end">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col className="text-end">
                      <small className="text-muted">
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </small>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>

          {/* Continue Shopping */}
          <div className="d-flex justify-content-between">
            <Button as={Link} to="/menu" variant="outline-primary">
              Continue Shopping
            </Button>
          </div>
        </Col>

        {/* Order Summary */}
        <Col lg={4}>
          <Card className="shadow-sm border-0 position-sticky" style={{ top: '100px' }}>
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span className="fw-bold">${state.total.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Fee:</span>
                <span className="fw-bold">
                  {state.total >= 25 ? (
                    <span className="text-success">FREE</span>
                  ) : (
                    '$3.99'
                  )}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (8.25%):</span>
                <span className="fw-bold">
                  ${(state.total * 0.0825).toFixed(2)}
                </span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <span className="fw-bold fs-5">Total:</span>
                <span className="fw-bold fs-5 text-primary">
                  ${(state.total + (state.total >= 25 ? 0 : 3.99) + state.total * 0.0825).toFixed(2)}
                </span>
              </div>

              {state.total < 25 && (
                <Alert variant="info" className="small">
                  Add ${(25 - state.total).toFixed(2)} more for free delivery!
                </Alert>
              )}

              <div className="d-grid">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleCheckout}
                  className="d-flex align-items-center justify-content-center"
                >
                  Proceed to Checkout
                  <ArrowRight size={20} className="ms-2" />
                </Button>
              </div>

              {!isAuthenticated && (
                <div className="text-center mt-3">
                  <small className="text-muted">
                    Please <Link to="/login">sign in</Link> to continue
                  </small>
                </div>
              )}
            </Card.Body>
          </Card>

          {/* Delivery Info */}
          <Card className="shadow-sm border-0 mt-3">
            <Card.Body className="text-center">
              <h6 className="fw-bold mb-2">🚚 Delivery Information</h6>
              <small className="text-muted">
                Estimated delivery time: 30-45 minutes<br />
                Free delivery on orders over $25
              </small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
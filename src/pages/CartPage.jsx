import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useContext(CartContext);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const deliveryFee = total > 500 ? 0 : 50;
  const tax = Math.round(total * 0.18);
  const finalTotal = total + deliveryFee + tax;

  if (items.length === 0) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="text-center border-0 shadow-sm">
              <Card.Body className="py-5">
                <div className="mb-4">
                  <span className="display-1">🛒</span>
                </div>
                <Card.Title className="h2 mb-3">Your cart is empty</Card.Title>
                <Card.Text className="text-muted mb-4">
                  Looks like you haven't added any items to your cart yet.
                </Card.Text>
                <LinkContainer to="/menu">
                  <Button variant="primary" size="lg">
                    Browse Menu
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-5 fw-bold">Shopping Cart</h1>
            <Badge bg="primary" className="fs-6 px-3 py-2">
              {itemCount} item{itemCount !== 1 ? 's' : ''}
            </Badge>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Cart Items */}
        <Col lg={8} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Order Items</h5>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={clearCart}
                  className="d-flex align-items-center gap-1"
                >
                  <Trash2 size={16} />
                  Clear Cart
                </Button>
              </div>
            </Card.Header>
            <ListGroup variant="flush">
              {items.map((item) => (
                <ListGroup.Item key={item.id} className="p-3">
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img
                        src={item.image || 'https://via.placeholder.com/100x80?text=Food'}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ height: '80px', objectFit: 'cover', width: '100%' }}
                      />
                    </Col>
                    <Col md={4}>
                      <div>
                        <h6 className="mb-1">{item.name}</h6>
                        <Badge bg={item.type === 'veg' ? 'success' : 'danger'} className="mb-2">
                          {item.type === 'veg' ? '🥬 VEG' : '🍖 NON-VEG'}
                        </Badge>
                        <div className="text-muted small">
                          {item.category && `Category: ${item.category}`}
                        </div>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="fw-bold text-success">
                        ₹{item.price}
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="d-flex align-items-center border rounded">
                        <Button
                          variant="link"
                          size="sm"
                          className="border-0 p-2"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <Minus size={16} />
                        </Button>
                        <span className="px-2 fw-bold">{item.quantity}</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="border-0 p-2"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                    </Col>
                    <Col md={2} className="text-end">
                      <div className="fw-bold">₹{item.price * item.quantity}</div>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="mt-2"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>

          <div className="mt-3">
            <LinkContainer to="/menu">
              <Button variant="outline-primary">
                ← Continue Shopping
              </Button>
            </LinkContainer>
          </div>
        </Col>

        {/* Order Summary */}
        <Col lg={4}>
          <Card className="shadow-sm position-sticky" style={{ top: '100px' }}>
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal ({itemCount} items)</span>
                <span>₹{total}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Fee</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-success">FREE</span>
                  ) : (
                    `₹${deliveryFee}`
                  )}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (18%)</span>
                <span>₹{tax}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>

              {total < 500 && (
                <Alert variant="info" className="small mb-3">
                  Add ₹{500 - total} more to get FREE delivery!
                </Alert>
              )}

              <LinkContainer to="/checkout">
                <Button variant="success" size="lg" className="w-100 mb-3">
                  Proceed to Checkout
                </Button>
              </LinkContainer>

              <div className="text-center small text-muted">
                <div className="mb-2">🚚 Delivery in 30-45 minutes</div>
                <div>💳 Secure payment options available</div>
              </div>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mt-3">
            <Card.Body>
              <h6 className="text-success">🎉 Available Offers</h6>
              <div className="small">
                <div className="mb-1">• Get 20% off on orders above ₹500</div>
                <div className="mb-1">• Free delivery on first order</div>
                <div>• Use code SAVE20 at checkout</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
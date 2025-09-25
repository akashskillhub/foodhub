import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, MapPin, Clock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

interface CheckoutFormData {
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  paymentMethod: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardName?: string;
  specialInstructions?: string;
}

const checkoutSchema = yup.object().shape({
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  zipCode: yup.string().required('ZIP code is required'),
  phone: yup.string().required('Phone number is required'),
  paymentMethod: yup.string().required('Payment method is required'),
  cardNumber: yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('Card number is required'),
    otherwise: (schema) => schema.optional()
  }),
  expiryDate: yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('Expiry date is required'),
    otherwise: (schema) => schema.optional()
  }),
  cvv: yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('CVV is required'),
    otherwise: (schema) => schema.optional()
  }),
  cardName: yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('Cardholder name is required'),
    otherwise: (schema) => schema.optional()
  }),
});

const Checkout: React.FC = () => {
  const { state, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      address: user?.address || '',
      phone: user?.phone || '',
      paymentMethod: 'card'
    }
  });

  const paymentMethod = watch('paymentMethod');
  const subtotal = state.total;
  const deliveryFee = subtotal >= 25 ? 0 : 3.99;
  const tax = subtotal * 0.0825;
  const total = subtotal + deliveryFee + tax;

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate order number
      const orderNumber = `ORD-${Date.now()}`;

      // Clear cart
      clearCart();

      // Show success message
      toast.success(`Order placed successfully! Order #${orderNumber}`);

      // Redirect to success page or orders
      navigate('/order-success', {
        state: { orderNumber, total: total.toFixed(2) }
      });
    } catch (error) {
      toast.error('Failed to process payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>Your cart is empty</h2>
          <Button variant="primary" onClick={() => navigate('/menu')}>
            Continue Shopping
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="display-6 fw-bold mb-4">Checkout</h1>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          {/* Checkout Form */}
          <Col lg={7}>
            {/* Delivery Information */}
            <Card className="shadow-sm border-0 mb-4">
              <Card.Header className="bg-light">
                <h5 className="mb-0 d-flex align-items-center">
                  <MapPin size={20} className="me-2" />
                  Delivery Information
                </h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group>
                      <Form.Label>Street Address *</Form.Label>
                      <Form.Control
                        type="text"
                        {...register('address')}
                        isInvalid={!!errors.address}
                        placeholder="123 Main Street"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.address?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={8} className="mb-3">
                    <Form.Group>
                      <Form.Label>City *</Form.Label>
                      <Form.Control
                        type="text"
                        {...register('city')}
                        isInvalid={!!errors.city}
                        placeholder="City"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.city?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group>
                      <Form.Label>ZIP Code *</Form.Label>
                      <Form.Control
                        type="text"
                        {...register('zipCode')}
                        isInvalid={!!errors.zipCode}
                        placeholder="12345"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.zipCode?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mb-3">
                    <Form.Group>
                      <Form.Label>Phone Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        {...register('phone')}
                        isInvalid={!!errors.phone}
                        placeholder="(555) 123-4567"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Payment Information */}
            <Card className="shadow-sm border-0 mb-4">
              <Card.Header className="bg-light">
                <h5 className="mb-0 d-flex align-items-center">
                  <CreditCard size={20} className="me-2" />
                  Payment Information
                </h5>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Payment Method *</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      id="card"
                      label="Credit/Debit Card"
                      value="card"
                      {...register('paymentMethod')}
                      defaultChecked
                    />
                    <Form.Check
                      type="radio"
                      id="cash"
                      label="Cash on Delivery"
                      value="cash"
                      {...register('paymentMethod')}
                    />
                  </div>
                </Form.Group>

                {paymentMethod === 'card' && (
                  <>
                    <Row>
                      <Col md={12} className="mb-3">
                        <Form.Group>
                          <Form.Label>Cardholder Name *</Form.Label>
                          <Form.Control
                            type="text"
                            {...register('cardName')}
                            isInvalid={!!errors.cardName}
                            placeholder="John Doe"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.cardName?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={12} className="mb-3">
                        <Form.Group>
                          <Form.Label>Card Number *</Form.Label>
                          <Form.Control
                            type="text"
                            {...register('cardNumber')}
                            isInvalid={!!errors.cardNumber}
                            placeholder="1234 5678 9012 3456"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.cardNumber?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Expiry Date *</Form.Label>
                          <Form.Control
                            type="text"
                            {...register('expiryDate')}
                            isInvalid={!!errors.expiryDate}
                            placeholder="MM/YY"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.expiryDate?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>CVV *</Form.Label>
                          <Form.Control
                            type="text"
                            {...register('cvv')}
                            isInvalid={!!errors.cvv}
                            placeholder="123"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.cvv?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                  </>
                )}
              </Card.Body>
            </Card>

            {/* Special Instructions */}
            <Card className="shadow-sm border-0 mb-4">
              <Card.Header className="bg-light">
                <h5 className="mb-0">Special Instructions</h5>
              </Card.Header>
              <Card.Body>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    {...register('specialInstructions')}
                    placeholder="Any special delivery instructions? (e.g., ring doorbell, leave at door)"
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          {/* Order Summary */}
          <Col lg={5}>
            <Card className="shadow-sm border-0 position-sticky" style={{ top: '100px' }}>
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">Order Summary</h5>
              </Card.Header>
              <Card.Body>
                {/* Order Items */}
                <ListGroup variant="flush" className="mb-3">
                  {state.items.map((item) => (
                    <ListGroup.Item key={item.id} className="px-0">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className="mb-0">{item.name}</h6>
                          <small className="text-muted">Qty: {item.quantity}</small>
                        </div>
                        <span className="fw-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                {/* Pricing Summary */}
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span className="fw-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Fee:</span>
                  <span className="fw-bold">
                    {deliveryFee === 0 ? (
                      <span className="text-success">FREE</span>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Tax:</span>
                  <span className="fw-bold">${tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-bold fs-5">Total:</span>
                  <span className="fw-bold fs-5 text-primary">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Estimated Delivery Time */}
                <Alert variant="info" className="mb-3">
                  <Clock size={16} className="me-2" />
                  Estimated delivery: 30-45 minutes
                </Alert>

                {/* Place Order Button */}
                <div className="d-grid">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Processing...
                      </>
                    ) : (
                      `Place Order - $${total.toFixed(2)}`
                    )}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Checkout;
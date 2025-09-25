import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Mail, Lock, User, UserPlus } from 'lucide-react';
import { UserContext } from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await signup(formData);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
    setIsLoading(false);
  };

  return (
    <Container className="py-5" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5">
              {/* Header */}
              <div className="text-center mb-4">
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
                  <UserPlus size={40} style={{ color: 'white' }} />
                </div>
                <h2 className="fw-bold mb-2">Join FoodHub!</h2>
                <p className="text-muted">Create your account and start ordering</p>
              </div>

              {error && (
                <Alert variant="danger" className="text-center">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Full Name</Form.Label>
                  <div className="position-relative">
                    <User
                      size={18}
                      className="position-absolute text-muted"
                      style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }}
                    />
                    <Form.Control
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      style={{ paddingLeft: '40px' }}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Email Address</Form.Label>
                  <div className="position-relative">
                    <Mail
                      size={18}
                      className="position-absolute text-muted"
                      style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }}
                    />
                    <Form.Control
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      style={{ paddingLeft: '40px' }}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Password</Form.Label>
                  <div className="position-relative">
                    <Lock
                      size={18}
                      className="position-absolute text-muted"
                      style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }}
                    />
                    <Form.Control
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Create a strong password"
                      style={{ paddingLeft: '40px' }}
                    />
                  </div>
                  <Form.Text className="text-muted">
                    Password should be at least 8 characters long
                  </Form.Text>
                </Form.Group>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-100 mb-3"
                  style={{ backgroundColor: '#fc8019', borderColor: '#fc8019', padding: '12px' }}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </Form>

              <div className="text-center">
                <p className="text-muted">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    style={{ color: '#fc8019', textDecoration: 'none', fontWeight: 'bold' }}
                  >
                    Sign in here
                  </Link>
                </p>
              </div>

              {/* Benefits */}
              <Card className="bg-light border-0 mt-4">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-2">
                    <UserPlus size={16} style={{ color: '#fc8019', marginRight: '8px' }} />
                    <strong style={{ color: '#fc8019' }}>Why Join FoodHub?</strong>
                  </div>
                  <ul className="text-muted small mb-0" style={{ lineHeight: '1.5', paddingLeft: '20px' }}>
                    <li>Fast delivery in 30 minutes</li>
                    <li>Exclusive deals and discounts</li>
                    <li>Track your orders in real-time</li>
                    <li>Save your favorite restaurants</li>
                  </ul>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
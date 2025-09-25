import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Mail, Lock, User } from 'lucide-react';
import { UserContext } from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await login(formData.email, formData.password);
    if (result.success) {
      navigate('/');
    } else {
      setError('Invalid credentials. Try user@example.com / password123');
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
                  <User size={40} style={{ color: 'white' }} />
                </div>
                <h2 className="fw-bold mb-2">Welcome Back!</h2>
                <p className="text-muted">Sign in to your FoodHub account</p>
              </div>

              {error && (
                <Alert variant="danger" className="text-center">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
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
                      placeholder="user@example.com"
                      style={{ paddingLeft: '40px' }}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
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
                      placeholder="password123"
                      style={{ paddingLeft: '40px' }}
                    />
                  </div>
                </Form.Group>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-100 mb-3"
                  style={{ backgroundColor: '#fc8019', borderColor: '#fc8019', padding: '12px' }}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </Form>

              <div className="text-center">
                <p className="text-muted">
                  Don't have an account?{' '}
                  <Link
                    to="/signup"
                    style={{ color: '#fc8019', textDecoration: 'none', fontWeight: 'bold' }}
                  >
                    Sign up here
                  </Link>
                </p>
              </div>

              {/* Demo Accounts */}
              <Card className="bg-light border-0 mt-4">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-2">
                    <User size={16} style={{ color: '#fc8019', marginRight: '8px' }} />
                    <strong style={{ color: '#fc8019' }}>Demo Accounts:</strong>
                  </div>
                  <div className="text-muted small" style={{ lineHeight: '1.5' }}>
                    <strong>User:</strong> user@example.com / password123<br />
                    <strong>Admin:</strong> admin@example.com / admin123
                  </div>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
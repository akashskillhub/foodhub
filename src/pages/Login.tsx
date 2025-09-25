import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Tab, Tabs } from 'react-bootstrap';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { useAuth, RegisterData } from '../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData extends RegisterData {
  confirmPassword: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  phone: yup.string().optional(),
});

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/';

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema)
  });

  const {
    register: registerSignup,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors }
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema)
  });

  const onLoginSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const success = await login(data.email, data.password);
      if (success) {
        toast.success('Login successful!');
        navigate(redirectTo === 'checkout' ? '/checkout' : '/');
      } else {
        toast.error('Invalid credentials. Try user@example.com / password123 or admin@example.com / password123');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const onRegisterSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      const success = await register({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone
      });

      if (success) {
        toast.success('Account created successfully!');
        navigate(redirectTo === 'checkout' ? '/checkout' : '/');
      } else {
        toast.error('Email already exists. Please use a different email.');
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <Card className="shadow border-0">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h1 className="h2 fw-bold">Welcome to FoodHub 🍕</h1>
                <p className="text-muted">Sign in to your account or create a new one</p>
              </div>

              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k || 'login')}
                className="mb-4"
                fill
              >
                <Tab eventKey="login" title="Sign In">
                  <Form onSubmit={handleLoginSubmit(onLoginSubmit)}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type="email"
                          {...registerLogin('email')}
                          isInvalid={!!loginErrors.email}
                          placeholder="Enter your email"
                          className="pe-5"
                        />
                        <Mail className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" size={18} />
                        <Form.Control.Feedback type="invalid">
                          {loginErrors.email?.message}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          {...registerLogin('password')}
                          isInvalid={!!loginErrors.password}
                          placeholder="Enter your password"
                          className="pe-5"
                        />
                        <Button
                          variant="link"
                          className="position-absolute top-50 end-0 translate-middle-y p-0 me-3 text-muted"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </Button>
                        <Form.Control.Feedback type="invalid">
                          {loginErrors.password?.message}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    <Alert variant="info" className="small">
                      <strong>Demo Credentials:</strong><br />
                      User: user@example.com / password123<br />
                      Admin: admin@example.com / password123
                    </Alert>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Form.Check
                        type="checkbox"
                        id="remember"
                        label="Remember me"
                      />
                      <Link to="/forgot-password" className="text-decoration-none">
                        Forgot Password?
                      </Link>
                    </div>

                    <div className="d-grid">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" />
                            Signing In...
                          </>
                        ) : (
                          'Sign In'
                        )}
                      </Button>
                    </div>
                  </Form>
                </Tab>

                <Tab eventKey="register" title="Sign Up">
                  <Form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type="text"
                          {...registerSignup('name')}
                          isInvalid={!!registerErrors.name}
                          placeholder="Enter your full name"
                          className="pe-5"
                        />
                        <User className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" size={18} />
                        <Form.Control.Feedback type="invalid">
                          {registerErrors.name?.message}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type="email"
                          {...registerSignup('email')}
                          isInvalid={!!registerErrors.email}
                          placeholder="Enter your email"
                          className="pe-5"
                        />
                        <Mail className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" size={18} />
                        <Form.Control.Feedback type="invalid">
                          {registerErrors.email?.message}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number (Optional)</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type="tel"
                          {...registerSignup('phone')}
                          isInvalid={!!registerErrors.phone}
                          placeholder="Enter your phone number"
                          className="pe-5"
                        />
                        <Phone className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" size={18} />
                        <Form.Control.Feedback type="invalid">
                          {registerErrors.phone?.message}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          {...registerSignup('password')}
                          isInvalid={!!registerErrors.password}
                          placeholder="Enter your password"
                          className="pe-5"
                        />
                        <Button
                          variant="link"
                          className="position-absolute top-50 end-0 translate-middle-y p-0 me-3 text-muted"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </Button>
                        <Form.Control.Feedback type="invalid">
                          {registerErrors.password?.message}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showConfirmPassword ? 'text' : 'password'}
                          {...registerSignup('confirmPassword')}
                          isInvalid={!!registerErrors.confirmPassword}
                          placeholder="Confirm your password"
                          className="pe-5"
                        />
                        <Button
                          variant="link"
                          className="position-absolute top-50 end-0 translate-middle-y p-0 me-3 text-muted"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </Button>
                        <Form.Control.Feedback type="invalid">
                          {registerErrors.confirmPassword?.message}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id="terms"
                        label={
                          <>
                            I agree to the{' '}
                            <Link to="/terms" className="text-decoration-none">
                              Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link to="/privacy" className="text-decoration-none">
                              Privacy Policy
                            </Link>
                          </>
                        }
                        required
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button
                        type="submit"
                        variant="success"
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" />
                            Creating Account...
                          </>
                        ) : (
                          'Create Account'
                        )}
                      </Button>
                    </div>
                  </Form>
                </Tab>
              </Tabs>

              <div className="text-center mt-4">
                <small className="text-muted">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const MyAccountPage = () => {
  const { user, isAuthenticated, logout } = useUser();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div style={{ backgroundColor: '#f8f9fc', minHeight: '100vh', paddingTop: '100px' }}>
        <Container>
          <div className="text-center py-5">
            <h2 style={{ color: '#2d3436', marginBottom: '20px' }}>Please Login</h2>
            <p style={{ color: '#636e72', marginBottom: '30px' }}>
              You need to be logged in to access your account
            </p>
            <Button
              onClick={() => navigate('/login')}
              style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 24px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              Go to Login
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f8f9fc', minHeight: '100vh', paddingTop: '100px' }}>
      <Container>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
          borderRadius: '20px',
          padding: '40px 30px',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
            👤 My Account
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '0' }}>
            Welcome back, {user?.name || 'User'}!
          </p>
        </div>

        <Row>
          {/* Profile Information */}
          <Col lg={8} className="mb-4">
            <Card style={{ border: 'none', borderRadius: '20px', padding: '20px' }}>
              <Card.Body>
                <h4 style={{ color: '#2d3436', marginBottom: '25px', fontWeight: 'bold' }}>
                  📋 Profile Information
                </h4>

                <Row>
                  <Col md={6} className="mb-3">
                    <div style={{ padding: '15px', backgroundColor: '#f8f9fc', borderRadius: '12px' }}>
                      <div style={{ fontSize: '14px', color: '#636e72', marginBottom: '5px' }}>Full Name</div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d3436' }}>
                        {user?.name || 'John Doe'}
                      </div>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div style={{ padding: '15px', backgroundColor: '#f8f9fc', borderRadius: '12px' }}>
                      <div style={{ fontSize: '14px', color: '#636e72', marginBottom: '5px' }}>Email Address</div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d3436' }}>
                        {user?.email || 'john.doe@example.com'}
                      </div>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div style={{ padding: '15px', backgroundColor: '#f8f9fc', borderRadius: '12px' }}>
                      <div style={{ fontSize: '14px', color: '#636e72', marginBottom: '5px' }}>Phone Number</div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d3436' }}>
                        {user?.phone || '+91 98765 43210'}
                      </div>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div style={{ padding: '15px', backgroundColor: '#f8f9fc', borderRadius: '12px' }}>
                      <div style={{ fontSize: '14px', color: '#636e72', marginBottom: '5px' }}>Member Since</div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d3436' }}>
                        January 2024
                      </div>
                    </div>
                  </Col>
                </Row>

                <div style={{ marginTop: '25px' }}>
                  <h5 style={{ color: '#2d3436', marginBottom: '15px' }}>📍 Default Address</h5>
                  <div style={{ padding: '15px', backgroundColor: '#f8f9fc', borderRadius: '12px' }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d3436', marginBottom: '5px' }}>
                      Home
                    </div>
                    <div style={{ fontSize: '14px', color: '#636e72' }}>
                      123 Main Street, Koramangala, Bengaluru, Karnataka - 560034
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Quick Actions */}
          <Col lg={4}>
            <Card style={{ border: 'none', borderRadius: '20px', padding: '20px' }}>
              <Card.Body>
                <h4 style={{ color: '#2d3436', marginBottom: '20px', fontWeight: 'bold' }}>
                  ⚡ Quick Actions
                </h4>

                <ListGroup variant="flush">
                  <ListGroup.Item
                    action
                    onClick={() => navigate('/orders')}
                    style={{ border: 'none', borderRadius: '12px', marginBottom: '10px', padding: '15px' }}
                  >
                    <div className="d-flex align-items-center">
                      <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📦</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#2d3436' }}>Order History</div>
                        <div style={{ fontSize: '14px', color: '#636e72' }}>View your past orders</div>
                      </div>
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    onClick={() => navigate('/favourites')}
                    style={{ border: 'none', borderRadius: '12px', marginBottom: '10px', padding: '15px' }}
                  >
                    <div className="d-flex align-items-center">
                      <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>❤️</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#2d3436' }}>Favourites</div>
                        <div style={{ fontSize: '14px', color: '#636e72' }}>Your favorite dishes</div>
                      </div>
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    style={{ border: 'none', borderRadius: '12px', marginBottom: '10px', padding: '15px' }}
                  >
                    <div className="d-flex align-items-center">
                      <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📍</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#2d3436' }}>Addresses</div>
                        <div style={{ fontSize: '14px', color: '#636e72' }}>Manage delivery addresses</div>
                      </div>
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    style={{ border: 'none', borderRadius: '12px', marginBottom: '20px', padding: '15px' }}
                  >
                    <div className="d-flex align-items-center">
                      <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>⚙️</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#2d3436' }}>Settings</div>
                        <div style={{ fontSize: '14px', color: '#636e72' }}>Account preferences</div>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>

                <Button
                  onClick={logout}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: '2px solid #dc3545',
                    color: '#dc3545',
                    borderRadius: '12px',
                    padding: '12px',
                    fontWeight: '600'
                  }}
                >
                  🚪 Logout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Account Stats */}
        <Row className="mt-4">
          <Col md={4} className="mb-3">
            <Card style={{ border: 'none', borderRadius: '20px', textAlign: 'center', padding: '20px' }}>
              <Card.Body>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📊</div>
                <h3 style={{ color: '#ff6b35', fontWeight: 'bold', marginBottom: '5px' }}>15</h3>
                <p style={{ color: '#636e72', marginBottom: '0' }}>Total Orders</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card style={{ border: 'none', borderRadius: '20px', textAlign: 'center', padding: '20px' }}>
              <Card.Body>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>💰</div>
                <h3 style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '5px' }}>₹2,450</h3>
                <p style={{ color: '#636e72', marginBottom: '0' }}>Total Spent</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card style={{ border: 'none', borderRadius: '20px', textAlign: 'center', padding: '20px' }}>
              <Card.Body>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>❤️</div>
                <h3 style={{ color: '#e74c3c', fontWeight: 'bold', marginBottom: '5px' }}>8</h3>
                <p style={{ color: '#636e72', marginBottom: '0' }}>Favorite Items</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyAccountPage;
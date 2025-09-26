import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OffersPage = () => {
  const navigate = useNavigate();

  const offers = [
    {
      id: 1,
      title: "20% OFF First Order",
      code: "FIRST20",
      description: "Get 20% discount on your first order. Valid on orders above ₹299",
      discount: "20% OFF",
      minOrder: 299,
      validUntil: "31st Dec 2024",
      type: "new-user",
      color: "#28a745"
    },
    {
      id: 2,
      title: "Free Delivery",
      code: "FREEDEL25",
      description: "Free delivery on orders above ₹499. No delivery charges!",
      discount: "FREE DELIVERY",
      minOrder: 499,
      validUntil: "31st Dec 2024",
      type: "delivery",
      color: "#17a2b8"
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free",
      code: "BOGO50",
      description: "Buy any pizza and get another pizza of equal or lesser value absolutely free!",
      discount: "BOGO",
      minOrder: 350,
      validUntil: "25th Dec 2024",
      type: "special",
      color: "#ff6b35"
    },
    {
      id: 4,
      title: "Weekend Special",
      code: "WEEKEND30",
      description: "30% off on all orders during weekends. Valid Saturday & Sunday only",
      discount: "30% OFF",
      minOrder: 250,
      validUntil: "Every Weekend",
      type: "weekend",
      color: "#dc3545"
    },
    {
      id: 5,
      title: "Student Discount",
      code: "STUDENT15",
      description: "Special 15% discount for students with valid student ID",
      discount: "15% OFF",
      minOrder: 200,
      validUntil: "31st Dec 2024",
      type: "student",
      color: "#6f42c1"
    },
    {
      id: 6,
      title: "Family Feast",
      code: "FAMILY40",
      description: "40% off on family meals. Perfect for orders above ₹800",
      discount: "40% OFF",
      minOrder: 800,
      validUntil: "31st Dec 2024",
      type: "family",
      color: "#fd7e14"
    }
  ];

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Coupon code ${code} copied to clipboard!`);
  };

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
            🎉 Special Offers
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '0' }}>
            Save more on your favorite dishes with these amazing deals!
          </p>
        </div>

        {/* Stats Card */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '20px',
          marginBottom: '30px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <Row>
            <Col md={4} className="text-center mb-3">
              <h3 style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '5px' }}>{offers.length}</h3>
              <p style={{ color: '#636e72', marginBottom: '0' }}>Active Offers</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <h3 style={{ color: '#ff6b35', fontWeight: 'bold', marginBottom: '5px' }}>40%</h3>
              <p style={{ color: '#636e72', marginBottom: '0' }}>Max Discount</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <h3 style={{ color: '#17a2b8', fontWeight: 'bold', marginBottom: '5px' }}>Free</h3>
              <p style={{ color: '#636e72', marginBottom: '0' }}>Delivery Available</p>
            </Col>
          </Row>
        </div>

        {/* Offers Grid */}
        <Row>
          {offers.map((offer) => (
            <Col lg={4} md={6} key={offer.id} className="mb-4">
              <Card style={{
                border: 'none',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '100%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                position: 'relative'
              }}>
                {/* Discount Badge */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: offer.color,
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 2
                }}>
                  {offer.discount}
                </div>

                <div style={{
                  background: `linear-gradient(135deg, ${offer.color}20 0%, ${offer.color}10 100%)`,
                  padding: '30px 20px 20px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
                    {offer.type === 'new-user' && '🎁'}
                    {offer.type === 'delivery' && '🚚'}
                    {offer.type === 'special' && '🍕'}
                    {offer.type === 'weekend' && '🎉'}
                    {offer.type === 'student' && '🎓'}
                    {offer.type === 'family' && '👨‍👩‍👧‍👦'}
                  </div>
                  <h5 style={{ fontWeight: 'bold', color: '#2d3436', marginBottom: '10px' }}>
                    {offer.title}
                  </h5>
                </div>

                <Card.Body style={{ padding: '20px' }}>
                  <p style={{ color: '#636e72', fontSize: '14px', marginBottom: '15px' }}>
                    {offer.description}
                  </p>

                  <div className="mb-3">
                    <div style={{ fontSize: '12px', color: '#636e72', marginBottom: '5px' }}>
                      Min. Order: ₹{offer.minOrder}
                    </div>
                    <div style={{ fontSize: '12px', color: '#636e72' }}>
                      Valid till: {offer.validUntil}
                    </div>
                  </div>

                  {/* Coupon Code */}
                  <div style={{
                    background: '#f8f9fc',
                    border: '2px dashed #ff6b35',
                    borderRadius: '12px',
                    padding: '15px',
                    textAlign: 'center',
                    marginBottom: '15px'
                  }}>
                    <div style={{ fontSize: '12px', color: '#636e72', marginBottom: '5px' }}>
                      Coupon Code
                    </div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#ff6b35',
                      letterSpacing: '1px'
                    }}>
                      {offer.code}
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => copyCode(offer.code)}
                      style={{
                        background: 'transparent',
                        border: '2px solid #0984e3',
                        color: '#0984e3',
                        borderRadius: '12px',
                        padding: '8px 16px',
                        fontWeight: '600',
                        flex: '1'
                      }}
                    >
                      Copy Code
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => navigate('/menu')}
                      style={{
                        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                        border: 'none',
                        color: 'white',
                        borderRadius: '12px',
                        padding: '8px 16px',
                        fontWeight: '600',
                        flex: '1'
                      }}
                    >
                      Use Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* How to Use Section */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '30px',
          marginTop: '30px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h4 style={{ color: '#2d3436', marginBottom: '20px', fontWeight: 'bold' }}>
            📝 How to Use Offers
          </h4>
          <Row>
            <Col md={4} className="mb-3">
              <div className="d-flex align-items-center">
                <div style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  1
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#2d3436' }}>Choose Your Offer</div>
                  <div style={{ fontSize: '14px', color: '#636e72' }}>Select from available offers</div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className="d-flex align-items-center">
                <div style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  2
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#2d3436' }}>Copy Coupon Code</div>
                  <div style={{ fontSize: '14px', color: '#636e72' }}>Click "Copy Code" button</div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className="d-flex align-items-center">
                <div style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  3
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#2d3436' }}>Apply at Checkout</div>
                  <div style={{ fontSize: '14px', color: '#636e72' }}>Enter code and enjoy savings</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default OffersPage;
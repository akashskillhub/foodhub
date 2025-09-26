import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const FavouritesPage = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { isAuthenticated } = useUser();

  // Sample favourite items (in a real app, this would come from context/API)
  const [favouriteItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 320,
      type: "veg",
      rating: 4.7,
      deliveryTime: 25,
      category: "mains",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Classic pizza with fresh mozzarella, tomato sauce, and basil",
      dateAdded: "2024-01-15"
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      price: 150,
      type: "veg",
      rating: 4.8,
      deliveryTime: 12,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Warm chocolate cake with molten center and vanilla ice cream",
      dateAdded: "2024-01-12"
    },
    {
      id: 5,
      name: "Butter Chicken",
      price: 380,
      type: "nonveg",
      rating: 4.8,
      deliveryTime: 30,
      category: "mains",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Tender chicken in rich, creamy tomato curry",
      dateAdded: "2024-01-10"
    }
  ]);

  const [removedItems, setRemovedItems] = useState([]);

  const handleAddToCart = (item) => {
    addItem(item);
  };

  const handleRemoveFromFavourites = (itemId) => {
    setRemovedItems([...removedItems, itemId]);
  };

  const displayedItems = favouriteItems.filter(item => !removedItems.includes(item.id));

  if (!isAuthenticated) {
    return (
      <div style={{ backgroundColor: '#f8f9fc', minHeight: '100vh', paddingTop: '100px' }}>
        <Container>
          <div className="text-center py-5">
            <h2 style={{ color: '#2d3436', marginBottom: '20px' }}>Please Login</h2>
            <p style={{ color: '#636e72', marginBottom: '30px' }}>
              You need to be logged in to access your favourites
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
            ❤️ My Favourites
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '0' }}>
            Your favorite dishes, all in one place
          </p>
        </div>

        {displayedItems.length > 0 ? (
          <>
            {/* Stats */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '20px',
              marginBottom: '30px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 style={{ color: '#2d3436', marginBottom: '5px' }}>
                    📊 You have {displayedItems.length} favorite item{displayedItems.length !== 1 ? 's' : ''}
                  </h5>
                  <p style={{ color: '#636e72', marginBottom: '0', fontSize: '14px' }}>
                    Ready to order anytime!
                  </p>
                </div>
                <Button
                  onClick={() => navigate('/menu')}
                  style={{
                    background: 'transparent',
                    border: '2px solid #0984e3',
                    color: '#0984e3',
                    borderRadius: '12px',
                    padding: '8px 16px',
                    fontWeight: '600'
                  }}
                >
                  🍽️ Browse Menu
                </Button>
              </div>
            </div>

            {/* Favourite Items */}
            <Row>
              {displayedItems.map((item) => (
                <Col lg={4} md={6} key={item.id} className="mb-4">
                  <Card style={{
                    border: 'none',
                    borderRadius: '25px',
                    overflow: 'hidden',
                    height: '100%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}>
                    {/* Remove from Favourites Button */}
                    <Button
                      onClick={() => handleRemoveFromFavourites(item.id)}
                      style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        zIndex: 2,
                        background: 'rgba(255,255,255,0.9)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px'
                      }}
                      title="Remove from favourites"
                    >
                      💔
                    </Button>

                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{ height: '200px', objectFit: 'cover' }}
                      alt={item.name}
                    />

                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Card.Title className="h6 mb-0">{item.name}</Card.Title>
                        <Badge bg={item.type === 'veg' ? 'success' : 'danger'}>
                          {item.type === 'veg' ? '🥬 VEG' : '🍖 NON-VEG'}
                        </Badge>
                      </div>

                      <Card.Text className="text-muted small mb-2 flex-grow-1">
                        {item.description}
                      </Card.Text>

                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                          <span className="fw-bold text-success fs-5">₹{item.price}</span>
                          <div className="text-muted small">For 1</div>
                        </div>
                        <div className="text-end">
                          <div className="d-flex align-items-center mb-1">
                            <span className="text-warning me-1">★</span>
                            <span className="small fw-bold">{item.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="text-muted small">
                          🚚 {item.deliveryTime} mins
                        </div>
                        <div className="text-muted small">
                          Added {new Date(item.dateAdded).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="d-flex gap-2 mt-auto">
                        <LinkContainer to={`/dish/${item.id}`}>
                          <Button
                            size="sm"
                            className="flex-grow-1"
                            style={{
                              backgroundColor: '#ff6b35',
                              border: 'none',
                              color: 'white',
                              fontWeight: '600',
                              borderRadius: '12px'
                            }}
                          >
                            View Details
                          </Button>
                        </LinkContainer>

                        <Button
                          size="sm"
                          className="flex-grow-1"
                          onClick={() => handleAddToCart(item)}
                          style={{
                            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                            border: 'none',
                            color: 'white',
                            fontWeight: '600',
                            borderRadius: '12px'
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-5">
            <Card style={{ border: 'none', borderRadius: '20px', textAlign: 'center', padding: '60px 20px' }}>
              <Card.Body>
                <div className="mb-4">
                  <span style={{ fontSize: '4rem' }}>💔</span>
                </div>
                <Card.Title style={{ fontSize: '2rem', color: '#2d3436', marginBottom: '16px' }}>
                  No Favourites Yet
                </Card.Title>
                <Card.Text style={{ color: '#636e72', fontSize: '1.1rem', marginBottom: '30px' }}>
                  Start adding dishes to your favourites by clicking the ❤️ icon on any dish
                </Card.Text>
                <Button
                  onClick={() => navigate('/menu')}
                  style={{
                    background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontWeight: '600'
                  }}
                >
                  🍽️ Browse Menu
                </Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
};

export default FavouritesPage;
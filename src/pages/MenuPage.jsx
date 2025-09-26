import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from '../context/CartContext';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addItem } = useCart();

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 320,
      type: "veg",
      rating: 4.7,
      deliveryTime: 25,
      category: "mains",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Classic pizza with fresh mozzarella, tomato sauce, and basil"
    },
    {
      id: 2,
      name: "Caesar Salad",
      price: 180,
      type: "veg",
      rating: 4.2,
      deliveryTime: 15,
      category: "starters",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Fresh romaine lettuce with Caesar dressing and croutons"
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
      description: "Warm chocolate cake with molten center and vanilla ice cream"
    },
    {
      id: 4,
      name: "Fresh Orange Juice",
      price: 90,
      type: "veg",
      rating: 4.3,
      deliveryTime: 5,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Freshly squeezed orange juice packed with vitamin C"
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
      description: "Tender chicken in rich, creamy tomato curry"
    },
    {
      id: 6,
      name: "Chicken Wings",
      price: 280,
      type: "nonveg",
      rating: 4.5,
      deliveryTime: 20,
      category: "starters",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Crispy chicken wings with BBQ sauce and celery sticks"
    },
    {
      id: 7,
      name: "Mutton Biryani",
      price: 450,
      type: "nonveg",
      rating: 4.9,
      deliveryTime: 45,
      category: "mains",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Premium Hyderabadi-style mutton biryani with saffron, tender meat pieces, and aromatic long grain basmati rice"
    },
    {
      id: 8,
      name: "Fish Curry",
      price: 350,
      type: "nonveg",
      rating: 4.6,
      deliveryTime: 35,
      category: "mains",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Authentic South Indian fish curry cooked in rich coconut gravy with curry leaves and traditional spices"
    },
    {
      id: 9,
      name: "Chicken Kebab",
      price: 220,
      type: "nonveg",
      rating: 4.4,
      deliveryTime: 25,
      category: "starters",
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Grilled chicken marinated in yogurt and spices"
    },
    {
      id: 10,
      name: "Beef Burger",
      price: 320,
      type: "nonveg",
      rating: 4.7,
      deliveryTime: 20,
      category: "mains",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Juicy beef patty with lettuce, tomato, and special sauce"
    }
  ];

  const categories = [
    { key: 'all', name: '🍽️ All Items' },
    { key: 'starters', name: '🥗 Starters' },
    { key: 'mains', name: '🍛 Mains' },
    { key: 'desserts', name: '🍰 Desserts' },
    { key: 'beverages', name: '🥤 Beverages' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    addItem(item);
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
            🍽️ Our Menu
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '0' }}>
            Fresh ingredients, delicious flavors
          </p>
        </div>

        {/* Category Chips */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-center flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  style={{
                    background: selectedCategory === category.key
                      ? 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'
                      : 'white',
                    border: '2px solid #ff6b35',
                    color: selectedCategory === category.key ? 'white' : '#ff6b35',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Menu Items */}
        <Row>
          {filteredItems.map((item) => (
            <Col lg={4} md={6} key={item.id} className="mb-4">
              <Card style={{
                border: 'none',
                borderRadius: '25px',
                overflow: 'hidden',
                height: '100%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}>
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
                        <span className="text-muted small ms-1">(50+)</span>
                      </div>
                      <div className="text-success small fw-bold">BESTSELLER</div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="text-muted small">
                      🚚 {item.deliveryTime} mins • Free delivery
                    </div>
                    <div className="text-muted small">
                      🔥 Trending
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
      </Container>
    </div>
  );
};

export default MenuPage;
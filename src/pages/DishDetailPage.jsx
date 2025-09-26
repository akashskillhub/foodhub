import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const DishDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Classic pizza with fresh mozzarella, tomato sauce, and basil",
      ingredients: ["Tomato Sauce", "Mozzarella", "Fresh Basil", "Olive Oil"],
      nutritionalInfo: { calories: 280, protein: 12, carbs: 35, fat: 10 }
    },
    {
      id: 2,
      name: "Caesar Salad",
      price: 180,
      type: "veg",
      rating: 4.2,
      deliveryTime: 15,
      category: "starters",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Fresh romaine lettuce with Caesar dressing and croutons",
      ingredients: ["Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan"],
      nutritionalInfo: { calories: 180, protein: 6, carbs: 12, fat: 14 }
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      price: 150,
      type: "veg",
      rating: 4.8,
      deliveryTime: 12,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Warm chocolate cake with molten center and vanilla ice cream",
      ingredients: ["Dark Chocolate", "Butter", "Eggs", "Flour", "Vanilla Ice Cream"],
      nutritionalInfo: { calories: 420, protein: 8, carbs: 45, fat: 22 }
    },
    {
      id: 4,
      name: "Fresh Orange Juice",
      price: 90,
      type: "veg",
      rating: 4.3,
      deliveryTime: 5,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Freshly squeezed orange juice packed with vitamin C",
      ingredients: ["Fresh Oranges"],
      nutritionalInfo: { calories: 110, protein: 2, carbs: 26, fat: 0 }
    },
    {
      id: 5,
      name: "Butter Chicken",
      price: 380,
      type: "nonveg",
      rating: 4.8,
      deliveryTime: 30,
      category: "mains",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Tender chicken in rich, creamy tomato curry",
      ingredients: ["Chicken", "Tomato Sauce", "Cream", "Butter", "Spices"],
      nutritionalInfo: { calories: 450, protein: 35, carbs: 12, fat: 28 }
    },
    {
      id: 6,
      name: "Chicken Wings",
      price: 280,
      type: "nonveg",
      rating: 4.5,
      deliveryTime: 20,
      category: "starters",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Crispy chicken wings with BBQ sauce and celery sticks",
      ingredients: ["Chicken Wings", "BBQ Sauce", "Celery", "Spices"],
      nutritionalInfo: { calories: 320, protein: 28, carbs: 8, fat: 22 }
    },
    {
      id: 7,
      name: "Mutton Biryani",
      price: 450,
      type: "nonveg",
      rating: 4.9,
      deliveryTime: 45,
      category: "mains",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Premium Hyderabadi-style mutton biryani with saffron, tender meat pieces, and aromatic long grain basmati rice",
      ingredients: ["Mutton", "Basmati Rice", "Saffron", "Onions", "Yogurt", "Mint", "Spices"],
      nutritionalInfo: { calories: 520, protein: 42, carbs: 45, fat: 18 }
    },
    {
      id: 8,
      name: "Fish Curry",
      price: 350,
      type: "nonveg",
      rating: 4.6,
      deliveryTime: 35,
      category: "mains",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Authentic South Indian fish curry cooked in rich coconut gravy with curry leaves and traditional spices",
      ingredients: ["Fish", "Coconut Milk", "Curry Leaves", "Mustard Seeds", "Turmeric", "Tamarind"],
      nutritionalInfo: { calories: 380, protein: 32, carbs: 15, fat: 20 }
    },
    {
      id: 9,
      name: "Chicken Kebab",
      price: 220,
      type: "nonveg",
      rating: 4.4,
      deliveryTime: 25,
      category: "starters",
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Grilled chicken marinated in yogurt and spices",
      ingredients: ["Chicken", "Yogurt", "Ginger", "Garlic", "Spices"],
      nutritionalInfo: { calories: 250, protein: 30, carbs: 5, fat: 12 }
    },
    {
      id: 10,
      name: "Beef Burger",
      price: 320,
      type: "nonveg",
      rating: 4.7,
      deliveryTime: 20,
      category: "mains",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      ingredients: ["Beef Patty", "Lettuce", "Tomato", "Onion", "Special Sauce", "Bun"],
      nutritionalInfo: { calories: 580, protein: 38, carbs: 42, fat: 28 }
    }
  ];

  const dish = menuItems.find(item => item.id === parseInt(id));

  if (!dish) {
    return (
      <div style={{ backgroundColor: '#f8f9fc', minHeight: '100vh', paddingTop: '100px' }}>
        <Container>
          <div className="text-center py-5">
            <h2>Dish not found</h2>
            <Button onClick={() => navigate('/menu')} style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              border: 'none',
              borderRadius: '12px',
              padding: '12px 24px'
            }}>
              Back to Menu
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(dish);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fc', minHeight: '100vh', paddingTop: '100px' }}>
      <Container>
        <Row>
          <Col lg={8} md={7} className="mb-4">
            <Card style={{ border: 'none', borderRadius: '25px', overflow: 'hidden' }}>
              <Card.Img
                variant="top"
                src={dish.image}
                style={{ height: '400px', objectFit: 'cover' }}
                alt={dish.name}
              />
            </Card>
          </Col>

          <Col lg={4} md={5}>
            <Card style={{
              border: 'none',
              borderRadius: '25px',
              padding: '30px',
              height: 'fit-content',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2d3436' }}>
                  {dish.name}
                </h2>
                <Badge bg={dish.type === 'veg' ? 'success' : 'danger'} style={{ fontSize: '12px' }}>
                  {dish.type === 'veg' ? '🥬 VEG' : '🍖 NON-VEG'}
                </Badge>
              </div>

              <p style={{ color: '#636e72', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                {dish.description}
              </p>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00b894' }}>
                  ₹{dish.price}
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center">
                    <span style={{ color: '#ffc107', fontSize: '18px' }}>★</span>
                    <span style={{ fontWeight: '600', marginLeft: '5px' }}>{dish.rating}</span>
                  </div>
                  <div style={{ color: '#636e72' }}>
                    🚚 {dish.deliveryTime} mins
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h5 style={{ fontWeight: 'bold', marginBottom: '15px', color: '#2d3436' }}>
                  🥘 Ingredients
                </h5>
                <div className="d-flex flex-wrap gap-2">
                  {dish.ingredients.map((ingredient, index) => (
                    <Badge
                      key={index}
                      bg="light"
                      text="dark"
                      style={{
                        fontSize: '13px',
                        padding: '8px 12px',
                        borderRadius: '15px',
                        fontWeight: 'normal'
                      }}
                    >
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h5 style={{ fontWeight: 'bold', marginBottom: '15px', color: '#2d3436' }}>
                  📊 Nutrition Info
                </h5>
                <Row>
                  <Col xs={6} className="mb-2">
                    <div style={{ fontSize: '14px', color: '#636e72' }}>🔥 Calories</div>
                    <div style={{ fontWeight: 'bold' }}>{dish.nutritionalInfo.calories}</div>
                  </Col>
                  <Col xs={6} className="mb-2">
                    <div style={{ fontSize: '14px', color: '#636e72' }}>💪 Protein</div>
                    <div style={{ fontWeight: 'bold' }}>{dish.nutritionalInfo.protein}g</div>
                  </Col>
                  <Col xs={6} className="mb-2">
                    <div style={{ fontSize: '14px', color: '#636e72' }}>🌾 Carbs</div>
                    <div style={{ fontWeight: 'bold' }}>{dish.nutritionalInfo.carbs}g</div>
                  </Col>
                  <Col xs={6} className="mb-2">
                    <div style={{ fontSize: '14px', color: '#636e72' }}>🥑 Fat</div>
                    <div style={{ fontWeight: 'bold' }}>{dish.nutritionalInfo.fat}g</div>
                  </Col>
                </Row>
              </div>

              <div className="d-flex gap-2">
                <Button
                  onClick={() => navigate('/menu')}
                  style={{
                    background: 'transparent',
                    border: '2px solid #0984e3',
                    color: '#0984e3',
                    borderRadius: '12px',
                    padding: '12px 20px',
                    fontWeight: '600',
                    flex: '1'
                  }}
                >
                  Back to Menu
                </Button>
                <Button
                  onClick={handleAddToCart}
                  style={{
                    background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                    border: 'none',
                    color: 'white',
                    borderRadius: '12px',
                    padding: '12px 20px',
                    fontWeight: '600',
                    flex: '2'
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DishDetailPage;
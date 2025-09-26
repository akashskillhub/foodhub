import React, { useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CartContext } from '../../context/CartContext';

/**
 * MenuItem Component
 * Reusable component for displaying individual menu items
 * Features:
 * - Product image and details
 * - Add to cart functionality
 * - Vegetarian/Non-vegetarian indicators
 * - Price and rating display
 */
function MenuItem({ item }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <Card className="h-100 shadow-sm" style={{ borderRadius: '25px', overflow: 'hidden' }}>
      <Card.Img
        variant="top"
        src={item.image || 'https://via.placeholder.com/300x200?text=Food+Item'}
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
          {item.description || 'Delicious and fresh prepared with quality ingredients.'}
        </Card.Text>

        {item.category && (
          <div className="text-muted small mb-2">
            Category: {item.category}
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-bold text-success fs-5">₹{item.price}</span>
          {item.rating && (
            <div className="d-flex align-items-center">
              <span className="text-warning me-1">★</span>
              <span className="small">{item.rating}</span>
            </div>
          )}
        </div>

        {item.deliveryTime && (
          <div className="text-muted small mb-3">
            🚚 Delivery: {item.deliveryTime} mins
          </div>
        )}

        <div className="d-flex gap-2 mt-auto">
          <LinkContainer to={`/dish/${item.id}`}>
            <Button
              size="sm"
              className="flex-grow-1"
              onClick={handleAddToCart}
              style={{
                backgroundColor: '#007bff', // solid blue
                border: '2px solid #ff6b35', // orange border
                color: '#ff6b35', // orange text
                fontWeight: '600',
                borderRadius: '14px',
                boxShadow: 'none', // remove Bootstrap's glow
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ff6b35'; // orange bg
                e.target.style.color = '#ffffff'; // white text
                e.target.style.border = '2px solid #ff6b35'; // keep orange border
                e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.4)'; // orange glow
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#007bff'; // back to blue
                e.target.style.color = '#ff6b35'; // back to orange text
                e.target.style.border = '2px solid #ff6b35';
                e.target.style.boxShadow = 'none'; // reset shadow
              }}
            >
              View Details
            </Button>
          </LinkContainer>


          <Button
            size="sm"
            className="flex-grow-1"
            onClick={handleAddToCart}
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              border: 'none',
              color: 'white',
              fontWeight: '600',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.3)';
            }}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MenuItem;
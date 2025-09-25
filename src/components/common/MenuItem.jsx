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
    <Card className="h-100 shadow-sm">
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
            <Button variant="outline-primary" size="sm" className="flex-grow-1">
              View Details
            </Button>
          </LinkContainer>
          <Button
            variant="primary"
            size="sm"
            className="flex-grow-1"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MenuItem;
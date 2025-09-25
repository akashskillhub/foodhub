import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';

// Dummy restaurant data
const restaurantData = [
  { id: 1, name: "Veg Biryani House", price: 250, type: "veg", rating: 4.5, deliveryTime: 25, cuisine: "North Indian", image: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Chicken Curry Palace", price: 450, type: "nonveg", rating: 4.2, deliveryTime: 40, cuisine: "Mughlai", image: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Paneer Roll Corner", price: 320, type: "veg", rating: 3.9, deliveryTime: 20, cuisine: "Street Food", image: "https://via.placeholder.com/300x200" },
  { id: 4, name: "Fish Fry Express", price: 380, type: "nonveg", rating: 4.3, deliveryTime: 30, cuisine: "Seafood", image: "https://via.placeholder.com/300x200" },
  { id: 5, name: "Masala Dosa Hub", price: 180, type: "veg", rating: 4.6, deliveryTime: 15, cuisine: "South Indian", image: "https://via.placeholder.com/300x200" },
  { id: 6, name: "Mutton Biryani King", price: 520, type: "nonveg", rating: 4.4, deliveryTime: 45, cuisine: "Hyderabadi", image: "https://via.placeholder.com/300x200" },
  { id: 7, name: "Chole Bhature Station", price: 220, type: "veg", rating: 4.1, deliveryTime: 25, cuisine: "Punjabi", image: "https://via.placeholder.com/300x200" },
  { id: 8, name: "Tandoori Chicken Zone", price: 420, type: "nonveg", rating: 4.5, deliveryTime: 35, cuisine: "North Indian", image: "https://via.placeholder.com/300x200" },
  { id: 9, name: "Samosa Junction", price: 150, type: "veg", rating: 3.8, deliveryTime: 18, cuisine: "Snacks", image: "https://via.placeholder.com/300x200" },
  { id: 10, name: "Butter Chicken Express", price: 480, type: "nonveg", rating: 4.7, deliveryTime: 40, cuisine: "North Indian", image: "https://via.placeholder.com/300x200" }
];

/**
 * RestaurantFilter Component
 * Provides functional filtering for restaurants with price, diet, and sorting options
 * Multiple filters can be applied simultaneously
 */
function RestaurantFilter() {
  // Filter states
  const [filters, setFilters] = useState({
    price: [],
    diet: [],
    sorting: []
  });

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const newFilters = { ...prev };

      if (newFilters[category].includes(value)) {
        // Remove filter if already selected
        newFilters[category] = newFilters[category].filter(item => item !== value);
      } else {
        // Add filter if not selected
        newFilters[category] = [...newFilters[category], value];
      }

      return newFilters;
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      price: [],
      diet: [],
      sorting: []
    });
  };

  // Apply filters to restaurant data
  const filteredRestaurants = useMemo(() => {
    let result = [...restaurantData];

    // Apply price filters
    if (filters.price.length > 0) {
      result = result.filter(restaurant => {
        return filters.price.some(priceRange => {
          if (priceRange === 'under300') return restaurant.price < 300;
          if (priceRange === '300to600') return restaurant.price >= 300 && restaurant.price <= 600;
          return false;
        });
      });
    }

    // Apply diet filters
    if (filters.diet.length > 0) {
      result = result.filter(restaurant => {
        return filters.diet.includes(restaurant.type);
      });
    }

    // Apply sorting filters
    if (filters.sorting.includes('fastDelivery')) {
      result = result.sort((a, b) => a.deliveryTime - b.deliveryTime);
    }
    if (filters.sorting.includes('highRating')) {
      result = result.filter(restaurant => restaurant.rating >= 4.0);
    }

    return result;
  }, [filters]);

  // Count active filters
  const activeFilterCount = filters.price.length + filters.diet.length + filters.sorting.length;

  return (
    <Container className="py-4">
      <Row>
        {/* Filter Sidebar */}
        <Col lg={3} md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Filters</h5>
              {activeFilterCount > 0 && (
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={clearAllFilters}
                >
                  Clear All
                </Button>
              )}
            </Card.Header>
            <Card.Body>
              {/* Price Filters */}
              <div className="mb-4">
                <h6 className="fw-bold">Price Range</h6>
                <Form.Check
                  type="checkbox"
                  label="Less than ₹300"
                  checked={filters.price.includes('under300')}
                  onChange={() => handleFilterChange('price', 'under300')}
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  label="₹300 - ₹600"
                  checked={filters.price.includes('300to600')}
                  onChange={() => handleFilterChange('price', '300to600')}
                />
              </div>

              {/* Diet Filters */}
              <div className="mb-4">
                <h6 className="fw-bold">Diet Preference</h6>
                <Form.Check
                  type="checkbox"
                  label="Pure Veg"
                  checked={filters.diet.includes('veg')}
                  onChange={() => handleFilterChange('diet', 'veg')}
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  label="Non Veg"
                  checked={filters.diet.includes('nonveg')}
                  onChange={() => handleFilterChange('diet', 'nonveg')}
                />
              </div>

              {/* Sorting Filters */}
              <div className="mb-4">
                <h6 className="fw-bold">Sort By</h6>
                <Form.Check
                  type="checkbox"
                  label="Fast Delivery"
                  checked={filters.sorting.includes('fastDelivery')}
                  onChange={() => handleFilterChange('sorting', 'fastDelivery')}
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  label="Rating 4.0+"
                  checked={filters.sorting.includes('highRating')}
                  onChange={() => handleFilterChange('sorting', 'highRating')}
                />
              </div>

              {/* Active Filters Display */}
              {activeFilterCount > 0 && (
                <div className="mt-3">
                  <small className="text-muted">Active Filters:</small>
                  <div className="mt-2">
                    {filters.price.map(filter => (
                      <Badge
                        key={filter}
                        bg="primary"
                        className="me-1 mb-1"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleFilterChange('price', filter)}
                      >
                        {filter === 'under300' ? '<₹300' : '₹300-₹600'} ×
                      </Badge>
                    ))}
                    {filters.diet.map(filter => (
                      <Badge
                        key={filter}
                        bg="success"
                        className="me-1 mb-1"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleFilterChange('diet', filter)}
                      >
                        {filter === 'veg' ? 'Pure Veg' : 'Non Veg'} ×
                      </Badge>
                    ))}
                    {filters.sorting.map(filter => (
                      <Badge
                        key={filter}
                        bg="warning"
                        className="me-1 mb-1"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleFilterChange('sorting', filter)}
                      >
                        {filter === 'fastDelivery' ? 'Fast Delivery' : 'Rating 4.0+'} ×
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Restaurant Results */}
        <Col lg={9} md={8}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>Restaurants ({filteredRestaurants.length})</h4>
            <div className="text-muted">
              {activeFilterCount > 0 && `${activeFilterCount} filter(s) active`}
            </div>
          </div>

          {filteredRestaurants.length === 0 ? (
            <Card className="text-center py-5">
              <Card.Body>
                <h5>No restaurants found</h5>
                <p className="text-muted">Try adjusting your filters to see more results.</p>
                <Button variant="primary" onClick={clearAllFilters}>
                  Clear All Filters
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <Row>
              {filteredRestaurants.map(restaurant => (
                <Col xl={4} lg={6} md={12} key={restaurant.id} className="mb-4">
                  <Card className="h-100 shadow-sm hover-shadow">
                    <Card.Img
                      variant="top"
                      src={restaurant.image}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Card.Title className="h6 mb-0">{restaurant.name}</Card.Title>
                        <Badge bg={restaurant.type === 'veg' ? 'success' : 'danger'}>
                          {restaurant.type === 'veg' ? '🥬 VEG' : '🍖 NON-VEG'}
                        </Badge>
                      </div>

                      <div className="text-muted small mb-2">{restaurant.cuisine}</div>

                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fw-bold text-success">₹{restaurant.price}</span>
                        <div className="d-flex align-items-center">
                          <span className="text-warning me-1">★</span>
                          <span>{restaurant.rating}</span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center text-muted small mb-3">
                        <span>🚚 {restaurant.deliveryTime} mins</span>
                      </div>

                      <Button variant="primary" className="mt-auto">
                        Order Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>

      <style jsx>{`
        .hover-shadow {
          transition: box-shadow 0.3s ease;
        }
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </Container>
  );
}

export default RestaurantFilter;
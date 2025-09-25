import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form, Dropdown, ButtonGroup } from 'react-bootstrap';
import { Star, Clock, MapPin, Filter, SortAsc, Percent, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample restaurant data similar to Swiggy
const restaurantsData = [
  {
    id: 1,
    name: "Butter Chicken House",
    cuisine: "North Indian, Mughlai",
    rating: 4.8,
    deliveryTime: "25-30 mins",
    price: "₹320 for two",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=250&fit=crop&crop=center",
    offer: "20% OFF up to ₹80",
    location: "Chhindwara",
    isPureVeg: false,
    priceRange: "300-600",
    fastDelivery: true
  },
  {
    id: 2,
    name: "Pizza Palace",
    cuisine: "Italian, Fast Food",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    price: "₹300 for two",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop&crop=center",
    offer: "50% OFF up to ₹100",
    location: "Chhindwara",
    isPureVeg: false,
    priceRange: "300-600",
    fastDelivery: true
  },
  {
    id: 3,
    name: "South Indian Corner",
    cuisine: "South Indian, Breakfast",
    rating: 4.5,
    deliveryTime: "15-20 mins",
    price: "₹180 for two",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=250&fit=crop&crop=center",
    offer: "₹30 OFF above ₹150",
    location: "Chhindwara",
    isPureVeg: true,
    priceRange: "<300",
    fastDelivery: true
  },
  {
    id: 4,
    name: "Spice Garden",
    cuisine: "North Indian, Chinese",
    rating: 4.5,
    deliveryTime: "30-35 mins",
    price: "₹250 for two",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    offer: "20% OFF",
    location: "Chhindwara",
    isPureVeg: true,
    priceRange: "<300",
    fastDelivery: false
  },
  {
    id: 5,
    name: "Burger Junction",
    cuisine: "American, Burgers",
    rating: 4.1,
    deliveryTime: "20-25 mins",
    price: "₹200 for two",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    offer: "Buy 1 Get 1 Free",
    location: "Chhindwara",
    isPureVeg: false,
    priceRange: "<300",
    fastDelivery: true
  },
  {
    id: 6,
    name: "Royal Biryani House",
    cuisine: "Biryani, Mughlai",
    rating: 4.6,
    deliveryTime: "35-40 mins",
    price: "₹400 for two",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=250&fit=crop&crop=center",
    offer: "Free Delivery",
    location: "Chhindwara",
    isPureVeg: false,
    priceRange: "300-600",
    fastDelivery: false
  },
  {
    id: 7,
    name: "Green Leaf Restaurant",
    cuisine: "Pure Vegetarian, South Indian",
    rating: 4.4,
    deliveryTime: "25-30 mins",
    price: "₹180 for two",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    offer: "30% OFF up to ₹150",
    location: "Chhindwara",
    isPureVeg: true,
    priceRange: "<300",
    fastDelivery: true
  },
  {
    id: 8,
    name: "Chinese Corner",
    cuisine: "Chinese, Indo-Chinese",
    rating: 4.2,
    deliveryTime: "30-35 mins",
    price: "₹350 for two",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    offer: "40% OFF",
    location: "Chhindwara",
    isPureVeg: false,
    priceRange: "300-600",
    fastDelivery: false
  },
  {
    id: 9,
    name: "Dosa Corner",
    cuisine: "South Indian, Breakfast",
    rating: 4.3,
    deliveryTime: "15-20 mins",
    price: "₹150 for two",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    offer: "₹50 OFF above ₹199",
    location: "Chhindwara",
    isPureVeg: true,
    priceRange: "<300",
    fastDelivery: true
  },
  {
    id: 10,
    name: "Tandoor Express",
    cuisine: "Punjabi, Tandoor",
    rating: 4.7,
    deliveryTime: "40-45 mins",
    price: "₹450 for two",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    offer: "25% OFF up to ₹125",
    location: "Chhindwara",
    isPureVeg: false,
    priceRange: "300-600",
    fastDelivery: false
  }
];

const RestaurantListing = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [filters, setFilters] = useState({
    fastDelivery: false,
    ratings4Plus: false,
    pureVeg: false,
    offers: false,
    priceRange: 'all'
  });
  const [sortBy, setSortBy] = useState('relevance');

  // Filter functions
  const applyFilters = () => {
    let filtered = restaurantsData;

    if (filters.fastDelivery) {
      filtered = filtered.filter(restaurant => restaurant.fastDelivery);
    }

    if (filters.ratings4Plus) {
      filtered = filtered.filter(restaurant => restaurant.rating >= 4.0);
    }

    if (filters.pureVeg) {
      filtered = filtered.filter(restaurant => restaurant.isPureVeg);
    }

    if (filters.offers) {
      filtered = filtered.filter(restaurant => restaurant.offer);
    }

    if (filters.priceRange !== 'all') {
      filtered = filtered.filter(restaurant => restaurant.priceRange === filters.priceRange);
    }

    // Sort restaurants
    if (sortBy === 'rating') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'deliveryTime') {
      filtered = filtered.sort((a, b) => {
        const aTime = parseInt(a.deliveryTime.split('-')[0]);
        const bTime = parseInt(b.deliveryTime.split('-')[0]);
        return aTime - bTime;
      });
    }

    setRestaurants(filtered);
  };

  // Apply filters whenever filter state changes
  React.useEffect(() => {
    applyFilters();
  }, [filters, sortBy]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      fastDelivery: false,
      ratings4Plus: false,
      pureVeg: false,
      offers: false,
      priceRange: 'all'
    });
    setSortBy('relevance');
  };

  const activeFiltersCount = Object.values(filters).filter(f => f === true).length + (filters.priceRange !== 'all' ? 1 : 0);

  return (
    <Container className="py-4">
      {/* Header Section */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div>
              <h2 className="fw-bold mb-1">Restaurants with online food delivery in Chhindwara</h2>
              <p className="text-muted mb-0">{restaurants.length} restaurants found</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Filter and Sort Section */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            {/* Filter Button */}
            <Dropdown>
              <Dropdown.Toggle
                className="d-flex align-items-center gap-2 rounded-pill filter-dropdown-toggle"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #e0e0e0',
                  color: '#333',
                  padding: '8px 16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
              >
                <Filter size={16} />
                Filter
                {activeFiltersCount > 0 && (
                  <Badge
                    className="ms-1"
                    style={{
                      backgroundColor: '#fc8019',
                      color: 'white',
                      fontSize: '10px',
                      borderRadius: '10px'
                    }}
                  >
                    {activeFiltersCount}
                  </Badge>
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: '300px', padding: '20px' }}>
                <div className="mb-3">
                  <h6 className="fw-bold mb-3">Filters</h6>

                  {/* Fast Delivery Filter */}
                  <Form.Check
                    type="checkbox"
                    label="Fast Delivery"
                    checked={filters.fastDelivery}
                    onChange={(e) => handleFilterChange('fastDelivery', e.target.checked)}
                    className="mb-2"
                  />

                  {/* Ratings Filter */}
                  <Form.Check
                    type="checkbox"
                    label="Ratings 4.0+"
                    checked={filters.ratings4Plus}
                    onChange={(e) => handleFilterChange('ratings4Plus', e.target.checked)}
                    className="mb-2"
                  />

                  {/* Pure Veg Filter */}
                  <Form.Check
                    type="checkbox"
                    label="Pure Veg"
                    checked={filters.pureVeg}
                    onChange={(e) => handleFilterChange('pureVeg', e.target.checked)}
                    className="mb-2"
                  />

                  {/* Offers Filter */}
                  <Form.Check
                    type="checkbox"
                    label="Offers"
                    checked={filters.offers}
                    onChange={(e) => handleFilterChange('offers', e.target.checked)}
                    className="mb-3"
                  />

                  {/* Price Range */}
                  <div className="mb-3">
                    <h6 className="fw-bold mb-2">Price Range</h6>
                    <Form.Select
                      value={filters.priceRange}
                      onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    >
                      <option value="all">All Price Ranges</option>
                      <option value="<300">Less than ₹300</option>
                      <option value="300-600">₹300 - ₹600</option>
                    </Form.Select>
                  </div>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={clearAllFilters}
                    className="w-100"
                  >
                    Clear All Filters
                  </Button>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            {/* Sort By */}
            <Dropdown>
              <Dropdown.Toggle
                className="d-flex align-items-center gap-2 rounded-pill sort-dropdown-toggle"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #e0e0e0',
                  color: '#333',
                  padding: '8px 16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
              >
                <SortAsc size={16} />
                Sort By
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ border: '1px solid #e0e0e0', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                <Dropdown.Item
                  active={sortBy === 'relevance'}
                  onClick={() => setSortBy('relevance')}
                  style={{
                    backgroundColor: sortBy === 'relevance' ? '#fc8019' : 'transparent',
                    color: sortBy === 'relevance' ? 'white' : '#333',
                    fontWeight: sortBy === 'relevance' ? '500' : '400'
                  }}
                >
                  Relevance
                </Dropdown.Item>
                <Dropdown.Item
                  active={sortBy === 'deliveryTime'}
                  onClick={() => setSortBy('deliveryTime')}
                  style={{
                    backgroundColor: sortBy === 'deliveryTime' ? '#fc8019' : 'transparent',
                    color: sortBy === 'deliveryTime' ? 'white' : '#333',
                    fontWeight: sortBy === 'deliveryTime' ? '500' : '400'
                  }}
                >
                  Delivery Time
                </Dropdown.Item>
                <Dropdown.Item
                  active={sortBy === 'rating'}
                  onClick={() => setSortBy('rating')}
                  style={{
                    backgroundColor: sortBy === 'rating' ? '#fc8019' : 'transparent',
                    color: sortBy === 'rating' ? 'white' : '#333',
                    fontWeight: sortBy === 'rating' ? '500' : '400'
                  }}
                >
                  Rating
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Quick Filter Chips */}
            <div className="d-flex gap-2 flex-wrap">
              <Button
                size="sm"
                onClick={() => handleFilterChange('fastDelivery', !filters.fastDelivery)}
                className="d-flex align-items-center gap-1 rounded-pill"
                style={{
                  backgroundColor: filters.fastDelivery ? '#fc8019' : 'transparent',
                  borderColor: filters.fastDelivery ? '#fc8019' : '#e0e0e0',
                  color: filters.fastDelivery ? 'white' : '#666',
                  padding: '6px 16px',
                  border: '1px solid'
                }}
              >
                <Clock size={14} />
                Fast Delivery
              </Button>

              <Button
                size="sm"
                onClick={() => handleFilterChange('ratings4Plus', !filters.ratings4Plus)}
                className="d-flex align-items-center gap-1 rounded-pill"
                style={{
                  backgroundColor: filters.ratings4Plus ? '#fc8019' : 'transparent',
                  borderColor: filters.ratings4Plus ? '#fc8019' : '#e0e0e0',
                  color: filters.ratings4Plus ? 'white' : '#666',
                  padding: '6px 16px',
                  border: '1px solid'
                }}
              >
                <Star size={14} />
                Ratings 4.0+
              </Button>

              <Button
                size="sm"
                onClick={() => handleFilterChange('pureVeg', !filters.pureVeg)}
                className="d-flex align-items-center gap-1 rounded-pill"
                style={{
                  backgroundColor: filters.pureVeg ? '#60b246' : 'transparent',
                  borderColor: filters.pureVeg ? '#60b246' : '#e0e0e0',
                  color: filters.pureVeg ? 'white' : '#666',
                  padding: '6px 16px',
                  border: '1px solid'
                }}
              >
                <Leaf size={14} />
                Pure Veg
              </Button>

              <Button
                size="sm"
                onClick={() => handleFilterChange('offers', !filters.offers)}
                className="d-flex align-items-center gap-1 rounded-pill"
                style={{
                  backgroundColor: filters.offers ? '#ff6b6b' : 'transparent',
                  borderColor: filters.offers ? '#ff6b6b' : '#e0e0e0',
                  color: filters.offers ? 'white' : '#666',
                  padding: '6px 16px',
                  border: '1px solid'
                }}
              >
                <Percent size={14} />
                Offers
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Restaurant Cards */}
      <Row>
        {restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
            <Col lg={3} md={4} sm={6} key={restaurant.id} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-100"
              >
                <Card
                  className="h-100 border-0 shadow-sm restaurant-card"
                  style={{
                    cursor: 'pointer',
                    borderRadius: '20px',
                    overflow: 'hidden'
                  }}
                >
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={restaurant.image}
                      style={{
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '20px 20px 0 0'
                      }}
                    />
                    {restaurant.offer && (
                      <Badge
                        bg="primary"
                        className="position-absolute"
                        style={{
                          bottom: '10px',
                          left: '10px',
                          fontSize: '12px',
                          backgroundColor: '#fc8019',
                          border: 'none'
                        }}
                      >
                        {restaurant.offer}
                      </Badge>
                    )}
                    {restaurant.isPureVeg && (
                      <div
                        className="position-absolute"
                        style={{ top: '10px', right: '10px' }}
                      >
                        <div
                          style={{
                            backgroundColor: 'white',
                            border: '2px solid #60b246',
                            borderRadius: '4px',
                            padding: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <div
                            style={{
                              width: '8px',
                              height: '8px',
                              backgroundColor: '#60b246',
                              borderRadius: '50%'
                            }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <Card.Body className="p-3">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title className="h6 mb-0 fw-bold text-truncate">
                        {restaurant.name}
                      </Card.Title>
                      <div className="d-flex align-items-center gap-1 text-white px-2 py-1 rounded"
                           style={{
                             backgroundColor: restaurant.rating >= 4.0 ? '#60b246' : '#fc8019',
                             fontSize: '12px',
                             minWidth: '45px'
                           }}>
                        <Star size={12} fill="white" />
                        <span>{restaurant.rating}</span>
                      </div>
                    </div>

                    <p className="text-muted small mb-2 text-truncate">{restaurant.cuisine}</p>

                    <div className="d-flex justify-content-between align-items-center text-muted small">
                      <div className="d-flex align-items-center gap-1">
                        <Clock size={14} />
                        <span>{restaurant.deliveryTime}</span>
                      </div>
                      <span>{restaurant.price}</span>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))
        ) : (
          <Col>
            <Card className="text-center py-5 border-0 shadow-sm">
              <Card.Body>
                <div className="mb-3">
                  <MapPin size={48} className="text-muted" />
                </div>
                <h5>No restaurants found</h5>
                <p className="text-muted mb-3">
                  Try adjusting your filters to see more results
                </p>
                <Button
                  style={{ backgroundColor: '#fc8019', borderColor: '#fc8019' }}
                  onClick={clearAllFilters}
                >
                  Clear All Filters
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>

      {/* Custom CSS */}
      <style>{`
        .restaurant-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
          transition: all 0.3s ease;
        }

        .restaurant-card {
          transition: all 0.3s ease;
        }

        .filter-dropdown-toggle:hover,
        .sort-dropdown-toggle:hover {
          border-color: #fc8019 !important;
          color: #fc8019 !important;
          box-shadow: 0 2px 8px rgba(252, 128, 25, 0.2) !important;
        }

        .dropdown-item:hover {
          background-color: #fc8019 !important;
          color: white !important;
        }

        .form-check-input:checked {
          background-color: #fc8019 !important;
          border-color: #fc8019 !important;
        }

        .form-select:focus {
          border-color: #fc8019 !important;
          box-shadow: 0 0 0 0.2rem rgba(252, 128, 25, 0.25) !important;
        }
      `}</style>
    </Container>
  );
};

export default RestaurantListing;
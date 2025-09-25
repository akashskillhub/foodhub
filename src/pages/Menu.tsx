import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Star, Search, Filter, ShoppingCart } from 'lucide-react';
import { menuItems, categories } from '../data/menuData';
import { useCart } from '../contexts/CartContext';
import { toast } from 'react-toastify';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState('all');
  const { addItem } = useCart();

  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under10':
          filtered = filtered.filter(item => item.price < 10);
          break;
        case '10to20':
          filtered = filtered.filter(item => item.price >= 10 && item.price <= 20);
          break;
        case 'over20':
          filtered = filtered.filter(item => item.price > 20);
          break;
      }
    }

    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price_low':
          return a.price - b.price;
        case 'price_high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
          return (b.reviews || 0) - (a.reviews || 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy, priceRange]);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="display-5 fw-bold text-center mb-4">Our Menu 🍽️</h1>
          <p className="lead text-center text-muted">
            Discover our delicious selection of carefully crafted dishes
          </p>
        </Col>
      </Row>

      {/* Filters and Search */}
      <Row className="mb-4">
        <Col lg={8}>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <Search size={20} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col lg={4}>
          <div className="d-flex gap-2">
            <Form.Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
            </Form.Select>
            <Form.Select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under10">Under $10</option>
              <option value="10to20">$10 - $20</option>
              <option value="over20">Over $20</option>
            </Form.Select>
          </div>
        </Col>
      </Row>

      {/* Categories */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'primary' : 'outline-primary'}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.icon} {category.name}
              </Button>
            ))}
          </div>
        </Col>
      </Row>

      {/* Results count */}
      <Row className="mb-3">
        <Col>
          <p className="text-muted">
            Showing {filteredAndSortedItems.length} of {menuItems.length} items
          </p>
        </Col>
      </Row>

      {/* Menu Items */}
      {filteredAndSortedItems.length === 0 ? (
        <Row>
          <Col className="text-center py-5">
            <h4>No items found</h4>
            <p className="text-muted">Try adjusting your search or filters</p>
            <Button
              variant="primary"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
            >
              Clear Filters
            </Button>
          </Col>
        </Row>
      ) : (
        <Row>
          {filteredAndSortedItems.map((item) => (
            <Col lg={4} md={6} key={item.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0 hover-shadow">
                <div className="position-relative">
                  <LazyLoadImage
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    height="200"
                    effect="blur"
                  />
                  <div className="position-absolute top-0 start-0 d-flex flex-wrap gap-1 p-2">
                    {item.isNew && (
                      <Badge bg="success">New</Badge>
                    )}
                    {item.isPopular && (
                      <Badge bg="danger">Popular</Badge>
                    )}
                    {item.isVegetarian && (
                      <Badge bg="success">🌱 Veg</Badge>
                    )}
                    {item.isSpicy && (
                      <Badge bg="warning">🌶️ Spicy</Badge>
                    )}
                  </div>
                </div>

                <Card.Body className="d-flex flex-column">
                  <h5 className="card-title fw-bold">{item.name}</h5>
                  <p className="card-text text-muted flex-grow-1">{item.description}</p>

                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <Star size={16} className="text-warning me-1" />
                      <span className="fw-bold me-2">{item.rating}</span>
                      <span className="text-muted small">({item.reviews} reviews)</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h5 fw-bold text-primary mb-0">
                        ${item.price.toFixed(2)}
                      </span>
                      <small className="text-muted">
                        {item.nutrition.calories} cal
                      </small>
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <Button
                      as={Link}
                      to={`/menu/${item.id}`}
                      variant="outline-primary"
                      className="flex-grow-1"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleAddToCart(item)}
                      className="d-flex align-items-center"
                    >
                      <ShoppingCart size={16} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <style>{`
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
        .card-img-top {
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .hover-shadow:hover .card-img-top {
          transform: scale(1.05);
        }
      `}</style>
    </Container>
  );
};

export default Menu;
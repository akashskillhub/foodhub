import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSearchParams } from 'react-router-dom';
import MenuItem from '../components/common/MenuItem';
import { useCart } from '../context/CartContext';
import { useAdmin } from '../context/AdminContext';

// Default menu data when admin items are not available
const defaultMenuData = {
  starters: [
    {
      id: 101,
      name: "Chicken Wings",
      price: 280,
      type: "nonveg",
      rating: 4.5,
      deliveryTime: 20,
      category: "starters",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Crispy chicken wings with BBQ sauce"
    },
    {
      id: 102,
      name: "Paneer Tikka",
      price: 240,
      type: "veg",
      rating: 4.6,
      deliveryTime: 15,
      category: "starters",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Grilled cottage cheese with mint chutney"
    }
  ],
  mains: [
    {
      id: 201,
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
      id: 202,
      name: "Dal Tadka",
      price: 220,
      type: "veg",
      rating: 4.4,
      deliveryTime: 20,
      category: "mains",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Yellow lentils tempered with spices"
    }
  ],
  desserts: [
    {
      id: 301,
      name: "Gulab Jamun",
      price: 120,
      type: "veg",
      rating: 4.6,
      deliveryTime: 10,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Soft milk dumplings in sugar syrup"
    }
  ],
  beverages: [
    {
      id: 401,
      name: "Mango Lassi",
      price: 80,
      type: "veg",
      rating: 4.3,
      deliveryTime: 5,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1553909414-fae87aaab5ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Refreshing yogurt-based mango drink"
    }
  ]
};

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dietFilter, setDietFilter] = useState('all');
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();
  const { menuItems } = useAdmin();

  // Handle URL parameters on component mount
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    const urlCategory = searchParams.get('category');

    if (urlSearch) {
      setSearchTerm(urlSearch);
    }

    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [searchParams]);

  const categories = [
    { key: 'all', name: 'All Items', icon: '🍽️' },
    { key: 'starters', name: 'Starters', icon: '🥗' },
    { key: 'mains', name: 'Main Course', icon: '🍛' },
    { key: 'desserts', name: 'Desserts', icon: '🍰' },
    { key: 'beverages', name: 'Beverages', icon: '🥤' }
  ];

  // Use admin menu items if available, otherwise use default data
  const getAllMenuItems = () => {
    if (menuItems && menuItems.length > 0) {
      return menuItems;
    }

    // Combine all default menu items
    return [
      ...defaultMenuData.starters,
      ...defaultMenuData.mains,
      ...defaultMenuData.desserts,
      ...defaultMenuData.beverages
    ];
  };

  const allMenuItems = getAllMenuItems();

  // Filter items based on category, search, and diet
  const getFilteredItems = () => {
    let items = selectedCategory === 'all' ? allMenuItems : allMenuItems.filter(item => item.category === selectedCategory);

    // Apply search filter
    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply diet filter
    if (dietFilter !== 'all') {
      items = items.filter(item => item.type === dietFilter);
    }

    return items;
  };

  const filteredItems = getFilteredItems();

  return (
    <Container className="py-4">
      {/* Page Header */}
      <Row className="mb-4">
        <Col>
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold">Our Menu</h1>
            <p className="lead text-muted">
              Discover our delicious collection of dishes made with fresh ingredients
            </p>
          </div>
        </Col>
      </Row>

      {/* Search and Filter Section */}
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <InputGroup.Text>🔍</InputGroup.Text>
          </InputGroup>
        </Col>
        <Col md={3} className="mb-3">
          <Form.Select
            value={dietFilter}
            onChange={(e) => setDietFilter(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </Form.Select>
        </Col>
        <Col md={3} className="mb-3">
          <div className="text-end">
            <span className="text-muted">
              {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
            </span>
          </div>
        </Col>
      </Row>

      {/* Category Navigation */}
      <Row className="mb-4">
        <Col>
          <Nav
            variant="pills"
            className="justify-content-center flex-wrap"
            activeKey={selectedCategory}
          >
            {categories.map((category) => (
              <Nav.Item key={category.key} className="mb-2">
                <Nav.Link
                  eventKey={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className="px-4 py-2 mx-1"
                >
                  <span className="me-2">{category.icon}</span>
                  {category.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
      </Row>

      {/* Menu Items */}
      {filteredItems.length > 0 ? (
        <Row>
          {filteredItems.map((item) => (
            <Col xl={3} lg={4} md={6} key={item.id} className="mb-4">
              <MenuItem item={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row className="py-5">
          <Col>
            <Card className="text-center border-0">
              <Card.Body className="py-5">
                <div className="mb-3">
                  <span className="display-1">🍽️</span>
                </div>
                <Card.Title className="h4">No items found</Card.Title>
                <Card.Text className="text-muted">
                  {searchTerm || dietFilter !== 'all' || selectedCategory !== 'all'
                    ? 'Try adjusting your search or filters to see more results.'
                    : 'No items available in this category.'}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSearchTerm('');
                    setDietFilter('all');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Special Offers Section */}
      <Row className="mt-5">
        <Col>
          <Card className="bg-primary text-white">
            <Card.Body className="text-center py-4">
              <h3 className="mb-3">🎉 Special Offers</h3>
              <p className="lead mb-3">
                Get 20% off on orders above ₹500. Use code: SAVE20
              </p>
              <Button variant="light" size="lg">
                Apply Offer
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuPage;
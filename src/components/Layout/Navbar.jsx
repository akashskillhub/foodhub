import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Badge, Button, NavDropdown, Form, InputGroup, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, ShoppingBag, User, ChevronDown, Percent, HelpCircle } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';

/**
 * Swiggy-inspired Navigation Bar Component
 * Features:
 * - Location selector with dropdown
 * - Search functionality for restaurants and dishes
 * - Modern Swiggy-like design
 * - Offers, Help, Cart, and User account sections
 * - Responsive design
 */
function NavigationBar() {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);
  const [selectedLocation, setSelectedLocation] = useState('Koramangala, Bengaluru');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const popularLocations = [
    'Koramangala, Bengaluru',
    'Indiranagar, Bengaluru',
    'HSR Layout, Bengaluru',
    'Whitefield, Bengaluru',
    'Bandra, Mumbai',
    'Andheri, Mumbai',
    'Gurgaon, Delhi',
    'Connaught Place, Delhi'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to menu page with search query using React Router
      navigate(`/menu?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <Navbar bg="white" expand="lg" className="shadow-sm border-bottom" sticky="top" style={{ height: '80px' }}>
        <Container fluid className="px-4">
          <div className="d-flex align-items-center w-100">

            {/* Logo */}
            <LinkContainer to="/" style={{ cursor: 'pointer' }}>
              <Navbar.Brand className="d-flex align-items-center me-4">
                <div style={{
                  background: '#fc8019',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>
                  FoodHub
                </div>
              </Navbar.Brand>
            </LinkContainer>

            {/* Location Selector */}
            <div className="d-flex align-items-center me-4" style={{ minWidth: '280px' }}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  className="text-decoration-none text-dark d-flex align-items-center border-0 p-0"
                  style={{ boxShadow: 'none' }}
                >
                  <MapPin size={20} className="text-danger me-2" />
                  <div className="text-start">
                    <div className="fw-bold text-dark" style={{ fontSize: '14px' }}>Other</div>
                    <div className="text-muted" style={{ fontSize: '13px', maxWidth: '200px' }} title={selectedLocation}>
                      {selectedLocation.length > 25 ? selectedLocation.substring(0, 25) + '...' : selectedLocation}
                    </div>
                  </div>
                  <ChevronDown size={16} className="text-warning ms-2" />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: '300px', maxHeight: '400px', overflowY: 'auto' }}>
                  <div className="p-3 border-bottom">
                    <h6 className="mb-3">Popular locations</h6>
                    {popularLocations.map((location, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => setSelectedLocation(location)}
                        className="d-flex align-items-center py-2"
                        active={selectedLocation === location}
                      >
                        <MapPin size={16} className="me-2 text-muted" />
                        {location}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Search Bar */}
            <div className="flex-grow-1 mx-4" style={{ maxWidth: '500px' }}>
              <Form onSubmit={handleSearch}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search for restaurants and food"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      border: '1px solid #e9ecef',
                      fontSize: '16px',
                      padding: '12px 16px'
                    }}
                  />
                  <InputGroup.Text
                    style={{
                      background: '#fc8019',
                      border: '1px solid #fc8019',
                      cursor: 'pointer'
                    }}
                    onClick={handleSearch}
                  >
                    <Search size={18} className="text-white" />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
            </div>

            {/* Right Side Navigation */}
            <Nav className="d-flex align-items-center gap-4">

              {/* Home */}
              <LinkContainer to="/">
                <Nav.Link className="d-flex align-items-center text-dark px-0">
                  <span className="fw-medium">Home</span>
                </Nav.Link>
              </LinkContainer>

              {/* About */}
              <LinkContainer to="/about">
                <Nav.Link className="d-flex align-items-center text-dark px-0">
                  <span className="fw-medium">About</span>
                </Nav.Link>
              </LinkContainer>

              {/* Contact */}
              <LinkContainer to="/contact">
                <Nav.Link className="d-flex align-items-center text-dark px-0">
                  <span className="fw-medium">Contact</span>
                </Nav.Link>
              </LinkContainer>

              {/* Corporate */}
              <LinkContainer to="/corporate">
                <Nav.Link className="d-flex align-items-center text-dark px-0">
                  <span className="fw-medium">Corporate</span>
                </Nav.Link>
              </LinkContainer>

              {/* Offers */}
              <Nav.Link className="d-flex align-items-center text-dark px-0">
                <Percent size={18} className="me-2" />
                <span className="fw-medium">Offers</span>
                <Badge bg="warning" className="ms-1 text-dark" style={{ fontSize: '10px' }}>NEW</Badge>
              </Nav.Link>

              {/* Help */}
              <LinkContainer to="/help">
                <Nav.Link className="d-flex align-items-center text-dark px-0">
                  <HelpCircle size={18} className="me-2" />
                  <span className="fw-medium">Help</span>
                </Nav.Link>
              </LinkContainer>

              {/* User Authentication */}
              {user ? (
                <NavDropdown
                  title={
                    <div className="d-flex align-items-center text-dark">
                      <User size={18} className="me-2" />
                      <span className="fw-medium">{user.name}</span>
                    </div>
                  }
                  id="user-dropdown"
                  align="end"
                  className="user-dropdown"
                >
                  <LinkContainer to="/account">
                    <NavDropdown.Item>My Account</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orders">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item>Favourites</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link className="d-flex align-items-center text-dark px-0">
                  <User size={18} className="me-2" />
                  <LinkContainer to="/login">
                    <span className="fw-medium" style={{ cursor: 'pointer' }}>Sign In</span>
                  </LinkContainer>
                </Nav.Link>
              )}

              {/* Cart */}
              <LinkContainer to="/cart">
                <Nav.Link className="d-flex align-items-center text-dark position-relative px-0">
                  <ShoppingBag size={18} className="me-2" />
                  <span className="fw-medium">Cart</span>
                  {cartItemCount > 0 && (
                    <Badge
                      bg="danger"
                      pill
                      className="position-absolute"
                      style={{
                        fontSize: '10px',
                        top: '-5px',
                        right: '-8px',
                        minWidth: '18px',
                        height: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {cartItemCount}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>

            </Nav>

          </div>
        </Container>
      </Navbar>


      {/* Custom CSS for better styling */}
      <style jsx>{`
        .user-dropdown .dropdown-toggle::after {
          display: none;
        }

        .navbar-nav .nav-link:hover {
          color: #fc8019 !important;
        }

        .dropdown-menu {
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #fc8019;
        }

        .form-control:focus {
          border-color: #fc8019;
          box-shadow: 0 0 0 0.2rem rgba(252, 128, 25, 0.25);
        }
      `}</style>
    </>
  );
}

export default NavigationBar;
import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Badge, Button, NavDropdown, Form, InputGroup, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, ShoppingBag, User, ChevronDown, Percent, HelpCircle } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';


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
            <div className="d-flex align-items-center me-4 hide-mobile" style={{ minWidth: '280px' }}>
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




              {/* Offers */}
              <LinkContainer to="/offers">
                <Nav.Link className="d-flex align-items-center text-dark px-0 hide-mobile">
                  <Percent size={18} className="me-2" />
                  <span className="fw-medium">Offers</span>
                  <Badge bg="warning" className="ms-1 text-dark" style={{ fontSize: '10px' }}>NEW</Badge>
                </Nav.Link>
              </LinkContainer>

              {/* Help */}
              <LinkContainer to="/help">
                <Nav.Link className="d-flex align-items-center text-dark px-0 hide-mobile">
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
                  <LinkContainer to="/favourites">
                    <NavDropdown.Item>Favourites</NavDropdown.Item>
                  </LinkContainer>
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
      <style>{`
        .user-dropdown .dropdown-toggle::after {
          display: none;
        }

        .navbar-nav .nav-link:hover {
          color: #fc8019 !important;
        }

        .dropdown-menu {
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 1050;
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #fc8019;
        }

        .form-control:focus {
          border-color: #fc8019;
          box-shadow: 0 0 0 0.2rem rgba(252, 128, 25, 0.25);
        }

        /* Mobile Responsive Styles */
        @media (max-width: 991px) {
          .hide-mobile {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            height: 60px !important;
            padding: 0 !important;
          }

          .container-fluid {
            padding: 0 10px !important;
          }

          .d-flex.align-items-center.w-100 {
            flex-wrap: nowrap !important;
            gap: 6px !important;
          }

          .navbar-brand {
            margin-right: 0 !important;
            flex-shrink: 0 !important;
          }

          .navbar-brand > div {
            font-size: 16px !important;
            padding: 6px 10px !important;
            white-space: nowrap !important;
          }

          /* Search bar on mobile - compact */
          .flex-grow-1.mx-4 {
            margin: 0 !important;
            max-width: none !important;
            flex: 1 !important;
            min-width: 0 !important;
          }

          .form-control {
            font-size: 13px !important;
            padding: 8px 10px !important;
            border-radius: 8px !important;
          }

          .form-control::placeholder {
            font-size: 12px !important;
          }

          .input-group-text {
            padding: 8px 10px !important;
            border-radius: 0 8px 8px 0 !important;
          }

          .input-group-text svg {
            width: 16px !important;
            height: 16px !important;
          }

          /* Right side nav - compact icons only */
          .navbar-nav {
            gap: 3px !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            flex-shrink: 0 !important;
          }

          .nav-link {
            padding: 8px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-width: 36px !important;
          }

          .nav-link span.fw-medium {
            display: none !important;
          }

          .user-dropdown .dropdown-toggle {
            padding: 8px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-width: 36px !important;
          }

          .user-dropdown .dropdown-toggle span {
            display: none !important;
          }

          .nav-link svg {
            width: 20px !important;
            height: 20px !important;
            margin: 0 !important;
          }

          .badge {
            font-size: 9px !important;
            min-width: 16px !important;
            height: 16px !important;
            padding: 2px 4px !important;
          }

          /* Badge positioning for cart */
          .nav-link .badge {
            top: 2px !important;
            right: 2px !important;
          }

          /* Dropdown positioning on mobile */
          .user-dropdown .dropdown-menu {
            position: fixed !important;
            top: 60px !important;
            right: 10px !important;
            left: 10px !important;
            width: auto !important;
            max-width: calc(100vw - 20px) !important;
            margin: 0 !important;
            z-index: 1050 !important;
          }

          .navbar {
            z-index: 1040 !important;
          }
        }

        @media (max-width: 576px) {
          .navbar {
            height: 56px !important;
          }

          .container-fluid {
            padding: 0 8px !important;
          }

          .navbar-brand > div {
            font-size: 15px !important;
            padding: 5px 8px !important;
          }

          .form-control {
            font-size: 12px !important;
            padding: 6px 8px !important;
          }

          .form-control::placeholder {
            font-size: 11px !important;
          }

          .input-group-text {
            padding: 6px 8px !important;
          }

          .navbar-nav {
            gap: 2px !important;
          }

          .nav-link {
            padding: 6px !important;
            min-width: 32px !important;
          }

          .user-dropdown .dropdown-toggle {
            padding: 6px !important;
            min-width: 32px !important;
          }

          .nav-link svg {
            width: 18px !important;
            height: 18px !important;
          }

          /* Dropdown positioning on smaller mobile */
          .user-dropdown .dropdown-menu {
            top: 56px !important;
            right: 8px !important;
            left: 8px !important;
            max-width: calc(100vw - 16px) !important;
          }
        }

        @media (max-width: 400px) {
          .navbar {
            height: 54px !important;
          }

          .container-fluid {
            padding: 0 6px !important;
          }

          .navbar-brand > div {
            font-size: 14px !important;
            padding: 4px 7px !important;
          }

          .form-control {
            font-size: 11px !important;
            padding: 5px 6px !important;
          }

          .form-control::placeholder {
            font-size: 10px !important;
          }

          .input-group-text {
            padding: 5px 6px !important;
          }

          .input-group-text svg {
            width: 14px !important;
            height: 14px !important;
          }

          .navbar-nav {
            gap: 1px !important;
          }

          .nav-link {
            padding: 5px !important;
            min-width: 28px !important;
          }

          .user-dropdown .dropdown-toggle {
            padding: 5px !important;
            min-width: 28px !important;
          }

          .nav-link svg {
            width: 16px !important;
            height: 16px !important;
          }

          .badge {
            font-size: 8px !important;
            min-width: 14px !important;
            height: 14px !important;
          }

          /* Dropdown positioning on extra small screens */
          .user-dropdown .dropdown-menu {
            top: 54px !important;
            right: 6px !important;
            left: 6px !important;
            max-width: calc(100vw - 12px) !important;
          }
        }
      `}</style>
    </>
  );
}

export default NavigationBar;
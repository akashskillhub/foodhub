import React from 'react';
import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Moon, Sun, ShoppingCart, User, Menu as MenuIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

const AppNavbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { state } = useCart();
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <Navbar expand="lg" className="shadow-sm" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold fs-3">
            🍕 FoodHub
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <MenuIcon size={24} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/menu">
              <Nav.Link>Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/reviews">
              <Nav.Link>Reviews</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="align-items-center">
            <Button
              variant="outline-secondary"
              className="me-2"
              onClick={toggleTheme}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            <LinkContainer to="/cart">
              <Nav.Link className="position-relative me-2">
                <ShoppingCart size={24} />
                {state.itemCount > 0 && (
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {state.itemCount}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>

            {isAuthenticated ? (
              <div className="d-flex align-items-center">
                <span className="me-2">Hi, {user?.name}</span>
                {user?.role === 'admin' && (
                  <LinkContainer to="/admin">
                    <Nav.Link className="me-2">Admin</Nav.Link>
                  </LinkContainer>
                )}
                <Button variant="outline-danger" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <LinkContainer to="/login">
                <Button variant="primary" size="sm">
                  <User size={16} className="me-1" />
                  Login
                </Button>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
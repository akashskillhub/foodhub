import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useUser } from '../../context/UserContext';
import './Header.css';

/**
 * Header Component
 * Features:
 * - Responsive navigation menu
 * - Cart icon with item count
 * - User authentication status
 * - Mobile-friendly hamburger menu
 */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          🍽️ FoodieHub
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
        </nav>

        {/* Right side icons */}
        <div className="header-actions">
          {/* Cart Icon */}
          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="cart-badge">{itemCount}</span>
            )}
          </Link>

          {/* User Menu */}
          <div className="user-menu">
            {isAuthenticated ? (
              <div className="user-dropdown">
                <button className="user-button">
                  <User size={24} />
                  <span className="user-name">{user.name}</span>
                </button>
                <div className="dropdown-content">
                  <Link to="/orders" onClick={closeMenu}>Order History</Link>
                  {user.isAdmin && (
                    <Link to="/admin" onClick={closeMenu}>Admin Panel</Link>
                  )}
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="login-button">
                <User size={24} />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
        <Link to="/" className="nav-link-mobile" onClick={closeMenu}>Home</Link>
        <Link to="/menu" className="nav-link-mobile" onClick={closeMenu}>Menu</Link>
        <Link to="/about" className="nav-link-mobile" onClick={closeMenu}>About</Link>
        <Link to="/contact" className="nav-link-mobile" onClick={closeMenu}>Contact</Link>
        <Link to="/projects" className="nav-link-mobile" onClick={closeMenu}>Projects</Link>

        {!isAuthenticated ? (
          <>
            <Link to="/login" className="nav-link-mobile" onClick={closeMenu}>Login</Link>
            <Link to="/signup" className="nav-link-mobile" onClick={closeMenu}>Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/orders" className="nav-link-mobile" onClick={closeMenu}>Order History</Link>
            {user.isAdmin && (
              <Link to="/admin" className="nav-link-mobile" onClick={closeMenu}>Admin Panel</Link>
            )}
            <button className="nav-link-mobile logout-mobile" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
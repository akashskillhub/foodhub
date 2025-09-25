import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import { CompactThemeToggle } from './ThemeToggle';

const SimpleNavbar = () => {
  const { items } = useCart();
  const { user, isAuthenticated, logout } = useUser();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{
      background: theme.colors.surfaceAlt,
      padding: '12px 0',
      boxShadow: `0 2px 8px ${theme.colors.shadow}`,
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: `1px solid ${theme.colors.border}`
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff6b35' }}>
                FoodieHub
              </div>
            </Link>

            {/* Search Bar */}
            <div style={{ position: 'relative', width: '400px' }}>
              <Search size={20} style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#666'
              }} />
              <input
                type="text"
                placeholder="Search for restaurants or food"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 40px',
                  border: `2px solid ${theme.colors.border}`,
                  borderRadius: '8px',
                  fontSize: '16px',
                  background: theme.colors.surface,
                  color: theme.colors.text
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '25px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: theme.colors.text, fontWeight: '500' }}>Home</Link>
            <Link to="/menu" style={{ textDecoration: 'none', color: theme.colors.text, fontWeight: '500' }}>Menu</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: theme.colors.text, fontWeight: '500' }}>About</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: theme.colors.text, fontWeight: '500' }}>Contact</Link>

            {/* Cart */}
            <Link
              to="/cart"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: theme.colors.text,
                textDecoration: 'none'
              }}
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#ff6b35',
                  color: 'white',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Theme Toggle */}
            <CompactThemeToggle />

            {/* User Menu - Only show logout when authenticated */}
            {isAuthenticated && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <User
                  size={24}
                  style={{
                    color: theme.colors.primary,
                    cursor: 'pointer'
                  }}
                  title={`Welcome ${user?.name || 'User'}`}
                />
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  style={{
                    background: theme.colors.primary,
                    border: 'none',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
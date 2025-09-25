import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const SimpleFooter = () => {
  const { theme } = useTheme();

  return (
    <footer style={{
      background: theme.colors.surfaceAlt,
      color: theme.colors.text,
      padding: '50px 0 30px',
      borderTop: `1px solid ${theme.colors.border}`
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: theme.colors.primary }}>
              FoodieHub
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
              Discover the best food & drinks in Mumbai. Fast delivery, great taste, amazing experience.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Phone size={16} />
              <span>Customer Support: 9284123374</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Mail size={16} />
              <span>support@foodiehub.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} />
              <span>Mumbai, India</span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: theme.colors.text }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><Link to="/terms" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Terms & Conditions</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/cookies" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Cookie Policy</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/privacy" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Privacy Policy</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/legal" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Legal Hub</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: theme.colors.text }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><Link to="/about" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>About Us</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/company" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Company Overview</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/investors" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Investor Relations</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/careers" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Careers</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/team" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Team</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/contact" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Contact Us</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/help" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Help & Support</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/partner" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Partner with Us</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: theme.colors.text }}>Account</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><Link to="/login" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Login</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/signup" style={{ color: theme.colors.textSecondary, textDecoration: 'none' }}>Sign Up</Link></li>
            </ul>
          </div>

          {/* Available Locations */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: theme.colors.text }}>Available Locations</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><span style={{ color: theme.colors.textSecondary }}>Bangalore</span></li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: theme.colors.textSecondary }}>Gurgaon</span></li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: theme.colors.textSecondary }}>Hyderabad</span></li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: theme.colors.textSecondary }}>Delhi</span></li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: theme.colors.textSecondary }}>Mumbai</span></li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: theme.colors.textSecondary }}>Pune</span></li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: `1px solid ${theme.colors.border}` }}>
          <p style={{ margin: 0, color: theme.colors.textSecondary }}>
            © 2024 FoodieHub. All rights reserved. | Made with ❤️ for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
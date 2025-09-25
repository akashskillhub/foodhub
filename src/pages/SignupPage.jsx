import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, UserPlus } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';
import { useTheme } from '../context/ThemeContext';

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useUser();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await signup(formData);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
    setIsLoading(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <SimpleNavbar />

      <div style={{ paddingTop: '80px', paddingBottom: '50px', minHeight: '100vh', background: theme.colors.background }}>
        <div className="container" style={{ maxWidth: '500px', margin: '0 auto', padding: '0 20px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: theme.colors.surfaceAlt,
              padding: '50px',
              borderRadius: '20px',
              boxShadow: `0 8px 32px ${theme.colors.shadow}`,
              border: `1px solid ${theme.colors.border}`,
              marginTop: '50px'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <UserPlus size={64} color={theme.colors.primary} style={{ marginBottom: '16px' }} />
              <h2 style={{ fontSize: '2rem', color: theme.colors.text, marginBottom: '8px' }}>Join FoodieHub!</h2>
              <p style={{ color: theme.colors.textSecondary, fontSize: '1.1rem' }}>Create your account and start ordering</p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: '#fff5f5',
                  color: '#dc3545',
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  textAlign: 'center',
                  border: '1px solid #ffebee'
                }}
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: theme.colors.text }}>
                  Full Name
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={20} style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: theme.colors.textSecondary
                  }} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px 16px 16px 50px',
                      border: `2px solid ${theme.colors.border}`,
                      borderRadius: '12px',
                      fontSize: '1rem',
                      background: theme.colors.surface,
                      color: theme.colors.text,
                      transition: 'border-color 0.3s ease'
                    }}
                    placeholder="Your full name"
                    onFocus={(e) => e.target.style.borderColor = theme.colors.primary}
                    onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: theme.colors.text }}>
                  Email Address
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={20} style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: theme.colors.textSecondary
                  }} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px 16px 16px 50px',
                      border: `2px solid ${theme.colors.border}`,
                      borderRadius: '12px',
                      fontSize: '1rem',
                      background: theme.colors.surface,
                      color: theme.colors.text,
                      transition: 'border-color 0.3s ease'
                    }}
                    placeholder="your@email.com"
                    onFocus={(e) => e.target.style.borderColor = theme.colors.primary}
                    onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: theme.colors.text }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <Lock size={20} style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: theme.colors.textSecondary
                  }} />
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px 16px 16px 50px',
                      border: `2px solid ${theme.colors.border}`,
                      borderRadius: '12px',
                      fontSize: '1rem',
                      background: theme.colors.surface,
                      color: theme.colors.text,
                      transition: 'border-color 0.3s ease'
                    }}
                    placeholder="Create a strong password"
                    onFocus={(e) => e.target.style.borderColor = theme.colors.primary}
                    onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                  />
                </div>
                <p style={{ fontSize: '0.9rem', color: theme.colors.textSecondary, marginTop: '8px' }}>
                  Password should be at least 8 characters long
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '18px',
                  background: isLoading ? theme.colors.textSecondary : theme.colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) e.target.style.background = theme.colors.primaryHover || '#218838';
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) e.target.style.background = theme.colors.primary;
                }}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </motion.button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <p style={{ color: theme.colors.textSecondary }}>
                Already have an account? {' '}
                <Link
                  to="/login"
                  style={{
                    color: theme.colors.primary,
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <div style={{
              marginTop: '32px',
              padding: '20px',
              background: theme.colors.surface,
              borderRadius: '12px',
              fontSize: '14px',
              border: `1px solid ${theme.colors.border}`
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <UserPlus size={16} color={theme.colors.primary} style={{ marginRight: '8px' }} />
                <strong style={{ color: theme.colors.primary }}>Why Join FoodieHub?</strong>
              </div>
              <ul style={{ color: theme.colors.textSecondary, lineHeight: '1.5', margin: 0, paddingLeft: '20px' }}>
                <li>Fast delivery in 30 minutes</li>
                <li>Exclusive deals and discounts</li>
                <li>Track your orders in real-time</li>
                <li>Save your favorite restaurants</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default SignupPage;
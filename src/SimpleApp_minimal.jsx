import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

// Simple test components
const TestHome = () => (
  <div style={{ padding: '20px' }}>
    <h1>Home Page Working!</h1>
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/terms" style={{ marginRight: '10px', color: '#ff6b35' }}>Terms & Conditions</Link>
      <Link to="/privacy" style={{ marginRight: '10px', color: '#ff6b35' }}>Privacy Policy</Link>
      <Link to="/login" style={{ marginRight: '10px', color: '#ff6b35' }}>Login</Link>
    </nav>
    <p>Navigation is working correctly!</p>
  </div>
);

const TestTerms = () => (
  <div style={{ padding: '20px' }}>
    <h1>Terms & Conditions Page</h1>
    <Link to="/" style={{ color: '#ff6b35' }}>← Back to Home</Link>
    <p>This page is working correctly!</p>
  </div>
);

const TestPrivacy = () => (
  <div style={{ padding: '20px' }}>
    <h1>Privacy Policy Page</h1>
    <Link to="/" style={{ color: '#ff6b35' }}>← Back to Home</Link>
    <p>This page is working correctly!</p>
  </div>
);

const TestLogin = () => (
  <div style={{ padding: '20px' }}>
    <h1>Login Page</h1>
    <Link to="/" style={{ color: '#ff6b35' }}>← Back to Home</Link>
    <p>This page is working correctly!</p>
  </div>
);

function SimpleApp() {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<TestHome />} />
              <Route path="/terms" element={<TestTerms />} />
              <Route path="/privacy" element={<TestPrivacy />} />
              <Route path="/login" element={<TestLogin />} />
              <Route path="*" element={
                <div style={{ padding: '20px' }}>
                  <h1>404 - Page Not Found</h1>
                  <Link to="/" style={{ color: '#ff6b35' }}>← Back to Home</Link>
                </div>
              } />
            </Routes>
          </main>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default SimpleApp;
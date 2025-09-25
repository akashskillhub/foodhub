import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const TestApp = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Test App - React is Working!</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/terms" style={{ marginRight: '10px' }}>Terms</Link>
          <Link to="/privacy" style={{ marginRight: '10px' }}>Privacy</Link>
          <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Home Page Working</div>} />
          <Route path="/terms" element={<div>Terms Page Working</div>} />
          <Route path="/privacy" element={<div>Privacy Page Working</div>} />
          <Route path="/login" element={<div>Login Page Working</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default TestApp;
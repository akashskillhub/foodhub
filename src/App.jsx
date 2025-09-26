import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { AdminProvider } from './context/AdminContext';
import NavigationBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FoodWebsiteHome from './pages/FoodWebsiteHome';
import MenuPage from './pages/MenuPage';
import DishDetailPage from './pages/DishDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CorporatePage from './pages/CorporatePage';
import HelpPage from './pages/HelpPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AdminPage from './pages/AdminPage';
import CareersPage from './pages/CareersPage';
import TeamPage from './pages/TeamPage';
import FAQPage from './pages/FAQPage';
import SupportPage from './pages/SupportPage';
import PartnerPage from './pages/PartnerPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePage from './pages/CookiePage';
import TermsPage from './pages/TermsPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

/**
 * Main App Component
 * - Sets up routing for all pages
 * - Provides global context providers for cart, user, and admin
 * - Includes persistent layout components (Header, Footer, WhatsApp button)
 */
function App() {
  return (
    <div className="App">
      <UserProvider>
        <CartProvider>
          <AdminProvider>
            <Router>
              <NavigationBar />
              <main style={{ minHeight: '80vh' }}>
                <Routes>
                  <Route path="/" element={<FoodWebsiteHome />} />
                  <Route path="/menu" element={<MenuPage />} />
                  <Route path="/dish/:id" element={<DishDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/corporate" element={<CorporatePage />} />
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/account" element={<OrderHistoryPage />} />
                  <Route path="/orders" element={<OrderHistoryPage />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/blog" element={<div className="container py-5"><h1>Blog Coming Soon!</h1></div>} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiePage />} />
                  <Route path="/legal" element={<div className="container py-5"><h1>Legal Information</h1></div>} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/partner" element={<PartnerPage />} />
                  {/* 404 - Catch all unmatched routes */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </Router>
          </AdminProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { AdminProvider } from './context/AdminContext';
import { ThemeProvider } from './context/ThemeContext';
import ZomatoHomePage from './pages/ZomatoHomePage';
import MenuPage from './pages/MenuPage';
import ImprovedMenuPage from './pages/ImprovedMenuPage';
import CartPage from './pages/CartPage';
import FixedCartPage from './pages/FixedCartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AdminPage from './pages/AdminPage';
import ProjectPage from './pages/ProjectPage';
import DishDetailPage from './pages/DishDetailPage';
import RestaurantFilter from './components/RestaurantFilter';
import TermsConditionsPage from './pages/TermsConditionsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LegalPage from './pages/LegalPage';
import CompanyOverviewPage from './pages/CompanyOverviewPage';
import CareersPage from './pages/CareersPage';
import ContactUsPage from './pages/ContactUsPage';
import HelpSupportPage from './pages/HelpSupportPage';
import PartnerPage from './pages/PartnerPage';
import TeamPage from './pages/TeamPage';
import NotFoundPage from './pages/NotFoundPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import WhatsAppButton from './components/ui/WhatsAppButton';
import './App.css';

function SimpleApp() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <CartProvider>
            <AdminProvider>
            <Router>
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<ZomatoHomePage />} />
                  <Route path="/menu" element={<ImprovedMenuPage />} />
                  <Route path="/old-menu" element={<MenuPage />} />
                  <Route path="/cart" element={<FixedCartPage />} />
                  <Route path="/old-cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactUsPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/orders" element={<OrderHistoryPage />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/projects" element={<ProjectPage />} />
                  <Route path="/dish/:id" element={<DishDetailPage />} />
                  <Route path="/filters" element={<RestaurantFilter />} />
                  <Route path="/terms" element={<TermsConditionsPage />} />
                  <Route path="/cookies" element={<CookiePolicyPage />} />
                  <Route path="/privacy" element={<PrivacyPolicyPage />} />
                  <Route path="/legal" element={<LegalPage />} />
                  <Route path="/company" element={<CompanyOverviewPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/help" element={<HelpSupportPage />} />
                  <Route path="/partner" element={<PartnerPage />} />
                  <Route path="/investors" element={<InvestorRelationsPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <WhatsAppButton />
            </Router>
          </AdminProvider>
        </CartProvider>
      </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default SimpleApp;
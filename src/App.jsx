import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { AdminProvider } from './context/AdminContext';
import { ToastProvider } from './context/ToastContext';
import ToastContainer from './components/ui/ToastContainer';
import NavigationBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FoodWebsiteHome from './pages/FoodWebsiteHome';
import MenuPage from './pages/MenuPage';
import DishDetailPage from './pages/DishDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import MyAccountPage from './pages/MyAccountPage';
import FavouritesPage from './pages/FavouritesPage';
import OffersPage from './pages/OffersPage';
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
import ZomatoHomePage from './pages/ZomatoHomePage';
import CompanyOverviewPage from './pages/CompanyOverviewPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import ProjectPage from './pages/ProjectPage';
import LegalPage from './pages/LegalPage';
import ContactUsPage from './pages/ContactUsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import DishDetailsPage from './pages/DishDetailsPage';
import FixedCartPage from './pages/FixedCartPage';
import HelpSupportPage from './pages/HelpSupportPage';
import HomePage from './pages/HomePage';
import ImprovedMenuPage from './pages/ImprovedMenuPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import CompanyPage from './pages/CompanyPage';
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
            <ToastProvider>
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
                    <Route path="/account" element={<MyAccountPage />} />
                    <Route path="/favourites" element={<FavouritesPage />} />
                    <Route path="/offers" element={<OffersPage />} />
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
                    <Route path="/zom" element={<ZomatoHomePage />} />
                    <Route path="/company-overview" element={<CompanyOverviewPage />} />
                    <Route path="/investor-relations" element={<InvestorRelationsPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="/legal-info" element={<LegalPage />} />
                    {/* Alternative routes for remaining pages */}
                    <Route path="/contact-us" element={<ContactUsPage />} />
                    <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                    <Route path="/dish-details" element={<DishDetailsPage />} />
                    <Route path="/fixed-cart" element={<FixedCartPage />} />
                    <Route path="/help-support" element={<HelpSupportPage />} />
                    <Route path="/home-alt" element={<HomePage />} />
                    <Route path="/menu-improved" element={<ImprovedMenuPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms-conditions" element={<TermsConditionsPage />} />
                    <Route path="/company" element={<CompanyPage />} />
                    {/* 404 - Catch all unmatched routes */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
                <ToastContainer />
              </Router>
            </ToastProvider>
          </AdminProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
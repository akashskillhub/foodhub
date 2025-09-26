import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { AdminProvider } from './context/AdminContext';
import { ToastProvider } from './context/ToastContext';
import ToastContainer from './components/ui/ToastContainer';
import NavigationBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load all pages for better performance
const FoodWebsiteHome = lazy(() => import('./pages/FoodWebsiteHome'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const DishDetailPage = lazy(() => import('./pages/DishDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const MyAccountPage = lazy(() => import('./pages/MyAccountPage'));
const FavouritesPage = lazy(() => import('./pages/FavouritesPage'));
const OffersPage = lazy(() => import('./pages/OffersPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CorporatePage = lazy(() => import('./pages/CorporatePage'));
const HelpPage = lazy(() => import('./pages/HelpPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const OrderHistoryPage = lazy(() => import('./pages/OrderHistoryPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const PartnerPage = lazy(() => import('./pages/PartnerPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const CookiePage = lazy(() => import('./pages/CookiePage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const RestaurantHomePage = lazy(() => import('./pages/RestaurantHomePage'));
const CompanyOverviewPage = lazy(() => import('./pages/CompanyOverviewPage'));
const InvestorRelationsPage = lazy(() => import('./pages/InvestorRelationsPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const DishDetailsPage = lazy(() => import('./pages/DishDetailsPage'));
const FixedCartPage = lazy(() => import('./pages/FixedCartPage'));
const HelpSupportPage = lazy(() => import('./pages/HelpSupportPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ImprovedMenuPage = lazy(() => import('./pages/ImprovedMenuPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));
const CompanyPage = lazy(() => import('./pages/CompanyPage'));
import './App.css';

/**
 * Main App Component
 * - Sets up routing for all pages
 * - Provides global context providers for cart, user, and admin
 * - Includes persistent layout components (Header, Footer, WhatsApp button)
 */
function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <UserProvider>
          <CartProvider>
            <AdminProvider>
              <ToastProvider>
                <Router>
                  <NavigationBar />
                  <main style={{ minHeight: '80vh' }}>
                    <Suspense fallback={<LoadingSpinner />}>
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
                    <Route path="/restaurant-home" element={<RestaurantHomePage />} />
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
                    </Suspense>
                  </main>
                  <Footer />
                  <ToastContainer />
                </Router>
              </ToastProvider>
            </AdminProvider>
          </CartProvider>
        </UserProvider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedDishes from '../components/home/FeaturedDishes';
import QuickLinks from '../components/home/QuickLinks';
import Testimonials from '../components/home/Testimonials';
import PromotionsBanner from '../components/home/PromotionsBanner';
import NewsletterSection from '../components/home/NewsletterSection';
import './HomePage.css';

/**
 * Home Page Component
 * Features:
 * - Hero banner with call-to-action
 * - Featured dishes showcase
 * - Quick navigation links
 * - Customer testimonials
 * - Promotional banners
 * - Newsletter subscription
 */

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <PromotionsBanner />
      <FeaturedDishes />
      <QuickLinks />
      <Testimonials />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
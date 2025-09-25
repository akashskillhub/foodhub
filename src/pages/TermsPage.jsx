import React from 'react';
import { motion } from 'framer-motion';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';

const TermsPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <SimpleNavbar />

      <div style={{ paddingTop: '80px', paddingBottom: '50px', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <header style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '16px' }}>
                Terms & Conditions
              </h1>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                Last updated: January 2024
              </p>
            </header>

            <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>1. Agreement to Terms</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  By accessing and using FoodieHub's services, you accept and agree to be bound by the terms and provision of this agreement.
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  These Terms and Conditions govern your use of our food delivery platform and services provided by FoodieHub.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>2. Service Description</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  FoodieHub is an online platform that connects customers with restaurants and food establishments for food ordering and delivery services.
                </p>
                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  We facilitate orders but do not prepare, handle, or deliver food directly. All food preparation and initial handling is done by partner restaurants.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>3. User Responsibilities</h2>
                <ul style={{ color: '#666', lineHeight: '1.7', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '12px' }}>Provide accurate delivery information and contact details</li>
                  <li style={{ marginBottom: '12px' }}>Make payment for orders as agreed</li>
                  <li style={{ marginBottom: '12px' }}>Comply with all applicable laws and regulations</li>
                  <li style={{ marginBottom: '12px' }}>Not misuse our platform or services</li>
                  <li style={{ marginBottom: '12px' }}>Treat delivery personnel and restaurant staff with respect</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>4. Orders and Payment</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  All orders are subject to availability and acceptance by the restaurant. Prices may vary and are subject to change without notice.
                </p>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  Payment must be made at the time of ordering. We accept credit cards, debit cards, and cash on delivery where available.
                </p>
                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  Delivery fees and service charges will be clearly displayed before order confirmation.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>5. Cancellation and Refunds</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  Orders can be cancelled within 2 minutes of placement. After this time, cancellation may not be possible if preparation has begun.
                </p>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  Refunds for cancelled orders will be processed within 3-7 business days to the original payment method.
                </p>
                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  In case of food quality issues, please contact our customer support within 30 minutes of delivery for resolution.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>6. Delivery</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  Delivery times are estimates and may vary based on restaurant preparation time, weather, traffic, and order volume.
                </p>
                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  We are not responsible for delays caused by factors beyond our control. Delivery personnel will attempt to contact you if unable to locate the delivery address.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>7. Limitation of Liability</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  FoodieHub acts as an intermediary platform and is not liable for food quality, preparation, or food safety issues that are the responsibility of partner restaurants.
                </p>
                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  Our liability is limited to the order value and does not extend to consequential or indirect damages.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>8. Privacy</h2>
                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                </p>
              </section>

              <section>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>9. Contact Information</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  For any questions about these Terms & Conditions, please contact us:
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#333' }}><strong>Email:</strong> legal@foodiehub.com</p>
                  <p style={{ margin: '0 0 8px 0', color: '#333' }}><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p style={{ margin: '0', color: '#333' }}><strong>Address:</strong> 123 Food Street, Culinary City, FC 12345</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default TermsPage;
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users } from 'lucide-react';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';

const PrivacyPolicyPage = () => {
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
                Privacy Policy
              </h1>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                Last updated: January 2024
              </p>
            </header>

            <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <Shield size={48} color="#ff6b35" style={{ marginBottom: '12px' }} />
                  <h3 style={{ color: '#333', fontSize: '1.2rem', marginBottom: '8px' }}>Data Protection</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>Your data is encrypted and secured</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <Lock size={48} color="#ff6b35" style={{ marginBottom: '12px' }} />
                  <h3 style={{ color: '#333', fontSize: '1.2rem', marginBottom: '8px' }}>Secure Storage</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>Industry-standard security measures</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <Eye size={48} color="#ff6b35" style={{ marginBottom: '12px' }} />
                  <h3 style={{ color: '#333', fontSize: '1.2rem', marginBottom: '8px' }}>Transparency</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>Clear data usage policies</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <Users size={48} color="#ff6b35" style={{ marginBottom: '12px' }} />
                  <h3 style={{ color: '#333', fontSize: '1.2rem', marginBottom: '8px' }}>Your Rights</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>Full control over your data</p>
                </div>
              </div>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>1. Information We Collect</h2>

                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ color: '#ff6b35', fontSize: '1.4rem', marginBottom: '16px' }}>Personal Information</h3>
                  <ul style={{ color: '#666', lineHeight: '1.7', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>Name, email address, and phone number</li>
                    <li style={{ marginBottom: '8px' }}>Delivery addresses and location data</li>
                    <li style={{ marginBottom: '8px' }}>Payment information (processed securely by third-party providers)</li>
                    <li style={{ marginBottom: '8px' }}>Account preferences and settings</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ color: '#ff6b35', fontSize: '1.4rem', marginBottom: '16px' }}>Usage Information</h3>
                  <ul style={{ color: '#666', lineHeight: '1.7', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>Order history and preferences</li>
                    <li style={{ marginBottom: '8px' }}>Website navigation patterns</li>
                    <li style={{ marginBottom: '8px' }}>Device information and IP addresses</li>
                    <li style={{ marginBottom: '8px' }}>Cookies and tracking data</li>
                  </ul>
                </div>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>2. How We Use Your Information</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  We use your personal information to provide and improve our services, including:
                </p>
                <ul style={{ color: '#666', lineHeight: '1.7', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '12px' }}>Processing and fulfilling your food orders</li>
                  <li style={{ marginBottom: '12px' }}>Communicating about your orders and account</li>
                  <li style={{ marginBottom: '12px' }}>Personalizing your experience and recommendations</li>
                  <li style={{ marginBottom: '12px' }}>Improving our platform and services</li>
                  <li style={{ marginBottom: '12px' }}>Sending promotional offers (with your consent)</li>
                  <li style={{ marginBottom: '12px' }}>Ensuring platform security and preventing fraud</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>3. Information Sharing</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  We share your information only as necessary to provide our services:
                </p>

                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <h4 style={{ color: '#333', marginBottom: '12px' }}>With Restaurant Partners:</h4>
                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>
                    We share order details and delivery information with restaurants to fulfill your orders.
                  </p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <h4 style={{ color: '#333', marginBottom: '12px' }}>With Delivery Partners:</h4>
                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>
                    We share necessary delivery information with our delivery personnel and partners.
                  </p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <h4 style={{ color: '#333', marginBottom: '12px' }}>With Service Providers:</h4>
                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>
                    We work with trusted third parties for payment processing, analytics, and customer support.
                  </p>
                </div>

                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  We never sell your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>4. Data Security</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  We implement comprehensive security measures to protect your personal information:
                </p>
                <ul style={{ color: '#666', lineHeight: '1.7', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '12px' }}>SSL encryption for all data transmission</li>
                  <li style={{ marginBottom: '12px' }}>Secure servers with restricted access</li>
                  <li style={{ marginBottom: '12px' }}>Regular security audits and updates</li>
                  <li style={{ marginBottom: '12px' }}>PCI DSS compliance for payment data</li>
                  <li style={{ marginBottom: '12px' }}>Employee training on data protection</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>5. Your Rights and Choices</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  You have several rights regarding your personal information:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px' }}>
                    <h4 style={{ color: '#ff6b35', marginBottom: '8px' }}>Access</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Request a copy of your personal data</p>
                  </div>
                  <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px' }}>
                    <h4 style={{ color: '#ff6b35', marginBottom: '8px' }}>Correction</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Update or correct your information</p>
                  </div>
                  <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px' }}>
                    <h4 style={{ color: '#ff6b35', marginBottom: '8px' }}>Deletion</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Request deletion of your account</p>
                  </div>
                  <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px' }}>
                    <h4 style={{ color: '#ff6b35', marginBottom: '8px' }}>Portability</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Export your data in a readable format</p>
                  </div>
                </div>

                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  To exercise these rights, please contact our privacy team at privacy@foodiehub.com.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>6. Data Retention</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  We retain your personal information only as long as necessary to provide our services and comply with legal obligations:
                </p>
                <ul style={{ color: '#666', lineHeight: '1.7', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Account information: Until account deletion</li>
                  <li style={{ marginBottom: '8px' }}>Order history: 3 years for business records</li>
                  <li style={{ marginBottom: '8px' }}>Payment data: As required by payment processors</li>
                  <li style={{ marginBottom: '8px' }}>Marketing data: Until you opt out</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>7. Children's Privacy</h2>
                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                  If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>8. Changes to This Policy</h2>
                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through our platform.
                  Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '20px' }}>9. Contact Us</h2>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                  For any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#333' }}><strong>Privacy Officer:</strong> privacy@foodiehub.com</p>
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

export default PrivacyPolicyPage;
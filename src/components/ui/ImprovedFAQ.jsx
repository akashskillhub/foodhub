import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, BookOpen, MessageCircle, HelpCircle } from 'lucide-react';

const ImprovedFAQ = ({ faqs, title = "Frequently Asked Questions", showSearch = true }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [filteredFaqs, setFilteredFaqs] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredFaqs(faqs);
    } else {
      const filtered = faqs.map(category => ({
        ...category,
        questions: category.questions.filter(
          faq =>
            faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.questions.length > 0);
      setFilteredFaqs(filtered);
    }
  }, [searchTerm, faqs]);

  const toggleFaq = (categoryIndex, questionIndex) => {
    const faqId = `${categoryIndex}-${questionIndex}`;
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const getTotalQuestions = () => {
    return filteredFaqs.reduce((total, category) => total + category.questions.length, 0);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <HelpCircle size={48} color="#ff6b35" />
        </div>
        <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '16px' }}>{title}</h2>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Find answers to common questions. {getTotalQuestions()} questions available.
        </p>
      </motion.div>

      {/* Search Bar */}
      {showSearch && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 40px' }}
        >
          <Search size={20} style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#999'
          }} />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 16px 16px 50px',
              fontSize: '1rem',
              border: '2px solid #f0f0f0',
              borderRadius: '12px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}
            onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
            onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
          />
          {searchTerm && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSearchTerm('')}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              ×
            </motion.button>
          )}
        </motion.div>
      )}

      {/* FAQ Content */}
      <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
        <AnimatePresence mode="wait">
          {filteredFaqs.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ textAlign: 'center', padding: '60px 20px', color: '#666' }}
            >
              <BookOpen size={48} color="#ccc" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#333' }}>
                No results found
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
                No FAQ matches "{searchTerm}". Try different keywords or browse all categories.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  padding: '12px 24px',
                  background: '#ff6b35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Show All Questions
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredFaqs.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  style={{ marginBottom: '40px' }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px',
                    paddingBottom: '16px',
                    borderBottom: '2px solid #f8f9fa'
                  }}>
                    <MessageCircle size={24} color="#ff6b35" />
                    <h3 style={{
                      fontSize: '1.8rem',
                      color: '#ff6b35',
                      fontWeight: 'bold',
                      margin: 0
                    }}>
                      {category.category}
                    </h3>
                    <span style={{
                      background: '#ff6b35',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}>
                      {category.questions.length} questions
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {category.questions.map((faq, questionIndex) => {
                      const faqId = `${categoryIndex}-${questionIndex}`;
                      const isExpanded = expandedFaq === faqId;

                      return (
                        <motion.div
                          key={questionIndex}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: questionIndex * 0.05 }}
                          style={{
                            border: '2px solid #f0f0f0',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            background: isExpanded ? '#fafbfc' : 'white',
                            transition: 'all 0.3s ease'
                          }}
                          whileHover={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                        >
                          <motion.button
                            onClick={() => toggleFaq(categoryIndex, questionIndex)}
                            style={{
                              width: '100%',
                              padding: '24px',
                              background: 'transparent',
                              border: 'none',
                              textAlign: 'left',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              cursor: 'pointer',
                              fontSize: '1.1rem',
                              fontWeight: '600',
                              color: '#333',
                              transition: 'color 0.3s ease'
                            }}
                            whileHover={{ color: '#ff6b35' }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span style={{ paddingRight: '20px' }}>{faq.q}</span>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={20} color={isExpanded ? '#ff6b35' : '#666'} />
                            </motion.div>
                          </motion.button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                key="answer"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut"
                                }}
                                style={{ overflow: 'hidden' }}
                              >
                                <div style={{
                                  padding: '0 24px 24px',
                                  borderTop: '1px solid #f0f0f0',
                                  marginTop: '-1px'
                                }}>
                                  <motion.div
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    style={{
                                      color: '#666',
                                      lineHeight: '1.7',
                                      fontSize: '1rem',
                                      paddingTop: '16px'
                                    }}
                                  >
                                    {faq.a}
                                  </motion.div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Help Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          marginTop: '40px'
        }}
      >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Still need help?</h3>
        <p style={{ marginBottom: '24px', opacity: 0.9 }}>
          Can't find the answer you're looking for? Our support team is here to help.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '2px solid white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#ff6b35';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
              e.target.style.color = 'white';
            }}
          >
            Contact Support
          </button>
          <button
            style={{
              background: 'white',
              color: '#ff6b35',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Live Chat
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ImprovedFAQ;
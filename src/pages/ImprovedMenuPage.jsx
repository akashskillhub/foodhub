import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Search, Filter, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAdmin } from '../context/AdminContext';
// Removed problematic SimpleNavbar and SimpleFooter imports

const ImprovedMenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const { addItem } = useCart();
  const { menuItems } = useAdmin();

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️', count: menuItems.length },
    { id: 'starters', name: 'Starters', icon: '🥗', count: menuItems.filter(item => item.category === 'starters').length },
    { id: 'mains', name: 'Main Course', icon: '🍖', count: menuItems.filter(item => item.category === 'mains').length },
    { id: 'desserts', name: 'Desserts', icon: '🍰', count: menuItems.filter(item => item.category === 'desserts').length },
    { id: 'beverages', name: 'Beverages', icon: '🥤', count: menuItems.filter(item => item.category === 'beverages').length }
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return b.rating - a.rating; // Default to popular (by rating)
    }
  });

  const handleAddToCart = (item) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f8f9fa', minHeight: '100vh', paddingTop: '100px' }}>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        color: 'white',
        padding: '80px 0 60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop&overlay=0xff6b35&overlay-blend=multiply") center/cover',
          opacity: 0.2
        }} />

        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
              Delicious Menu
            </h1>
            <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Discover our carefully curated selection of mouth-watering dishes made with fresh ingredients
            </p>

            {/* Search and Filter Bar */}
            <div style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '20px',
              maxWidth: '800px',
              margin: '0 auto',
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* Search */}
              <div style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
                <Search size={20} style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#666'
                }} />
                <input
                  type="text"
                  placeholder="Search for dishes, cuisines..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 16px 16px 48px',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '16px',
                    background: 'white'
                  }}
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '16px',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  background: 'white',
                  minWidth: '160px'
                }}
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '40px 0', background: 'white', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '20px',
                  border: selectedCategory === category.id ? '3px solid #ff6b35' : '2px solid #e9ecef',
                  background: selectedCategory === category.id ? '#ff6b35' : 'white',
                  color: selectedCategory === category.id ? 'white' : '#333',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '120px'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span style={{ fontSize: '24px' }}>{category.icon}</span>
                <span style={{ fontWeight: '600', fontSize: '14px' }}>{category.name}</span>
                <span style={{ fontSize: '12px', opacity: 0.8 }}>({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 12px 48px rgba(0,0,0,0.18)' }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <button style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(255,255,255,0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}>
                    <Heart size={18} color="#ff6b35" />
                  </button>

                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '15px',
                    background: '#ff6b35',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}>
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#2c3e50'
                  }}>
                    {item.name}
                  </h3>

                  <p style={{
                    color: '#666',
                    lineHeight: '1.5',
                    marginBottom: '16px',
                    fontSize: '14px'
                  }}>
                    {item.description}
                  </p>

                  {/* Rating and Reviews */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: '#28a745',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      <Star size={12} fill="white" />
                      <span>{item.rating}</span>
                    </div>
                    <span style={{ color: '#999', fontSize: '14px' }}>
                      ({item.reviews || 0} reviews)
                    </span>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginLeft: 'auto',
                      color: '#666',
                      fontSize: '12px'
                    }}>
                      <Clock size={12} />
                      <span>25-30 mins</span>
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '20px',
                    borderTop: '1px solid #f0f0f0'
                  }}>
                    <div>
                      <span style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#ff6b35'
                      }}>
                        ${item.price}
                      </span>
                      <span style={{ color: '#999', fontSize: '12px', marginLeft: '4px' }}>
                        for one
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link
                        to={`/dish/${item.id}`}
                        style={{
                          padding: '10px 16px',
                          border: '2px solid #ff6b35',
                          color: '#ff6b35',
                          textDecoration: 'none',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#ff6b35';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#ff6b35';
                        }}
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleAddToCart(item)}
                        style={{
                          padding: '10px 20px',
                          background: '#ff6b35',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#e55a2b';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = '#ff6b35';
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center',
                padding: '80px 20px',
                color: '#666'
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🍽️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>No dishes found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                style={{
                  marginTop: '20px',
                  padding: '12px 24px',
                  background: '#ff6b35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ImprovedMenuPage;
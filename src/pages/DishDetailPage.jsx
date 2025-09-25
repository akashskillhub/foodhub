import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, ChefHat, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { useCart } from '../context/CartContext';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';

const DishDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { menuItems } = useAdmin();
  const { addItem } = useCart();

  const dish = menuItems.find(item => item.id === parseInt(id));

  if (!dish) {
    return (
      <div>
        <SimpleNavbar />
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2>Dish not found</h2>
          <button
            onClick={() => navigate('/menu')}
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
            Back to Menu
          </button>
        </div>
        <SimpleFooter />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      category: dish.category
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f8f9fa' }}>
      <SimpleNavbar />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px 60px' }}>
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/menu')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'white',
            border: '2px solid #ff6b35',
            color: '#ff6b35',
            padding: '10px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '30px',
            fontSize: '14px',
            fontWeight: '600'
          }}
        >
          <ArrowLeft size={18} />
          Back to Menu
        </motion.button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
              <img
                src={dish.image}
                alt={dish.name}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                gap: '10px'
              }}>
                <button style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Heart size={20} color="#ff6b35" />
                </button>
                <button style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Share2 size={20} color="#ff6b35" />
                </button>
              </div>

              {/* Category Badge */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: '#ff6b35',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}>
                {dish.category}
              </div>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
          >
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
              {dish.name}
            </h1>

            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
              {dish.description}
            </p>

            {/* Rating and Reviews */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: '#28a745',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold'
              }}>
                <Star size={16} fill="white" />
                <span>{dish.rating}</span>
              </div>
              <span style={{ color: '#666', fontSize: '16px' }}>
                ({dish.reviews || 0} reviews)
              </span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#666',
                fontSize: '16px'
              }}>
                <Clock size={16} />
                <span>25-30 mins</span>
              </div>
            </div>

            {/* Price */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '4px' }}>
                ${dish.price}
              </div>
              <div style={{ color: '#666', fontSize: '14px' }}>
                Price for one serving
              </div>
            </div>

            {/* Nutritional Info */}
            {dish.nutritionalInfo && (
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#333', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ChefHat size={20} />
                  Nutritional Information
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', color: '#ff6b35', fontSize: '1.2rem' }}>
                      {dish.nutritionalInfo.calories}
                    </div>
                    <div style={{ color: '#666', fontSize: '14px' }}>Calories</div>
                  </div>
                  <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', color: '#ff6b35', fontSize: '1.2rem' }}>
                      {dish.nutritionalInfo.protein}g
                    </div>
                    <div style={{ color: '#666', fontSize: '14px' }}>Protein</div>
                  </div>
                  <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', color: '#ff6b35', fontSize: '1.2rem' }}>
                      {dish.nutritionalInfo.carbs}g
                    </div>
                    <div style={{ color: '#666', fontSize: '14px' }}>Carbs</div>
                  </div>
                  <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', color: '#ff6b35', fontSize: '1.2rem' }}>
                      {dish.nutritionalInfo.fat}g
                    </div>
                    <div style={{ color: '#666', fontSize: '14px' }}>Fat</div>
                  </div>
                </div>
              </div>
            )}

            {/* Ingredients */}
            {dish.ingredients && (
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#333', marginBottom: '16px' }}>
                  Ingredients
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {dish.ingredients.map((ingredient, index) => (
                    <span key={index} style={{
                      background: '#e9ecef',
                      color: '#333',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              style={{
                width: '100%',
                padding: '18px',
                background: '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
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
              Add to Cart - ${dish.price}
            </motion.button>

            <div style={{
              marginTop: '16px',
              padding: '12px',
              background: '#e8f5e8',
              borderRadius: '8px',
              textAlign: 'center',
              color: '#28a745',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              ✓ Free delivery on orders above $25
            </div>
          </motion.div>
        </div>

        {/* Similar Items Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '80px' }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '30px', textAlign: 'center' }}>
            You might also like
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {menuItems
              .filter(item => item.category === dish.category && item.id !== dish.id)
              .slice(0, 3)
              .map(item => (
                <div key={item.id} style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
                onClick={() => navigate(`/dish/${item.id}`)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                      {item.name}
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ff6b35' }}>
                        ${item.price}
                      </span>
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
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default DishDetailPage;
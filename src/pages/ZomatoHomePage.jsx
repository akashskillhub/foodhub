import React, { useState } from 'react';
import { Search, Star, Clock, MapPin, Phone, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import SimpleNavbar from '../components/ui/SimpleNavbar';

const ZomatoHomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    price: '',
    diet: '',
    sort: ''
  });

  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Domino's Pizza",
      cuisine: "Pizza, Fast Food",
      rating: 4.2,
      deliveryTime: "25-30 mins",
      priceForTwo: 400,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&crop=entropy&auto=format",
      offer: "50% OFF up to ₹100",
      diet: "nonveg",
      fastDelivery: false
    },
    {
      id: 2,
      name: "McDonald's",
      cuisine: "Burgers, Fast Food",
      rating: 4.1,
      deliveryTime: "20-25 mins",
      priceForTwo: 350,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop&crop=entropy&auto=format",
      offer: "Buy 1 Get 1 Free",
      diet: "nonveg",
      fastDelivery: true
    },
    {
      id: 3,
      name: "KFC",
      cuisine: "Chicken, Fast Food",
      rating: 4.0,
      deliveryTime: "30-35 mins",
      priceForTwo: 450,
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop&crop=entropy&auto=format",
      offer: "20% OFF",
      diet: "nonveg",
      fastDelivery: false
    },
    {
      id: 4,
      name: "Subway",
      cuisine: "Healthy Food, Sandwiches",
      rating: 4.3,
      deliveryTime: "15-20 mins",
      priceForTwo: 300,
      image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop&crop=entropy&auto=format",
      offer: "Free Cookie with any Sub",
      diet: "veg",
      fastDelivery: true
    },
    {
      id: 5,
      name: "Pizza Hut",
      cuisine: "Pizza, Italian",
      rating: 4.0,
      deliveryTime: "35-40 mins",
      priceForTwo: 500,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop&crop=entropy&auto=format",
      offer: "30% OFF on orders above ₹299",
      diet: "nonveg",
      fastDelivery: false
    },
    {
      id: 6,
      name: "Taco Bell",
      cuisine: "Mexican, Fast Food",
      rating: 3.9,
      deliveryTime: "25-30 mins",
      priceForTwo: 400,
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop&crop=entropy&auto=format",
      offer: "Free Nacho with any Taco",
      diet: "nonveg",
      fastDelivery: false
    },
    {
      id: 7,
      name: "Pure Veg Delights",
      cuisine: "Indian Vegetarian",
      rating: 4.4,
      deliveryTime: "20-25 mins",
      priceForTwo: 280,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop&crop=entropy&auto=format",
      offer: "15% OFF",
      diet: "veg",
      fastDelivery: true
    },
    {
      id: 8,
      name: "Green Garden",
      cuisine: "Pure Vegetarian, South Indian",
      rating: 4.2,
      deliveryTime: "15-20 mins",
      priceForTwo: 250,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop&crop=entropy&auto=format",
      offer: "Free Dessert",
      diet: "veg",
      fastDelivery: true
    }
  ];

  const cities = [
    'Bangalore', 'Pune', 'Mumbai', 'Delhi', 'Hyderabad',
    'Kolkata', 'Chennai', 'Chandigarh', 'Ahmedabad', 'Jaipur', 'Nagpur'
  ];

  const cuisines = [
    'Chinese', 'South Indian', 'Indian', 'Kerala', 'Korean',
    'North Indian', 'Seafood', 'Bengali', 'Punjabi', 'Italian', 'Andhra'
  ];

  const offers = [
    {
      title: "50% OFF",
      description: "On your first 3 orders",
      code: "FIRST50",
      validTill: "31st Dec 2024"
    },
    {
      title: "Free Delivery",
      description: "On orders above ₹199",
      code: "FREEDEL",
      validTill: "Limited time"
    },
    {
      title: "Buy 1 Get 1",
      description: "On selected restaurants",
      code: "BOGO",
      validTill: "This weekend only"
    }
  ];

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value
    }));
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesPrice = !selectedFilters.price ||
      (selectedFilters.price === 'under300' && restaurant.priceForTwo < 300) ||
      (selectedFilters.price === '300to600' && restaurant.priceForTwo >= 300 && restaurant.priceForTwo <= 600);

    const matchesDiet = !selectedFilters.diet ||
      (selectedFilters.diet === 'veg' && restaurant.diet === 'veg') ||
      (selectedFilters.diet === 'nonveg' && restaurant.diet === 'nonveg');

    const matchesSort = !selectedFilters.sort ||
      (selectedFilters.sort === 'rating4+' && restaurant.rating >= 4.0) ||
      (selectedFilters.sort === 'fastdelivery' && restaurant.fastDelivery);

    return matchesPrice && matchesDiet && matchesSort;
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
      <SimpleNavbar />

      {/* Filters Section */}
      <section style={{ background: '#f8f9fa', padding: '20px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}>
              <Filter size={18} />
              <span style={{ fontWeight: '600' }}>Filters:</span>
            </div>

            {/* Price Filters */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => handleFilterChange('price', 'under300')}
                style={{
                  padding: '8px 16px',
                  background: selectedFilters.price === 'under300' ? '#ff6b35' : 'white',
                  color: selectedFilters.price === 'under300' ? 'white' : '#333',
                  border: '2px solid #ff6b35',
                  borderRadius: '20px',
                  cursor: 'pointer'
                }}
              >
                Less than ₹300
              </button>
              <button
                onClick={() => handleFilterChange('price', '300to600')}
                style={{
                  padding: '8px 16px',
                  background: selectedFilters.price === '300to600' ? '#ff6b35' : 'white',
                  color: selectedFilters.price === '300to600' ? 'white' : '#333',
                  border: '2px solid #ff6b35',
                  borderRadius: '20px',
                  cursor: 'pointer'
                }}
              >
                ₹300-₹600
              </button>
            </div>

            {/* Diet Filters */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => handleFilterChange('diet', 'veg')}
                style={{
                  padding: '8px 16px',
                  background: selectedFilters.diet === 'veg' ? '#28a745' : 'white',
                  color: selectedFilters.diet === 'veg' ? 'white' : '#333',
                  border: '2px solid #28a745',
                  borderRadius: '20px',
                  cursor: 'pointer'
                }}
              >
                Pure Veg
              </button>
              <button
                onClick={() => handleFilterChange('diet', 'nonveg')}
                style={{
                  padding: '8px 16px',
                  background: selectedFilters.diet === 'nonveg' ? '#dc3545' : 'white',
                  color: selectedFilters.diet === 'nonveg' ? 'white' : '#333',
                  border: '2px solid #dc3545',
                  borderRadius: '20px',
                  cursor: 'pointer'
                }}
              >
                Non Veg
              </button>
            </div>

            {/* Sort Options */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => handleFilterChange('sort', 'fastdelivery')}
                style={{
                  padding: '8px 16px',
                  background: selectedFilters.sort === 'fastdelivery' ? '#17a2b8' : 'white',
                  color: selectedFilters.sort === 'fastdelivery' ? 'white' : '#333',
                  border: '2px solid #17a2b8',
                  borderRadius: '20px',
                  cursor: 'pointer'
                }}
              >
                Fast Delivery
              </button>
              <button
                onClick={() => handleFilterChange('sort', 'rating4+')}
                style={{
                  padding: '8px 16px',
                  background: selectedFilters.sort === 'rating4+' ? '#ffc107' : 'white',
                  color: selectedFilters.sort === 'rating4+' ? '#000' : '#333',
                  border: '2px solid #ffc107',
                  borderRadius: '20px',
                  cursor: 'pointer'
                }}
              >
                Ratings 4.0+
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

        {/* Restaurants Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          style={{ padding: '40px 0' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', color: '#333', textAlign: 'center' }}
          >
            Top restaurants in Mumbai
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {filteredRestaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 8px 25px rgba(255,107,53,0.15)',
                  y: -5
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x200/ff6b35/ffffff?text=${encodeURIComponent(restaurant.name)}`;
                    }}
                  />
                  {restaurant.offer && (
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      background: '#ff6b35',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {restaurant.offer}
                    </div>
                  )}
                </div>

                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', color: '#333' }}>
                    {restaurant.name}
                  </h3>
                  <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                    {restaurant.cuisine}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={14} fill="#ffc107" color="#ffc107" />
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>{restaurant.rating}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#666' }}>
                      <Clock size={14} />
                      <span style={{ fontSize: '14px' }}>{restaurant.deliveryTime}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '14px', color: '#333' }}>
                    ₹{restaurant.priceForTwo} for two
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Offers Section */}
        <section style={{ background: '#f8f9fa', margin: '40px -20px', padding: '40px 20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
            Special Offers
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                  color: 'white',
                  padding: '24px',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>
                  {offer.title}
                </h3>
                <p style={{ fontSize: '16px', marginBottom: '12px', opacity: 0.9 }}>
                  {offer.description}
                </p>
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  marginBottom: '8px'
                }}>
                  Code: {offer.code}
                </div>
                <p style={{ fontSize: '12px', opacity: 0.8 }}>
                  Valid till {offer.validTill}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Best Places to Eat Across Cities */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ padding: '40px 0' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', color: '#333', textAlign: 'center' }}
          >
            Best Places to Eat Across Cities
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {cities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                  border: '1px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '25px 20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(255,107,53,0.15)',
                  borderColor: '#ff6b35'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3
                  style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}
                  whileHover={{ color: '#ff6b35' }}
                >
                  Best Restaurants in {city}
                </motion.h3>
                <motion.button
                  style={{
                    background: 'transparent',
                    color: '#ff6b35',
                    border: '2px solid #ff6b35',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{
                    background: '#ff6b35',
                    color: 'white',
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Best Cuisines Near Me */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ padding: '40px 0' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', color: '#333', textAlign: 'center' }}
          >
            Best Cuisines Near Me
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {cuisines.map((cuisine, index) => (
              <motion.div
                key={cuisine}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                  border: '1px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '25px 20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transformStyle: 'preserve-3d'
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 10px 30px rgba(255,107,53,0.2)',
                  borderColor: '#ff6b35',
                  background: 'linear-gradient(135deg, #fff 0%, #fff5f3 100%)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3
                  style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}
                  whileHover={{ color: '#ff6b35', scale: 1.02 }}
                >
                  {cuisine} Restaurant Near Me
                </motion.h3>
                <motion.button
                  style={{
                    background: 'linear-gradient(45deg, transparent, transparent)',
                    color: '#ff6b35',
                    border: '2px solid #ff6b35',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{
                    background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                    color: 'white',
                    scale: 1.05,
                    boxShadow: '0 4px 15px rgba(255,107,53,0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>


        {/* Explore Restaurants Section */}
        <section style={{ padding: '40px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', color: '#333' }}>
            Explore More
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button style={{
              background: '#ff6b35',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <MapPin size={18} />
              Explore Restaurants Near Me
            </button>

            <button style={{
              background: 'white',
              color: '#ff6b35',
              border: '2px solid #ff6b35',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Star size={18} />
              Explore Top Rated Restaurants Near Me
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ background: '#2c3e50', color: 'white', padding: '50px 0 30px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            {/* Company Info */}
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#ff6b35' }}>
                FoodieHub
              </h3>
              <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                Discover the best food & drinks in Mumbai. Fast delivery, great taste, amazing experience.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} />
                <span>Customer Support: 9284123374</span>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms & Conditions</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Cookie Policy</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Legal</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Investor Relations</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Careers</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Team</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact us</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Help & Support</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Partner with us</a></li>
              </ul>
            </div>

            {/* Available Locations */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>Available Locations</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Bangalore</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Gurgaon</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Hyderabad</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Delhi</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Mumbai</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Pune</a></li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #34495e' }}>
            <p style={{ margin: 0 }}>
              © 2024 FoodieHub. All rights reserved. | Made with ❤️ for food lovers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZomatoHomePage;
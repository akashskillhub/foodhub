import React, { useState, useEffect } from 'react';

const RestaurantFilter = () => {
  const [filters, setFilters] = useState({
    price: [],
    diet: [],
    sorting: []
  });

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Dummy restaurant data
  const restaurantData = [
    { id: 1, name: "Veg Biryani", price: 250, type: "veg", rating: 4.5, deliveryTime: 25, image: "https://images.unsplash.com/photo-1563379091339-03246963d388?w=300&h=200&fit=crop" },
    { id: 2, name: "Chicken Curry", price: 450, type: "nonveg", rating: 4.2, deliveryTime: 40, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop" },
    { id: 3, name: "Paneer Roll", price: 320, type: "veg", rating: 3.9, deliveryTime: 20, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop" },
    { id: 4, name: "Masala Dosa", price: 180, type: "veg", rating: 4.3, deliveryTime: 15, image: "https://images.unsplash.com/photo-1694271120733-6f0c63a433a6?w=300&h=200&fit=crop" },
    { id: 5, name: "Butter Chicken", price: 380, type: "nonveg", rating: 4.6, deliveryTime: 35, image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop" },
    { id: 6, name: "Veg Thali", price: 280, type: "veg", rating: 4.1, deliveryTime: 25, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
    { id: 7, name: "Fish Curry", price: 420, type: "nonveg", rating: 4.0, deliveryTime: 45, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=200&fit=crop" },
    { id: 8, name: "Aloo Paratha", price: 150, type: "veg", rating: 4.2, deliveryTime: 18, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
    { id: 9, name: "Mutton Biryani", price: 520, type: "nonveg", rating: 4.7, deliveryTime: 50, image: "https://images.unsplash.com/photo-1563379091339-03246963d388?w=300&h=200&fit=crop" },
    { id: 10, name: "Chole Bhature", price: 200, type: "veg", rating: 4.0, deliveryTime: 22, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" }
  ];

  // Filter function
  const applyFilters = (data) => {
    let filtered = [...data];

    // Apply price filter
    if (filters.price.length > 0) {
      filtered = filtered.filter(item => {
        return filters.price.some(priceRange => {
          if (priceRange === 'under300') return item.price < 300;
          if (priceRange === '300to600') return item.price >= 300 && item.price <= 600;
          return false;
        });
      });
    }

    // Apply diet filter
    if (filters.diet.length > 0) {
      filtered = filtered.filter(item => {
        return filters.diet.includes(item.type);
      });
    }

    // Apply sorting
    if (filters.sorting.length > 0) {
      filters.sorting.forEach(sort => {
        if (sort === 'fastDelivery') {
          filtered = filtered.sort((a, b) => a.deliveryTime - b.deliveryTime);
        } else if (sort === 'rating4plus') {
          filtered = filtered.filter(item => item.rating >= 4.0);
        }
      });
    }

    return filtered;
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const currentFilters = prev[filterType];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(item => item !== value)
        : [...currentFilters, value];

      return {
        ...prev,
        [filterType]: newFilters
      };
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      price: [],
      diet: [],
      sorting: []
    });
  };

  // Apply filters whenever filters change
  useEffect(() => {
    const filtered = applyFilters(restaurantData);
    setFilteredRestaurants(filtered);
  }, [filters]);

  // Initialize with all restaurants
  useEffect(() => {
    setFilteredRestaurants(restaurantData);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
            Restaurant Filters
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Filter restaurants by price, diet preferences, and more
          </p>
        </div>

        {/* Filters Section */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginBottom: '30px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', margin: 0 }}>Filters</h2>
            <button
              onClick={clearAllFilters}
              style={{
                background: 'transparent',
                color: '#ff6b35',
                border: '2px solid #ff6b35',
                borderRadius: '6px',
                padding: '8px 16px',
                cursor: 'pointer',
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
              Clear All
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {/* Price Filter */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#333', marginBottom: '15px' }}>Price Range</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { id: 'under300', label: 'Less than ₹300', count: restaurantData.filter(item => item.price < 300).length },
                  { id: '300to600', label: '₹300 - ₹600', count: restaurantData.filter(item => item.price >= 300 && item.price <= 600).length }
                ].map(option => (
                  <label key={option.id} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '15px' }}>
                    <input
                      type="checkbox"
                      checked={filters.price.includes(option.id)}
                      onChange={() => handleFilterChange('price', option.id)}
                      style={{ marginRight: '10px', transform: 'scale(1.2)' }}
                    />
                    <span style={{ color: '#333', fontWeight: '500' }}>{option.label}</span>
                    <span style={{ color: '#999', fontSize: '13px', marginLeft: '8px' }}>({option.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Diet Filter */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#333', marginBottom: '15px' }}>Diet Preference</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { id: 'veg', label: 'Pure Veg', count: restaurantData.filter(item => item.type === 'veg').length },
                  { id: 'nonveg', label: 'Non Veg', count: restaurantData.filter(item => item.type === 'nonveg').length }
                ].map(option => (
                  <label key={option.id} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '15px' }}>
                    <input
                      type="checkbox"
                      checked={filters.diet.includes(option.id)}
                      onChange={() => handleFilterChange('diet', option.id)}
                      style={{ marginRight: '10px', transform: 'scale(1.2)' }}
                    />
                    <span style={{ color: '#333', fontWeight: '500' }}>{option.label}</span>
                    <span style={{ color: '#999', fontSize: '13px', marginLeft: '8px' }}>({option.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sorting Filter */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#333', marginBottom: '15px' }}>Sort & Filter</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { id: 'fastDelivery', label: 'Fast Delivery', count: restaurantData.filter(item => item.deliveryTime <= 30).length },
                  { id: 'rating4plus', label: 'Ratings 4.0+', count: restaurantData.filter(item => item.rating >= 4.0).length }
                ].map(option => (
                  <label key={option.id} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '15px' }}>
                    <input
                      type="checkbox"
                      checked={filters.sorting.includes(option.id)}
                      onChange={() => handleFilterChange('sorting', option.id)}
                      style={{ marginRight: '10px', transform: 'scale(1.2)' }}
                    />
                    <span style={{ color: '#333', fontWeight: '500' }}>{option.label}</span>
                    <span style={{ color: '#999', fontSize: '13px', marginLeft: '8px' }}>({option.count})</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(filters.price.length > 0 || filters.diet.length > 0 || filters.sorting.length > 0) && (
            <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#333', marginBottom: '12px' }}>Active Filters:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {filters.price.map(filter => (
                  <span key={filter} style={{
                    background: '#ff6b35',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}>
                    {filter === 'under300' ? 'Under ₹300' : '₹300-₹600'}
                  </span>
                ))}
                {filters.diet.map(filter => (
                  <span key={filter} style={{
                    background: '#28a745',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}>
                    {filter === 'veg' ? 'Pure Veg' : 'Non Veg'}
                  </span>
                ))}
                {filters.sorting.map(filter => (
                  <span key={filter} style={{
                    background: '#007bff',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}>
                    {filter === 'fastDelivery' ? 'Fast Delivery' : 'Ratings 4.0+'}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', margin: 0 }}>
              Restaurants ({filteredRestaurants.length})
            </h2>
            <div style={{ color: '#666', fontSize: '14px' }}>
              Showing {filteredRestaurants.length} of {restaurantData.length} restaurants
            </div>
          </div>

          {/* Restaurant Grid */}
          {filteredRestaurants.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '25px'
            }}>
              {filteredRestaurants.map(restaurant => (
                <div key={restaurant.id} style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}>
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#333', marginBottom: '8px' }}>
                      {restaurant.name}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          background: restaurant.rating >= 4.0 ? '#28a745' : '#ffc107',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 'bold'
                        }}>
                          ⭐ {restaurant.rating}
                        </span>
                        <span style={{ color: '#666', fontSize: '14px' }}>
                          {restaurant.deliveryTime} mins
                        </span>
                      </div>
                      <div style={{
                        color: restaurant.type === 'veg' ? '#28a745' : '#dc3545',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        border: `1px solid ${restaurant.type === 'veg' ? '#28a745' : '#dc3545'}`,
                        padding: '2px 6px',
                        borderRadius: '4px'
                      }}>
                        {restaurant.type === 'veg' ? '🟢 VEG' : '🔴 NON-VEG'}
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ff6b35' }}>
                        ₹{restaurant.price}
                      </div>
                      <button style={{
                        background: '#ff6b35',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '10px 20px',
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
                      }}>
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🍽️</div>
              <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '10px' }}>No restaurants found</h3>
              <p style={{ color: '#666', fontSize: '16px', marginBottom: '20px' }}>
                Try adjusting your filters to see more results
              </p>
              <button
                onClick={clearAllFilters}
                style={{
                  background: '#ff6b35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantFilter;
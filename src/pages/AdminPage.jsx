import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Plus,
  Edit2,
  Trash2,
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Package,
  Clock,
  CheckCircle
} from 'lucide-react';

const AdminPage = () => {
  const { user, isAuthenticated } = useUser();
  const {
    menuItems,
    orders: allOrders,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    updateOrderStatus
  } = useAdmin();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    description: '',
    category: 'main',
    image: '',
    ingredients: '',
    nutritionalInfo: {
      calories: '',
      protein: '',
      carbs: '',
      fat: ''
    }
  });

  // Check if user is admin
  if (!isAuthenticated || user?.role !== 'admin') {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Access Denied</h2>
        <p>You need admin privileges to access this page.</p>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            background: '#ff6b35',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            marginTop: '20px',
            cursor: 'pointer'
          }}
        >
          Go Home
        </button>
      </div>
    );
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    const item = {
      ...newItem,
      id: Date.now(),
      price: parseFloat(newItem.price),
      ingredients: newItem.ingredients.split(',').map(i => i.trim()),
      nutritionalInfo: {
        calories: parseInt(newItem.nutritionalInfo.calories),
        protein: parseInt(newItem.nutritionalInfo.protein),
        carbs: parseInt(newItem.nutritionalInfo.carbs),
        fat: parseInt(newItem.nutritionalInfo.fat)
      },
      rating: 4.5,
      reviews: []
    };

    addMenuItem(item);
    setNewItem({
      name: '',
      price: '',
      description: '',
      category: 'main',
      image: '',
      ingredients: '',
      nutritionalInfo: { calories: '', protein: '', carbs: '', fat: '' }
    });
    setShowAddForm(false);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setNewItem({
      ...item,
      ingredients: item.ingredients.join(', '),
      nutritionalInfo: {
        calories: item.nutritionalInfo.calories.toString(),
        protein: item.nutritionalInfo.protein.toString(),
        carbs: item.nutritionalInfo.carbs.toString(),
        fat: item.nutritionalInfo.fat.toString()
      }
    });
    setShowAddForm(true);
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...editingItem,
      ...newItem,
      price: parseFloat(newItem.price),
      ingredients: newItem.ingredients.split(',').map(i => i.trim()),
      nutritionalInfo: {
        calories: parseInt(newItem.nutritionalInfo.calories),
        protein: parseInt(newItem.nutritionalInfo.protein),
        carbs: parseInt(newItem.nutritionalInfo.carbs),
        fat: parseInt(newItem.nutritionalInfo.fat)
      }
    };

    updateMenuItem(updatedItem);
    setEditingItem(null);
    setNewItem({
      name: '',
      price: '',
      description: '',
      category: 'main',
      image: '',
      ingredients: '',
      nutritionalInfo: { calories: '', protein: '', carbs: '', fat: '' }
    });
    setShowAddForm(false);
  };

  const totalRevenue = allOrders?.reduce((sum, order) => sum + order.total, 0) || 0;
  const totalCustomers = allOrders?.length ? new Set(allOrders.map(order => order.userId)).size : 0;
  const pendingOrders = allOrders?.filter(order => order.status === 'preparing').length || 0;

  const stats = [
    {
      label: 'Total Orders',
      value: allOrders?.length || 0,
      icon: <ShoppingBag size={24} />,
      color: '#ff6b35'
    },
    {
      label: 'Revenue',
      value: `$${totalRevenue.toFixed(0)}`,
      icon: <DollarSign size={24} />,
      color: '#28a745'
    },
    {
      label: 'Customers',
      value: totalCustomers,
      icon: <Users size={24} />,
      color: '#17a2b8'
    },
    {
      label: 'Menu Items',
      value: menuItems.length,
      icon: <Package size={24} />,
      color: '#6f42c1'
    }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'menu', label: 'Menu Management' },
    { id: 'orders', label: 'Orders' }
  ];

  return (
    <div style={{
      paddingTop: '80px',
      paddingBottom: '50px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #ff6b35 100%)',
      minHeight: '100vh'
    }}>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '50px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '3.5rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}
        >
          🔐 Admin Dashboard
        </motion.h1>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '40px',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(15px)',
          borderRadius: '25px',
          padding: '12px',
          maxWidth: '700px',
          margin: '0 auto 40px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '16px 32px',
                border: 'none',
                background: activeTab === tab.id ?
                  'linear-gradient(135deg, #ff6b35, #f7931e)' :
                  'rgba(255,255,255,0.1)',
                color: 'white',
                borderRadius: '18px',
                cursor: 'pointer',
                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === tab.id ?
                  '0 8px 25px rgba(255,107,53,0.4)' :
                  '0 4px 15px rgba(0,0,0,0.1)',
                transform: activeTab === tab.id ? 'translateY(-2px)' : 'translateY(0)'
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab.id) {
                  e.target.style.background = 'rgba(255,255,255,0.25)';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab.id) {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Stats Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    padding: '30px',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '25px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                    padding: '20px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: `0 8px 25px ${stat.color}40`
                  }}>
                    {stat.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      color: 'white',
                      textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                      marginBottom: '5px'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '1rem',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '25px',
                padding: '35px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.25)'
              }}
            >
              <h3 style={{
                marginBottom: '30px',
                color: 'white',
                fontSize: '1.8rem',
                fontWeight: 'bold',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                textAlign: 'center'
              }}>📋 Recent Orders</h3>
              {allOrders?.length > 0 ? allOrders.slice(0, 5).map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px',
                    marginBottom: '15px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '15px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <div style={{
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: '1.1rem',
                      textShadow: '0 1px 5px rgba(0,0,0,0.3)'
                    }}>Order #{order.id}</div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.7)',
                      marginTop: '4px'
                    }}>
                      {new Date(order.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontWeight: 'bold',
                      color: '#ff6b35',
                      fontSize: '1.2rem',
                      textShadow: '0 1px 5px rgba(255,107,53,0.5)'
                    }}>
                      ${order.total.toFixed(2)}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: order.status === 'delivered' ? '#4CAF50' : '#FFB74D',
                      textTransform: 'capitalize',
                      fontWeight: '600',
                      marginTop: '4px',
                      textShadow: '0 1px 3px rgba(0,0,0,0.2)'
                    }}>
                      {order.status}
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div style={{
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  padding: '60px 20px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📦</div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '0 1px 5px rgba(0,0,0,0.3)'
                  }}>No orders yet</div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Menu Management Tab */}
        {activeTab === 'menu' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Add Button */}
            <div style={{ marginBottom: '30px' }}>
              <button
                onClick={() => setShowAddForm(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  background: '#ff6b35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                <Plus size={20} />
                Add New Item
              </button>
            </div>

            {/* Add/Edit Form */}
            {showAddForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '12px',
                  marginBottom: '30px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
              >
                <h3 style={{ marginBottom: '20px' }}>
                  {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
                </h3>
                <form onSubmit={editingItem ? handleUpdateItem : handleAddItem}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <input
                      type="text"
                      placeholder="Item Name"
                      value={newItem.name}
                      onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                      required
                      style={{ padding: '12px', border: '2px solid #e9ecef', borderRadius: '8px' }}
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={newItem.price}
                      onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                      required
                      step="0.01"
                      style={{ padding: '12px', border: '2px solid #e9ecef', borderRadius: '8px' }}
                    />
                  </div>
                  <textarea
                    placeholder="Description"
                    value={newItem.description}
                    onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      minHeight: '100px'
                    }}
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <select
                      value={newItem.category}
                      onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                      style={{ padding: '12px', border: '2px solid #e9ecef', borderRadius: '8px' }}
                    >
                      <option value="appetizer">Appetizer</option>
                      <option value="main">Main Course</option>
                      <option value="dessert">Dessert</option>
                      <option value="beverage">Beverage</option>
                    </select>
                    <input
                      type="url"
                      placeholder="Image URL"
                      value={newItem.image}
                      onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                      style={{ padding: '12px', border: '2px solid #e9ecef', borderRadius: '8px' }}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Ingredients (comma separated)"
                    value={newItem.ingredients}
                    onChange={(e) => setNewItem({...newItem, ingredients: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      marginBottom: '20px'
                    }}
                  />
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <button
                      type="submit"
                      style={{
                        padding: '12px 24px',
                        background: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      {editingItem ? 'Update Item' : 'Add Item'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddForm(false);
                        setEditingItem(null);
                        setNewItem({
                          name: '',
                          price: '',
                          description: '',
                          category: 'main',
                          image: '',
                          ingredients: '',
                          nutritionalInfo: { calories: '', protein: '', carbs: '', fat: '' }
                        });
                      }}
                      style={{
                        padding: '12px 24px',
                        background: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Menu Items List */}
            <div style={{ display: 'grid', gap: '20px' }}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    display: 'flex',
                    gap: '20px'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>{item.name}</h4>
                    <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '0.9rem' }}>
                      {item.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '15px'
                    }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ff6b35' }}>
                        ${item.price}
                      </span>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                          onClick={() => handleEditItem(item)}
                          style={{
                            padding: '8px',
                            background: '#17a2b8',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer'
                          }}
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => deleteMenuItem(item.id)}
                          style={{
                            padding: '8px',
                            background: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer'
                          }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {allOrders?.length > 0 ? allOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>Order #{order.id}</h4>
                      <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                        {new Date(order.date).toLocaleString()}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        style={{
                          padding: '8px 12px',
                          border: '2px solid #e9ecef',
                          borderRadius: '6px',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option value="preparing">Preparing</option>
                        <option value="on-the-way">On the Way</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <span style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: '#ff6b35'
                      }}>
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '15px',
                    fontSize: '0.9rem',
                    color: '#666'
                  }}>
                    <div><strong>Address:</strong> {order.address}</div>
                    <div><strong>Phone:</strong> {order.phone}</div>
                    <div><strong>Payment:</strong> {order.paymentMethod}</div>
                    <div><strong>Items:</strong> {order.items.length} item(s)</div>
                  </div>
                </motion.div>
              )) : (
                <div style={{
                  textAlign: 'center',
                  color: '#666',
                  padding: '60px 20px',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                  <ShoppingBag size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
                  <h3 style={{ marginBottom: '8px', color: '#333' }}>No Orders Yet</h3>
                  <p style={{ margin: 0 }}>Orders will appear here once customers start placing them.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
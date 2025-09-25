import React from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const OrderHistoryPage = () => {
  const { isAuthenticated, orders: userOrders } = useUser();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Please log in to view your orders</h2>
        <button
          onClick={() => navigate('/login')}
          style={{
            padding: '12px 24px',
            background: '#ff6b35',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            marginTop: '20px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle size={20} color="#28a745" />;
      case 'cancelled':
        return <XCircle size={20} color="#dc3545" />;
      case 'preparing':
        return <Clock size={20} color="#ffc107" />;
      default:
        return <Package size={20} color="#6c757d" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return '#28a745';
      case 'cancelled':
        return '#dc3545';
      case 'preparing':
        return '#ffc107';
      case 'on-the-way':
        return '#17a2b8';
      default:
        return '#6c757d';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (userOrders.length === 0) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Package size={80} color="#ccc" style={{ marginBottom: '20px' }} />
          <h2 style={{ marginBottom: '16px', color: '#333' }}>No Orders Yet</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            You haven't placed any orders yet. Start exploring our delicious menu!
          </p>
          <button
            onClick={() => navigate('/menu')}
            style={{
              padding: '16px 32px',
              background: '#ff6b35',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Browse Menu
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '40px', color: '#333' }}
      >
        Order History
      </motion.h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {userOrders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0'
            }}
          >
            {/* Order Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              paddingBottom: '20px',
              borderBottom: '2px solid #f8f9fa'
            }}>
              <div>
                <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>
                  Order #{order.id}
                </h3>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  {formatDate(order.date)}
                </p>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '20px',
                background: `${getStatusColor(order.status)}15`,
                color: getStatusColor(order.status),
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                {getStatusIcon(order.status)}
                <span style={{ textTransform: 'capitalize' }}>
                  {order.status.replace('-', ' ')}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ marginBottom: '15px', color: '#333', fontSize: '1.1rem' }}>Items:</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {order.items.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px',
                    background: '#f8f9fa',
                    borderRadius: '8px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '8px',
                          objectFit: 'cover'
                        }}
                      />
                      <div>
                        <div style={{ fontWeight: 'bold', color: '#333' }}>{item.name}</div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>
                          Quantity: {item.quantity}
                        </div>
                      </div>
                    </div>
                    <div style={{ fontWeight: 'bold', color: '#ff6b35' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Details */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '20px',
              padding: '16px',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <div>
                <strong style={{ color: '#333' }}>Delivery Address:</strong>
                <p style={{ margin: '4px 0 0 0', color: '#666' }}>{order.address}</p>
              </div>
              <div>
                <strong style={{ color: '#333' }}>Phone:</strong>
                <p style={{ margin: '4px 0 0 0', color: '#666' }}>{order.phone}</p>
              </div>
              <div>
                <strong style={{ color: '#333' }}>Payment Method:</strong>
                <p style={{ margin: '4px 0 0 0', color: '#666', textTransform: 'capitalize' }}>
                  {order.paymentMethod === 'cash' ? 'Cash on Delivery' : order.paymentMethod}
                </p>
              </div>
            </div>

            {/* Order Total */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '20px',
              borderTop: '2px solid #f8f9fa'
            }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button
                  onClick={() => navigate('/menu')}
                  style={{
                    padding: '8px 16px',
                    background: 'transparent',
                    color: '#ff6b35',
                    border: '2px solid #ff6b35',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Order Again
                </button>
                {order.status === 'delivered' && (
                  <button
                    style={{
                      padding: '8px 16px',
                      background: 'transparent',
                      color: '#28a745',
                      border: '2px solid #28a745',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    Leave Review
                  </button>
                )}
              </div>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#ff6b35'
              }}>
                Total: ${order.total.toFixed(2)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
          color: 'white',
          borderRadius: '12px',
          padding: '30px',
          marginTop: '40px',
          textAlign: 'center'
        }}
      >
        <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Your FoodieHub Journey</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5px' }}>
              {userOrders.length}
            </div>
            <div style={{ opacity: 0.9 }}>Total Orders</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5px' }}>
              ${userOrders.reduce((sum, order) => sum + order.total, 0).toFixed(0)}
            </div>
            <div style={{ opacity: 0.9 }}>Total Spent</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5px' }}>
              {userOrders.filter(order => order.status === 'delivered').length}
            </div>
            <div style={{ opacity: 0.9 }}>Delivered Orders</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderHistoryPage;
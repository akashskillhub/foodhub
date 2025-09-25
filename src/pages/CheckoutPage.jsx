import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { items, total, clearCart } = useCart();
  const { isAuthenticated, addOrder } = useUser();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    paymentMethod: 'cash'
  });

  if (!isAuthenticated) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Please log in to checkout</h2>
        <button
          onClick={() => navigate('/login')}
          style={{ padding: '12px 24px', background: '#ff6b35', color: 'white', border: 'none', borderRadius: '8px', marginTop: '20px' }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      addOrder({
        items: items,
        total: total,
        address: formData.address,
        phone: formData.phone,
        paymentMethod: formData.paymentMethod
      });

      clearCart();
      setIsProcessing(false);
      navigate('/orders');
    }, 2000);
  };

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <h1>Checkout</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', marginTop: '32px' }}>
        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '32px', borderRadius: '12px' }}>
          <h3>Delivery Information</h3>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Delivery Address *</label>
            <textarea
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', minHeight: '100px' }}
              placeholder="Enter your complete address"
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
              placeholder="Your phone number"
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Payment Method</label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
            >
              <option value="cash">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            style={{
              width: '100%',
              padding: '16px',
              background: isProcessing ? '#ccc' : '#ff6b35',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: isProcessing ? 'not-allowed' : 'pointer'
            }}
          >
            {isProcessing ? 'Processing...' : `Place Order - $${total.toFixed(2)}`}
          </button>
        </form>

        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', height: 'fit-content' }}>
          <h3>Order Summary</h3>
          <div style={{ marginTop: '20px' }}>
            {items.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span>{item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr style={{ margin: '16px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold' }}>
              <span>Total</span>
              <span style={{ color: '#ff6b35' }}>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
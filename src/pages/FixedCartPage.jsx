import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import SimpleNavbar from '../components/ui/SimpleNavbar';
import SimpleFooter from '../components/ui/SimpleFooter';

const FixedCartPage = () => {
  const { items, total, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div>
        <SimpleNavbar />
        <div className="container" style={{ paddingTop: '60px', textAlign: 'center', minHeight: '60vh' }}>
          <h2>Your cart is empty</h2>
          <p>Add some delicious items to your cart!</p>
          <Link to="/menu" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 24px', background: '#ff6b35', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
            Browse Menu
          </Link>
        </div>
        <SimpleFooter />
      </div>
    );
  }

  return (
    <div>
      <SimpleNavbar />
      <div className="container" style={{ paddingTop: '40px', paddingBottom: '50px' }}>
        <h1>Shopping Cart</h1>
        <div style={{ marginTop: '32px' }}>
          {items.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              padding: '20px',
              background: 'white',
              borderRadius: '12px',
              marginBottom: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <div style={{ color: '#ff6b35', fontWeight: 'bold', fontSize: '18px' }}>
                  ${item.price}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={{ padding: '8px 12px', background: '#e9ecef', border: 'none', borderRadius: '6px' }}
                >
                  -
                </button>
                <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={{ padding: '8px 12px', background: '#e9ecef', border: 'none', borderRadius: '6px' }}
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    padding: '8px 16px',
                    background: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    marginLeft: '12px'
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div style={{
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            marginTop: '32px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3>Total: ${total.toFixed(2)}</h3>
              <Link
                to="/checkout"
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  background: '#ff6b35',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  textDecoration: 'none'
                }}
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default FixedCartPage;
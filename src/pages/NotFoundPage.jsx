import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      backgroundColor: '#f8f9fc',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container>
        <div style={{
          textAlign: 'center',
          padding: '60px 20px'
        }}>
          {/* 404 Number */}
          <div style={{
            fontSize: '8rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
            lineHeight: '1'
          }}>
            404
          </div>

          {/* Food Icon */}
          <div style={{
            fontSize: '4rem',
            marginBottom: '30px'
          }}>
            🍽️
          </div>

          {/* Error Message */}
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#2d3436',
            marginBottom: '20px'
          }}>
            Oops! Page Not Found
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#636e72',
            marginBottom: '40px',
            maxWidth: '500px',
            margin: '0 auto 40px'
          }}>
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button
              onClick={() => navigate('/')}
              style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                border: 'none',
                color: 'white',
                borderRadius: '12px',
                padding: '12px 24px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              🏠 Go Home
            </Button>

            <Button
              onClick={() => navigate('/menu')}
              style={{
                background: 'transparent',
                border: '2px solid #0984e3',
                color: '#0984e3',
                borderRadius: '12px',
                padding: '12px 24px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              🍽️ View Menu
            </Button>

            <Button
              onClick={() => navigate(-1)}
              style={{
                background: 'transparent',
                border: '2px solid #636e72',
                color: '#636e72',
                borderRadius: '12px',
                padding: '12px 24px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              ← Go Back
            </Button>
          </div>

          {/* Additional Info */}
          <div style={{
            marginTop: '50px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            maxWidth: '400px',
            margin: '50px auto 0'
          }}>
            <h5 style={{
              color: '#2d3436',
              marginBottom: '15px',
              fontWeight: 'bold'
            }}>
              🍕 Looking for something tasty?
            </h5>
            <p style={{
              color: '#636e72',
              fontSize: '14px',
              marginBottom: '0'
            }}>
              Check out our delicious menu with fresh ingredients and amazing flavors!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
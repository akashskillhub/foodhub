import React from 'react';
import { Toast, ToastContainer as BootstrapToastContainer } from 'react-bootstrap';
import { useToast } from '../../context/ToastContext';

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  const getToastBg = (type) => {
    switch (type) {
      case 'success': return 'success';
      case 'error': return 'danger';
      case 'warning': return 'warning';
      case 'info': return 'info';
      default: return 'success';
    }
  };

  const getToastIcon = (type) => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '✅';
    }
  };

  return (
    <BootstrapToastContainer
      position="top-end"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
        maxWidth: '350px'
      }}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          bg={getToastBg(toast.type)}
          onClose={() => removeToast(toast.id)}
          show={true}
          delay={toast.duration}
          autohide
          style={{
            marginBottom: '10px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}
        >
          <Toast.Header closeButton={true} style={{ borderRadius: '12px 12px 0 0' }}>
            <span className="me-2" style={{ fontSize: '16px' }}>
              {getToastIcon(toast.type)}
            </span>
            <strong className="me-auto">
              {toast.type === 'success' && 'Success'}
              {toast.type === 'error' && 'Error'}
              {toast.type === 'warning' && 'Warning'}
              {toast.type === 'info' && 'Info'}
            </strong>
          </Toast.Header>
          <Toast.Body style={{ color: 'white', fontWeight: '500' }}>
            {toast.message}
          </Toast.Body>
        </Toast>
      ))}
    </BootstrapToastContainer>
  );
};

export default ToastContainer;
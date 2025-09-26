import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * User Context - Manages user authentication and profile state
 * Features:
 * - User login/logout
 * - User registration
 * - Profile management
 * - Order history
 * - Persistent login state
 */

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: 1001,
      userId: 1,
      date: '2024-01-15T10:30:00Z',
      status: 'delivered',
      total: 29.97,
      address: '123 Main St, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      paymentMethod: 'credit-card',
      items: [
        {
          id: 1,
          name: 'Margherita Pizza',
          price: 12.99,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 4,
          name: 'Fresh Orange Juice',
          price: 3.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    {
      id: 1002,
      userId: 1,
      date: '2024-01-12T14:20:00Z',
      status: 'preparing',
      total: 23.98,
      address: '123 Main St, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      paymentMethod: 'cash',
      items: [
        {
          id: 5,
          name: 'Butter Chicken',
          price: 14.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 2,
          name: 'Caesar Salad',
          price: 8.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    {
      id: 1003,
      userId: 1,
      date: '2024-01-10T18:45:00Z',
      status: 'delivered',
      total: 18.50,
      address: '123 Main St, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      paymentMethod: 'paypal',
      items: [
        {
          id: 3,
          name: 'Chocolate Lava Cake',
          price: 6.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 6,
          name: 'Chicken Wings',
          price: 9.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    }
  ]);

  // Load user data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('foodWebsiteUser');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
      }
    }

    // Load orders from localStorage
    const savedOrders = localStorage.getItem('foodWebsiteOrders');
    if (savedOrders) {
      try {
        const parsedOrders = JSON.parse(savedOrders);
        setOrders(parsedOrders);
      } catch (error) {
        console.error('Error loading orders from localStorage:', error);
      }
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('foodWebsiteUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('foodWebsiteUser');
    }
  }, [user]);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('foodWebsiteOrders', JSON.stringify(orders));
  }, [orders]);

  const login = async (email, password) => {
    // Simulate API call
    try {
      // Demo users for testing
      const demoUsers = [
        { id: 1, email: 'user@example.com', name: 'John Doe', password: 'password123' },
        { id: 2, email: 'admin@example.com', name: 'Admin User', password: 'admin123', role: 'admin' }
      ];

      const foundUser = demoUsers.find(u => u.email === email && u.password === password);

      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        return { success: true, user: userWithoutPassword };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signup = async (userData) => {
    // Simulate API call
    try {
      const newUser = {
        id: Date.now(),
        ...userData,
        createdAt: new Date().toISOString()
      };

      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('foodWebsiteUser');
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
  };

  const addOrder = (order) => {
    const newOrder = {
      id: Date.now(),
      userId: user?.id,
      ...order,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    return newOrder;
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const value = {
    user,
    isAuthenticated,
    orders,
    login,
    signup,
    logout,
    updateProfile,
    addOrder,
    updateOrderStatus
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserContext };
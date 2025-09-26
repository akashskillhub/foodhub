import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * Admin Context - Manages admin-specific functionality
 * Features:
 * - Menu management (CRUD operations)
 * - Order management
 * - Analytics data
 * - Promotions management
 */

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalSales: 0,
    totalOrders: 0,
    popularItems: [],
    revenueByMonth: []
  });

  // Initialize with demo data
  useEffect(() => {
    // Demo menu items
    const demoMenuItems = [
      {
        id: 1,
        name: 'Margherita Pizza',
        category: 'mains',
        price: 320,
        type: 'veg',
        description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        ingredients: ['Tomato Sauce', 'Mozzarella', 'Fresh Basil', 'Olive Oil'],
        nutritionalInfo: { calories: 280, protein: 12, carbs: 35, fat: 10 },
        isAvailable: true,
        rating: 4.7,
        reviews: 127,
        deliveryTime: 25
      },
      {
        id: 2,
        name: 'Caesar Salad',
        category: 'starters',
        price: 8.99,
        type: 'veg',
        description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        ingredients: ['Romaine Lettuce', 'Caesar Dressing', 'Croutons', 'Parmesan'],
        nutritionalInfo: { calories: 180, protein: 6, carbs: 12, fat: 14 },
        isAvailable: true,
        rating: 4.2,
        reviews: 89
      },
      {
        id: 3,
        name: 'Chocolate Lava Cake',
        category: 'desserts',
        price: 6.99,
        type: 'veg',
        description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Flour', 'Vanilla Ice Cream'],
        nutritionalInfo: { calories: 420, protein: 8, carbs: 45, fat: 22 },
        isAvailable: true,
        rating: 4.8,
        reviews: 203
      },
      {
        id: 4,
        name: 'Fresh Orange Juice',
        category: 'beverages',
        price: 3.99,
        type: 'veg',
        description: 'Freshly squeezed orange juice',
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        ingredients: ['Fresh Oranges'],
        nutritionalInfo: { calories: 110, protein: 2, carbs: 26, fat: 0 },
        isAvailable: true,
        rating: 4.3,
        reviews: 45
      },
      {
        id: 5,
        name: 'Beef Burger',
        category: 'mains',
        price: 14.99,
        type: 'nonveg',
        description: 'Juicy beef patty with lettuce, tomato, onion, and special sauce',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        ingredients: ['Beef Patty', 'Lettuce', 'Tomato', 'Onion', 'Special Sauce', 'Bun'],
        nutritionalInfo: { calories: 650, protein: 35, carbs: 45, fat: 35 },
        isAvailable: true,
        rating: 4.6,
        reviews: 156
      },
      {
        id: 6,
        name: 'Chicken Wings',
        category: 'starters',
        price: 9.99,
        type: 'nonveg',
        description: 'Crispy chicken wings with buffalo sauce',
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        ingredients: ['Chicken Wings', 'Buffalo Sauce', 'Celery', 'Blue Cheese'],
        nutritionalInfo: { calories: 320, protein: 25, carbs: 8, fat: 22 },
        isAvailable: true,
        rating: 4.4,
        reviews: 98
      }
    ];

    // Demo orders
    const demoOrders = [
      {
        id: 1,
        userId: 1,
        items: [
          { id: 1, name: 'Margherita Pizza', price: 12.99, quantity: 2 },
          { id: 4, name: 'Fresh Orange Juice', price: 3.99, quantity: 1 }
        ],
        total: 29.97,
        status: 'delivered',
        createdAt: '2024-01-15T10:30:00Z',
        customerInfo: {
          name: 'John Doe',
          phone: '+1234567890',
          address: '123 Main St, City, State 12345'
        }
      },
      {
        id: 2,
        userId: 2,
        items: [
          { id: 5, name: 'Beef Burger', price: 14.99, quantity: 1 },
          { id: 2, name: 'Caesar Salad', price: 8.99, quantity: 1 }
        ],
        total: 23.98,
        status: 'preparing',
        createdAt: '2024-01-15T14:20:00Z',
        customerInfo: {
          name: 'Jane Smith',
          phone: '+1987654321',
          address: '456 Oak Ave, City, State 12345'
        }
      }
    ];

    // Demo promotions
    const demoPromotions = [
      {
        id: 1,
        title: '20% Off First Order',
        description: 'Get 20% discount on your first order',
        code: 'FIRST20',
        discount: 0.20,
        isActive: true,
        validUntil: '2024-12-31'
      },
      {
        id: 2,
        title: 'Free Delivery',
        description: 'Free delivery on orders above $25',
        code: 'FREEDEL25',
        minOrder: 25,
        isActive: true,
        validUntil: '2024-12-31'
      }
    ];

    setMenuItems(demoMenuItems);
    setOrders(demoOrders);
    setPromotions(demoPromotions);

    // Calculate analytics
    const totalSales = demoOrders.reduce((sum, order) => sum + order.total, 0);
    const totalOrders = demoOrders.length;
    const popularItems = demoMenuItems
      .sort((a, b) => b.reviews - a.reviews)
      .slice(0, 5);

    setAnalytics({
      totalSales,
      totalOrders,
      popularItems,
      revenueByMonth: [
        { month: 'Jan', revenue: 1250 },
        { month: 'Feb', revenue: 1450 },
        { month: 'Mar', revenue: 1680 }
      ]
    });
  }, []);

  // Menu management functions
  const addMenuItem = (item) => {
    const newItem = { ...item, id: Date.now() };
    setMenuItems(prev => [...prev, newItem]);
    return newItem;
  };

  const updateMenuItem = (id, updates) => {
    setMenuItems(prev =>
      prev.map(item => item.id === id ? { ...item, ...updates } : item)
    );
  };

  const deleteMenuItem = (id) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  // Order management functions
  const updateOrderStatus = (orderId, status) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const addOrder = (order) => {
    const newOrder = { ...order, id: Date.now() };
    setOrders(prev => [newOrder, ...prev]);

    // Update analytics
    setAnalytics(prev => ({
      ...prev,
      totalSales: prev.totalSales + order.total,
      totalOrders: prev.totalOrders + 1
    }));

    return newOrder;
  };

  // Promotion management functions
  const addPromotion = (promotion) => {
    const newPromotion = { ...promotion, id: Date.now() };
    setPromotions(prev => [...prev, newPromotion]);
    return newPromotion;
  };

  const updatePromotion = (id, updates) => {
    setPromotions(prev =>
      prev.map(promo => promo.id === id ? { ...promo, ...updates } : promo)
    );
  };

  const deletePromotion = (id) => {
    setPromotions(prev => prev.filter(promo => promo.id !== id));
  };

  const value = {
    menuItems,
    orders,
    promotions,
    analytics,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    updateOrderStatus,
    addOrder,
    addPromotion,
    updatePromotion,
    deletePromotion
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export { AdminContext };
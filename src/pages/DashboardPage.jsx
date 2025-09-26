import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';
import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Clock,
  MapPin,
  Star,
  Package,
  Truck,
  ChefHat,
  Activity,
  BarChart3,
  PieChart,
  Calendar
} from 'lucide-react';

const DashboardPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveStats, setLiveStats] = useState({
    revenue: 125430,
    orders: 246,
    customers: 15842,
    avgDelivery: 22
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());

      // Simulate real-time data updates
      setLiveStats(prev => ({
        revenue: prev.revenue + Math.floor(Math.random() * 100),
        orders: prev.orders + Math.floor(Math.random() * 3),
        customers: prev.customers + Math.floor(Math.random() * 2),
        avgDelivery: 18 + Math.floor(Math.random() * 8)
      }));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const chartData = [
    { day: 'Mon', orders: 45, revenue: 1250 },
    { day: 'Tue', orders: 52, revenue: 1450 },
    { day: 'Wed', orders: 48, revenue: 1350 },
    { day: 'Thu', orders: 61, revenue: 1750 },
    { day: 'Fri', orders: 75, revenue: 2100 },
    { day: 'Sat', orders: 89, revenue: 2650 },
    { day: 'Sun', orders: 71, revenue: 2050 }
  ];

  const pieData = [
    { name: 'Pizza', value: 35, color: '#ff6b35' },
    { name: 'Burgers', value: 25, color: '#f7931e' },
    { name: 'Asian', value: 20, color: '#28a745' },
    { name: 'Mexican', value: 12, color: '#007bff' },
    { name: 'Others', value: 8, color: '#6c757d' }
  ];

  const stats = [
    {
      title: 'Total Revenue',
      value: `$${liveStats.revenue.toLocaleString()}`,
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: '#28a745'
    },
    {
      title: 'Active Orders',
      value: liveStats.orders.toString(),
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingCart,
      color: '#ff6b35'
    },
    {
      title: 'Total Customers',
      value: liveStats.customers.toLocaleString(),
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: '#007bff'
    },
    {
      title: 'Avg. Delivery Time',
      value: `${liveStats.avgDelivery} min`,
      change: '-3.2%',
      trend: 'down',
      icon: Clock,
      color: '#6c757d'
    }
  ];

  const recentOrders = [
    {
      id: '#12845',
      customer: 'Sarah Johnson',
      restaurant: 'Pizza Palace',
      amount: '$24.99',
      status: 'Delivered',
      time: '2 min ago'
    },
    {
      id: '#12844',
      customer: 'Mike Chen',
      restaurant: 'Burger Hub',
      amount: '$18.50',
      status: 'In Transit',
      time: '5 min ago'
    },
    {
      id: '#12843',
      customer: 'Emily Davis',
      restaurant: 'Thai Garden',
      amount: '$32.75',
      status: 'Preparing',
      time: '8 min ago'
    },
    {
      id: '#12842',
      customer: 'John Smith',
      restaurant: 'Mexican Grill',
      amount: '$28.00',
      status: 'Delivered',
      time: '12 min ago'
    }
  ];

  const topRestaurants = [
    {
      name: 'Pizza Palace',
      orders: 234,
      rating: 4.8,
      revenue: '$12,450'
    },
    {
      name: 'Burger Hub',
      orders: 189,
      rating: 4.7,
      revenue: '$9,870'
    },
    {
      name: 'Thai Garden',
      orders: 156,
      rating: 4.9,
      revenue: '$8,960'
    },
    {
      name: 'Mexican Grill',
      orders: 134,
      rating: 4.6,
      revenue: '$7,340'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'success';
      case 'In Transit': return 'primary';
      case 'Preparing': return 'warning';
      case 'Cancelled': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '50px', background: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <div style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              padding: '40px',
              borderRadius: '20px',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%'
              }}></div>
              <Row className="align-items-center">
                <Col md={8}>
                  <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
                    📊 Analytics Dashboard
                  </h1>
                  <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '0' }}>
                    Real-time insights into your food delivery business performance
                  </p>
                </Col>
                <Col md={4} className="text-end">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '20px',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '8px' }}>
                      🕐 {formatTime(currentTime)}
                    </div>
                    <div style={{ opacity: '0.9', fontSize: '0.9rem' }}>
                      {formatDate(currentTime)}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row className="mb-4">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} className="mb-3" key={index}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={8}>
                      <div style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '8px' }}>
                        {stat.title}
                      </div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '8px' }}>
                        {stat.value}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <TrendingUp
                          size={16}
                          style={{
                            color: stat.trend === 'up' ? '#28a745' : '#dc3545',
                            transform: stat.trend === 'down' ? 'rotate(180deg)' : 'none'
                          }}
                        />
                        <span style={{
                          color: stat.trend === 'up' ? '#28a745' : '#dc3545',
                          fontSize: '0.9rem',
                          marginLeft: '4px'
                        }}>
                          {stat.change}
                        </span>
                      </div>
                    </Col>
                    <Col xs={4} className="text-end">
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: `${stat.color}15`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <stat.icon size={28} style={{ color: stat.color }} />
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Charts Section */}
        <Row className="mb-4">
          {/* Weekly Orders Chart */}
          <Col lg={8} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
                <div className="d-flex align-items-center justify-content-between">
                  <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                    <BarChart3 size={20} style={{ color: '#ff6b35', marginRight: '8px' }} />
                    Weekly Performance
                  </h5>
                  <Badge bg="primary">Live Data</Badge>
                </div>
              </Card.Header>
              <Card.Body>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  {chartData.map((data, index) => (
                    <div key={index} style={{ textAlign: 'center', flex: 1 }}>
                      <div style={{
                        height: `${(data.orders / 100) * 150}px`,
                        width: '40px',
                        background: `linear-gradient(to top, ${index % 2 === 0 ? '#ff6b35' : '#f7931e'} 0%, ${index % 2 === 0 ? '#f7931e' : '#ff6b35'} 100%)`,
                        borderRadius: '8px 8px 0 0',
                        margin: '0 auto 12px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        paddingBottom: '8px'
                      }}>
                        {data.orders}
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '4px' }}>
                        {data.day}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#28a745' }}>
                        ${data.revenue}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  marginTop: '20px',
                  padding: '16px',
                  background: '#f8f9fa',
                  borderRadius: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      background: '#ff6b35',
                      borderRadius: '2px',
                      marginRight: '8px'
                    }}></div>
                    <span style={{ fontSize: '0.9rem' }}>Orders</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      background: '#28a745',
                      borderRadius: '2px',
                      marginRight: '8px'
                    }}></div>
                    <span style={{ fontSize: '0.9rem' }}>Revenue ($)</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Food Categories Pie Chart */}
          <Col lg={4} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
                <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                  <PieChart size={20} style={{ color: '#ff6b35', marginRight: '8px' }} />
                  Popular Categories
                </h5>
              </Card.Header>
              <Card.Body>
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  position: 'relative',
                  background: `conic-gradient(
                    #ff6b35 0deg ${pieData[0].value * 3.6}deg,
                    #f7931e ${pieData[0].value * 3.6}deg ${(pieData[0].value + pieData[1].value) * 3.6}deg,
                    #28a745 ${(pieData[0].value + pieData[1].value) * 3.6}deg ${(pieData[0].value + pieData[1].value + pieData[2].value) * 3.6}deg,
                    #007bff ${(pieData[0].value + pieData[1].value + pieData[2].value) * 3.6}deg ${(pieData[0].value + pieData[1].value + pieData[2].value + pieData[3].value) * 3.6}deg,
                    #6c757d ${(pieData[0].value + pieData[1].value + pieData[2].value + pieData[3].value) * 3.6}deg 360deg
                  )`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    100%
                  </div>
                </div>
                <div>
                  {pieData.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      padding: '8px 12px',
                      background: '#f8f9fa',
                      borderRadius: '8px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                          width: '12px',
                          height: '12px',
                          background: item.color,
                          borderRadius: '2px',
                          marginRight: '8px'
                        }}></div>
                        <span style={{ fontSize: '0.9rem' }}>{item.name}</span>
                      </div>
                      <span style={{ fontWeight: 'bold', color: item.color }}>
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Recent Orders */}
          <Col lg={8} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
                <div className="d-flex align-items-center justify-content-between">
                  <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                    <Package size={20} style={{ color: '#ff6b35', marginRight: '8px' }} />
                    Recent Orders
                  </h5>
                  <Badge bg="secondary">{recentOrders.length} Active</Badge>
                </div>
              </Card.Header>
              <Card.Body>
                {recentOrders.map((order, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 0',
                    borderBottom: index < recentOrders.length - 1 ? '1px solid #f0f0f0' : 'none'
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                        {order.id} - {order.customer}
                      </div>
                      <div style={{ color: '#6c757d', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                        <ChefHat size={16} style={{ marginRight: '4px' }} />
                        {order.restaurant}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center', margin: '0 20px' }}>
                      <div style={{ fontWeight: 'bold', color: '#28a745' }}>{order.amount}</div>
                      <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>{order.time}</div>
                    </div>
                    <div>
                      <Badge bg={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          {/* Top Restaurants */}
          <Col lg={4} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
                <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                  <Star size={20} style={{ color: '#ff6b35', marginRight: '8px' }} />
                  Top Restaurants
                </h5>
              </Card.Header>
              <Card.Body>
                {topRestaurants.map((restaurant, index) => (
                  <div key={index} style={{
                    padding: '12px 0',
                    borderBottom: index < topRestaurants.length - 1 ? '1px solid #f0f0f0' : 'none'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '8px'
                    }}>
                      <span style={{ fontWeight: 'bold' }}>{restaurant.name}</span>
                      <span style={{ color: '#28a745', fontWeight: 'bold' }}>{restaurant.revenue}</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      color: '#6c757d'
                    }}>
                      <span>{restaurant.orders} orders</span>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Star size={14} style={{ color: '#ffc107', marginRight: '4px' }} />
                        {restaurant.rating}
                      </div>
                    </div>
                    <ProgressBar
                      now={(restaurant.orders / 250) * 100}
                      style={{ height: '4px', marginTop: '8px' }}
                      variant="warning"
                    />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Real-time Activity */}
        <Row className="mb-4">
          <Col lg={4} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
                <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                  <Activity size={20} style={{ color: '#ff6b35', marginRight: '8px' }} />
                  Live Activity
                </h5>
              </Card.Header>
              <Card.Body>
                <div style={{ height: '200px', overflowY: 'auto' }}>
                  {[
                    { action: 'New order placed', time: '2 sec ago', type: 'order' },
                    { action: 'Pizza Palace joined', time: '1 min ago', type: 'restaurant' },
                    { action: 'Payment completed', time: '2 min ago', type: 'payment' },
                    { action: 'Delivery completed', time: '3 min ago', type: 'delivery' },
                    { action: 'New customer signup', time: '5 min ago', type: 'user' },
                    { action: 'Order cancelled', time: '7 min ago', type: 'cancel' },
                    { action: 'Review submitted', time: '8 min ago', type: 'review' }
                  ].map((activity, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 0',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        marginRight: '12px',
                        background: activity.type === 'order' ? '#ff6b35' :
                                   activity.type === 'payment' ? '#28a745' :
                                   activity.type === 'delivery' ? '#007bff' :
                                   activity.type === 'user' ? '#6f42c1' : '#6c757d'
                      }}></div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.9rem', marginBottom: '2px' }}>
                          {activity.action}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
                <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                  <MapPin size={20} style={{ color: '#ff6b35', marginRight: '8px' }} />
                  Delivery Zones
                </h5>
              </Card.Header>
              <Card.Body>
                {[
                  { zone: 'Downtown', orders: 45, avgTime: '18 min', status: 'High' },
                  { zone: 'Midtown', orders: 32, avgTime: '22 min', status: 'Medium' },
                  { zone: 'Suburbs', orders: 28, avgTime: '25 min', status: 'Medium' },
                  { zone: 'University', orders: 41, avgTime: '20 min', status: 'High' },
                  { zone: 'Business District', orders: 36, avgTime: '19 min', status: 'High' }
                ].map((zone, index) => (
                  <div key={index} style={{
                    padding: '12px 0',
                    borderBottom: index < 4 ? '1px solid #f0f0f0' : 'none'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '6px'
                    }}>
                      <span style={{ fontWeight: 'bold' }}>{zone.zone}</span>
                      <Badge bg={zone.status === 'High' ? 'success' : 'warning'}>
                        {zone.status}
                      </Badge>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#6c757d' }}>
                      <span>{zone.orders} orders</span>
                      <span>Avg: {zone.avgTime}</span>
                    </div>
                    <ProgressBar
                      now={(zone.orders / 50) * 100}
                      style={{ height: '4px', marginTop: '6px' }}
                      variant={zone.status === 'High' ? 'success' : 'warning'}
                    />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
                <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                  <Calendar size={20} style={{ color: '#ff6b35', marginRight: '8px' }} />
                  Today's Summary
                </h5>
              </Card.Header>
              <Card.Body>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '8px' }}>
                    {currentTime.getHours()}h {currentTime.getMinutes()}m
                  </div>
                  <div style={{ color: '#6c757d' }}>Current Time</div>
                </div>

                {[
                  { label: 'Orders Today', value: '127', icon: '📦', color: '#ff6b35' },
                  { label: 'Revenue Today', value: '$3,420', icon: '💰', color: '#28a745' },
                  { label: 'Active Drivers', value: '24', icon: '🚗', color: '#007bff' },
                  { label: 'Customer Rating', value: '4.8', icon: '⭐', color: '#ffc107' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px',
                    marginBottom: '8px',
                    background: '#f8f9fa',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '1.5rem', marginRight: '12px' }}>
                      {item.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'bold', color: item.color }}>
                        {item.value}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Weather & Business Intelligence */}
        <Row className="mb-4">
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', color: 'white', borderBottom: 'none' }}>
                <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                  🌤️ Weather Impact Analysis
                </h5>
              </Card.Header>
              <Card.Body>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '3rem', marginBottom: '10px' }}>☀️</div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>
                      {22 + Math.floor(Math.random() * 8)}°C
                    </div>
                    <div style={{ color: '#6c757d', marginBottom: '15px' }}>Sunny & Clear</div>
                    <div style={{
                      padding: '10px 15px',
                      background: '#e3f2fd',
                      borderRadius: '8px',
                      fontSize: '0.9rem'
                    }}>
                      📈 <strong>+23% orders</strong> expected due to good weather
                    </div>
                  </div>
                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.9rem' }}>Ice Cream Orders</span>
                        <span style={{ fontWeight: 'bold', color: '#ff6b35' }}>+45%</span>
                      </div>
                      <ProgressBar now={75} style={{ height: '6px' }} variant="warning" />
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.9rem' }}>Cold Beverages</span>
                        <span style={{ fontWeight: 'bold', color: '#28a745' }}>+32%</span>
                      </div>
                      <ProgressBar now={60} style={{ height: '6px' }} variant="info" />
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.9rem' }}>Outdoor Dining</span>
                        <span style={{ fontWeight: 'bold', color: '#007bff' }}>+28%</span>
                      </div>
                      <ProgressBar now={55} style={{ height: '6px' }} variant="success" />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', color: 'white', borderBottom: 'none' }}>
                <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                  🎯 AI Predictions
                </h5>
              </Card.Header>
              <Card.Body>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '16px',
                    color: 'white',
                    marginBottom: '15px'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', marginBottom: '5px' }}>🤖</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        Next Hour: {150 + Math.floor(Math.random() * 50)} orders
                      </div>
                    </div>
                  </div>
                </div>

                {[
                  { prediction: 'Peak time starting in 45 min', confidence: '94%', icon: '⏰' },
                  { prediction: 'Pizza demand +67% at 7PM', confidence: '89%', icon: '🍕' },
                  { prediction: 'University area surge expected', confidence: '91%', icon: '🎓' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 12px',
                    background: '#f8f9fa',
                    borderRadius: '10px',
                    marginBottom: '8px'
                  }}>
                    <div style={{ fontSize: '1.5rem', marginRight: '12px' }}>{item.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '2px' }}>
                        {item.prediction}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#28a745' }}>
                        Confidence: {item.confidence}
                      </div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Revenue Trend Line Chart */}
        <Row className="mb-4">
          <Col lg={8} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', color: 'white', borderBottom: 'none' }}>
                <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                  📈 Revenue Trend (Last 30 Days)
                </h5>
              </Card.Header>
              <Card.Body>
                <div style={{ height: '300px', position: 'relative', padding: '20px 0' }}>
                  <svg width="100%" height="100%" viewBox="0 0 800 250" style={{ overflow: 'visible' }}>
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <g key={i}>
                        <line
                          x1="50"
                          y1={40 + i * 35}
                          x2="750"
                          y2={40 + i * 35}
                          stroke="#f0f0f0"
                          strokeWidth="1"
                        />
                        <text x="30" y={45 + i * 35} fontSize="12" fill="#6c757d">
                          ${(25 - i * 5)}k
                        </text>
                      </g>
                    ))}

                    {/* X-axis labels */}
                    {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, i) => (
                      <text key={week} x={125 + i * 175} y={230} fontSize="12" fill="#6c757d" textAnchor="middle">
                        {week}
                      </text>
                    ))}

                    {/* Line path */}
                    <path
                      d="M 50,150 Q 200,120 225,140 T 400,100 Q 550,80 575,90 T 750,70"
                      stroke="url(#lineGradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Area under curve */}
                    <path
                      d="M 50,150 Q 200,120 225,140 T 400,100 Q 550,80 575,90 T 750,70 L 750,215 L 50,215 Z"
                      fill="url(#areaGradient)"
                      opacity="0.3"
                    />

                    {/* Data points */}
                    {[
                      { x: 50, y: 150, value: '$12k' },
                      { x: 225, y: 140, value: '$14k' },
                      { x: 400, y: 100, value: '$18k' },
                      { x: 575, y: 90, value: '$19k' },
                      { x: 750, y: 70, value: '$22k' }
                    ].map((point, i) => (
                      <g key={i}>
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="6"
                          fill="white"
                          stroke="#28a745"
                          strokeWidth="3"
                        />
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="3"
                          fill="#28a745"
                        />
                        <text
                          x={point.x}
                          y={point.y - 15}
                          fontSize="11"
                          fill="#28a745"
                          textAnchor="middle"
                          fontWeight="bold"
                        >
                          {point.value}
                        </text>
                      </g>
                    ))}

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#28a745" />
                        <stop offset="50%" stopColor="#20c997" />
                        <stop offset="100%" stopColor="#17a2b8" />
                      </linearGradient>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#28a745" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '20px',
                  padding: '16px',
                  background: '#f8f9fa',
                  borderRadius: '12px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745' }}>+24%</div>
                    <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Growth Rate</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#17a2b8' }}>$85k</div>
                    <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Total Revenue</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6f42c1' }}>$22k</div>
                    <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Peak Week</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderBottom: 'none' }}>
                <h5 style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                  💡 Smart Insights
                </h5>
              </Card.Header>
              <Card.Body>
                {[
                  {
                    title: 'Revenue Optimization',
                    insight: 'Increase prices by 8% during peak hours for 15% more revenue',
                    impact: 'High',
                    icon: '💰'
                  },
                  {
                    title: 'Delivery Efficiency',
                    insight: 'Route optimization can reduce delivery time by 12 minutes',
                    impact: 'Medium',
                    icon: '🗺️'
                  },
                  {
                    title: 'Customer Retention',
                    insight: 'Loyalty program could increase repeat orders by 34%',
                    impact: 'High',
                    icon: '🎁'
                  },
                  {
                    title: 'Menu Strategy',
                    insight: 'Add 3 vegan options to capture 18% more customers',
                    impact: 'Medium',
                    icon: '🥗'
                  }
                ].map((insight, index) => (
                  <div key={index} style={{
                    padding: '16px',
                    marginBottom: '12px',
                    background: insight.impact === 'High' ? '#fff8e1' : '#f3e5f5',
                    borderRadius: '12px',
                    border: `2px solid ${insight.impact === 'High' ? '#ffc107' : '#9c27b0'}`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>{insight.icon}</span>
                      <div>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{insight.title}</div>
                        <Badge bg={insight.impact === 'High' ? 'warning' : 'info'} style={{ fontSize: '0.7rem' }}>
                          {insight.impact} Impact
                        </Badge>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', margin: '0', lineHeight: '1.4', color: '#555' }}>
                      {insight.insight}
                    </p>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Quick Actions */}
        <Row>
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
                <h5 style={{ margin: '0' }}>Quick Actions</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={3} className="mb-3">
                    <div style={{
                      padding: '20px',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                      borderRadius: '12px',
                      color: 'white',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      <Truck size={32} style={{ marginBottom: '12px' }} />
                      <div style={{ fontWeight: 'bold' }}>Track Deliveries</div>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div style={{
                      padding: '20px',
                      background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
                      borderRadius: '12px',
                      color: 'white',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      <Users size={32} style={{ marginBottom: '12px' }} />
                      <div style={{ fontWeight: 'bold' }}>Manage Users</div>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div style={{
                      padding: '20px',
                      background: 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)',
                      borderRadius: '12px',
                      color: 'white',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      <MapPin size={32} style={{ marginBottom: '12px' }} />
                      <div style={{ fontWeight: 'bold' }}>View Analytics</div>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div style={{
                      padding: '20px',
                      background: 'linear-gradient(135deg, #6f42c1 0%, #5a2d91 100%)',
                      borderRadius: '12px',
                      color: 'white',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      <ChefHat size={32} style={{ marginBottom: '12px' }} />
                      <div style={{ fontWeight: 'bold' }}>Restaurant Tools</div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardPage;
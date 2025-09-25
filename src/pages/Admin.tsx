import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Tab, Tabs, Form, Modal, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { menuItems } from '../data/menuData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toast } from 'react-toastify';

const Admin: React.FC = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  // Redirect if not admin
  if (!isAdmin) {
    navigate('/');
    return null;
  }

  // Sample data
  const stats = [
    { icon: <ShoppingBag size={24} />, title: 'Total Orders', value: '1,234', change: '+12%', color: 'primary' },
    { icon: <Users size={24} />, title: 'Active Users', value: '856', change: '+8%', color: 'success' },
    { icon: <DollarSign size={24} />, title: 'Revenue', value: '$12,450', change: '+15%', color: 'info' },
    { icon: <TrendingUp size={24} />, title: 'Growth', value: '23%', change: '+5%', color: 'warning' }
  ];

  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      items: ['Pizza Margherita', 'Coca Cola'],
      total: 24.99,
      status: 'preparing',
      time: '2024-01-15 12:30',
      address: '123 Main St, City'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      items: ['Burger Classic', 'Fries'],
      total: 18.50,
      status: 'delivered',
      time: '2024-01-15 11:45',
      address: '456 Oak Ave, Town'
    },
    {
      id: 'ORD-003',
      customer: 'Bob Johnson',
      items: ['Grilled Salmon', 'Salad'],
      total: 32.00,
      status: 'on_the_way',
      time: '2024-01-15 13:15',
      address: '789 Pine Rd, Village'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { variant: 'warning', text: 'Pending' },
      preparing: { variant: 'info', text: 'Preparing' },
      on_the_way: { variant: 'primary', text: 'On the way' },
      delivered: { variant: 'success', text: 'Delivered' },
      cancelled: { variant: 'danger', text: 'Cancelled' }
    };
    const config = statusConfig[status as keyof typeof statusConfig] || { variant: 'secondary', text: status };
    return <Badge bg={config.variant}>{config.text}</Badge>;
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    console.log(`Changing order ${orderId} status to ${newStatus}`);
    toast.success(`Order ${orderId} status updated to ${newStatus}`);
  };

  return (
    <Container fluid className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="display-6 fw-bold">Admin Dashboard</h1>
          <p className="text-muted">Welcome back, {user?.name}! Here's what's happening with your restaurant.</p>
        </Col>
      </Row>

      {/* Stats Cards */}
      <Row className="mb-4">
        {stats.map((stat, index) => (
          <Col lg={3} md={6} key={index} className="mb-3">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className={`text-${stat.color}`}>
                    {stat.icon}
                  </div>
                  <Badge bg="light" text="dark">
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="fw-bold mb-1">{stat.value}</h3>
                <p className="text-muted small mb-0">{stat.title}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Tabs defaultActiveKey="orders" className="mb-4">
        {/* Orders Tab */}
        <Tab eventKey="orders" title="Orders Management">
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-light d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Orders</h5>
              <div className="d-flex gap-2">
                <Form.Select size="sm" style={{ width: 'auto' }}>
                  <option>All Orders</option>
                  <option>Pending</option>
                  <option>Preparing</option>
                  <option>On the way</option>
                  <option>Delivered</option>
                </Form.Select>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table hover className="mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Time</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="fw-bold">{order.id}</td>
                        <td>{order.customer}</td>
                        <td>
                          <small>{order.items.join(', ')}</small>
                        </td>
                        <td>${order.total.toFixed(2)}</td>
                        <td>{getStatusBadge(order.status)}</td>
                        <td>
                          <small>{new Date(order.time).toLocaleString()}</small>
                        </td>
                        <td>
                          <div className="d-flex gap-1">
                            <Button
                              variant="outline-primary"
                              size="sm"
                              onClick={() => setSelectedOrder(order)}
                            >
                              <Eye size={14} />
                            </Button>
                            <Form.Select
                              size="sm"
                              style={{ width: '120px' }}
                              value={order.status}
                              onChange={(e) => handleStatusChange(order.id, e.target.value)}
                            >
                              <option value="pending">Pending</option>
                              <option value="preparing">Preparing</option>
                              <option value="on_the_way">On the way</option>
                              <option value="delivered">Delivered</option>
                              <option value="cancelled">Cancelled</option>
                            </Form.Select>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        {/* Menu Management Tab */}
        <Tab eventKey="menu" title="Menu Management">
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-light d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Menu Items</h5>
              <Button
                variant="primary"
                onClick={() => setShowAddItemModal(true)}
              >
                <Plus size={16} className="me-2" />
                Add Item
              </Button>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table hover className="mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Rating</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems.slice(0, 10).map((item) => (
                      <tr key={item.id}>
                        <td>
                          <LazyLoadImage
                            src={item.image}
                            alt={item.name}
                            width="50"
                            height="50"
                            className="rounded"
                            effect="blur"
                          />
                        </td>
                        <td className="fw-bold">{item.name}</td>
                        <td>
                          <Badge bg="light" text="dark" className="text-capitalize">
                            {item.category}
                          </Badge>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>⭐ {item.rating}</td>
                        <td>
                          <Badge bg="success">Active</Badge>
                        </td>
                        <td>
                          <div className="d-flex gap-1">
                            <Button variant="outline-primary" size="sm">
                              <Edit size={14} />
                            </Button>
                            <Button variant="outline-danger" size="sm">
                              <Trash2 size={14} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        {/* Users Tab */}
        <Tab eventKey="users" title="Users">
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-light">
              <h5 className="mb-0">Registered Users</h5>
            </Card.Header>
            <Card.Body>
              <Alert variant="info">
                <h6>User Management Features</h6>
                <ul className="mb-0">
                  <li>View all registered users</li>
                  <li>Manage user roles and permissions</li>
                  <li>View user order history</li>
                  <li>Handle user complaints and feedback</li>
                </ul>
              </Alert>
            </Card.Body>
          </Card>
        </Tab>

        {/* Analytics Tab */}
        <Tab eventKey="analytics" title="Analytics">
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-light">
                  <h5 className="mb-0">Sales Overview</h5>
                </Card.Header>
                <Card.Body>
                  <div className="text-center py-5 text-muted">
                    📊 Sales charts and graphs would be displayed here
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-light">
                  <h5 className="mb-0">Popular Items</h5>
                </Card.Header>
                <Card.Body>
                  <div className="text-center py-5 text-muted">
                    🍕 Popular menu items analysis would be shown here
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>
      </Tabs>

      {/* Order Details Modal */}
      <Modal show={!!selectedOrder} onHide={() => setSelectedOrder(null)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Order Details - {selectedOrder?.id}</Modal.Title>
        </Modal.Header>
        {selectedOrder && (
          <Modal.Body>
            <Row>
              <Col md={6}>
                <h6>Customer Information</h6>
                <p><strong>Name:</strong> {selectedOrder.customer}</p>
                <p><strong>Address:</strong> {selectedOrder.address}</p>
                <p><strong>Time:</strong> {new Date(selectedOrder.time).toLocaleString()}</p>
              </Col>
              <Col md={6}>
                <h6>Order Information</h6>
                <p><strong>Items:</strong> {selectedOrder.items.join(', ')}</p>
                <p><strong>Total:</strong> ${selectedOrder.total.toFixed(2)}</p>
                <p><strong>Status:</strong> {getStatusBadge(selectedOrder.status)}</p>
              </Col>
            </Row>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedOrder(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Item Modal */}
      <Modal show={showAddItemModal} onHide={() => setShowAddItemModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Menu Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="info">
            <h6>Add Menu Item Form</h6>
            <p className="mb-0">
              This would contain a comprehensive form to add new menu items with fields for:
              name, description, price, category, image upload, ingredients, nutrition info, etc.
            </p>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddItemModal(false)}>
            Cancel
          </Button>
          <Button variant="primary">
            Save Item
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Admin;
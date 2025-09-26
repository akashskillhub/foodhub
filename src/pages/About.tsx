import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Award, Clock, Users, Heart, Truck, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users size={48} />, number: '50,000+', label: 'Happy Customers' },
    { icon: <Clock size={48} />, number: '30 min', label: 'Average Delivery' },
    { icon: <Star size={48} />, number: '4.8/5', label: 'Customer Rating' },
    { icon: <Award size={48} />, number: '15+', label: 'Awards Won' }
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: '15+ years of culinary experience from top restaurants'
    },
    {
      name: 'John Smith',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Expert in food delivery logistics and customer service'
    },
    {
      name: 'Sarah Kim',
      role: 'Nutrition Specialist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332b1b4?w=300&h=300&fit=crop&crop=face',
      description: 'Certified nutritionist ensuring healthy menu options'
    }
  ];

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="mb-5">
        <Col lg={6}>
          <h1 className="display-4 fw-bold mb-4">About FoodHub 🍕</h1>
          <p className="lead mb-4">
            Since 2010, FoodHub has been serving delicious, fresh meals to food lovers across the city.
            What started as a small family restaurant has grown into a trusted food delivery service,
            committed to quality, speed, and customer satisfaction.
          </p>
          <p className="mb-4">
            Our mission is simple: to bring restaurant-quality food to your doorstep while maintaining
            the highest standards of freshness, taste, and service. Every dish is prepared with love,
            using only the finest ingredients sourced from local suppliers.
          </p>
          <div className="d-flex align-items-center gap-4">
            <div className="text-center">
              <div className="h2 fw-bold text-primary mb-0">2010</div>
              <small className="text-muted">Founded</small>
            </div>
            <div className="text-center">
              <div className="h2 fw-bold text-success mb-0">50K+</div>
              <small className="text-muted">Orders Delivered</small>
            </div>
            <div className="text-center">
              <div className="h2 fw-bold text-warning mb-0">4.8★</div>
              <small className="text-muted">Rating</small>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
            alt="Restaurant Kitchen"
            className="img-fluid rounded shadow"
            effect="blur"
          />
        </Col>
      </Row>

      {/* Stats Section */}
      <Row className="mb-5 py-5 bg-light rounded">
        <Col>
          <h2 className="text-center fw-bold mb-5">Our Impact</h2>
        </Col>
        {stats.map((stat, index) => (
          <Col lg={3} md={6} key={index} className="text-center mb-4">
            <div className="text-primary mb-3">{stat.icon}</div>
            <div className="h2 fw-bold mb-2">{stat.number}</div>
            <div className="text-muted">{stat.label}</div>
          </Col>
        ))}
      </Row>

      {/* Story Section */}
      <Row className="mb-5">
        <Col lg={8} className="mx-auto text-center">
          <h2 className="fw-bold mb-4">Our Story</h2>
          <p className="mb-4">
            FoodHub began with a simple dream: to share our family's passion for authentic,
            delicious food with our community. Starting from a small kitchen, we've grown
            through word-of-mouth recommendations and the loyalty of customers who've become
            like family to us.
          </p>
          <p className="mb-4">
            Today, we're proud to serve thousands of satisfied customers every month,
            while maintaining the same commitment to quality and personal touch that
            defined us from day one. Every order matters to us, and we treat each
            customer like a valued guest in our home.
          </p>
        </Col>
      </Row>

      {/* Values Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center fw-bold mb-5">Our Values</h2>
        </Col>
        <Col lg={4} className="mb-4">
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <div className="text-primary mb-3">
                <Heart size={48} />
              </div>
              <h5 className="fw-bold">Quality First</h5>
              <p className="text-muted">
                We never compromise on ingredients or preparation. Every dish is crafted
                with the finest ingredients and utmost care.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mb-4">
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <div className="text-success mb-3">
                <Clock size={48} />
              </div>
              <h5 className="fw-bold">Fast & Fresh</h5>
              <p className="text-muted">
                Quick delivery times without sacrificing freshness. Your food arrives
                hot and ready to enjoy, every time.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mb-4">
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <div className="text-warning mb-3">
                <Users size={48} />
              </div>
              <h5 className="fw-bold">Community Focus</h5>
              <p className="text-muted">
                We're more than a restaurant - we're part of the community, supporting
                local suppliers and giving back when we can.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
        </Col>
        {team.map((member, index) => (
          <Col lg={4} key={index} className="mb-4">
            <Card className="h-100 text-center border-0 shadow-sm">
              <div className="position-relative">
                <LazyLoadImage
                  src={member.image}
                  alt={member.name}
                  className="card-img-top rounded-circle mx-auto mt-4"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  effect="blur"
                />
              </div>
              <Card.Body>
                <h5 className="fw-bold">{member.name}</h5>
                <p className="text-primary fw-semibold">{member.role}</p>
                <p className="text-muted small">{member.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Achievements Section */}
      <Row className="mb-5 py-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <Col lg={8} className="mx-auto text-center text-white">
          <h2 className="fw-bold mb-4">Awards & Recognition</h2>
          <Row>
            <Col md={6} className="mb-3">
              <Award size={32} className="mb-2" />
              <h5>Best Food Delivery Service 2023</h5>
              <p className="small">City Food & Dining Awards</p>
            </Col>
            <Col md={6} className="mb-3">
              <Star size={32} className="mb-2" />
              <h5>Excellence in Customer Service</h5>
              <p className="small">Regional Business Awards</p>
            </Col>
            <Col md={6} className="mb-3">
              <Truck size={32} className="mb-2" />
              <h5>Fastest Growing Delivery Company</h5>
              <p className="small">Local Business Journal</p>
            </Col>
            <Col md={6} className="mb-3">
              <Users size={32} className="mb-2" />
              <h5>Community Choice Award</h5>
              <p className="small">People's Choice Awards</p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row>
        <Col className="text-center">
          <h3 className="fw-bold mb-3">Ready to Taste the Difference?</h3>
          <p className="lead text-muted mb-4">
            Join thousands of satisfied customers and experience what makes FoodHub special.
          </p>
          <a href="/menu" className="btn btn-primary btn-lg">
            Order Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Users, Linkedin, Twitter } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
      description: "10+ years in tech and food industry. Passionate about connecting people with great food experiences."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
      description: "Former Google engineer with expertise in scalable systems and mobile applications."
    },
    {
      name: "Emily Davis",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
      description: "Logistics expert ensuring smooth delivery operations across all our partner cities."
    },
    {
      name: "David Rodriguez",
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
      description: "Creative strategist with 8 years experience in digital marketing and brand building."
    }
  ];

  return (
    <Container className="py-5">
      <Row>
        <Col>
          {/* Header */}
          <div className="text-center mb-5">
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#fc8019',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}
            >
              <Users size={64} style={{ color: 'white' }} />
            </div>
            <h1 className="display-4 fw-bold mb-3">Meet Our Team</h1>
            <p className="lead text-secondary">
              The passionate individuals behind FoodHub's success. We're dedicated to revolutionizing food delivery.
            </p>
          </div>

          {/* Team Members Grid */}
          <Row className="g-4 mb-5">
            {teamMembers.map((member, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle mb-3"
                      style={{
                        width: '120px',
                        height: '120px',
                        objectFit: 'cover'
                      }}
                    />
                    <h5 className="fw-bold mb-2">{member.name}</h5>
                    <p className="mb-3" style={{ color: '#fc8019', fontWeight: '600' }}>
                      {member.role}
                    </p>
                    <p className="text-muted small mb-3">
                      {member.description}
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-circle p-2"
                      >
                        <Linkedin size={16} />
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-circle p-2"
                      >
                        <Twitter size={16} />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Join Us CTA */}
          <Card className="text-center border-0" style={{ backgroundColor: '#fc8019' }}>
            <Card.Body className="p-5 text-white">
              <Users size={48} className="mb-3" style={{ color: 'white' }} />
              <h3 className="mb-3">Want to Join Our Team?</h3>
              <p className="mb-4 opacity-75">
                We're always looking for talented individuals who share our passion for food and technology.
              </p>
              <Button
                href="/careers"
                variant="light"
                size="lg"
                className="px-4"
                style={{ color: '#fc8019' }}
              >
                View Open Positions
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamPage;
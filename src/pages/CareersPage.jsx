import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Briefcase, MapPin, Clock, DollarSign, Users, Target, Heart, TrendingUp } from 'lucide-react';

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Build beautiful user interfaces for our food delivery platform using React and modern web technologies.",
      requirements: ["3+ years React experience", "TypeScript proficiency", "UI/UX design sense"]
    },
    {
      title: "Delivery Operations Manager",
      department: "Operations",
      location: "New York",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Optimize delivery routes and manage our fleet of delivery partners to ensure fast, reliable service.",
      requirements: ["Operations management experience", "Data analysis skills", "Leadership experience"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$100k - $140k",
      description: "Drive product strategy and roadmap for our mobile app and web platform features.",
      requirements: ["5+ years product management", "Mobile app experience", "User research skills"]
    },
    {
      title: "Customer Success Specialist",
      department: "Customer Success",
      location: "Chicago",
      type: "Full-time",
      salary: "$50k - $70k",
      description: "Help customers resolve issues and ensure they have amazing experiences with our platform.",
      requirements: ["Customer service experience", "Problem-solving skills", "Excellent communication"]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign size={32} />,
      title: "Competitive Salary",
      description: "Market-rate compensation with performance bonuses"
    },
    {
      icon: <Users size={32} />,
      title: "Great Team",
      description: "Work with passionate people who love food and technology"
    },
    {
      icon: <Target size={32} />,
      title: "Growth Opportunities",
      description: "Clear career progression paths and skill development"
    },
    {
      icon: <Clock size={32} />,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options"
    }
  ];

  return (
    <Container className="py-5">
      <Row>
        <Col>
          {/* Header */}
          <div className="text-center mb-5">
            <Briefcase size={64} style={{ color: '#fc8019', marginBottom: '24px' }} />
            <h1 className="display-4 fw-bold mb-3">Join Our Team</h1>
            <p className="lead text-secondary">
              Help us revolutionize food delivery and create amazing experiences for millions of food lovers.
            </p>
          </div>

          {/* Benefits Section */}
          <Row className="mb-5">
            <Col>
              <h2 className="text-center mb-4">Why Work at FoodHub?</h2>
              <Row className="g-4">
                {benefits.map((benefit, index) => (
                  <Col lg={3} md={6} key={index}>
                    <Card className="h-100 border-0 shadow-sm text-center">
                      <Card.Body className="p-4">
                        <div style={{ color: '#fc8019', marginBottom: '16px' }}>
                          {benefit.icon}
                        </div>
                        <h5 className="fw-bold mb-2">{benefit.title}</h5>
                        <p className="text-muted small mb-0">
                          {benefit.description}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* Job Openings */}
          <Row className="mb-5">
            <Col>
              <h2 className="text-center mb-4">Open Positions</h2>
              <Row className="g-4">
                {jobOpenings.map((job, index) => (
                  <Col lg={6} key={index}>
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div>
                            <h5 className="fw-bold mb-1">{job.title}</h5>
                            <Badge bg="light" text="dark" className="mb-2">
                              {job.department}
                            </Badge>
                          </div>
                          <Badge bg="success">{job.type}</Badge>
                        </div>

                        <div className="d-flex flex-wrap gap-3 mb-3 small text-secondary">
                          <div className="d-flex align-items-center">
                            <MapPin size={14} className="me-1" />
                            {job.location}
                          </div>
                          <div className="d-flex align-items-center">
                            <DollarSign size={14} className="me-1" />
                            {job.salary}
                          </div>
                        </div>

                        <p className="text-secondary mb-3">
                          {job.description}
                        </p>

                        <div className="mb-3">
                          <h6 className="fw-bold mb-2">Requirements:</h6>
                          <ul className="text-secondary small mb-0">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          variant="outline-primary"
                          style={{
                            borderColor: '#fc8019',
                            color: '#fc8019'
                          }}
                          className="w-100"
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#fc8019';
                            e.target.style.color = 'white';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#fc8019';
                          }}
                        >
                          Apply Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* Application CTA */}
          <Card className="text-center border-0" style={{ backgroundColor: '#fc8019' }}>
            <Card.Body className="p-5 text-white">
              <Briefcase size={48} className="mb-3" />
              <h3 className="mb-3">Don't See Your Perfect Role?</h3>
              <p className="mb-4 opacity-75">
                We're always looking for talented people. Send us your resume and tell us how you'd like to contribute to FoodHub's mission.
              </p>
              <Button
                variant="light"
                size="lg"
                className="px-4"
                style={{ color: '#fc8019' }}
              >
                Send Your Resume
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CareersPage;
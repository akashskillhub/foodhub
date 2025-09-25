import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const contactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().optional(),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form submitted:', data);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to get in touch with FoodHub.');
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <Container className="py-5">
      {/* Header */}
      <Row className="mb-5">
        <Col className="text-center">
          <h1 className="display-4 fw-bold mb-3">Get in Touch 📞</h1>
          <p className="lead text-muted">
            Have a question, feedback, or need help with your order? We'd love to hear from you!
          </p>
        </Col>
      </Row>

      <Row>
        {/* Contact Information */}
        <Col lg={4} className="mb-4">
          <h3 className="fw-bold mb-4">Contact Information</h3>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-2">
                <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Address</h6>
                </div>
              </div>
              <p className="text-muted small mb-0 ms-5">
                123 Food Street<br />
                Downtown District<br />
                City, State 12345
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-2">
                <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                  <Phone className="text-success" size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Phone</h6>
                </div>
              </div>
              <p className="text-muted small mb-0 ms-5">
                <a href="tel:+15551234567" className="text-decoration-none">
                  +1 (555) 123-4567
                </a><br />
                <small>For orders and inquiries</small>
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-2">
                <div className="bg-info bg-opacity-10 rounded-circle p-2 me-3">
                  <Mail className="text-info" size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Email</h6>
                </div>
              </div>
              <p className="text-muted small mb-0 ms-5">
                <a href="mailto:info@foodhub.com" className="text-decoration-none">
                  info@foodhub.com
                </a><br />
                <small>General inquiries</small>
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-2">
                <div className="bg-warning bg-opacity-10 rounded-circle p-2 me-3">
                  <Clock className="text-warning" size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Hours</h6>
                </div>
              </div>
              <p className="text-muted small mb-0 ms-5">
                Monday - Sunday<br />
                9:00 AM - 11:00 PM<br />
                <small>Delivery hours</small>
              </p>
            </Card.Body>
          </Card>

          <Button
            variant="success"
            className="w-100 d-flex align-items-center justify-content-center"
            onClick={handleWhatsApp}
          >
            <MessageCircle size={20} className="me-2" />
            WhatsApp Us
          </Button>
        </Col>

        {/* Contact Form */}
        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h4 className="mb-0">Send us a Message</h4>
            </Card.Header>
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Name *</Form.Label>
                      <Form.Control
                        type="text"
                        {...register('name')}
                        isInvalid={!!errors.name}
                        placeholder="Your full name"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        {...register('email')}
                        isInvalid={!!errors.email}
                        placeholder="your.email@example.com"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Phone (Optional)</Form.Label>
                      <Form.Control
                        type="tel"
                        {...register('phone')}
                        isInvalid={!!errors.phone}
                        placeholder="(555) 123-4567"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Subject *</Form.Label>
                      <Form.Select
                        {...register('subject')}
                        isInvalid={!!errors.subject}
                      >
                        <option value="">Choose a subject</option>
                        <option value="order-inquiry">Order Inquiry</option>
                        <option value="complaint">Complaint</option>
                        <option value="compliment">Compliment</option>
                        <option value="partnership">Partnership</option>
                        <option value="technical">Technical Issue</option>
                        <option value="other">Other</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.subject?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    {...register('message')}
                    isInvalid={!!errors.message}
                    placeholder="Tell us how we can help you..."
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="me-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Map Section */}
      <Row className="mt-5">
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-light">
              <h4 className="mb-0">Find Us</h4>
            </Card.Header>
            <Card.Body className="p-0">
              {/* Google Map Embed */}
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FoodHub Location"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row className="mt-5">
        <Col>
          <h3 className="fw-bold mb-4">Frequently Asked Questions</h3>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item border-0 shadow-sm mb-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  What are your delivery hours?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse">
                <div className="accordion-body">
                  We deliver from 9:00 AM to 11:00 PM, seven days a week. Last orders are accepted until 10:30 PM.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 shadow-sm mb-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  How long does delivery take?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Our average delivery time is 30-45 minutes. During peak hours, it may take up to 60 minutes.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 shadow-sm mb-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  Do you offer refunds?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Yes, we offer full refunds for orders that don't meet our quality standards or arrive late due to our fault.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                >
                  Can I track my order?
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Absolutely! You'll receive real-time updates via SMS and email about your order status and delivery progress.
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
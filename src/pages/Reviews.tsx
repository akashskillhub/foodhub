import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Modal } from 'react-bootstrap';
import { Star, ThumbsUp, MessageCircle, Filter } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

interface ReviewFormData {
  rating: number;
  title: string;
  comment: string;
  orderNumber?: string;
}

const reviewSchema = yup.object().shape({
  rating: yup.number().min(1, 'Please select a rating').max(5).required('Rating is required'),
  title: yup.string().required('Title is required'),
  comment: yup.string().required('Comment is required'),
  orderNumber: yup.string().optional(),
});

const Reviews: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ReviewFormData>({
    resolver: yupResolver(reviewSchema)
  });

  const currentRating = watch('rating', 0);

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      customerName: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332b1b4?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      title: 'Amazing food and fast delivery!',
      comment: 'I ordered the Margherita Pizza and it was absolutely delicious. The delivery was super fast and the food arrived hot. Will definitely order again!',
      date: '2024-01-15',
      orderNumber: 'ORD-123456',
      helpful: 12,
      foodItem: 'Margherita Pizza',
      verified: true
    },
    {
      id: 2,
      customerName: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 4,
      title: 'Great taste, could be warmer',
      comment: 'The Chicken Alfredo was delicious but arrived a bit cold. The portion size was generous and the flavor was excellent. Customer service was very responsive.',
      date: '2024-01-14',
      orderNumber: 'ORD-123455',
      helpful: 8,
      foodItem: 'Chicken Alfredo',
      verified: true
    },
    {
      id: 3,
      customerName: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      title: 'Best burger in town!',
      comment: 'The Classic Burger exceeded my expectations. Juicy patty, fresh ingredients, perfect bun. The crispy fries were a great addition. Highly recommend!',
      date: '2024-01-13',
      orderNumber: 'ORD-123454',
      helpful: 15,
      foodItem: 'Classic Burger',
      verified: true
    },
    {
      id: 4,
      customerName: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 3,
      title: 'Average experience',
      comment: 'The food was okay but nothing special. Delivery took longer than expected. The packaging was good though, and the customer service was friendly.',
      date: '2024-01-12',
      orderNumber: 'ORD-123453',
      helpful: 3,
      foodItem: 'Grilled Salmon',
      verified: false
    },
    {
      id: 5,
      customerName: 'Lisa Thompson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      title: 'Chocolate lava cake is heaven!',
      comment: 'OMG! The chocolate lava cake was absolutely divine. Perfect temperature, rich chocolate flavor, and the vanilla ice cream complemented it perfectly. Will order again soon!',
      date: '2024-01-11',
      orderNumber: 'ORD-123452',
      helpful: 20,
      foodItem: 'Chocolate Lava Cake',
      verified: true
    }
  ];

  const onSubmit = async (data: ReviewFormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Review submitted:', data);
      toast.success('Thank you for your review!');
      reset();
      setShowModal(false);
    } catch (error) {
      toast.error('Failed to submit review. Please try again.');
    }
  };

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={interactive ? 24 : 16}
        className={`${interactive ? 'me-1 cursor-pointer' : 'me-1'} ${
          index < rating ? 'text-warning' : 'text-muted'
        }`}
        fill={index < rating ? 'currentColor' : 'none'}
        onClick={interactive ? () => setValue('rating', index + 1) : undefined}
        style={interactive ? { cursor: 'pointer' } : {}}
      />
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }));

  return (
    <Container className="py-5">
      {/* Header */}
      <Row className="mb-4">
        <Col className="text-center">
          <h1 className="display-5 fw-bold mb-3">Customer Reviews ⭐</h1>
          <p className="lead text-muted">
            See what our customers are saying about their FoodHub experience
          </p>
        </Col>
      </Row>

      <Row>
        {/* Reviews Summary */}
        <Col lg={4} className="mb-4">
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="text-center p-4">
              <div className="display-4 fw-bold text-primary mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="mb-3">
                {renderStars(Math.round(averageRating))}
              </div>
              <p className="text-muted mb-4">
                Based on {reviews.length} reviews
              </p>

              {/* Rating Distribution */}
              <div className="text-start">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="d-flex align-items-center mb-2">
                    <span className="me-2 text-nowrap">{rating} stars</span>
                    <div className="flex-grow-1 progress me-2" style={{ height: '8px' }}>
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <small className="text-muted">{count}</small>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                className="w-100 mt-4"
                onClick={() => setShowModal(true)}
              >
                Write a Review
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Reviews List */}
        <Col lg={8}>
          {/* Filters */}
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <Row className="align-items-center">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small fw-bold">Filter by Rating</Form.Label>
                    <Form.Select
                      value={filterRating}
                      onChange={(e) => setFilterRating(e.target.value)}
                      size="sm"
                    >
                      <option value="all">All Ratings</option>
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small fw-bold">Sort by</Form.Label>
                    <Form.Select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      size="sm"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="highest">Highest Rating</option>
                      <option value="lowest">Lowest Rating</option>
                      <option value="helpful">Most Helpful</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Reviews */}
          {reviews.map((review) => (
            <Card key={review.id} className="border-0 shadow-sm mb-4">
              <Card.Body>
                <Row>
                  <Col md={2} className="text-center mb-3">
                    <LazyLoadImage
                      src={review.avatar}
                      alt={review.customerName}
                      className="rounded-circle mb-2"
                      width="60"
                      height="60"
                      effect="blur"
                    />
                    <div className="small fw-bold">{review.customerName}</div>
                    {review.verified && (
                      <Badge bg="success" className="small">Verified</Badge>
                    )}
                  </Col>
                  <Col md={10}>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <div className="mb-1">
                          {renderStars(review.rating)}
                          <span className="ms-2 text-muted small">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h6 className="fw-bold mb-2">{review.title}</h6>
                      </div>
                    </div>

                    <p className="text-muted mb-3">{review.comment}</p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-3">
                        <small className="text-muted">
                          Order: {review.orderNumber} • {review.foodItem}
                        </small>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <Button variant="outline-primary" size="sm">
                          <ThumbsUp size={14} className="me-1" />
                          Helpful ({review.helpful})
                        </Button>
                        <Button variant="outline-secondary" size="sm">
                          <MessageCircle size={14} />
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline-primary">Load More Reviews</Button>
          </div>
        </Col>
      </Row>

      {/* Write Review Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Write a Review</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Overall Rating *</Form.Label>
              <div className="mb-2">
                {renderStars(currentRating, true)}
              </div>
              {errors.rating && (
                <div className="text-danger small">{errors.rating.message}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Review Title *</Form.Label>
              <Form.Control
                type="text"
                {...register('title')}
                isInvalid={!!errors.title}
                placeholder="Summarize your experience"
              />
              <Form.Control.Feedback type="invalid">
                {errors.title?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Review *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                {...register('comment')}
                isInvalid={!!errors.comment}
                placeholder="Tell us about your experience with the food and service"
              />
              <Form.Control.Feedback type="invalid">
                {errors.comment?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Order Number (Optional)</Form.Label>
              <Form.Control
                type="text"
                {...register('orderNumber')}
                placeholder="ORD-123456"
              />
              <Form.Text className="text-muted">
                This helps us verify your order and provide better service
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Submitting...
                </>
              ) : (
                'Submit Review'
              )}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Reviews;
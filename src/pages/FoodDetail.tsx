import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Badge, Form, Tab, Tabs } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Star, ShoppingCart, ArrowLeft, Heart, Share2, Clock, Users } from 'lucide-react';
import { menuItems } from '../data/menuData';
import { useCart } from '../contexts/CartContext';
import { toast } from 'react-toastify';

const FoodDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const item = menuItems.find(item => item.id === parseInt(id || ''));

  if (!item) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>Food item not found</h2>
          <Button variant="primary" onClick={() => navigate('/menu')}>
            Back to Menu
          </Button>
        </div>
      </Container>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${item.name} - FoodHub`,
          text: item.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const relatedItems = menuItems
    .filter(relatedItem =>
      relatedItem.category === item.category &&
      relatedItem.id !== item.id
    )
    .slice(0, 3);

  return (
    <Container className="py-5">
      {/* Breadcrumb */}
      <Row className="mb-4">
        <Col>
          <Button
            variant="outline-secondary"
            onClick={() => navigate(-1)}
            className="mb-3"
          >
            <ArrowLeft size={16} className="me-2" />
            Back
          </Button>
        </Col>
      </Row>

      <Row>
        {/* Image Section */}
        <Col lg={6} className="mb-4">
          <div className="position-relative">
            <LazyLoadImage
              src={item.image}
              alt={item.name}
              className="img-fluid rounded shadow"
              effect="blur"
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />

            <div className="position-absolute top-0 end-0 p-3 d-flex gap-2">
              <Button
                variant="light"
                size="sm"
                className="rounded-circle p-2"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  size={20}
                  fill={isFavorite ? 'red' : 'none'}
                  color={isFavorite ? 'red' : 'currentColor'}
                />
              </Button>
              <Button
                variant="light"
                size="sm"
                className="rounded-circle p-2"
                onClick={handleShare}
              >
                <Share2 size={20} />
              </Button>
            </div>

            <div className="position-absolute bottom-0 start-0 p-3 d-flex gap-2">
              {item.isNew && <Badge bg="success">New</Badge>}
              {item.isPopular && <Badge bg="danger">Popular</Badge>}
              {item.isVegetarian && <Badge bg="success">🌱 Vegetarian</Badge>}
              {item.isSpicy && <Badge bg="warning">🌶️ Spicy</Badge>}
            </div>
          </div>
        </Col>

        {/* Details Section */}
        <Col lg={6}>
          <div className="mb-4">
            <h1 className="display-6 fw-bold mb-2">{item.name}</h1>
            <p className="lead text-muted mb-3">{item.description}</p>

            {/* Rating */}
            <div className="d-flex align-items-center mb-3">
              <div className="d-flex align-items-center me-4">
                <Star size={20} className="text-warning me-1" />
                <span className="fw-bold me-1">{item.rating}</span>
                <span className="text-muted">({item.reviews} reviews)</span>
              </div>
              <div className="d-flex align-items-center me-4">
                <Clock size={16} className="text-muted me-1" />
                <span className="small text-muted">20-30 min</span>
              </div>
              <div className="d-flex align-items-center">
                <Users size={16} className="text-muted me-1" />
                <span className="small text-muted">Serves 1-2</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="h2 fw-bold text-primary">${item.price.toFixed(2)}</span>
            </div>

            {/* Quantity Selector */}
            <Row className="mb-4">
              <Col md={6}>
                <Form.Label className="fw-bold">Quantity</Form.Label>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="mx-3 fw-bold">{quantity}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </Col>
              <Col md={6} className="d-flex align-items-end">
                <div>
                  <div className="fw-bold">Total: ${(item.price * quantity).toFixed(2)}</div>
                </div>
              </Col>
            </Row>

            {/* Add to Cart Button */}
            <div className="d-grid">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                className="d-flex align-items-center justify-content-center"
              >
                <ShoppingCart size={20} className="me-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Detailed Information Tabs */}
      <Row className="mt-5">
        <Col>
          <Tabs defaultActiveKey="ingredients" className="mb-4">
            <Tab eventKey="ingredients" title="Ingredients">
              <Card body>
                <h5 className="fw-bold mb-3">Ingredients</h5>
                <ul className="list-unstyled">
                  {item.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-2">
                      <Badge bg="light" text="dark" className="me-2">✓</Badge>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </Card>
            </Tab>

            <Tab eventKey="nutrition" title="Nutrition">
              <Card body>
                <h5 className="fw-bold mb-3">Nutritional Information</h5>
                <Row>
                  <Col md={6}>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Calories</span>
                      <span className="fw-bold">{item.nutrition.calories}</span>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Protein</span>
                      <span className="fw-bold">{item.nutrition.protein}g</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Carbohydrates</span>
                      <span className="fw-bold">{item.nutrition.carbs}g</span>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Fat</span>
                      <span className="fw-bold">{item.nutrition.fat}g</span>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Tab>

            <Tab eventKey="reviews" title={`Reviews (${item.reviews})`}>
              <Card body>
                <h5 className="fw-bold mb-3">Customer Reviews</h5>

                {/* Sample Reviews */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-warning" />
                      ))}
                    </div>
                    <span className="ms-2 fw-bold">Sarah M.</span>
                    <span className="ms-2 text-muted small">2 days ago</span>
                  </div>
                  <p>"Absolutely delicious! The flavors were amazing and it arrived hot and fresh. Definitely ordering again!"</p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={16} className="text-warning" />
                      ))}
                      <Star size={16} className="text-muted" />
                    </div>
                    <span className="ms-2 fw-bold">John D.</span>
                    <span className="ms-2 text-muted small">1 week ago</span>
                  </div>
                  <p>"Good portion size and tasty, though could use a bit more seasoning. Overall satisfied with the order."</p>
                </div>

                <Button variant="outline-primary">Write a Review</Button>
              </Card>
            </Tab>
          </Tabs>
        </Col>
      </Row>

      {/* Related Items */}
      {relatedItems.length > 0 && (
        <Row className="mt-5">
          <Col>
            <h3 className="fw-bold mb-4">You might also like</h3>
            <Row>
              {relatedItems.map((relatedItem) => (
                <Col lg={4} key={relatedItem.id} className="mb-4">
                  <Card className="h-100 shadow-sm border-0">
                    <LazyLoadImage
                      src={relatedItem.image}
                      alt={relatedItem.name}
                      className="card-img-top"
                      height="200"
                      effect="blur"
                      style={{ objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <h6 className="card-title fw-bold">{relatedItem.name}</h6>
                      <p className="card-text text-muted small">{relatedItem.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-primary">${relatedItem.price}</span>
                        <Button
                          as={Link}
                          to={`/menu/${relatedItem.id}`}
                          variant="outline-primary"
                          size="sm"
                        >
                          View
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default FoodDetail;
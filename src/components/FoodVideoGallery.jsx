import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, AlertCircle, RefreshCw, ChevronRight } from 'lucide-react';

const FoodVideoGallery = ({
  query = "food videos",
  maxVideos = 8,
  title = "Food Videos"
}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Mock data for demonstration (since Pinterest API requires authentication)
  const mockFoodVideos = [
    {
      id: 1,
      title: "Perfect Pasta Carbonara Tutorial",
      thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      duration: "5:32",
      author: "Chef Mario",
      views: "2.3M",
      embedUrl: null, // Pinterest doesn't allow direct embedding
      sourceUrl: "https://pinterest.com/pin/example1",
      type: "pinterest"
    },
    {
      id: 2,
      title: "Japanese Ramen from Scratch",
      thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      duration: "12:45",
      author: "Tokyo Kitchen",
      views: "1.8M",
      embedUrl: null,
      sourceUrl: "https://pinterest.com/pin/example2",
      type: "pinterest"
    },
    {
      id: 3,
      title: "French Croissant Making",
      thumbnail: "https://images.unsplash.com/photo-1555507036-ab794f575ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      duration: "8:20",
      author: "Paris Bakery",
      views: "956K",
      embedUrl: null,
      sourceUrl: "https://pinterest.com/pin/example3",
      type: "pinterest"
    },
    {
      id: 4,
      title: "Mexican Tacos Street Style",
      thumbnail: "https://images.unsplash.com/photo-1565299585323-38dd536ba215?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      duration: "6:15",
      author: "Mexico Lindo",
      views: "1.2M",
      embedUrl: null,
      sourceUrl: "https://pinterest.com/pin/example4",
      type: "pinterest"
    },
    {
      id: 5,
      title: "Indian Butter Chicken Recipe",
      thumbnail: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      duration: "9:30",
      author: "Spice Kitchen",
      views: "3.1M",
      embedUrl: null,
      sourceUrl: "https://pinterest.com/pin/example5",
      type: "pinterest"
    },
    {
      id: 6,
      title: "Homemade Pizza Dough",
      thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      duration: "4:45",
      author: "Italian Nonna",
      views: "2.7M",
      embedUrl: null,
      sourceUrl: "https://pinterest.com/pin/example6",
      type: "pinterest"
    },
    {
      id: 7,
      title: "Thai Pad Thai Masterclass",
      thumbnail: "https://images.unsplash.com/photo-1559314809-0226bf4594cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      duration: "7:18",
      author: "Bangkok Street Food",
      views: "1.5M",
      embedUrl: null,
      sourceUrl: "https://pinterest.com/pin/example7",
      type: "pinterest"
    },
    {
      id: 8,
      title: "Classic French Macarons",
      thumbnail: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      duration: "11:22",
      author: "Parisian Pastry",
      views: "890K",
      embedUrl: null,
      sourceUrl: "https://pinterest.com/pin/example8",
      type: "pinterest"
    }
  ];

  // Simulate API call with mock data
  const fetchFoodVideos = async (page = 0) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const startIndex = page * 4;
      const endIndex = startIndex + 4;
      const pageVideos = mockFoodVideos.slice(startIndex, endIndex);

      if (page === 0) {
        setVideos(pageVideos);
      } else {
        setVideos(prev => [...prev, ...pageVideos]);
      }

      setHasMore(endIndex < mockFoodVideos.length);
      setCurrentPage(page);

    } catch (err) {
      setError('Failed to fetch food videos. Please try again.');
      console.error('Error fetching videos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Pinterest embed checker (Pinterest doesn't allow direct embedding)
  const canEmbedVideo = (video) => {
    // Pinterest videos cannot be directly embedded due to their terms of service
    // We'll show thumbnails with links to the original source
    return false;
  };

  // Handle video click - opens Pinterest in new tab
  const handleVideoClick = (video) => {
    // Open Pinterest pin in new tab (respects Pinterest's ToS)
    window.open(video.sourceUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    fetchFoodVideos(0);
  }, [query]);

  const loadMore = () => {
    if (!loading && hasMore) {
      fetchFoodVideos(currentPage + 1);
    }
  };

  const retry = () => {
    setError(null);
    fetchFoodVideos(0);
  };

  if (error && videos.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <AlertCircle size={48} color="#dc3545" style={{ marginBottom: '20px' }} />
        <h3 style={{ color: '#333', marginBottom: '16px' }}>Unable to Load Videos</h3>
        <p style={{ color: '#666', marginBottom: '24px' }}>{error}</p>
        <button
          onClick={retry}
          style={{
            padding: '12px 24px',
            background: '#ff6b35',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: '0 auto'
          }}
        >
          <RefreshCw size={16} />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}
      >
        <div>
          <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '8px' }}>{title}</h2>
          <p style={{ color: '#666', fontSize: '1rem' }}>
            Delicious cooking tutorials and food inspiration
          </p>
        </div>

        {/* Pinterest Attribution */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <span>Powered by</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            alt="Pinterest"
            style={{ width: '20px', height: '20px' }}
          />
          <span>Pinterest</span>
        </div>
      </motion.div>

      {/* Video Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '40px'
      }}>
        <AnimatePresence>
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="food-video-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              whileHover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
              }}
              onClick={() => handleVideoClick(video)}
            >
              {/* Thumbnail with Play Button */}
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />

                {/* Play Button Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                className="play-overlay"
                >
                  <div style={{
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'scale(0.8)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <Play size={24} color="#ff6b35" fill="#ff6b35" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.8)',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {video.duration}
                </div>

                {/* External Link Icon */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ExternalLink size={14} color="#666" />
                </div>
              </div>

              {/* Video Info */}
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '8px',
                  lineHeight: '1.4',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {video.title}
                </h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ color: '#ff6b35', fontSize: '0.9rem', fontWeight: '600', marginBottom: '4px' }}>
                      {video.author}
                    </p>
                    <p style={{ color: '#999', fontSize: '0.8rem' }}>
                      {video.views} views
                    </p>
                  </div>

                  <div style={{
                    background: '#f8f9fa',
                    color: '#666',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>View on Pinterest</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: 'center' }}
        >
          <button
            onClick={loadMore}
            disabled={loading}
            style={{
              padding: '16px 32px',
              background: loading ? '#ccc' : '#ff6b35',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              margin: '0 auto'
            }}
          >
            {loading && <RefreshCw size={16} className="spinning" />}
            {loading ? 'Loading...' : 'Load More Videos'}
          </button>
        </motion.div>
      )}

      {/* Disclaimer */}
      <div style={{
        marginTop: '40px',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '12px',
        border: '1px solid #e9ecef'
      }}>
        <p style={{
          color: '#666',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          margin: 0,
          textAlign: 'center'
        }}>
          <strong>Note:</strong> Due to Pinterest's terms of service, videos cannot be embedded directly.
          Clicking on any video will open the original Pinterest pin in a new tab.
          All content belongs to their respective creators on Pinterest.
        </p>
      </div>

      {/* CSS for hover effects */}
      <style>{`
        .play-overlay {
          opacity: 0;
        }

        .food-video-card:hover .play-overlay {
          opacity: 1;
        }

        .food-video-card:hover .play-overlay > div {
          transform: scale(1);
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FoodVideoGallery;
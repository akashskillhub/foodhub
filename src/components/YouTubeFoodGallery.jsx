import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, AlertCircle, RefreshCw, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const YouTubeFoodGallery = ({
  query = "food cooking recipes",
  maxVideos = 8,
  title = "Cooking Videos"
}) => {
  const { theme } = useTheme();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Mock YouTube-style data (replace with real YouTube API in production)
  const mockYouTubeVideos = [
    {
      id: 'dQw4w9WgXcQ',
      title: "Perfect Italian Pasta Carbonara | Authentic Recipe",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      duration: "8:32",
      channel: "Chef Marco's Kitchen",
      views: "2.3M",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      publishedAt: "2023-10-15"
    },
    {
      id: 'xyz123abc',
      title: "Japanese Ramen from Scratch | Traditional Tonkotsu",
      thumbnail: "https://img.youtube.com/vi/xyz123abc/hqdefault.jpg",
      duration: "15:45",
      channel: "Tokyo Ramen Master",
      views: "1.8M",
      embedUrl: "https://www.youtube.com/embed/xyz123abc",
      videoUrl: "https://www.youtube.com/watch?v=xyz123abc",
      publishedAt: "2023-09-28"
    },
    {
      id: 'abc789def',
      title: "French Croissants | Step-by-Step Bakery Technique",
      thumbnail: "https://img.youtube.com/vi/abc789def/hqdefault.jpg",
      duration: "12:20",
      channel: "Paris Pastry School",
      views: "956K",
      embedUrl: "https://www.youtube.com/embed/abc789def",
      videoUrl: "https://www.youtube.com/watch?v=abc789def",
      publishedAt: "2023-11-02"
    },
    {
      id: 'def456ghi',
      title: "Mexican Street Tacos | Authentic Carnitas Recipe",
      thumbnail: "https://img.youtube.com/vi/def456ghi/hqdefault.jpg",
      duration: "10:15",
      channel: "Mexico Cocina",
      views: "1.2M",
      embedUrl: "https://www.youtube.com/embed/def456ghi",
      videoUrl: "https://www.youtube.com/watch?v=def456ghi",
      publishedAt: "2023-10-20"
    }
  ];

  // Simulate API call with mock data
  const fetchYouTubeVideos = async (page = 0) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const startIndex = page * 4;
      const endIndex = startIndex + 4;
      const pageVideos = mockYouTubeVideos.slice(startIndex, endIndex);

      if (page === 0) {
        setVideos(pageVideos);
      } else {
        setVideos(prev => [...prev, ...pageVideos]);
      }

      setHasMore(endIndex < mockYouTubeVideos.length);
      setCurrentPage(page);

    } catch (err) {
      setError('Failed to fetch cooking videos. Please try again.');
      console.error('Error fetching videos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoClick = (video) => {
    // Open YouTube video in new tab
    window.open(video.videoUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    fetchYouTubeVideos(0);
  }, [query]);

  const loadMore = () => {
    if (!loading && hasMore) {
      fetchYouTubeVideos(currentPage + 1);
    }
  };

  const retry = () => {
    setError(null);
    fetchYouTubeVideos(0);
  };

  if (error && videos.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <AlertCircle size={48} color={theme.colors.error} style={{ marginBottom: '20px' }} />
        <h3 style={{ color: theme.colors.text, marginBottom: '16px' }}>Unable to Load Videos</h3>
        <p style={{ color: theme.colors.textSecondary, marginBottom: '24px' }}>{error}</p>
        <button
          onClick={retry}
          style={{
            padding: '12px 24px',
            background: theme.colors.primary,
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
          <h2 style={{ fontSize: '2rem', color: theme.colors.text, marginBottom: '8px' }}>{title}</h2>
          <p style={{ color: theme.colors.textSecondary, fontSize: '1rem' }}>
            Delicious cooking tutorials and food inspiration from YouTube
          </p>
        </div>

        {/* YouTube Attribution */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: theme.colors.textSecondary,
          fontSize: '0.9rem'
        }}>
          <span>Powered by</span>
          <svg width="20" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M23.498 6.186a2.999 2.999 0 0 0-2.108-2.108C19.505 3.75 12 3.75 12 3.75s-7.505 0-9.39.328A2.999 2.999 0 0 0 .502 6.186C.174 8.071.174 12 .174 12s0 3.929.328 5.814a2.999 2.999 0 0 0 2.108 2.108C4.495 20.25 12 20.25 12 20.25s7.505 0 9.39-.328a2.999 2.999 0 0 0 2.108-2.108C23.826 15.929 23.826 12 23.826 12s0-3.929-.328-5.814zM9.75 15.568V8.432L15.568 12 9.75 15.568z" fill="#FF0000"/>
          </svg>
          <span>YouTube</span>
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
              className="youtube-video-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: theme.colors.surfaceAlt,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: `0 4px 20px ${theme.colors.shadow}`,
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              whileHover={{
                transform: 'translateY(-5px)',
                boxShadow: `0 8px 30px ${theme.colors.shadowHover}`
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
                <div
                  className="play-overlay"
                  style={{
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
                    <Play size={24} color="#FF0000" fill="#FF0000" />
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

                {/* YouTube Icon */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: '4px',
                  width: '32px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="16" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M23.498 6.186a2.999 2.999 0 0 0-2.108-2.108C19.505 3.75 12 3.75 12 3.75s-7.505 0-9.39.328A2.999 2.999 0 0 0 .502 6.186C.174 8.071.174 12 .174 12s0 3.929.328 5.814a2.999 2.999 0 0 0 2.108 2.108C4.495 20.25 12 20.25 12 20.25s7.505 0 9.39-.328a2.999 2.999 0 0 0 2.108-2.108C23.826 15.929 23.826 12 23.826 12s0-3.929-.328-5.814zM9.75 15.568V8.432L15.568 12 9.75 15.568z" fill="#FF0000"/>
                  </svg>
                </div>
              </div>

              {/* Video Info */}
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: theme.colors.text,
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
                    <p style={{
                      color: theme.colors.primary,
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '4px'
                    }}>
                      {video.channel}
                    </p>
                    <p style={{ color: theme.colors.textMuted, fontSize: '0.8rem' }}>
                      {video.views} views
                    </p>
                  </div>

                  <div style={{
                    background: theme.colors.surface,
                    color: theme.colors.textSecondary,
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>Watch on YouTube</span>
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
              background: loading ? theme.colors.border : theme.colors.primary,
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

      {/* CSS for hover effects */}
      <style>{`
        .youtube-video-card:hover .play-overlay {
          opacity: 1;
        }

        .youtube-video-card:hover .play-overlay > div {
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

export default YouTubeFoodGallery;
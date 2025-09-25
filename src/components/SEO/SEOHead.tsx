import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'FoodHub - Delicious Food Delivered Fast',
  description = 'Order fresh, delicious meals from FoodHub. Fast delivery, quality ingredients, and amazing taste. Browse our menu of burgers, pizzas, salads and more!',
  keywords = 'food delivery, restaurant, pizza, burgers, fast food, online ordering, meal delivery',
  image = '/og-image.jpg',
  url = window.location.href,
  type = 'website'
}) => {
  const fullTitle = title.includes('FoodHub') ? title : `${title} | FoodHub`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="FoodHub" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="author" content="FoodHub" />
      <meta name="theme-color" content="#ff6b35" />
      <link rel="canonical" href={url} />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "FoodHub",
          "description": description,
          "url": url,
          "image": image,
          "telephone": "+1-555-123-4567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Food Street",
            "addressLocality": "City",
            "addressRegion": "State",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "openingHours": "Mo-Su 09:00-23:00",
          "servesCuisine": ["American", "Italian", "Fast Food"],
          "acceptsReservations": false,
          "priceRange": "$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
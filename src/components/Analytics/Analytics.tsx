import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', 'GA_TRACKING_ID', {
        page_path: location.pathname,
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
};

// Google Analytics setup
export const initializeGA = () => {
  // Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID';
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  `;
  document.head.appendChild(script2);
};

// Facebook Pixel setup
export const initializeFBPixel = () => {
  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'FB_PIXEL_ID');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  const noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=FB_PIXEL_ID&ev=PageView&noscript=1"/>
  `;
  document.body.appendChild(noscript);
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'CustomEvent', {
      action: action,
      category: category,
      label: label,
      value: value,
    });
  }
};

// E-commerce tracking
export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  // Google Analytics E-commerce
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'USD',
      items: items.map(item => ({
        item_id: item.id,
        item_name: item.name,
        category: item.category,
        quantity: item.quantity,
        price: item.price,
      })),
    });
  }

  // Facebook Pixel Purchase
  if (window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: 'USD',
      content_ids: items.map(item => item.id),
      content_type: 'product',
    });
  }
};

export const trackAddToCart = (item: any) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'USD',
      value: item.price,
      items: [{
        item_id: item.id,
        item_name: item.name,
        category: item.category,
        price: item.price,
        quantity: 1,
      }],
    });
  }

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'AddToCart', {
      value: item.price,
      currency: 'USD',
      content_ids: [item.id],
      content_type: 'product',
    });
  }
};

export const trackViewItem = (item: any) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'USD',
      value: item.price,
      items: [{
        item_id: item.id,
        item_name: item.name,
        category: item.category,
        price: item.price,
      }],
    });
  }

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'ViewContent', {
      value: item.price,
      currency: 'USD',
      content_ids: [item.id],
      content_type: 'product',
    });
  }
};

export default Analytics;
/**
 * Google Analytics 4 (GA4) Integration Helper
 * Safely loads gtag.js if VITE_GA_MEASUREMENT_ID is defined.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

/**
 * Initialize GA4 script dynamically
 */
export const initGA = (): void => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  // Prevent duplicate script injection
  if (document.getElementById('ga-gtag-script')) {
    return;
  }

  // Inject Google Tag script
  const script = document.createElement('script');
  script.id = 'ga-gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer?.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    currency: 'INR'
  });
};

/**
 * Track custom events
 */
export const trackEvent = (action: string, params: Record<string, any> = {}): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

/**
 * Track page views
 */
export const trackPageView = (url: string, title?: string): void => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title || document.title
    });
  }
};

/**
 * Track Add to Cart
 */
export const trackAddToCart = (productName: string, category: string, price: number, quantity: number = 1): void => {
  trackEvent('add_to_cart', {
    currency: 'INR',
    value: price * quantity,
    items: [
      {
        item_name: productName,
        item_category: category,
        price,
        quantity
      }
    ]
  });
};

/**
 * Track Checkout Begun
 */
export const trackBeginCheckout = (value: number, itemCount: number): void => {
  trackEvent('begin_checkout', {
    currency: 'INR',
    value,
    item_count: itemCount
  });
};

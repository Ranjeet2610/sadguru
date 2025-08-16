// Load Google Ads Global Site Tag (gtag)
export const loadGoogleTag = () => {
  if (process.env.NODE_ENV !== 'production') return;

  // Prevent duplicate loading
  if (document.getElementById('gtag-script')) return;

  const script = document.createElement('script');
  script.id = 'gtag-script';
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17139747710';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'AW-17139747710');
};

// Fire a conversion event (optional redirect after event fires)
export const trackPageViewConversion = (url) => {
  if (typeof window.gtag === 'function') {
    const callback = () => {
      if (url) {
        window.location.href = url;
      }
    };

    window.gtag('event', 'conversion', {
      send_to: 'AW-17139747710/QgRCCO3MqtEaEP6W7-w_',
      value: 1.0,
      currency: 'INR',
      event_callback: callback,
    });
  }
};

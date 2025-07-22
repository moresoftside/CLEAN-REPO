import { useEffect } from 'react';

declare global {
  interface Window {
    netlifyIdentity: any;
  }
}

export default function NetlifyIdentity() {
  useEffect(() => {
    // Load Netlify Identity widget
    const script = document.createElement('script');
    script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on('init', (user: any) => {
          if (!user) {
            window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/';
            });
          }
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
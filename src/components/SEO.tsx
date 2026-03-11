import { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    // Title
    const brand = '<F.A/>';
    document.title = `${brand} | Portfolio`;

    // Favicon
    const faviconUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d7f62e2a-9210-4412-9a43-47bb265f0a4c/portfolio-logo-bab15e6e-1773262457500.webp';
    
    const updateLink = (rel: string, href: string, type?: string) => {
      let link: HTMLLinkElement | null = document.querySelector(`link[rel~="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = href;
      if (type) link.type = type;
    };

    updateLink('icon', faviconUrl, 'image/webp');
    updateLink('apple-touch-icon', faviconUrl);

    // Meta Tags Helper
    const updateMeta = (selector: string, content: string, attr: 'name' | 'property' = 'name') => {
      let meta = document.querySelector(`meta[${attr}="${selector}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, selector);
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('description', 'Professional Software Engineer Portfolio - Fozia (FA). Specializing in React, TypeScript, and modern web development.');
    updateMeta('author', 'Fozia');
    updateMeta('keywords', 'Fozia, FA, Software Engineer, Portfolio, React, TypeScript, Vite, Tailwind CSS, Frontend Developer');
    updateMeta('theme-color', '#000000');

    // Open Graph
    updateMeta('og:title', `${brand} Portfolio`, 'property');
    updateMeta('og:description', 'Explore the projects and experience of Fozia, a passionate Software Engineer.', 'property');
    updateMeta('og:image', faviconUrl, 'property');
    updateMeta('og:site_name', 'Fozia Portfolio', 'property');

    // Twitter
    updateMeta('twitter:title', `${brand} Portfolio`, 'property');
    updateMeta('twitter:description', 'Explore the projects and experience of Fozia, a passionate Software Engineer.', 'property');
    updateMeta('twitter:image', faviconUrl, 'property');

    // Apple
    updateMeta('apple-mobile-web-app-title', brand);

  }, []);

  return null;
};

export default SEO;
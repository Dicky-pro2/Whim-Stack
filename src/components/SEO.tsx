// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../utils/seo';

interface SEOProps {
  title: string;
  description: string;
  pathname: string;
  image?: string;
}

export default function SEO({ title, description, pathname, image = seoConfig.image }: SEOProps) {
  const url = `${seoConfig.url}${pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seoConfig.keywords} />
      <meta name="author" content={seoConfig.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={seoConfig.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={seoConfig.twitter} />

      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={url} />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Dickson',
          alternateName: 'Whim Stack',
          description: seoConfig.description,
          url: seoConfig.url,
          sameAs: [
            'https://twitter.com/whimstack',
            'https://linkedin.com/in/whimstack',
            'https://github.com/whimstack',
          ],
          jobTitle: 'Frontend Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'Whim Stack',
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'NG',
            addressLocality: 'Lagos',
          },
        })}
      </script>

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Whim Stack',
          url: seoConfig.url,
          description: seoConfig.description,
          logo: `${seoConfig.url}/logo.png`,
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'hello@whimstack.com',
            telephone: '+234-916-286-9066',
          },
          sameAs: [
            'https://twitter.com/whimstack',
            'https://linkedin.com/in/whimstack',
          ],
        })}
      </script>
    </Helmet>
  );
}
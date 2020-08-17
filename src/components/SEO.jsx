import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import locales from '../../config/i18n';

const replaceTrailing = _path => _path.replace(/\/$/, ``);

const SEO = ({ title, description, banner, pathname, i18n, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        buildTime,
        siteMetadata: {
          defaultTitle,
          titleAlt,
          shortName,
          author,
          siteLanguage,
          logo,
          siteUrl,
          pathPrefix,
          defaultDescription,
          defaultBanner,
          twitter,
        },
      },
    }) => {
      const localizedPath = locales[i18n.locale].default ? '' : `/${locales[i18n.locale].path}`;
      const isEnglish = !!locales[i18n.locale].default;
      const homeURL = `${siteUrl}${localizedPath}`;
      const URL = `${siteUrl}${replaceTrailing(pathname)}`;
      const isBlog = URL === `${homeURL}/blog`;
      const slicedPathname = pathname === '/ro' ? '/' : `${pathname}`.slice(3);
      const alternate = isEnglish ? replaceTrailing(`/ro${pathname}`) : replaceTrailing(slicedPathname);
      const alternateURL = `${siteUrl}${alternate}`;

      const seo = {
        title: title || defaultTitle,
        description: defaultDescription || description,
        image: `${siteUrl}${banner || defaultBanner}`,
        url: `${siteUrl}${pathname || '/'}`,
      };
      const realPrefix = pathPrefix === '/' ? '' : pathPrefix;
      let schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          '@id': siteUrl,
          url: siteUrl,
          name: defaultTitle,
          alternateName: titleAlt || '',
        },
      ];
      if (article) {
        schemaOrgJSONLD = [
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            '@id': seo.url,
            url: seo.url,
            name: title,
            alternateName: titleAlt || '',
            headline: title,
            inLanguage: i18n.htmlLang,
            image: {
              '@type': 'ImageObject',
              url: seo.image,
            },
            description: seo.description,
            datePublished: buildTime,
            dateModified: buildTime,
            author: {
              '@type': 'Person',
              name: author,
            },
            publisher: {
              '@type': 'Organization',
              name: author,
              logo: {
                '@type': 'ImageObject',
                url: siteUrl + realPrefix + logo,
              },
            },
            isPartOf: siteUrl,
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': siteUrl,
            },
          },
        ];
      }
      return (
        <>
          <Helmet title={seo.title}>
            <html lang={i18n.htmlLang} />
            <link rel="alternate" hrefLang="x-default" href={isEnglish ? alternateURL : URL} />
            {!article && <link rel="alternate" hrefLang={isEnglish ? 'en' : 'ro'} href={URL} />}
            {!article && <link rel="alternate" hrefLang={isEnglish ? 'ro' : 'en'} href={alternateURL} />}
            <meta httpEquiv="content-language" content={i18n.locale} />
            <meta name="description" content={locales[i18n.locale].description} />
            <meta name="image" content={seo.image} />
            <meta name="apple-mobile-web-app-title" content={shortName} />
            <meta name="application-name" content={shortName} />
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
            {/* OpenGraph  */}
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content={article ? 'article' : null} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitter} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  banner: null,
  pathname: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle: title
        titleAlt
        shortName
        author
        siteLanguage
        logo
        siteUrl: url
        pathPrefix
        defaultDescription: description
        defaultBanner: banner
        twitter
      }
    }
  }
`;

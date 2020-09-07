import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import PropTypes from 'prop-types';
import 'typeface-open-sans';
import 'typeface-candal';
import { SEO } from 'components';
import { NavBar, Footer } from 'layouts';
import theme from '../../config/theme';
import headroom from '../styles/headroom';
import locales from '../../config/i18n';
import { StaticQuery, graphql } from 'gatsby';

const { Provider: LocaleProvider, Consumer: LocaleConsumer } = React.createContext();

const Layout = ({ children, locale, pathname, customSEO }) => (
  <StaticQuery
    query={translationQuery}
    render={data => {
      const currentLanguage = locales[locale];
      const localData = data.allMarkdownRemark.edges.filter(
        ({ node }) => node.frontmatter.lang === currentLanguage.htmllang
      );

      const i18n = { ...currentLanguage, ...localData };
      return (
        <LocaleProvider value={{ i18n }}>
          <ThemeProvider theme={theme}>
            <>
              <Global
                styles={css`
                  *,
                  *:before,
                  *:after {
                    box-sizing: inherit;
                  }
                  html,
                  body {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                  }

                  body {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                  }
                  a {
                    color: ${theme.colors.link};
                    transition: color 0.5s;
                    text-decoration: none;
                  }
                  a:hover {
                    text-decoration: none;
                    color: ${theme.colors.linkHover};
                  }
                  h1 {
                    font-size: 5rem;
                    font-size: bold;
                    font-family: ${theme.fontFamily.heading};
                  }
                  ul {
                    list-style: none;
                  }
                  ${headroom}
                `}
              />
              {!customSEO && <SEO i18n={i18n} pathname={pathname} />}
              <NavBar />
              {children}
              <Footer />
            </>
          </ThemeProvider>
        </LocaleProvider>
      );
    }}
  />
);

export default Layout;

export { LocaleConsumer };

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

const translationQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/translation/" } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            lang
          }
          fileAbsolutePath
        }
      }
    }
  }
`;

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
// import Fonts from '../components/Fonts';

import merriweatherItalic from '../assets/fonts/merriweather-italic.woff2';
import merriweather from '../assets/fonts/merriweather.woff2';
import montserratReg from '../assets/fonts/montserrat-reg.woff2';
import saltwritten from '../assets/fonts/SaltWritten.woff2';
import saltheading from '../assets/fonts/SaltHeading.woff2';

const { Provider: LocaleProvider, Consumer: LocaleConsumer } = React.createContext();

const Layout = ({ children, locale = 'en-gb', pathname, customSEO }) => (
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

                    @font-face {
    font-family: 'Merriweather';
    src: url(${merriweather}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Headings';
    src: url(${saltheading}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Merriweather';
    src: url(${merriweatherItalic}) format('woff2');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratReg}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SaltWritten';
    src: url(${saltwritten}) format('woff2');
    font-weight: 400;
    font-style: italic;
  }
                  html,
                  body {
                    font: 16px/1.85 Merriweather,Georgia,sans-serif;
    text-rendering: optimizeLegibility;
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
                    color: ${theme.colors.black.text};
                    transition: color 0.5s;
                    text-decoration: none;
                  }
                  a:hover {
                    text-decoration: none;
                    color: ${theme.colors.linkHover};
                  }
                  h1,
                  h2,
                  h3,
                  h4,
                  h5 {
                    font-size: 5rem;
                    font-weight: bold;
                    /* font-family: ${theme.fontFamily.heading}; */
                    font-family: 'Headings', sans-serif;
                    font-weight: 700;
                  }
                  ul {
                    list-style: none;
                  }
                  .gatsby-image-wrapper {
                    height: 100%;
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

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

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
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
            background-color: ${theme.colors.white.light};
            flex-direction: column;
            min-height: 100vh;
          }
          .videoWrapper {
            position: relative;
            padding-bottom: 56.25%;
            padding-top: 25px;
            height: 0;
            margin-bottom: 20px;
          }
          .videoWrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .contents .contents-ul {
            column-count: 2;
            column-gap: 18%;
            columns: 2;
            list-style: none;
          }
          details summary {
            pointer-events: none;
          }
          p em {
            text-align: center;
            display: block;
          }
          @media (max-width: ${theme.breakpoints.s}) {
            .contents .contents-ul {
              column-count: 1;
              column-gap: 18%;
              columns: 1;
              list-style: none;
            }
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
            font-size: 4rem;
            font-weight: bold;
            font-family: ${theme.fontFamily.heading};
          }
          @media (max-width: ${theme.breakpoints.m}) {
            h1 {
              font-size: 1.8rem;
            }
          }

          @media (max-width: ${theme.breakpoints.s}) {
            h2 {
              font-size: 1.1rem;
            }
          }
          ${headroom}
        `}
      />
      <SEO />
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

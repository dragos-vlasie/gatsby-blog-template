import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../layouts/Layout';

import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import FadeIn from '../elements/FadeIn';
import Suggestions from '../elements/Suggestions';

const Post = ({ data, pageContext, location }) => {
  const { next, prev } = pageContext;
  const { html, frontmatter, excerpt } = data.markdownRemark;
  const { date, title, tags, path, description } = frontmatter;
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout locale={pageContext.lang} pathname={location.pathname} customSEO>
      <LocaleConsumer>
        {({ i18n }) => (
          <>
            <SEO
              title={title}
              i18n={i18n}
              description={description || excerpt || ' '}
              banner={image}
              pathname={path}
              article
            />
            <Header title={title} date={date} cover={image} />
            <Container type="article">
              <FadeIn>
                <Content input={html} />
              </FadeIn>
              <TagsBlock list={tags || []} />
            </Container>
            <Container>
              <Suggestions left={prev} right={next} cardstyle="secondary" />
            </Container>
          </>
        )}
      </LocaleConsumer>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        path
        cover {
          childImageSharp {
            fluid(maxWidth: 900, quality: 85, duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;

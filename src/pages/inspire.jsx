import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, BlogList } from 'components';
import { Layout } from 'layouts';
import { Container } from 'layouts';
import FadeIn from '../elements/FadeIn';

const Base = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
`;

const Inspire = ({ data, pageContext: { locale }, location }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout locale={locale} pathname={location.pathname}>
      <Helmet title={'Blog Page'} />
      <Header title="Blog Page"> Gatsby Blog Template</Header>
      <FadeIn>
        <Container>
          <Base>
            {edges.map(({ node }) => (
              <BlogList
                key={node.id}
                cover={node.frontmatter.cover.childImageSharp.fluid}
                path={node.frontmatter.path}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                tags={node.frontmatter.tags}
                excerpt={node.excerpt}
              />
            ))}
          </Base>
        </Container>
      </FadeIn>
    </Layout>
  );
};

export default Inspire;

Inspire.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

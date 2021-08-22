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

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Toate articolele'} />
      <Header title="Toate articolele">Aici puteti gasi toate postarile mele</Header>
      <FadeIn>
        <Container>
          <Base>
            {edges.map(({ node }) => {
              const tags = node.frontmatter.tags ? '/' + node.frontmatter.tags : '';

              return (
                <BlogList
                  key={node.id}
                  cover={node.frontmatter.cover.childImageSharp.fluid}
                  path={`${tags}${node.frontmatter.path}/`}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  tags={node.frontmatter.tags}
                  excerpt={node.excerpt}
                />
              );
            })}
          </Base>
        </Container>
      </FadeIn>
    </Layout>
  );
};

export default Blog;

Blog.propTypes = {
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" }, frontmatter: { published: { eq: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
                fluid(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import FadeIn from '../elements/FadeIn';
import Content from '../layouts/Content';
import Button from '../elements/Button';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -8rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: -8rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: -8rem 1rem 1rem 1rem;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  margin: 2rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 2rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 2rem 1rem 1rem 1rem;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={data.markdownRemark.frontmatter.serpTitle} />
      <Header title={data.markdownRemark.frontmatter.title}>
        {data.markdownRemark.frontmatter.subTitle}
      </Header>
      <FadeIn>
        <PostWrapper>
          {edges.map(({ node }) => {
            const { id, excerpt, frontmatter } = node;
            const { cover, path, title, date, tags } = frontmatter;
            const tagsPath = tags ? '/' + tags : '';
            const subCategoryPath = frontmatter.subCategory ? '/' + frontmatter.subCategory : '';
            const fullPath = `${tagsPath}${subCategoryPath}${path}/`;
            return (
              <PostList
                key={id}
                cover={cover.childImageSharp.fluid}
                path={fullPath}
                title={title}
                date={date}
                excerpt={excerpt}
              />
            );
          })}
        </PostWrapper>
      </FadeIn>
      <Content input={data.markdownRemark.html} page={true} />
      <CenterContainer>
        <Button to="/5x5/" type="primary" role="button">
          {data.markdownRemark.frontmatter.buttonTxt}
        </Button>
      </CenterContainer>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
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
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 85, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { title: { eq: "MuschiLaGreu.ro" } }) {
      id
      frontmatter {
        title
        serpTitle
        subTitle
        buttonTxt
      }
      html
    }
  }
`;

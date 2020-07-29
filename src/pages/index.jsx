import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { graphql } from 'gatsby';
import { Layout } from 'layouts';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import CardTag from '../elements/CardTag';
import FadeIn from '../elements/FadeIn';
import { LocaleConsumer } from '../layouts/Layout';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const CatergoriesWrapper = styled.div`
  display: flex;
  margin-top: -130px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const Index = ({ data, pageContext: { locale }, location }) => {
  const { edges } = data.allMarkdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  const postsByTag = {};

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }

        postsByTag[tag].push(node);
      });
    }
  });
  const tags = Object.keys(postsByTag);

  return (
    <Layout locale={locale} pathname={location.pathname}>
      <LocaleConsumer>
        {({ i18n }) => (
          <>
            <Helmet title={title} />
            <Header
              title={title}
              cover={edges[0].node.frontmatter.cover.childImageSharp.fluid}
              homePage={true}
            >
              {' '}
              "a journal for myself, curious eyes and fellow travellers!"
            </Header>
            <FadeIn>
              <CatergoriesWrapper>
                {tags &&
                  tags.map(tag => {
                    return <CardTag key={tag} tagName={tag} />;
                  })}
              </CatergoriesWrapper>
              <PostWrapper>
                {edges &&
                  edges.slice(0, 6).map(({ node }) => {
                    const { id, excerpt, frontmatter, fileAbsolutePath } = node;
                    const { cover, path, title, date, lang } = frontmatter;
                    const arrayPath = fileAbsolutePath.split('/');
                    const category = arrayPath
                      .slice(
                        arrayPath.indexOf('content') + 1,
                        arrayPath.indexOf('index.md') - 1
                      )
                      .join();
                    return (
                      <PostList
                        key={id}
                        cover={cover.childImageSharp.fluid}
                        path={`${category}${path}`}
                        title={title}
                        date={date}
                        excerpt={excerpt}
                      />
                    );
                  })}
              </PostWrapper>
            </FadeIn>
          </>
        )}
      </LocaleConsumer>
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
  query($pathSlug: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            lang
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 85
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      id
      frontmatter {
        title
      }
    }
  }
`;

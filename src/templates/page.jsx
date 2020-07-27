import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header, SEO } from 'components';
import config from '../../config/site';
import Content from '../layouts/Content';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
  padding: 5px 10px;
  border: solid 1px #fff;
  border-radius: 20px;
  &:hover {
    color: ${props => props.theme.colors.black.blue};
    background: ${props => props.theme.colors.white.light};
  }
`;

const Information = styled.div`
  text-align: center;
  h1 {
    font-size: 3rem;
    margin-bottom: 1.25rem;
  }
`;

const PageTemplate = ({ pageContext, data }) => {
  const { posts, title } = pageContext;
  const { html, frontmatter, excerpt } = data.markdownRemark;
  console.log('PageTemplate -> frontmatter', frontmatter);
  const { serpTitle } = frontmatter;
  console.log('PageTemplate -> serpTitle', serpTitle);
  const image = frontmatter.cover ? frontmatter.cover.childImageSharp.fluid : '';
  const subTitle = frontmatter.subTitle ? frontmatter.subTitle : '';
  const { description } = frontmatter;
  console.log('PageTemplate -> description', description);
  return (
    <Layout>
      <SEO title={title} description={description || excerpt || ' '} banner={image} page />
      <Helmet title={serpTitle} />
      <Header title={title} cover={image}>
        {subTitle}
        {/* <StyledLink to="/tags">All Tags</StyledLink> */}
      </Header>
      <Container type={'article'}>
        <Content input={html} />
        {/* <Information>
          {posts.map((post, index) => (
            <Link
              key={index}
              to={`/${post.frontmatter.tags}/${post.frontmatter.subCategory}${post.frontmatter.path}`}
            >
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
        </Information> */}
      </Container>
    </Layout>
  );
};

export default PageTemplate;

PageTemplate.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    title: PropTypes.string,
  }),
};

export const query = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      excerpt
      frontmatter {
        date
        title
        serpTitle
        tags
        subTitle
        description
        cover {
          childImageSharp {
            fluid(
              maxWidth: 900
              quality: 85
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
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

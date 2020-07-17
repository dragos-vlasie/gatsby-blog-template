import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header } from 'components';
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

const Tag = ({ pageContext, data }) => {
  console.log('Tag -> data', data);
  console.log('Tag -> pageContext', pageContext);
  const { posts, upperTag } = pageContext;
  console.log('Tag -> upperTag', upperTag);
  const { html, frontmatter } = data.markdownRemark;
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout>
      <Helmet title={`${upperTag} | ${config.title}`} />
      <Header title={upperTag} cover={image}>
        {/* <StyledLink to="/tags">All Tags</StyledLink> */}
      </Header>
      <Container>
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

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    upperTag: PropTypes.string,
  }),
};

export const query = graphql`
  query($upperTag: String!) {
    markdownRemark(frontmatter: { title: { eq: $upperTag } }) {
      html
      frontmatter {
        date
        title
        tags
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

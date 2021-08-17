import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';
import Suggestions from '../elements/Suggestions';
import TableOfContent from '../elements/TableOfContent';

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { html, frontmatter, excerpt } = data.markdownRemark;
  const { date, title, serpTitle, tags, path, description } = frontmatter;
  const image = frontmatter.cover.childImageSharp.fluid;
  let regex = '<details(.|\n)*?</details>';
  
  const tableOfContent = Array.isArray(html.match(regex)) ? html.match(regex)[0] : '';

  return (
    <Layout>
      <SEO
        title={serpTitle}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      <Header title={title} date={date} cover={image} />

      <TableOfContent input={tableOfContent} />
      <Content input={html} />
      <TagsBlock list={tags || []} />
      <Container>
        <Suggestions left={prev} right={next} cardstyle="secondary" />
      </Container>
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
    markdownRemark(frontmatter: { path: { eq: $pathSlug }, published: { eq: true } }) {
      html
      excerpt
      frontmatter {
        date
        title
        serpTitle
        tags
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

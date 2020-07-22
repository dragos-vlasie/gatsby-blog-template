import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';
import Suggestions from '../elements/Suggestions';
import TableOfContent from '../elements/TableOfContent';

const Post = ({ data, pageContext }) => {
  console.log('Post -> data', data);
  const { next, prev } = pageContext;
  const { html, frontmatter, excerpt } = data.markdownRemark;
  console.log('Post -> excerpt', excerpt);
  const { date, title, tags, path, description } = frontmatter;
  const image = frontmatter.cover.childImageSharp.fluid;
  let regex = '<details(.|\n)*?</details>';
  const tableOfContent = html.match(regex);

  return (
    <Layout>
      <SEO
        title={title}
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

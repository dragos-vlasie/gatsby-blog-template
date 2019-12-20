import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { Header, TagsBlock } from 'components';

const Tags = ({ pageContext }) => {
  console.log('pageContext:', pageContext)
  const { tags } = pageContext;
  console.log('tags:', tags)

  return (
    <Layout>
      <Header title="Tags Page"> Gatsby Blog Template</Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};

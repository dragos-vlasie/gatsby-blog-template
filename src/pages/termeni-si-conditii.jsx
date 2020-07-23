import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import Content from '../layouts/Content';

const Termeni = ({ data }, center) => {
  console.log('Termeni -> data', data);
  const { html } = data.allMarkdownRemark.edges[0].node;
  return (
    <Layout>
      <Helmet title={'Termeni si conditii'} />
      <Header title="Termeni si conditii"></Header>
      <Container center={center}>
        <Content input={html} />
      </Container>
    </Layout>
  );
};

export default Termeni;

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "Termeni si Conditii" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            subTitle
          }
          html
        }
      }
    }
  }
`;

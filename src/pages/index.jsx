import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { graphql } from 'gatsby';
import { Layout } from 'layouts';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import CardTag from '../elements/CardTag';
import FadeIn from '../elements/FadeIn';
import ImageLink from '../components/ImageLink';
import { LocaleConsumer } from '../layouts/Layout';
import DestinationsList from '../components/DestinationsList';
import { OverFlowContainer } from '../layouts/OverFlowContainer';
import Container from '../layouts/Container';
import GridContainer from '../layouts/GridContainer';
import QuickLinks from '../components/QuickLinks';
import CategoryNavigation from '../components/CategoryNavigation';
import SocialIcons from '../components/SocialIcons';
import BackgroundTitle from '../elements/BackgroundTitle';
import { margin } from 'polished';
import FlexSection from '../layouts/FlexSection';
import CategoryPreview from '../components/CategoryPreview';
import Discover from '../components/Discover';

const mockData = [
  '11 Things To Do in Luang Prabang, 3-Day Guide',
  '11 Things To Do in Luang Prabang, 3-Day Guide',
  '11 Things To Do in Luang Prabang, 3-Day Guide',
  '11 Things To Do in Luang Prabang, 3-Day Guide',
];

const continents = ['Asia', 'Africa', 'Europe', 'North America'];

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(1px, 68.75rem) minmax(0, 1fr);
  margin: 0;
  grid-template-areas:
    '. weekly .'
    'destination destination destination'
    '. continents .'
    '. ad .'
    '. shop .'
    '. about .';

  .weekly {
    grid-area: weekly;
    justify-content: space-between;
  }

  .destination {
    grid-area: destination;
    background: #f5f5f5 calc(50% + 800px) center/auto 100% repeat-x;

    justify-content: space-between;
  }

  .continents {
    grid-area: continents;
    margin-bottom: 35px;
  }
  .about {
    grid-area: about;
    margin-bottom: 35px;
  }

  @media (max-width: 1110px) {
    padding: 0 8px;
  }
`;

const Index = ({ data, pageContext: { locale }, location }) => {
  const { edges } = data.allMarkdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  const postsByTag = {};
  console.log(data);

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
            <Header title={title} cover={edges[0].node.frontmatter.cover.childImageSharp.fluid} type={'home'}>
              {' '}
              {console.log('edges[0]', edges[0])}
              <p style={{ color: 'white', fontSize: '19px' }}>
                &quot;A journal for myself, curious eyes and fellow travellers! &quot;
              </p>
            </Header>
            <FadeIn>
              <MainContainer>
                <section className="weekly">
                  <GridContainer type={'featured'}>
                    <ImageLink
                      image={edges[1].node.frontmatter.cover.childImageSharp.fluid}
                      type={'featured'}
                      textPosition={'featured'}
                      title={'This is a featured article'}
                      icon={'compassLight'}
                      position={'center'}
                    />
                    <QuickLinks
                      data={tags}
                      type={false}
                      image={edges[0].node.frontmatter.cover.childImageSharp.fluid}
                      title={'These are a few important articles'}
                    />
                  </GridContainer>
                </section>

                <section className="destination">
                  <Discover image={edges[0].node.frontmatter.cover.childImageSharp.fluid}></Discover>
                </section>

                <section className="continents">
                  <OverFlowContainer
                    articles={continents}
                    type={'continents'}
                    title={'Explore by continent'}
                    textPosition={'continents'}
                    image={edges[1].node.frontmatter.cover.childImageSharp.fluid}
                  />
                </section>

                <section className="about">
                  <GridContainer type={'flex'}>
                    <FlexSection></FlexSection>
                  </GridContainer>
                </section>
              </MainContainer>
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
                fluid(maxWidth: 1000, quality: 85) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
    file(relativePath: { eq: "sprite.webp" }) {
      id
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
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

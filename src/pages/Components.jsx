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
const mockData = [
  '11 Things To Do in Luang Prabang, 3-Day Guide',
  '11 Things To Do in Luang Prabang, 3-Day Guide',
  '11 Things To Do in Luang Prabang, 3-Day Guide',
];

const continents = ['Asia', 'Africa', 'Europe', 'North America'];

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

const Components = ({ data, pageContext: { locale }, location }) => {
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
            <Header title={title} cover={edges[0].node.frontmatter.cover.childImageSharp.fluid} homePage={true}>
              {' '}
              {console.log('edges[0].node.frontmatter', edges[0].node.frontmatter)}
              "A journal for myself, curious eyes and fellow travellers!"
            </Header>
            <Container>
              <FadeIn>
                {/* <DestinationsList data={tags} /> */}
                {/* <CatergoriesWrapper>{tags && tags.map(tag => <CardTag key={tag} tagName={tag} />)}</CatergoriesWrapper> */}
                <GridContainer type={'featured'}>
                  <ImageLink
                    image={
                      'https://www.saltinourhair.com/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-704x600.jpg'
                    }
                    type={'featured'}
                    textPosition={'featured'}
                    title={'This is a featured article'}
                    icon={'compass'}
                    position={'center'}
                  />
                  <QuickLinks data={tags} type={false} title={'These are a few important articles'} />
                </GridContainer>
                {/* <PostWrapper>
                  {edges &&
                    edges.slice(0, 6).map(({ node }) => {
                      const { id, excerpt, frontmatter, fileAbsolutePath } = node;
                      const { cover, path, title, date, lang } = frontmatter;
                      const arrayPath = fileAbsolutePath.split('/');
                      const category = arrayPath
                        .slice(arrayPath.ComponentsOf('content') + 1, arrayPath.ComponentsOf('Components.md') - 1)
                        .join();
                      return (
                        <PostList
                          key={id}
                          cover={cover.childImageSharp.fluid}
                          path={`${path}`}
                          title={title}
                          date={date}
                          excerpt={excerpt}
                        />
                      );
                    })}
                </PostWrapper> */}
              </FadeIn>
              <GridContainer>
                <QuickLinks data={tags} />
                <ImageLink
                  image={
                    'https://www.saltinourhair.com/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-704x600.jpg'
                  }
                  type={'category'}
                  title={'This is a random title'}
                  icon={'mustRead'}
                  position={'topLeft'}
                  arrow={true}
                />
              </GridContainer>
              <OverFlowContainer
                articles={continents}
                type={'continents'}
                title={'Explore by continent'}
                textPosition={'continents'}
              />
              <GridContainer>
                <DestinationsList data={continents} />
                <ImageLink
                  image={
                    'https://www.saltinourhair.com/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-704x600.jpg'
                  }
                  type={'category'}
                  title={'This is a random title'}
                  icon={'mustRead'}
                  arrow={true}
                  position={'topLeft'}
                />
              </GridContainer>
              <GridContainer type={'flex'}>
                <FlexSection></FlexSection>
              </GridContainer>
              <OverFlowContainer
                articles={mockData}
                type={'bestOf'}
                title={'Best of categories'}
                textPosition={'top'}
              />
              <OverFlowContainer articles={mockData} type={'normal'} title={'Normal articles'} textPosition={'top'} />
              <CategoryNavigation />
            </Container>
          </>
        )}
      </LocaleConsumer>
    </Layout>
  );
};

export default Components;

Components.propTypes = {
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
                fluid(maxWidth: 1000, quality: 85, traceSVG: { color: "#2B2B2F" }) {
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

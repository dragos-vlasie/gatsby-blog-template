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
                        .slice(arrayPath.indexOf('content') + 1, arrayPath.indexOf('index.md') - 1)
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
                  icon={'icon-name'}
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
                  icon={'icon-name'}
                  arrow={true}
                  position={'topLeft'}
                />
              </GridContainer>
              <GridContainer>
                <div class="about-image">
                  <img
                    src="/build/images/blank.png"
                    data-srcset="/build/images/home/about-us.jpg 423w, /build/images/home/about-us-2.jpg 845w"
                    class=" ls-is-cached lazyloaded"
                    width="423"
                    height="427"
                    alt="Hannah and Nick - Salt in our Hair"
                    srcset="/build/images/home/about-us.jpg 423w, /build/images/home/about-us-2.jpg 845w"
                  />
                </div>
                <div class="about-content">
                  <div class="about-content__title">ABOUT</div>
                  <div class="about-content__subtitle">Hannah &amp; Nick</div>
                  <p class="about-content__text">
                    Hi! We're Hannah &amp; Nick, two creatives that run a 'travel content creation' company named Salt
                    in our Hair. We inspire people to travel via our travel guides, photography and videography.
                    <a href="/about-us" target="_blank">
                      More about us
                    </a>{' '}
                    /{' '}
                    <a href="/work-with-us" target="_blank">
                      Work with us
                    </a>
                  </p>
                  <div class="socials">
                    <div class="socials__item">
                      <a
                        class="socials__link"
                        href="https://www.instagram.com/saltinourhair/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Instagram Salt in our Hair"
                      ></a>
                    </div>
                    <div class="socials__item">
                      <a
                        class="socials__link"
                        href="https://www.youtube.com/c/saltinourhairtravel?sub_confirmation=1"
                        target="_blank"
                        rel="noopener"
                        aria-label="Youtube Salt in our Hair"
                      ></a>
                    </div>
                    <div class="socials__item">
                      <a
                        class="socials__link"
                        href="https://www.pinterest.com/saltinourhair/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Pinterest Salt in our Hair"
                      ></a>
                    </div>
                    <div class="socials__item">
                      <a
                        class="socials__link"
                        href="https://www.facebook.com/saltinourhair/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Facebook Salt in our Hair"
                      ></a>
                    </div>
                  </div>
                </div>
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

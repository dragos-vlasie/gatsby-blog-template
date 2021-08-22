import React from 'react';
import CategoryNavigation from '../components/CategoryNavigation';
import Headroom from 'react-headroom';
import { Header } from 'components';

import { Helmet } from 'react-helmet';
import Layout from '../layouts/Layout';
import GridContainer from '../layouts/GridContainer';
import ImageLink from '../components/ImageLink';
import QuickLinks from '../components/QuickLinks';
import Container from '../layouts/Container';
import styled from '@emotion/styled';
import OverFlowContainer from '../layouts/OverFlowContainer';

const tags = [
  'Nume de articol',
  'Articol important pe aceasta categorie',
  'Interesant mare frumos',
  'Snitel de curcan',
];

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(1px, 68.75rem) minmax(0, 1fr);
  grid-template-areas:
    'toolbar toolbar toolbar'
    '. intro .'
    '. articles .'
    'search search search'
    '. videos .'
    '. ad2 .'
    '. pagecontent .';
  flex: 1 0 auto;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  width: 100%;
  z-index: 98;

  .toolbar {
    grid-area: toolbar;
    display: block;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    grid-template-columns: minmax(auto, 650px) 350px;
    grid-gap: 25px;
    justify-content: space-between;
  }
  .articles {
    display: grid;
    grid-area: intro;
    grid-gap: 105px;

    @media (min-width: 980px) {
      grid-template-columns: minmax(auto, 650px) 350px;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin: 35px 0 0;
      margin-right: 12px;
      flex: 1 1 25%;
    }
  }
  .category-articles {
    grid-area: articles;
  }
`;
export const Destinations = ({ pageContext: { locale }, location }) => {
  return (
    <Layout pathname={location.pathname} locale={locale}>
      <Helmet title={'Title'} />
      <Header title={'Title'}> "A journal for myself, curious eyes and fellow travellers!"</Header>
      <GridWrapper>
        <div className="toolbar">
          <CategoryNavigation />
        </div>
        <div className="articles">
          {/* <GridContainer type={'featured'}> */}
          <ImageLink
            image={'/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-704x600.jpg'}
            type={'category'}
            title={'This is a random title'}
            icon={'mustRead'}
            arrow={true}
            position={'topLeft'}
          />
          <QuickLinks data={tags} title={'These are a few important articles'} />
          {/* </GridContainer> */}
        </div>
        <div className="category-articles">
          <OverFlowContainer
            articles={tags}
            type={'normal'}
            title={'Best of categories'}
            textPosition={'top'}
            // image={}
          />
        </div>
      </GridWrapper>
    </Layout>
  );
};
export default Destinations;

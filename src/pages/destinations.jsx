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

const tags = ['Nume de articol', 'Articol important pe aceasta categorie', 'Interesant mare frumos'];

export const Destinations = ({ pageContext: { locale }, location }) => {
  return (
    <Layout pathname={location.pathname} locale={locale}>
      <Helmet title={'Title'} />
      <Header title={'Title'}> "A journal for myself, curious eyes and fellow travellers!"</Header>
      <div className="Destinations">
        <Container>
          <CategoryNavigation />
          <GridContainer type={'featured'}>
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
            <QuickLinks data={tags} title={'These are a few important articles'} />
          </GridContainer>
        </Container>
      </div>
    </Layout>
  );
};
export default Destinations;

import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ErrorPage = center => (
  <Layout>
    <Helmet title={'404'} />
    <Header title="404" />
    <Container className={'flex-center-column'}>
      <h1>Woops, ceva nu e bine.</h1>
      <h3>Aceasta pagina nu mai exista sau nu mai poate fi acesata.</h3>
      <h3>
        Puteti sa va intoarceti la <Link to="/">Pagina de start</Link>.
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

ErrorPage.propTypes = {
  center: PropTypes.object,
};

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = ({ pageContext: { locale }, location, center }) => (
  <Layout locale={locale} pathname={location.pathname}>
    <Helmet title={'About Page'} />
    <Header title="About Page">Gatsby Blog Template</Header>
    <Container center={center}>
      <h3>
        Hi, I'm Alma and I am a travel addict! I've discovered travelling probably later than many of you, when I was a
        teenager and we used to take a family roadtrips through Europe every summer. I got on a plane for the first time
        when I was 18 (!) and went to Paris with a cousin.Since then, I've visited 3 continents and 22 countries. I've
        lived in London for my undergrad studies, then in Japan and Thailand. I am originally from Romania. Besides my
        journeys, my passions include writing, readings, writing poems (only in Romanian, sorry), advertising. Recently,
        I've started amateur photography and editing as well. See my gallery on my Ig account. I have a full time job in
        SEO, but whenever I get a chance I work remotely and go to explore a new place. The top 5 things on my bucket
        list are seeing the Northern Lights, hugging an Emperor Penguin at Ski Dubai, Bungy Jump from Macau Tower, see a
        blue whale and riding my own Harley Sporster motorbike down the Transfagarasan mountain pass in Romania.
      </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};

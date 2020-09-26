import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import Wave from '../elements/Wave';

const Wrapper = styled.header`
  background: ${props => props.theme.gradient.rightToLeft};
  height: ${props => (props.big ? '650px' : '550px')};
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: ${props => (props.big ? '600px' : '500px')};
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: ${props => (props.big ? '500px' : '325px')};
  }
  z-index: ${props => (props.homePage ? 0 : 1)};

  margin-bottom: ${props => (props.homePage ? '0' /* sau -210px */ : 0)};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-bottom: ${props => (props.homePage ? 0 : 0)};
  }
  position: relative;
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 650px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 500px;
    .gatsby-image-wrapper {
      height: 500px;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 400px;
    .gatsby-image-wrapper {
      height: 400px;
    }
  }
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled(animated.p)`
  max-width: 650px;
  color: ${props => props.theme.colors.white.blue};
  font-style: italic;
`;

const Header = ({ children, title, date, cover, big, homePage }) => {
  const titleProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  const subProps = useSpring({
    config: config.slow,
    delay: 400,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <Wrapper big={true} homePage={homePage}>
      <Img fluid={cover || {} || [] || ''} />
      <Text>
        <animated.h1 data-testid="header-title" style={titleProps}>
          {title}
        </animated.h1>
        <animated.h3 data-testid="header-title" style={subProps}>
          {date}
        </animated.h3>

        {children && <Subtitle style={subProps}>{children}</Subtitle>}
      </Text>
      <Wave orientation={'bottom'} />
    </Wrapper>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
  big: false,
};

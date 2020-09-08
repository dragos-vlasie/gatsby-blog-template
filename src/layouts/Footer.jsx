import React from 'react';
import styled from '@emotion/styled';
import Wave from '../elements/Wave';

const Wrapper = styled.footer`
  margin-top: 80px;
  position: relative;
  height: 200px;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  padding-top: 7rem;
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Copyright = styled.div`
  color: ${props => props.theme.tint.blueWhite};
  font-size: 0.9rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 0.5rem;
  }
`;

const Footer = () => (
  <Wrapper>
    <Wave orientation={'top'} />
    <Text>
      <span>Gatsby Template </span>
      <Copyright>Copyright © 2019. Dragos Vlasie.</Copyright>
    </Text>
  </Wrapper>
);
export default Footer;

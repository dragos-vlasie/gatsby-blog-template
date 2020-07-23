import React from 'react';
import styled from '@emotion/styled';
import Wave from '../elements/Wave';
import { Link } from 'gatsby';

const Wrapper = styled.footer`
  position: relative;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  padding-top: 7rem;
  padding-bottom: 2rem;

  a {
    color: ${props => props.theme.tint.blueWhite};
  }
`;

const Text = styled.div`
  margin: 0;
  text-align: center;
  align-self: flex-end;
  color: ${props => props.theme.colors.white.light};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    align-self: center;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

const TextLine = styled.div`
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
    <FlexContainer>
      <Text>
        <TextLine>Copyright © 2019. Dragos Vlasie. All rights reserved.</TextLine>
      </Text>
      <Text>
        <TextLine>
          <Link to="/exercitii">Politica de confidentialitate</Link>
        </TextLine>
        <TextLine>
          <Link to="/exercitii">Termeni si conditii</Link>
        </TextLine>
      </Text>
    </FlexContainer>
  </Wrapper>
);
export default Footer;

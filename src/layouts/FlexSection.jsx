import React from 'react';
import styled from '@emotion/styled';
import SocialIcons from '../components/SocialIcons';
import BackgroundTitle from '../elements/BackgroundTitle';

const FlexItem = styled.div`
  max-width: 100%;
  margin: 0;
  width: auto;
  flex: 0 1 auto;
  @media (max-width: 767px) {
    align-self: center;
  }
`;
const Text = styled.div`
  font-family: 'SaltWritten';
  font-size: 24px;
  max-width: 310px;
  font-size: 3.8em;
    top: -35px;
    position: relative;
    transform: translateX(15%);
`

const SecondFlexItem = styled.div`
  max-width: 50%;
  margin-left: 70px;
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
`;

const ContentText = styled.p`
  text-align: right;
  font-family: Montserrat, Arial;
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 1.85em;
`;

export const FlexSection = () => {
  return (
    <>
      <FlexItem>
        <img
          style={{ height: 'auto' }}
          src="/build/images/home/about-us-2.jpg"
          width="423"
          height="427"
          alt="Alma and Dragos - Alma travels"
        />
      </FlexItem>
      <SecondFlexItem>
        <BackgroundTitle label={'ABOUT'} />
        <Text >Alma &amp; Dragos</Text>
        <ContentText style={{}}>
          Hi! We're Alma &amp; Dragos, two creatives that run a 'travel content creation' company named Salt in our
          Hair. We inspire people to travel via our travel guides, photography and videography.
          <br></br>
          <a href="/about-us" target="_blank">
            More about us
          </a>{' '}
          /{' '}
          <a href="/work-with-us" target="_blank">
            Work with us
          </a>
        </ContentText>
        <SocialIcons />
      </SecondFlexItem>
    </>
  );
};
export default FlexSection;

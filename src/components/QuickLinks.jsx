import React from 'react';
import styled from '@emotion/styled';
import Icon from '../elements/ArticleIcon';
import ImageLink from './ImageLink';

const SVG = styled.div`
  height: 0.85em;
  left: 0;
  width: 20px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%) rotate(-90deg);
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
`;

const QuickLinksContainer = styled.div`
  position: relative;
  margin-top: -60px;

  @media (max-width: 767px) {
    margin-top: 0px;
  }

  &::after {
    /* background-image: url(/build/images/pink-roundshape.png);
    background-size: contain;
    background-position: center;
    content: '';
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1; */
  }
`;
const QuickLinksImageContainer = styled.div``;
const QuickLinksImage = styled.span``;
const QuickLinksMedia = styled.div`
  height: 75px;
  width: 75px;
  margin: 20px auto 15px;
  display: flex;
  flex: 0 0 auto;
  position: relative;
`;
const QuickLinksTitle = styled.h3`
  text-align: center;
`;
const QuickLinksList = styled.ul`
  display: inline-block;
`;
const QuickLinksListItem = styled.li`
  margin-top: 15px;
  padding-left: 2.5rem;
  position: relative;
  &:hover ${SVG} {
    transform: translate(8px, -50%) rotate(-90deg);
  }
`;
const QuickLinksAnchor = styled.a`
line-height: 28px
  background-image: linear-gradient(transparent calc(100% - 0.4em), #c0e2e2 0),
    linear-gradient(transparent calc(100% - 0.4em), #f0e8e7 0);
  background-repeat: no-repeat;
  background-size: 0 88%, 100% 88%;
  color: black;
  font-family: 'Headings',Arial;
  font-size: 20px
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background-size: 100% 88%, 100% 88%;
    text-decoration: none;
    background-image: linear-gradient(transparent calc(100% - 0.4em), #c0e2e2 0),
      linear-gradient(transparent calc(100% - 0.4em), #f0e8e7 0);
  }

  &:hover ${SVG} {
    transform: translate(15px, -50%) rotate(-90deg);
  }
`;

// const Image = styled.image``;
const ArticleBlock = styled.a``;

const QuickLinksAnchorIcon = styled.span``;

const Img = ({ image }) => {
  return (
    <div style={{ height: '315px', margin: 'auto' }}>
      <ImageLink image={image} title="Acesta este un titlu" type="continents" />
    </div>
  );
};

const MediaIcon = ({ title, circle }) => {
  return (
    <div>
      <QuickLinksMedia>
        <svg viewBox="0 0 32 32" id="icon-arrow" xmlns="http://www.w3.org/2000/svg">
          <path d="M29 19.9L17.6 31.3c-.9.9-2.3.9-3.2 0L3 19.9c-.9-.9-.9-2.3 0-3.2s2.3-.9 3.2 0l7.5 7.5V2.3C13.7 1 14.7 0 16 0s2.3 1 2.3 2.3v21.9l7.5-7.5c.4-.4 1-.7 1.6-.7s1.2.2 1.6.7c.9.9.9 2.3 0 3.2z"></path>
        </svg>
        <Icon icon={'compass'} circle={circle} position={'center'} />
      </QuickLinksMedia>
      <QuickLinksTitle>{title}</QuickLinksTitle>
    </div>
  );
};

export const QuickLinks = ({ data, type = 'true', image, circle, title }) => {
  return (
    <QuickLinksContainer>
      {type && type ? <MediaIcon tilte={title} circle={circle} /> : <Img image={image} />}
      <QuickLinksList>
        {data &&
          data.map((titleTitle, index) => (
            <QuickLinksListItem key={index}>
              <QuickLinksAnchor href="/travel-blog/best-places-to-travel/">{titleTitle}</QuickLinksAnchor>
              <SVG>
                <svg viewBox="0 0 32 32" id="icon-arrow" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29 19.9L17.6 31.3c-.9.9-2.3.9-3.2 0L3 19.9c-.9-.9-.9-2.3 0-3.2s2.3-.9 3.2 0l7.5 7.5V2.3C13.7 1 14.7 0 16 0s2.3 1 2.3 2.3v21.9l7.5-7.5c.4-.4 1-.7 1.6-.7s1.2.2 1.6.7c.9.9.9 2.3 0 3.2z"></path>
                </svg>
              </SVG>
            </QuickLinksListItem>
          ))}
      </QuickLinksList>
    </QuickLinksContainer>
  );
};
export default QuickLinks;

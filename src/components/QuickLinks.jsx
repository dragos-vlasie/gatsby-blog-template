import React from 'react';
import styled from '@emotion/styled';
import Icon from '../elements/ArticleIcon';
import ImageLink from './ImageLink';

const QuickLinksContainer = styled.div`
  position: relative;

  &::after {
    background-image: url(https://www.saltinourhair.com/build/images/pink-roundshape.png);
    background-size: contain;
    background-position: center;
    content: '';
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
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
const QuickLinksList = styled.ul``;
const QuickLinksListItem = styled.li`
  margin-top: 15px;
  padding-left: 2rem;
  position: relative;
`;
const QuickLinksAnchor = styled.a`
  background-image: linear-gradient(transparent calc(100% - 0.4em), #c0e2e2 0),
    linear-gradient(transparent calc(100% - 0.4em), #f0e8e7 0);
  background-repeat: no-repeat;
  background-size: 0 88%, 100% 88%;
  color: rgb(53, 53, 53);
  font-family: Ariel;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background-size: 100% 88%, 100% 88%;
    text-decoration: none;
    background-image: linear-gradient(transparent calc(100% - 0.4em), #c0e2e2 0),
      linear-gradient(transparent calc(100% - 0.4em), #f0e8e7 0);
  }
`;

const Image = styled.image``;
const ArticleBlock = styled.a``;

const QuickLinksAnchorIcon = styled.span``;

export const QuickLinks = ({ data }) => {
  return (
    <QuickLinksContainer>
      {/* <QuickLinksMedia>
        <svg viewBox="0 0 32 32" id="icon-arrow" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 19.9L17.6 31.3c-.9.9-2.3.9-3.2 0L3 19.9c-.9-.9-.9-2.3 0-3.2s2.3-.9 3.2 0l7.5 7.5V2.3C13.7 1 14.7 0 16 0s2.3 1 2.3 2.3v21.9l7.5-7.5c.4-.4 1-.7 1.6-.7s1.2.2 1.6.7c.9.9.9 2.3 0 3.2z"></path>
        </svg>
        <Icon icon={'compass'} position={'center'} />
      </QuickLinksMedia> */}
      {/* <QuickLinksTitle>Must read</QuickLinksTitle> */}
      <div style={{ height: '315px', margin: 'auto' }}>
        <ImageLink
          image={
            'https://www.saltinourhair.com/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-704x600.jpg'
          }
          title="test"
          type="continents"
        />
        {/* this can be changed to something else Either a image a title with an icon  */}
        {/* <div class="salt-icon__container category-details__icon category__quicklinks-icon">
        <span class="salt-icon salt-icon--compass"></span>
        <svg class="icon icon-round-shape"></svg>
      </div> */}
        {/* this can be changed to something else Either a image a title with an icon  */}
      </div>
      <QuickLinksList>
        {data &&
          data.map((title, index) => (
            <QuickLinksListItem key={index}>
              <QuickLinksAnchor href="https://www.saltinourhair.com/travel-blog/best-places-to-travel/">
                {title}
              </QuickLinksAnchor>
              <svg style={{ display: 'none' }}></svg>
            </QuickLinksListItem>
          ))}
      </QuickLinksList>
    </QuickLinksContainer>
  );
};
export default QuickLinks;

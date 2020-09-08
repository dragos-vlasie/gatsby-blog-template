import React from 'react';
import styled from '@emotion/styled';
import Icon from '../elements/ArticleIcon';
import ArticleTitle from '../elements/Title';
import Button from '../elements/Button';
import { css, jsx } from '@emotion/core';

const ArticleBlockImage = styled.div`
  box-shadow: ${props => (props.type == 'category' ? '7px 7px 0 #f5f4f2' : 'none')};
  height: ${props => (props.type == 'category' ? '385px' : '100%')};
  transition: box-shadow 0.2s ease-out;
  will-change: box-shadow;
  backface-visibility: hidden;
  border-radius: 7px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  max-width: 100%;
  /* order: 1; */
  overflow: hidden;
  position: relative;
  transform: scale(1);
  transition: transform 0.5s cubic-bezier(0.75, 0, 0.15, 1);
  width: 100%;
  z-index: 1;
`;

const ArticleBlockImageLink = styled.div`
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  display: block;
  height: inherit;
  width: 100%;
  /*  doenst work for some reason */
  &:after {
    content: '';
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: opacity 0.2s;
  }
`;

const test = css``;

const ArticleBlock = styled.a`
  overflow: visible;
  align-self: flex-start;
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin-bottom: ${props => (props.type == 'category' ? '14px' : '0')};
  position: relative;
  width: 100%;
  z-index: 1;

  &:hover ${ArticleBlockImage} {
    transform: scale(1);
  }
  &:hover ${ArticleBlockImageLink} {
    transform: scale(1.02);
  }
  /* &:hover ${test} {
    transform: translate(5px, 0);
  } */
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  position: relative;
  min-width: 100%;
  height: 100%;
`;

// we may change this with a prop the margin value
const ArticleCategoryIntro = styled.div`
  /* order: 2; */
  margin-top: ${props => (props.type == 'category' ? '40px' : '0')};
  position: relative;
  height: ${props => (props.type == 'category' ? '385px' : '100%')};
`;

// Break this down in to imported image imported icon imported title
// Then wrap what you need so that u can use on hover
// Once done this can be an organism

export const ImageLink = ({ type, title, textPosition, position, icon, arrow }) => {
  return (
    <ArticleCategoryIntro>
      <ArticleBlock href="https://www.saltinourhair.com/laos/luang-prabang/" title={title}>
        {icon ? <Icon icon={icon} position={position} /> : null}
        <ArticleBlockImage type={type}>
          <ArticleBlockImageLink>
            <picture>
              <Image // use gatsby image
                src="https://www.saltinourhair.com/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-704x600.jpg"
                data-sizes="auto"
                data-srcset="https://www.saltinourhair.com/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-704x600.jpg 704w, https://www.saltinourhair.com/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-1267x1080.jpg 1267w"
                alt={title}
                srcset="https://www.saltinourhair.com/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-704x600.jpg 704w, https://www.saltinourhair.com/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-1267x1080.jpg 1267w"
              />
            </picture>
          </ArticleBlockImageLink>
        </ArticleBlockImage>
        <ArticleTitle title={title} textPosition={textPosition} arrow={arrow}>
          <Button css={test} />
        </ArticleTitle>
      </ArticleBlock>
    </ArticleCategoryIntro>
  );
};
export default ImageLink;

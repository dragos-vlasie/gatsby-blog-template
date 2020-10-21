import React from 'react';
import styled from '@emotion/styled';
import Icon from '../elements/ArticleIcon';
import ArticleTitle from '../elements/Title';
import Button from '../elements/Button';
import Img from 'gatsby-image';

const ArticleBlockImage = styled.div`
  box-shadow: ${props => (props.type == 'category' || props.type === 'featured' ? '7px 7px 0 #f5f4f2' : 'none')};
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
  position: ${props => (props.type == 'featured' || props.type == 'continents' ? 'absolute' : 'relative')};
  transform: scale(1);
  transition: transform 0.5s cubic-bezier(0.75, 0, 0.15, 1);
  width: 100%;
  z-index: 1;
`;

const ArticleBlockImageLink = styled.div`
  transition: transform 0.5s;
  display: block;
  height: inherit;
  width: 100%;
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

const Wrapper = styled.div`
  transform: translate(0, 0);
  transition: transform 0.2s;
`;

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
  &:hover ${Wrapper} {
    transform: translate(5px, 0);
  }
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
  margin-top: ${props => (props.type == 'category' ? '0' /*'40px'*/ : '0')};
  position: relative;
  height: ${props => (props.type == 'category' ? 'auto' /* 385px */ : '100%')};
  @media (max-width: 767px) {
    height: ${props => (props.type == 'featured' ? '400px' : '100%')};
  }
`;

const ArticleBlockContent = styled.div`
  margin: ${props => (props.type === 'category' ? '15px 0 0 10px' : '0')};
  max-width: 500px;
  order: 2;
  top: ${props =>
    props.type === 'normal' || props.type === 'bestOf' ? '18px' : props.type === 'featured' ? '0' : '0'};
  margin-left: ${props => (props.type === 'normal' || props.type === 'bestOf' ? '20px' : '0')};
  width: auto;
  z-index: 2;
  align-items: center;
  background-color: ${props => (props.type === 'featured' ? 'rgba(0, 0, 0, 0.3)' : 'none')};
  display: flex;
  max-width: none;
  border-radius: 7px;
  position: ${props => (props.type === 'normal' || props.type === 'bestOf' ? 'absolute' : 'relative')};
  width: ${props =>
    props.type === 'normal' || props.type === 'bestOf' ? '90%' : props.type === 'featured' ? '100%' : '100%'};
`;

const ArticleBlockContentLink = styled.div`
  color: #fff;
  transition: color 0.2s;
  margin-top: ${props => (props.type === 'featured' ? '-70px' : '0')};
  padding: ${props => (props.type === 'featured' ? '1.5rem 3rem' : '0')};
  text-align: ${props =>
    props.type === 'normal' || props.type === 'bestOf' || props.type === 'category'
      ? 'left'
      : props.type === 'featured'
      ? 'center'
      : 'center'};
  width: ${props => (props.type === 'category' ? '90%' : '100%')};
  text-decoration: none;
`;

const ButtonWrapper = styled.div`
  bottom: 12px;
  cursor: pointer;
  height: 50px;
  position: absolute;
  border: 0;

  right: -10%;
  width: 50px;
  border-radius: 50%;
`;

// Break this down in to imported image imported icon imported title
// Then wrap what you need so that u can use on hover
// Once done this can be an organism

export const ImageLink = ({ type, title, textPosition, position, image, icon, arrow }) => {
  return (
    <ArticleCategoryIntro type={type}>
      <ArticleBlock href="/laos/luang-prabang/" title={title}>
        {icon && position === 'topLeft' ? <Icon icon={icon} position={position} /> : null}
        <ArticleBlockImage type={type}>
          <ArticleBlockImageLink>
            <Img fluid={image || {} || [] || ''} height="100%" />
          </ArticleBlockImageLink>
        </ArticleBlockImage>
        <ArticleBlockContent type={type}>
          <ArticleBlockContentLink type={type}>
            {icon && position !== 'topLeft' ? <Icon icon={icon} position={position} /> : null}
            <ArticleTitle title={title} type={type} textPosition={textPosition} arrow={arrow}>
              <Wrapper>
                <ButtonWrapper>
                  <Button />
                </ButtonWrapper>
              </Wrapper>
            </ArticleTitle>
          </ArticleBlockContentLink>
        </ArticleBlockContent>
      </ArticleBlock>
    </ArticleCategoryIntro>
  );
};
export default ImageLink;

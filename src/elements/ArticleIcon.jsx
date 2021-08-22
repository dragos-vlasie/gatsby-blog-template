import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import sprite from '../assets/images/sprite.webp';

const TopLeft = css`
  position: absolute;
  left: 20px;
  top: 25px;
`;

const CenteredIcon = css`
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ArticleLabel = css`
  position: relative;
  height: 76px;
  width: 76px;
  z-index: 2;
`;
// prop for what type of article it is
const ArticleLabelIcon = styled.div`
  background: url(${sprite});
  background-position: ${props =>
    props.icon === 'compass'
      ? '0 23.46941%'
      : props.icon === 'compassLight'
      ? '0  17.6470588235%'
      : props.icon === 'mustRead'
      ? '0 41.1764705882%'
      : ''}; /*here we need to change the value */
  background-size: 100%;
  display: inline-block;
  height: 100%;
  width: 100%;
`;

const SvgWrapper = styled.svg`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  fill: #c0e2e2;
  left: 0;
`;

const SVG = ({}) => {
  return (
    <SvgWrapper viewBox="0 0 32 32" id="icon-round-shape" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8.2C13.2-.6 6.8.7 3.3 5.1.9 8 .3 12 .1 15.7c-.2 3.9 0 8.1 2.4 11.2 2.5 3.4 6.7 4.9 10.9 5 5.4.1 5.3.6 9.3-.8 5-1.7 9.2-6.9 9.3-12.2.1-2.1-.1-6.6-.8-8.6 0 0-2.6-8.6-12.4-10.1z"></path>
    </SvgWrapper>
  );
};
// this can be a different icon it depends on the place it will be used
export const Icon = ({ icon, position, circle = false }) => {
  console.log(sprite);
  return (
    <div
      css={
        position && position === 'topLeft'
          ? [ArticleLabel, TopLeft]
          : position === 'center'
          ? [ArticleLabel, CenteredIcon]
          : ArticleLabel
      }
      icon={icon}
    >
      <ArticleLabelIcon icon={icon}></ArticleLabelIcon>
      {circle && circle ? <SVG /> : null}
    </div>
  );
};
export default Icon;

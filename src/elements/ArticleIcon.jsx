import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

const TopLeft = css`
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
  position: absolute;
  height: 76px;
  width: 76px;
  z-index: 2;
`;
// prop for what type of article it is
const ArticleLabelIcon = styled.div`
  background: url(https://www.saltinourhair.com/build/images/sprite/sprite.png);
  background-position: ${props =>
    props.icon === 'compass' ? '0 23.5294117647%' : '0 41.1764705882%'}; /*here we need to change the value */
  background-size: 100%;
  display: inline-block;
  height: 100%;
  width: 100%;
`;

// this can be a different icon it depends on the place it will be used
export const Icon = ({ icon, position }) => {
  console.log('Icon -> position', position);
  return (
    <div
      css={
        position === 'topLeft'
          ? [ArticleLabel, TopLeft]
          : position === 'center'
          ? [ArticleLabel, CenteredIcon]
          : ArticleLabel
      }
      icon={icon}
    >
      <ArticleLabelIcon icon={icon}></ArticleLabelIcon>
    </div>
  );
};
export default Icon;

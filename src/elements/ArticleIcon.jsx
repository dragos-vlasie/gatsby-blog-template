import React from 'react';
import styled from '@emotion/styled';

const ArticleLabel = styled.div`
  height: 76px;
  width: 76px;
  left: 20px;
  position: absolute;
  top: 25px;
  z-index: 2;
`;
// prop for what type of article it is
const ArticleLabelIcon = styled.div`
  background: url(https://www.saltinourhair.com/build/images/sprite/sprite.png);
  background-position: 0 41.1764705882%; /*here we need to change the value */
  background-size: 100%;
  display: inline-block;
  height: 100%;
  width: 100%;
`;

// this can be a different icon it depends on the place it will be used
export const Icon = () => {
  return (
    <ArticleLabel class="category-intro__article-label">
      <ArticleLabelIcon class="salt-icon salt-icon--mustread-white"></ArticleLabelIcon>
    </ArticleLabel>
  );
};
export default Icon;

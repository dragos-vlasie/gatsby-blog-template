import React, { Children } from 'react';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 400px minmax(auto, 650px);
  justify-content: space-between;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: auto;
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: minmax(auto, 2fr) 1fr;
  margin: 35px 0;
`;

export const GridContainer = ({ type, children }) => {
  console.log('GridContainer -> type', type);
  if (type && type.length) {
    return <FeaturedGrid>{children}</FeaturedGrid>;
  } else {
    return <Grid>{children}</Grid>;
  }
};
export default GridContainer;

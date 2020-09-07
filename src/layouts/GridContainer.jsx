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

export const GridContainer = ({ children }) => {
  return <Grid>{children}</Grid>;
};
export default GridContainer;

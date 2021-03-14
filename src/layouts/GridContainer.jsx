import React, { Children } from 'react';
import styled from '@emotion/styled';

const Grid = styled.div`
  margin: 20px 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 400px minmax(auto, 650px);
  justify-content: space-between;

  @media (max-width: 767px) {
    display: grid;
  justify-content: normal; 
    grid-template-columns: auto;
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 2fr) 1fr;
  margin: 65px 0;
  grid-gap: 35px;
  @media (max-width: 767px) {
  grid-gap: 5px;
  margin: 35px 0;
    display: flex;
    flex-direction: column;
  }
`;

const FlexGrid = styled.div`
  flex-direction: row;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 70px 0 35px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const GridContainer = ({ type, children }) => {
  if (type && type === 'featured') {
    return <FeaturedGrid>{children}</FeaturedGrid>;
  } else if (type === 'flex') {
    return <FlexGrid>{children}</FlexGrid>;
  } else {
    return <Grid>{children}</Grid>;
  }
};
export default GridContainer;

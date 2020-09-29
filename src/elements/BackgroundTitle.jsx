import React from 'react';
import styled from '@emotion/styled';

const Title = styled.div`
  color: #d8c4c3;
  font-family: headings, Arial;
  align-self: flex-end;
  line-height: 1;
  position: relative;
  font-size: 5.5em;
  font-weight: 800;

  letter-spacing: 7px;

  &:after {
    content: 'ABOUT';
    color: rgba(94, 60, 59, 0.3);
    left: -0.06em;
    top: -0.06em;
    font-weight: 800;
    position: absolute;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: currentColor;
    -webkit-text-stroke-width: 0.02em;
  }
`;
export const BackgroundTitle = ({ label }) => {
  return <Title>{label}</Title>;
};
export default BackgroundTitle;

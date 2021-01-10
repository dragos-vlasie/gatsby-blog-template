import React from 'react';
import styled from '@emotion/styled';

const Title = styled.div`
  color: #d8c4c3;
  font-family: 'Headings', Arial;
  align-self: flex-end;
  line-height: 1;
  position: relative;
  // font-size: 5.5em;
  font-size: calc((30em/11) + (11*1px));  // asta vine cu props daca e un anumit titlu
  font-weight: 800;
  letter-spacing: 7px;

  &:after {
    content: '${props => props.content}';
    color: rgba(94, 60, 59, 0.3);
    left: -0.06em;
    top: -0.06em;
    font-weight: 800;
    position: absolute;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: currentColor;
    -webkit-text-stroke-width: 0.02em;
  }

@media (max-width: 800px) {
 font-size: calc((10em/11) + (10*1px));
}
`;
export const BackgroundTitle = ({ label }) => {
  return <Title content={label}>{label}</Title>;
};
export default BackgroundTitle;

import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

// const TopBlockContent = css`
//   margin: 0px;
//   max-width: none;
//   position: absolute;

//   margin: 0 0 0 20px;
//   top: 18px;

//   @media (max-width: 1100px) {
//     margin: 0 0 0 20px;
//   }
// `;

// const CenterBlockContent = styled.h2`
//   margin: auto;
//   max-width: none;
//   position: absolute;
//   background: rgba(0, 0, 0, 0.15);
//   display: flex;
//   text-align: center;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   @media (max-width: 1100px) {
//     margin: auto;
//   }
// `;

const TopBlockTitle = css`
  line-height: 1.85;
  padding-right: 0;
  font-size: 1.1rem;
  margin: 0 0 0 0.4em;
  padding-right: 35px;
`;

const CenterSpanWithUnderline = styled.span`
  background-color: ${props => (props.type == 'normal' ? '#fff' : 'transparent')};
  background-size: ${props => [props.type === 'category' ? '100% 88%, 100% 88%' : '0 88%, 0 88%']};
  ${props =>
    props.type === 'category'
      ? `
     background-image: linear-gradient(transparent calc(100% - 0.4em), #f0e8e7 0),
    linear-gradient(transparent calc(100% - 0.4em), #fff 0);
    `
      : `background-image: linear-gradient(transparent calc(100% - 0.4em), #d8c4c3 0),
    linear-gradient(transparent calc(100% - 0.4em), #fff 0);`};

  text-shadow: ${props =>
    props.type === 'category'
      ? '0 0 #353535, 0.06em 0 0 rgba(255, 255, 255, 0.7), 0 0.05em 0 rgba(255, 255, 255, 0.7), -0.06em 0 0 rgba(255, 255, 255, 0.7)'
      : 'none'};
  box-shadow: none;
  transition: background 0.2s;
  color: inherit;
  background-repeat: no-repeat;

  &:hover ${CenterSpanWithUnderline} {
    background-size: ${props => (props.type === 'featured' ? '100% 88%, 100% 88%' : 'none')};
  }
`;

const CenterBlockTitle = styled.h2`
  color: ${props => (props.type == 'featured' || props.type === 'continents' ? '#fff' : '#353535')};
  font-family: 'Ariel';
  font-size: ${props => (props.type == 'normal' ? '1.1rem' : '50px')};
  margin: ${props => (props.type == 'normal' ? '0 0 0 .4em;' : '0')};
  line-height: 1.05;
  letter-spacing: -0.3px;
  font-weight: 700;
`;

export const Title = ({ children, title, type, textPosition = false, arrow = false }) => {
  console.log('Title -> type', type);
  return (
    <>
      <CenterBlockTitle type={type}>
        <CenterSpanWithUnderline type={type}>{title}</CenterSpanWithUnderline>
      </CenterBlockTitle>
      {/* children => so that the button can be edited in the container of the Title component example on hover image link move  button */}
      {arrow ? children : null}
    </>
  );
};
export default Title;

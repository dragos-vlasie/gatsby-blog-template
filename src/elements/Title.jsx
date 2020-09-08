import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

const BlockContentLink = styled.div`
  display: block;
  text-decoration: none;
  transition: color 0.2s;
  width: 90%;
`;

const BaseBlockContent = css`
  margin: 25px 0 0 10px;
  max-width: 500px;
  position: relative;
  border-radius: 8px;

  top: 0;

  @media (max-width: 1100px) {
    margin: 25px 0 0 10px;
  }

  order: 2;
  width: auto;
  z-index: 1;
`;

const TopBlockContent = css`
  margin: 0px;
  max-width: none;
  position: absolute;

  margin: 0 0 0 20px;
  top: 18px;

  @media (max-width: 1100px) {
    margin: 0 0 0 20px;
  }
`;

const CenterBlockContent = css`
  margin: auto;
  max-width: none;
  position: absolute;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  @media (max-width: 1100px) {
    margin: auto;
  }
`;

const TopBlockTitle = css`
  line-height: 1.85;
  padding-right: 0;
  font-size: 1.1rem;
  margin: 0 0 0 0.4em;
`;

const CenterBlockTitle = css`
  color: #fff;
  font-family: 'Ariel';
  font-weight: 100;
  font-size: 60px;
  letter-spacing: 0;
`;

const BaseBlockTitle = css`
  color: inherit;
  letter-spacing: -0.3px;
  line-height: 1.2;
  padding-right: 35px;
  font-size: 30px;
  margin: 0;
`;

const TopSpanWithUnderline = css`
  background-color: #fff;
  background-size: 0 88%, 0 88%;
  box-shadow: 0.4em 0 0 #fff;
`;

const CenterSpanWithUnderline = css`
  background: 0 0;
  box-shadow: none;
  text-shadow: none;
  color: #fff;
`;

const BaseSpanWithUnderline = css`
  background-image: linear-gradient(transparent calc(100% - 0.4em), #f0e8e7 0),
    linear-gradient(transparent calc(100% - 0.4em), #fff 0);
  background-repeat: no-repeat;
  padding: 1px;
  color: rgb(53, 53, 53);
  text-shadow: 0 0 #353535, 0.06em 0 0 rgba(255, 255, 255, 0.7), 0 0.05em 0 rgba(255, 255, 255, 0.7),
    -0.06em 0 0 rgba(255, 255, 255, 0.7);
  transition: background 0.2s;
  background-color: transparent;
  background-size: 100% 88%, 100% 88%;
  box-shadow: none;
`;

export const Title = ({ children, title, textPosition = false, arrow = false }) => {
  return (
    <div
      css={
        textPosition === 'top'
          ? [BaseBlockContent, TopBlockContent]
          : textPosition === 'center'
          ? [BaseBlockContent, CenterBlockContent]
          : BaseBlockContent
      }
    >
      <BlockContentLink>
        <h2
          css={
            textPosition === 'top'
              ? [BaseBlockTitle, TopBlockTitle]
              : textPosition === 'center'
              ? [BaseBlockTitle, CenterBlockTitle]
              : BaseBlockTitle
          }
        >
          <span
            css={
              textPosition === 'top'
                ? [BaseSpanWithUnderline, TopSpanWithUnderline]
                : textPosition === 'center'
                ? [BaseSpanWithUnderline, CenterSpanWithUnderline]
                : BaseSpanWithUnderline
            }
          >
            {title}
          </span>
        </h2>
        {/* children => so that the button can be edited in the container of the Title component example on hover image link move  button */}
        {arrow ? children : null}
      </BlockContentLink>
    </div>
  );
};
export default Title;

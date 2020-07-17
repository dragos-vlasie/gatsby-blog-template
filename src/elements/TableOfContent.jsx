import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const TableOfContent = ({ input }) => {
  const Wrapper = styled.div`
    background: white;
    padding: 25px;
    max-width: 50rem;
    transition: opacity 0.5s ease 0s;
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      max-width: 95%;
    }
  `;

  const FixedWrapper = styled.div`
    display: none;
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      display: block;
      opacity: ${props => (props.show ? '1' : '0')};
      transition: opacity 0.5s ease 0s;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      position: fixed;
      background-color: rgb(255, 255, 255);
      z-index: 2;
      height: 100vh;
      overflow-y: auto;
      pointer-events: ${props => (props.show ? 'auto' : 'none')};
    }
  `;

  const Button = styled.div`
    display: none;
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      background-color: rgb(32, 35, 42);
      bottom: 44px;
      color: rgb(97, 218, 251);
      display: block;
      cursor: pointer;
      position: fixed;
      right: 20px;
      z-index: 3;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
      border-radius: 50%;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(255, 255, 255, 0.1);
      border-image: initial;
    }
  `;
  const InnerButton = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  `;
  const IconsWrapper = styled.div`
    height: 60px;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
  `;
  const Icons = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    color: rgb(97, 218, 251);
    align-self: center;
    flex-direction: column;
  `;

  const ArrowUp = styled.svg`
    transform: translate(2px, -4px) rotate(180deg);
  `;
  const ArrowDown = styled.svg`
    transform: translate(2px, 4px);
  `;

  const [simpleButtonState, toggleSimpleButtonState] = useState(false);
  const handleSimpleButtonClick = () => toggleSimpleButtonState(!simpleButtonState);

  return (
    <>
      <Wrapper>
        <FixedWrapper show={simpleButtonState}>
          <Wrapper dangerouslySetInnerHTML={{ __html: input }} />
        </FixedWrapper>
      </Wrapper>
      <Button onClick={handleSimpleButtonClick}>
        <InnerButton>
          <IconsWrapper>
            <Icons>
              <ArrowUp
                viewBox="0 0 926.23699 573.74994"
                version="1.1"
                x="0px"
                y="0px"
                width="15"
                height="15"
                class="css-cf8c4v"
              >
                <g transform="translate(904.92214,-879.1482)">
                  <path
                    d="
                    m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
                    -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
                    0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
                    -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
                    -174.68583 0.6895,0 26.281,25.03215 56.8701,
                    55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
                    -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
                    -104.0616 -231.873,-231.248 z
                    "
                    fill="currentColor"
                  ></path>
                </g>
              </ArrowUp>
              <ArrowDown
                viewBox="0 0 926.23699 573.74994"
                version="1.1"
                x="0px"
                y="0px"
                width="15"
                height="15"
                class="css-12wnq5i"
              >
                <g transform="translate(904.92214,-879.1482)">
                  <path
                    d="
                    m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
                    -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
                    0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
                    -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
                    -174.68583 0.6895,0 26.281,25.03215 56.8701,
                    55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
                    -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
                    -104.0616 -231.873,-231.248 z
                    "
                    fill="currentColor"
                  ></path>
                </g>
              </ArrowDown>
            </Icons>
          </IconsWrapper>
        </InnerButton>
      </Button>
    </>
  );
};
export default TableOfContent;

//  <div role="button" tabindex="0" class="css-yx40kw">
//    <div class="css-tctv7l">
//      <div class="css-7ef8f8">
//        <div class="css-1dgtft4">
//          <svg
//            viewBox="0 0 926.23699 573.74994"
//            version="1.1"
//            x="0px"
//            y="0px"
//            width="15"
//            height="15"
//            class="css-sg9l1i"
//          >
//            <g transform="translate(904.92214,-879.1482)">
//              <path
//                d="
//           m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
//           -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
//           0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
//           -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
//           -174.68583 0.6895,0 26.281,25.03215 56.8701,
//           55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
//           -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
//           -104.0616 -231.873,-231.248 z
//         "
//                fill="currentColor"
//              ></path>
//            </g>
//          </svg>
//          <svg
//            viewBox="0 0 926.23699 573.74994"
//            version="1.1"
//            x="0px"
//            y="0px"
//            width="15"
//            height="15"
//            class="css-o1zbu3"
//          >
//            <g transform="translate(904.92214,-879.1482)">
//              <path
//                d="
//           m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
//           -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
//           0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
//           -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
//           -174.68583 0.6895,0 26.281,25.03215 56.8701,
//           55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
//           -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
//           -104.0616 -231.873,-231.248 z
//         "
//                fill="currentColor"
//              ></path>
//            </g>
//          </svg>
//        </div>
//      </div>
//    </div>
//  </div>;

import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background: white;
  padding: 25px;
  max-width: 50rem;
  margin: auto;
  transition: opacity 0.5s ease 0s;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    max-width: 100%;
  }
`;

const FixedWrapper = styled.div`
  /* display: none; */
  /* @media (max-width: ${props => props.theme.breakpoints.s}) { */
    display: block;
    z-index: 3000;
    opacity: ${({ show }) => (show ? '1' : '0')};
    transition: opacity 0.5s ease 0s;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    height: 100vh;
    overflow-y: auto;
    pointer-events: ${props => (props.show ? 'auto' : 'none')};
  /* } */
`;

const Button = styled.div`
  display: none;
  /* @media (max-width: ${props => props.theme.breakpoints.s}) { */
    background-color: rgb(32, 35, 42);
    bottom: 44px;
    color: rgb(97, 218, 251);
    display: block;
    cursor: pointer;
    position: fixed;
    right: 20px;
    z-index: 3001;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.1);
    border-image: initial;
  /* } */
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
  transform: ${props =>
    props.show ? 'translate(2px, 8px) rotate(180deg)' : 'translate(2px, -4px) rotate(180deg);'};
  transition: transform 0.2s ease 0s;
`;
const ArrowDown = styled.svg`
  transform: ${props => (props.show ? 'translate(2px, -8px) ' : 'translate(2px,4px)')};
  transition: transform 0.2s ease 0s;
`;

export const TableOfContent = ({ input }) => {
  const textInput = useRef(null);

  const [simpleButtonState, toggleSimpleButtonState] = useState(false);
  const handleSimpleButtonClick = () => {
    toggleSimpleButtonState(!simpleButtonState);
  };

  return (
    <>
      <Wrapper>
        <FixedWrapper show={simpleButtonState}>
          <Wrapper
            onClick={handleSimpleButtonClick}
            ref={textInput}
            dangerouslySetInnerHTML={{ __html: input[0] }}
          />
        </FixedWrapper>
      </Wrapper>
      <Button onClick={handleSimpleButtonClick}>
        <InnerButton>
          <IconsWrapper>
            <Icons>
              <ArrowUp
                show={simpleButtonState}
                viewBox="0 0 926.23699 573.74994"
                version="1.1"
                x="0px"
                y="0px"
                width="15"
                height="15"
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
                    fill="#3498db"
                  ></path>
                </g>
              </ArrowUp>
              <ArrowDown
                show={simpleButtonState}
                viewBox="0 0 926.23699 573.74994"
                version="1.1"
                x="0px"
                y="0px"
                width="15"
                height="15"
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
                    fill="#3498db"
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

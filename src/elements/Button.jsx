import React from 'react';
import styled from '@emotion/styled';

const BlockButtonBtnCircle = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0;
  padding: 10px;
  background: #353535;
  fill: white;
`;

export const Button = () => {
  return (
    <BlockButtonBtnCircle>
      <svg
        style={{ transform: 'translate(0) rotate(-90deg)' }}
        viewBox="0 0 32 32"
        id="icon-arrow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M29 19.9L17.6 31.3c-.9.9-2.3.9-3.2 0L3 19.9c-.9-.9-.9-2.3 0-3.2s2.3-.9 3.2 0l7.5 7.5V2.3C13.7 1 14.7 0 16 0s2.3 1 2.3 2.3v21.9l7.5-7.5c.4-.4 1-.7 1.6-.7s1.2.2 1.6.7c.9.9.9 2.3 0 3.2z"></path>
      </svg>
      {/* <svg class="icon icon-arrow"></svg>
            <svg class="icon icon-round-shape"></svg> */}
    </BlockButtonBtnCircle>
  );
};
export default Button;

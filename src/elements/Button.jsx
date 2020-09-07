import React from 'react';
import styled from '@emotion/styled';

const BlockButtonBtnCircle = styled.button`
  bottom: 12px;
  cursor: pointer;
  height: 50px;
  position: absolute;
  transform: translate(0, 0);
  transition: transform 0.2s;
  right: 10px;
  width: 50px;
  border-radius: 50%;
`;

export const Button = () => {
  return (
    <BlockButtonBtnCircle>
      {/* <svg class="icon icon-arrow"></svg>
            <svg class="icon icon-round-shape"></svg> */}
    </BlockButtonBtnCircle>
  );
};
export default Button;

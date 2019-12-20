import React from 'react';
import styled from '@emotion/styled';

const Countrys = styled.p`
color: inherit;
font-family: 'Candal',-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif;
font-weight: 500;
text-rendering: optimizeLegibility;
font-size: 1rem;
line-height: 1.1;
margin: 1px;
border-width: 1px;
border: solid transparent;
border-color: #f7f7f7;
background-color: #fff;
padding: 20px 40px;
cursor:pointer;

&.active{
  background:#f8f8f8;
}
`;

const Country = ({ active, count, onClick }) => {
    return (
      <Countrys onClick={onClick} className={active ? "active" : null}>
        {count}
      </Countrys>
    );
  };

  export default Country
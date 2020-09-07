import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  margin: 0 auto;
  /* max-width: ${props => props.theme.layout[props.type]}; */
  max-width: 1100px;

  @media (max-width: 1100px) {
    padding: 0 15px;
  }
`;

const Container = ({ children, type, className }) => (
  <Wrapper className={className} type={type}>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['article', 'base', 'big']),
  className: PropTypes.string,
};

Container.defaultProps = {
  type: 'base',
  className: null,
};

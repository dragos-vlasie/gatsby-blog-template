import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: ${props => props.theme.layout[props.type]};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: ${props => (props.type === 'base' ? '0 1rem' : '0')};
  }
  ${props =>
    props.className === 'flex-center-column'
      ? 'display: flex; justify-content: center;align-items:center; flex-direction: column'
      : ''}
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

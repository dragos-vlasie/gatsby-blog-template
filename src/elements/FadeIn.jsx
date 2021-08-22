import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, config } from 'react-spring';

const FadeIn = ({ children }) => {
  const springProps = useSpring({
    config: config.gentle,
    delay: 100,
    from: { transform: 'translate3d(40px, 0, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  });

  return <animated.div style={springProps}>{children}</animated.div>;
};

export default FadeIn;

FadeIn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

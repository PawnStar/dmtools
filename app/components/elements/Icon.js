import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({icon, children, className, rotate}) => (
  <span className={className}>
    <span className={'glyphicon glyphicon-' + icon + (rotate?' Rotating':'')}/>
    <span className="AfterIcon">{children}</span>
  </span>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  rotate: PropTypes.bool
};

export default Icon;

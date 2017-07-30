import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({icon, children, className}) => (
  <span className={className}>
    <span className={'fa fa-' + icon}/>{children}
  </span>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.object
}

export default Icon;

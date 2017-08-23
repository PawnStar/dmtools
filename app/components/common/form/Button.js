import React from 'react';
import PropTypes from 'prop-types';

const Button = ({className, children, onSubmit})=>(
  <div className={'Button ' + (className || '')}>
    <button
      type="button"
      onClick={onSubmit}>
      {children}
    </button>
  </div>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSubmit: PropTypes.func
};

export default Button;

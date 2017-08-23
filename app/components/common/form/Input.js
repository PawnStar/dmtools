import React from 'react';
import PropTypes from 'prop-types';

import './input.less';

const Input = ({name, className, number, label, hidden, onChange, value, placeholder})=>(
  <div className={'Input ' + (className || '')}>
    <label htmlFor={name}>{label || name}</label>
    <input
      type={hidden?'password':'text'}
      onChange={(ev)=>{
        if(onChange && typeof onChange === 'function')
          if(number)
            onChange(ev?parseFloat(ev.target.value):0)
          else
            onChange(ev?ev.target.value:'');
      }}
      value={value}
      placeholder={placeholder}
      name={name}/>
  </div>
);

Input.emptyValue = '';

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  number: PropTypes.bool,
  hidden: PropTypes.bool,
  placeholder: PropTypes.node,
  className: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;

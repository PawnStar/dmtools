import React from 'react';
import PropTypes from 'prop-types';

import './input.less';

const TextInput = ({name, className, label, hidden, onChange, value, placeholder})=>(
  <div className={'TextInput ' + (className || '')}>
    <label htmlFor={name}>{label || name}</label>
    <input
      type={hidden?'password':'text'}
      onChange={(ev)=>{
        if(onChange && typeof onChange === 'function')
          onChange(ev?ev.target.value:'');
      }}
      value={value}
      placeholder={placeholder}
      name={name}/>
  </div>
);

TextInput.emptyValue = '';

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  number: PropTypes.bool,
  hidden: PropTypes.bool,
  placeholder: PropTypes.node,
  className: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;

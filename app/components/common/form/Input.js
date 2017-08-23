import React,{Component} from 'react';
import PropTypes from 'prop-types';

import './input.less';

const Input = ({name, className, label, hidden, onChange, value, placeholder})=>{
  return (
    <div className={'Input ' + (className || '')}>
      <label htmlFor={name}>{label || name}</label>
      <input
        type={hidden?'password':'text'}
        onChange={(ev)=>{
          if(ev) ev.preventDefault();

          if(onChange && typeof onChange === 'function')
            onChange(ev?ev.target.value:'');
        }}
        value={value}
        placeholder={placeholder}
        name={name}/>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  hidden: PropTypes.bool,
  placeholder: PropTypes.node,
  className: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;

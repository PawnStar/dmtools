import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({name, className, label, onChange, value})=>(
  <div className={'Input ' + (className || '')}>
    <input
      type="checkbox"
      onChange={(ev)=>{
        if(onChange && typeof onChange === 'function')
          onChange(ev.target.checked);
      }}
      checked={value}
      name={name}/>
    <label htmlFor={name}>{label || name}</label>
  </div>
);

Checkbox.emptyValue = false;

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;

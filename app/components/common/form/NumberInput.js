import React from 'react';
import PropTypes from 'prop-types';

import './input.less';

const NumberInput = ({name, className, label, onChange, value, placeholder})=>(
  <div className={'NumberInput ' + (className || '')}>
    <label htmlFor={name}>{label || name}</label>
    <input
      type={'text'}
      onChange={(ev)=>{
        let val = ev?parseFloat(ev.target.value):0;
        if(isNaN(val)) val = 0;
        if(onChange && typeof onChange === 'function')
          onChange(val);
      }}
      value={value}
      placeholder={placeholder}
      name={name}/>
  </div>
);

NumberInput.emptyValue = 0;

NumberInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  number: PropTypes.bool,
  hidden: PropTypes.bool,
  placeholder: PropTypes.node,
  className: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func
};

export default NumberInput;

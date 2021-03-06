import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactLink } from 'react-router-dom';

const Link = ({
  style,
  click,
  children,
  className,
  title
}) => {
  const root = window.__webpack_public_path__;

  if(typeof click === 'string')
    return <ReactLink title={title} className={className} style={style} to={root + click}>{children}</ReactLink>;

  return (<a title={title} className={className} href="#" style={style} onClick={(ev)=>{
    if(ev) ev.preventDefault();
    if(typeof click === 'function')
      click();
    return false;
  }}>{children}</a>);
};

Link.propTypes = {
  style: PropTypes.object,
  click: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string
};

export default Link;

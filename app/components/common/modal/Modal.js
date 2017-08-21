import React from 'react';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';

import './modal.less';

const Modal = ({
  close,
  children,
  nav
}) => {
  const root = window.__webpack_public_path__;

  return (
    <div className={'ModalContainer'} onClick={(ev)=>{
      if(ev){
        ev.preventDefault();
        ev.stopPropagation();
      }
      if(close && typeof close === 'string')
        nav(root + close);
      if(close && typeof close === 'function')
        close();
      return false;
    }}>
      <div className="Modal" onClick={(ev)=>{if(ev) ev.stopPropagation();}}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  close: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.node,
  nav: PropTypes.func
};

//Redux wrapper
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    nav: location=>dispatch(push(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

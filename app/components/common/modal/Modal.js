import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../common/Link';

import './modal.less';

const Modal = ({
  close,
  children
}) => {
  return (
    <div className={'ModalContainer'}>
      <div className="Modal">
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
  children: PropTypes.node
};

export default Modal;

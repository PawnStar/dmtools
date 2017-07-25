import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({icon, children}) => (
  <span className="CharacterListStat">
    <span className={'fa fa-' + icon}/>{children}
  </span>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.object
}

export default Icon;

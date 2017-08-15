import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Icon from '../Icon';

const SaveStatusIndicator = ({saved}) => {
  if(saved === 'saved')
    return <Icon icon="check" className="SaveIcon">Saved</Icon>;
  return <Icon icon="refresh" rotate="true" className="SaveIcon">Saving</Icon>;
};

SaveStatusIndicator.propTypes = {
  saved: PropTypes.oneOf(['saved', 'unsaved'])
};

const mapStateToProps = state => {
  return {
    saved: state.saveStatus
  };
};

const Wrapped = connect(
  mapStateToProps,
  null
)(SaveStatusIndicator);

export default Wrapped;

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Icon from '../common/Icon';
import {progressTurn} from '../../actions';
import Link from '../common/Link';

//React presentational component
const EncounterControls = ({
  moveTurn
}) => {
  return (
  <div style={{textAlign: 'center'}}>
    <Link style={{textDecoration: 'none', color: 'black'}} click="encounter/insert"><Icon icon="plus"/></Link>
    <Link style={{textDecoration: 'none', color: 'black'}} click={moveTurn}><Icon icon="step-forward"/></Link>
  </div>
)};

EncounterControls.propTypes = {
  moveTurn: PropTypes.func.isRequired
};

//Redux wrapper
const mapDispatchToProps = dispatch => {
  return {
    moveTurn: ()=>dispatch(progressTurn())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EncounterControls);

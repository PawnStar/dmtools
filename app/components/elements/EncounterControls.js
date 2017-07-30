import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Icon from './Icon';
import {progressTurn} from '../../actions';

//React presentational component
const EncounterControls = ({
  moveTurn
}) => (
  <div style={{textAlign: 'center'}}>
    <a href="#" style={{textDecoration: 'none', color: 'black'}} onClick={moveTurn}><Icon icon="step-forward"> Next Turn</Icon></a>
  </div>
);

EncounterControls.propTypes = {
  moveTurn: PropTypes.func.isRequired
};

//Redux wrapper
const mapDispatchToProps = dispatch => {
  return {
    moveTurn: (ev)=>{
      ev.preventDefault();
      dispatch(progressTurn());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EncounterControls);

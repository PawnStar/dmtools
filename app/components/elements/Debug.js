import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createCharacter, progressTurn, addToEncounter} from '../../actions';

//React presentational component
const DebugButtons = ({
  addCharacter,
  moveTurn
}) => (
  <div>
    <a href="#" onClick={addCharacter}>Add Character</a>
    <a href="#" onClick={moveTurn}>Progress Turn</a>
  </div>
);

DebugButtons.propTypes = {
  addCharacter: PropTypes.func.isRequired,
  moveTurn: PropTypes.func.isRequired
};

//Redux wrapper
const mapDispatchToProps = dispatch => {
  return {
    addCharacter: (ev)=>{
      ev.preventDefault();

      const action = createCharacter({
        initiative: Math.floor(Math.random() * 20) + 1,
        name: 'Character',
        stats: { dex: 10 }
      });

      dispatch(action);
      dispatch(addToEncounter(action.character.id));
    },
    moveTurn: (ev)=>{
      ev.preventDefault();
      dispatch(progressTurn());
    }
  };
};

const Wrapped = connect(
  null,
  mapDispatchToProps
)(DebugButtons);

export default Wrapped;

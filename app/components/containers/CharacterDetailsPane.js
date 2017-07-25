import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const CharacterDetailsPane = ({character}) => {
  return (
    <div className="SelectedCharacterPane">
      {/*TODO: A better empty state (CUUUTE)*/}

      {/*Wrap for empty state*/}
      {character ? (
        <div>
          <h2>{character.name}</h2>
          <p>Stats go here</p>
        </div>
      ) : 'No character selected'}
    </div>
  );
};

CharacterDetailsPane.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
    savingThrows: PropTypes.objectOf(PropTypes.number),
    armorClass: PropTypes.number,
    initiative: PropTypes.number
  })
};

const mapStateToProps = state => {
  return {
    character: state.characters[state.selectedCharacter]
  };
};

const mapDispatchToProps = null;

const WrappedNode = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailsPane);


export default WrappedNode;

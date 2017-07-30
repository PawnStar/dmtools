import React from 'react';
import PropTypes from 'prop-types';

const SelectedCharacterDetails = ({character}) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>Stats go here</p>
    </div>
  );
};

SelectedCharacterDetails.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
    savingThrows: PropTypes.objectOf(PropTypes.number),
    armorClass: PropTypes.number,
    initiative: PropTypes.number
  }).isRequired
};

export default SelectedCharacterDetails;

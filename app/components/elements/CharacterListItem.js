import React from 'react';
import PropTypes from 'prop-types';

import { currentCharacter } from '../../styles/initiativeList.scss';

const CharacterListItem = ({character, current, selected, onClick}) => {
  return (
    <div className={current ? currentCharacter : ''}>
      {character.name}
    </div>
  );
};

CharacterListItem.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
    savingThrows: PropTypes.objectOf(PropTypes.number),
    armorClass: PropTypes.number,
    initiative: PropTypes.number
  }).isRequired,
  current: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CharacterListItem;

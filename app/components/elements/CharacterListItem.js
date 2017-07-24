import React from 'react';
import PropTypes from 'prop-types';

import { currentCharacter } from '../../styles/initiativeList.scss';

const CharacterListItem = ({character, current, selected, onClick}) => {
  const styleClass = (() => {
    if(current && selected)
      return currentCharacter + ' selected';
    if(current)
      return currentCharacter;
    if(selected)
      return 'selected';
    return '';
  })();

  return (
    <div onClick={onClick} className={styleClass}>
      ({character.initiative}) {character.name}
    </div>
  );
};

CharacterListItem.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
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

import React from 'react';
import PropTypes from 'prop-types';

import Icon from './icon';
import profileImage from '../../images/user.png';

const CharacterListItem = ({character, current, selected, onClick}) => {
  const styleClass = (() => {
    if(current && selected)
      return 'InitiativeListCharacter CurrentCharacter SelectedCharacter';
    if(current)
      return 'InitiativeListCharacter CurrentCharacter';
    if(selected)
      return 'InitiativeListCharacter SelectedCharacter';
    return 'InitiativeListCharacter';
  })();

  return (
    <div onClick={onClick} className={styleClass}>
      <img className="CharacterListImage" src={profileImage}/>
      <span className="CharacterListInit">{character.initiative}</span>
      <span className="CharacterListName">{character.name}</span>
      <div className="CharacterListStats">
        <Icon icon="shield">{character.armorClass}</Icon>
        <Icon icon="eye">{character.passivePerception}</Icon>
      </div>
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

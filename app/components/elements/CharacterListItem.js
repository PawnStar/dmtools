import React from 'react';
import PropTypes from 'prop-types';

import profileImage from '../../images/user.png';

const StatIcon = ({icon, children}) => (
  <span className="CharacterListStat">
    <span className={'fa fa-' + icon}/>{children}
  </span>
);

StatIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.object
}

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
        <StatIcon icon="shield">{character.armorClass}</StatIcon>
        <StatIcon icon="eye">{character.passivePerception}</StatIcon>
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

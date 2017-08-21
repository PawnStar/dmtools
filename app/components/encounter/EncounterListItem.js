import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../common/Icon';
import profileImage from '../../images/user.png';
import Character from '../../helpers/character';

const EncounterListITem = ({character, initiativeRoll, current, selected, selectCharacter, removeCharacter}) => {
  const styleClass = (() => {
    if(current && selected)
      return 'InitiativeListCharacter CurrentCharacter SelectedCharacter';
    if(current)
      return 'InitiativeListCharacter CurrentCharacter';
    if(selected)
      return 'InitiativeListCharacter SelectedCharacter';
    return 'InitiativeListCharacter';
  })();

  const char = new Character(character);

  return (
    <div onClick={selectCharacter} className={styleClass}>
      <img className="CharacterListImage" src={profileImage}/>
      <span className="CharacterListInit">{initiativeRoll + char.getAbilityScore('dex')}</span>
      <span className="CharacterListName">{character.name}</span>
      <div className="CharacterListStats">
        <Icon icon="asterisk" className="CharacterListStat">{character.armorClass}</Icon>
        <Icon icon="eye-open" className="CharacterListStat">{10 + char.getAbilityScore('perception')}</Icon>
      </div>
      <a className="CharacterListRemove" href="#" title="Remove from encounter" onClick={(ev)=>{ev.preventDefault(); ev.stopPropagation(); removeCharacter();}}>X</a>
    </div>
  );
};

EncounterListITem.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
    savingThrows: PropTypes.objectOf(PropTypes.number),
    armorClass: PropTypes.number,
    initiative: PropTypes.number
  }).isRequired,
  initiativeRoll: PropTypes.number.isRequired,
  current: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  selectCharacter: PropTypes.func.isRequired,
  removeCharacter: PropTypes.func.isRequired
};

export default EncounterListITem;

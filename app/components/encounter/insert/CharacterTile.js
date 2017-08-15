import React from 'react';
import PropTypes from 'prop-types';
import Link from '../common/Link';
import Icon from '../common/Icon';

const CharacterTile = ({character, addCharacter, inEncounter, selected, selectCharacter}) => {
  return (
    <div onClick={selectCharacter} className={'CharacterTile' + (selected ? ' CharacterTileSelected' : '')}>
      <div>{character.name}</div>
      <a className={'AddToEncounter' + (inEncounter?' Disabled':'')} href="#" onClick={inEncounter?()=>{}:(ev)=>{ev.preventDefault(); addCharacter(character.id); }}>
        <Icon icon="plus"/>
      </a>
      <Link className="EditCharacter" click={'edit/' + character.id}><Icon icon="pencil"/></Link>
    </div>
  );
};

CharacterTile.propTypes = {
  inEncounter: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  character: PropTypes.object.isRequired,
  addCharacter: PropTypes.func,
  selectCharacter: PropTypes.func.isRequired
};

export default CharacterTile;

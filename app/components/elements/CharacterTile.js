import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const CharacterTile = ({character, addCharacter, inEncounter, selected}) => (
  <div className={'CharacterTile' + (selected ? ' CharacterTileSelected' : '')}>
    <div>{character.name}</div>
    <a className={'AddToEncounter' + (inEncounter?' Disabled':'')} href="#" onClick={inEncounter?()=>{}:(ev)=>{ev.preventDefault(); addCharacter(character.id); }}>
      <Icon icon="plus"/>
    </a>
    <Link className="EditCharacter" to={root + 'edit/' + character.id}><Icon icon="pencil"/></Link>
  </div>
);

CharacterTile.propTypes = {
  inEncounter: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  character: PropTypes.object.isRequired,
  addCharacter: PropTypes.func
};

export default CharacterTile;

import React from 'react';
import PropTypes from 'prop-types';

const CharacterTile = ({character, addCharacter, inEncounter, selected}) => (
  <div className={'CharacterTile' + (selected ? ' CharacterTileSelected' : '')}>
    <div>{character.name}</div>
    {!inEncounter ?
      <a className="AddToEncounter" href="#" onClick={(ev)=>{ev.preventDefault(); addCharacter(character.id); }}>+</a>
    : null }
  </div>
);

CharacterTile.propTypes = {
  inEncounter: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  character: PropTypes.object.isRequired,
  addCharacter: PropTypes.func
};

export default CharacterTile;

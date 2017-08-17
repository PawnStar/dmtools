import React from 'react';
import PropTypes from 'prop-types';

const CharacterListItem = ({character, inEncounter, selected}) => {
  return (
    <div className="CharacterListItemSpacer">
      <div className={'CharacterListItem' + (selected ? ' CharacterTileSelected' : '')}>
        <div>{character.name}</div>
      </div>
    </div>
  );
};

CharacterListItem.propTypes = {
  inEncounter: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  character: PropTypes.object.isRequired
};

export default CharacterListItem;

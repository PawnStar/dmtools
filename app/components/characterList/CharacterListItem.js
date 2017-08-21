import React from 'react';
import PropTypes from 'prop-types';
import profileImage from '../../images/user.png';
import Link from '../common/Link';

const CharacterListItem = ({character, inEncounter, selected}) => {
  return (
    <div className="CharacterListItemSpacer">
      <Link key={character.id} click={'characters/' + character.id}>
        <div className={'CharacterListItem' + (selected ? ' CharacterTileSelected' : '')}>
          <img className="CharacterImage" src={profileImage}/>
          <span className="CharacterName">
            {character.name}
          </span>
        </div>
      </Link>
    </div>
  );
};

CharacterListItem.propTypes = {
  inEncounter: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  character: PropTypes.object.isRequired
};

export default CharacterListItem;

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from '../common/Link';

import CharacterListItem from './CharacterListItem';

//React presentational component
const CharacterList = ({characters, inEncounter, selected}) => {
  return (
    <div className="CharacterList">
      {
        characters.map(character=>
          <CharacterListItem
            character={character}
            inEncounter={inEncounter(character.id)}
            selected={selected(character.id)}
          />
        )
      }
      <Link className="NewCharacterButton" click="characters/add"/>
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  inEncounter: PropTypes.func.isRequired,
  selected: PropTypes.func.isRequired
};

//Redux wrapper
const mapStateToProps = state => {
  return {
    characters: (Object.keys(state.characters) || []).map(id=>state.characters[id]),
    inEncounter: (id)=>state.encounter.list.reduce((f, c)=>f || c.id === id, false),
    selected: (id)=>state.characterPane.selectedCharacter === id
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);

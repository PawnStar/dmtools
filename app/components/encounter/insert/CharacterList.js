import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CharacterTile from './CharacterTile';
import Debug from '../../common/Debug';
import Link from '../../common/Link';
import { selectCharacter as selChar, createCharacter, addToEncounter } from '../../../actions';
import '../../../styles/characterList.less';

//React presentational component
const CharacterList = ({characters, addCharacter, inEncounter, selected, selectCharacter}) => {
  const root = window.__webpack_public_path__;

  return (
    <div className="CharacterBrowserPane">
      <Debug/>
      <div className="CharacterTiles">
        {
          characters.map(character=>
              <CharacterTile
                key={character.id}
                character={character}
                addCharacter={addCharacter}
                selectCharacter={()=>{selectCharacter(character.id)}}
                inEncounter={inEncounter(character.id)}
                selected={selected(character.id)}
              />
          )
        }
      </div>
      <Link className="NewCharacterButton" click="characters/add"/>
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  inEncounter: PropTypes.func.isRequired,
  selected: PropTypes.func.isRequired,
  openNew: PropTypes.func,
  selectCharacter: PropTypes.func.isRequired,
  addCharacter: PropTypes.func.isRequired
}

//Redux wrapper
const mapStateToProps = state => {
  return {
    characters: (Object.keys(state.characters) || []).map(id=>state.characters[id]),
    inEncounter: (id)=>state.encounter.list.reduce((f, c)=>f || c.id === id, false),
    selected: (id)=>state.characterPane.selectedCharacter === id
  };
};

const d = (n)=>Math.floor(Math.random() * n) + 1;

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: (id) => dispatch(addToEncounter(id, d(20))),
    selectCharacter: (id) => dispatch(selChar(id))
  };
};

const Wrapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);

export default Wrapped;

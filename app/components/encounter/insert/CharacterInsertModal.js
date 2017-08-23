import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CharacterTile from './CharacterTile';
import Modal from '../../common/modal/Modal';
import { selectCharacter as selChar, addToEncounter } from '../../../actions';
import '../../../styles/characterList.less';

//React presentational component
const CharacterInsertModal = ({characters, addCharacter, inEncounter, selected, selectCharacter}) => {
  return (
    <Modal close="encounter">
      <div className="CharacterBrowserPane">
        <div className="CharacterTiles">
          {
            characters.filter(c=>!inEncounter(c.id)).map(character=>
                <CharacterTile
                  key={character.id}
                  character={character}
                  addCharacter={addCharacter}
                  selectCharacter={()=>{selectCharacter(character.id);}}
                  inEncounter={inEncounter(character.id)}
                  selected={selected(character.id)}
                />
            )
          }
        </div>
      </div>
    </Modal>
  );
};

CharacterInsertModal.propTypes = {
  characters: PropTypes.array.isRequired,
  inEncounter: PropTypes.func.isRequired,
  selected: PropTypes.func.isRequired,
  openNew: PropTypes.func,
  selectCharacter: PropTypes.func.isRequired,
  addCharacter: PropTypes.func.isRequired
};

//Redux wrapper
const mapStateToProps = state => ({
  characters: (Object.keys(state.characters) || []).map(id=>state.characters[id]),
  inEncounter: (id)=>state.encounter.list.reduce((f, c)=>f || c.id === id, false),
  selected: (id)=>state.characterPane.selectedCharacter === id
});

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
)(CharacterInsertModal);

export default Wrapped;

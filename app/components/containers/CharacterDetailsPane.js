import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {selectCharacter, editCharacter, saveCharacter} from '../../actions';
import SelectedCharacterDetails from '../elements/SelectedCharacterDetails';

import Icon from '../elements/Icon';

const CharacterDetailsPane = ({character, close, edit, mode, save}) => {
  const root = window.__webpack_public_path__;

  //TODO: A better empty state (CUUUTE)
  if(!character)
    return <div className="SelectedCharacterPane">No character selected</div>

  if(mode === 'viewing')
    return (
      <div className="SelectedCharacterPane">
        <div className="CharacterPaneMenu">
          <a href="#" onClick={(ev)=>{ev.preventDefault(); edit(character.id);}}><Icon icon="pencil"/></a>
          <a href="#" onClick={(ev)=>{ev.preventDefault(); close();}}><Icon icon="close"/></a>
        </div>
        <SelectedCharacterDetails character={character} />
      </div>
    )


  if(mode === 'editing') {
    const trySave = ()=>{
      save(character);
    }
    return (
      <div className="SelectedCharacterPane">
        <div className="CharacterPaneMenu">
          <a href="#" onClick={(ev)=>{ev.preventDefault(); trySave();}}><Icon icon="floppy-o"/></a>
          <a href="#" onClick={(ev)=>{ev.preventDefault(); close();}}><Icon icon="close"/></a>
        </div>
        <p>
          Editing comes later
        </p>
      </div>
    )
  }

  return null;
};

CharacterDetailsPane.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
    savingThrows: PropTypes.objectOf(PropTypes.number),
    armorClass: PropTypes.number,
    initiative: PropTypes.number
  }),
  close: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    character: state.characters[state.characterPane.selectedCharacter],
    mode: state.characterPane.mode
  };
};

const mapDispatchToProps = dispatch=> {
  return {
    close: ()=>dispatch(selectCharacter('')),
    edit: (id)=>dispatch(editCharacter(id)),
    save: (character)=>dispatch(saveCharacter(character))
  };
};

const WrappedNode = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailsPane);


export default WrappedNode;

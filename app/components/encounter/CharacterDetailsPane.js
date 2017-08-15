import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectCharacter, editCharacter, saveCharacter, removeCharacterFromEncounter} from '../../actions';
import SelectedCharacterDetails from './SelectedCharacterDetails';

import Link from '../common/Link';
import Icon from '../common/Icon';

const CharacterDetailsPane = ({character, initiativeRoll, close, remove}) => {
  //TODO: A better empty state (CUUUTE)
  if(!character)
    return <div className="SelectedCharacterPane">No character selected</div>

  return (
    <div className="SelectedCharacterPane">
      <div className="CharacterPaneMenu">
        <Link title="Edit this character" click={'edit/' + character.id}><Icon icon="pencil"/></Link>
        <Link title="Remove from encounter" click={()=>{remove(character.id)}}><Icon icon="trash"/></Link>
        <Link title="Close details" click={()=>{close()}}><Icon icon="remove"/></Link>
      </div>
      <SelectedCharacterDetails character={{...character, initiativeRoll}} />
    </div>
  )
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
  initiativeRoll: PropTypes.number,
  close: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const currentItem = state.encounter.list.reduce((running, current)=>{
    if(current.id === state.characterPane.selectedCharacter)
      return current;
    return running;
  }, undefined)

  const currentInitiative = currentItem ? currentItem.initiativeRoll : 0;

  return {
    character: state.characters[state.characterPane.selectedCharacter],
    initiativeRoll: currentInitiative
  };
};

const mapDispatchToProps = dispatch=> {
  return {
    close: ()=>dispatch(selectCharacter('')),
    remove: (id)=>dispatch(removeCharacterFromEncounter(id))
  };
};

const WrappedNode = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailsPane);


export default WrappedNode;

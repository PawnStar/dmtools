import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import EncounterListItem from './EncounterListItem';
import { selectCharacter, removeCharacterFromEncounter } from '../../actions';

//React presentational component
const EncounterList = ({characters, encounter, currentTurn, currentSelected, selectSomeone, removeSomeone}) => {
  const encounterList = encounter.filter(item=>characters[item.id]).map(item=>({...item, character: characters[item.id]})).map(item=>{
    return (<EncounterListItem
      key={item.id}
      character={item.character}
      initiativeRoll={item.initiativeRoll}
      current={currentTurn === item.id}
      selected={currentSelected === item.id}
      selectCharacter={()=>selectSomeone(item.id)}
      removeCharacter={()=>removeSomeone(item.id)}
    />);
  });

  return (
    <div className="InitiativeList">
      {encounterList}
    </div>
  );
};

EncounterList.propTypes = {
  encounter: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    initiativeRoll: PropTypes.number.isRequired
  })).isRequired,
  currentTurn: PropTypes.string.isRequired,
  currentSelected: PropTypes.string,
  selectSomeone: PropTypes.func.isRequired,
  removeSomeone: PropTypes.func.isRequired,
  characters: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
    savingThrows: PropTypes.objectOf(PropTypes.number),
    armorClass: PropTypes.number,
    initiative: PropTypes.number
  })).isRequired
};

//Redux wrapper
const mapStateToProps = state => {
  return {
    characters: state.characters,
    currentSelected: state.characterPane.selectedCharacter,
    currentTurn: state.encounter.current,
    encounter: state.encounter.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSomeone: (id)=>dispatch(selectCharacter(id)),
    removeSomeone: (id)=>dispatch(removeCharacterFromEncounter(id))
  };
};

const Wrapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounterList);

export default Wrapped;

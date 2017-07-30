import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CharacterListItem from '../elements/CharacterListItem';
import EncounterControls from '../elements/EncounterControls';
import { selectCharacter } from '../../actions';
import '../../styles/initiativeList.less';

//React presentational component
const EncounterList = ({characters, encounter, currentTurn, currentSelected, selectSomeone}) => {
  const encounterList = encounter.filter(item=>characters[item.id]).map(item=>{return {...item, character: characters[item.id]}}).map(item=>{
    return (<CharacterListItem
      key={item.id}
      character={item.character}
      initiativeRoll={item.initiativeRoll}
      current={currentTurn === item.id}
      selected={currentSelected === item.id}
      onClick={()=>selectSomeone(item.id)}
    />);
  });

  return (
    <div className="InitiativeList">
      <div className="InitiativeListControls">
        <EncounterControls />
      </div>
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
    selectSomeone: (id)=>dispatch(selectCharacter(id))
  };
};

const Wrapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounterList);

export default Wrapped;

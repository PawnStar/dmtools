import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CharacterListItem from '../elements/CharacterListItem';
import Debug from '../elements/Debug';
import { selectCharacter } from '../../actions';
import '../../styles/initiativeList.less';

//React presentational component
const CharacterList = ({characters, encounter, currentTurn, currentSelected, selectSomeone}) => {
  const encounterList = encounter.filter(id=>characters[id]).map(id=>characters[id]).map(character=>{
    return (<CharacterListItem
      key={character.id}
      character={character}
      current={currentTurn === character.id}
      selected={currentSelected === character.id}
      onClick={()=>selectSomeone(character.id)}
    />);
  });

  return (
    <div className="InitiativeList">
      <div className="InitiativeListControls">
        <Debug />
      </div>
      {encounterList}
    </div>
  );
};

CharacterList.propTypes = {
  encounter: PropTypes.arrayOf(PropTypes.string).isRequired,
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
    currentSelected: state.selectedCharacter,
    currentTurn: state.encounter.current,
    encounter: state.encounter.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSomeone: (id)=>dispatch(selectCharacter(id))
  };
};

const WrappedCharacterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);

export default WrappedCharacterList;

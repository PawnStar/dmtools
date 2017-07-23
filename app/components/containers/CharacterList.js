import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CharacterListItem from '../elements/CharacterListItem';
import { initiativeList } from '../../styles/initiativeList.scss';

//React presentational component
const CharacterList = ({characters, encounter, currentTurn, currentSelected, selectSomeone}) => {
  const encounterList = encounter.filter(id=>characters[id]).map(id=>characters[id]).sort((a,b)=>{
    //TODO: add sort order feature, for manual sorting
    if(a.initiative !== b.initiative)
      return a.initiative - b.initiative;

    if(a.stats.dex !== b.stats.dex)
      return a.stats.dex - b.stats.dex;

    return a.id - b.id;
  }).map(character=>{
    return (<CharacterListItem
      key={character.id}
      character={character}
      current={currentTurn === character.id}
      selected={currentSelected === character.id}
      onClick={()=>selectSomeone(character.id)}
    />);
  });

  return (
    <div className={initiativeList}>
      {encounterList}
    </div>
  );
};

CharacterList.propTypes = {
  encounter: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentTurn: PropTypes.number.isRequired,
  currentSelected: PropTypes.number,
  selectSomeone: PropTypes.func.isRequired,
  characters: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
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

const mapDispatchToProps = dispatch => {
  return {
    selectSomeone: (id)=>{console.log('selecting ' + id);}
  };
};

const WrappedCharacterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);

export default WrappedCharacterList;

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectCharacter, removeCharacterFromEncounter} from '../../actions';
import Character from '../../helpers/character';

import Link from '../common/Link';
import Icon from '../common/Icon';

const CharacterDetailsPane = ({character, initiativeRoll, close, remove}) => {
  //TODO: A better empty state (CUUUTE)
  if(!character)
    return <div className="SelectedCharacterPane">No character selected</div>;

  const char = new Character(character);

  return (
    <div className="SelectedCharacterPane">
      <div className="CharacterPaneMenu">
        <Link title="Edit this character" click={'edit/' + character.id}><Icon icon="pencil"/></Link>
        <Link title="Remove from encounter" click={()=>{remove(character.id);}}><Icon icon="trash"/></Link>
        <Link title="Close details" click={()=>{close();}}><Icon icon="remove"/></Link>
      </div>
      <div>
        <h2>{character.name}</h2>
        <p>
          <strong>Initiative:</strong>
          {initiativeRoll + char.getAbilityScore('dex')} ({character.initiativeRoll} roll  + {char.getAbilityScore('dex')} dex)
          <br/>{/*Forgive me father for I have sinned*/}
          <strong>HP:</strong>
          {character.curHP}/{character.maxHP}
          <br/>
          <strong>AC:</strong>
          {character.armorClass}
          <br/>
          <strong>Speed:</strong>
          {character.walkingSpeed}
        </p>
        <table style={{width: '100%', textAlign: 'center'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Stat</th>
              <th>Saving Throw</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(character.stats).map(stat=>{
                return (
                  <tr key={stat}>
                    <th>{stat}</th>
                    <td>{character.stats[stat]}</td>
                    <td>{char.getSavingThrow(stat)}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
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
  }, undefined);

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

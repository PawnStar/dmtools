import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from '../common/modal/Modal';
import Character from '../../helpers/character';


//React presentational component
const CharacterDetails = ({match, getCharacter}) => {
  const characterID = match.params.characterID;
  const character = getCharacter(characterID);
  const char = new Character(character);
  return (
    <Modal close="characters">
      <div style={{padding: '20px'}}>
        <div>
          <h2>{character.name}</h2>
          <p>
            <strong>Initiative:</strong>
            {character.initiativeRoll + char.getAbilityScore('dex')} ({character.initiativeRoll} roll  + {char.getAbilityScore('dex')} dex)
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
        <pre>{JSON.stringify(character, null, 2)}</pre>
      </div>
    </Modal>
  );
};

CharacterDetails.propTypes = {
  match: PropTypes.object,
  getCharacter: PropTypes.func
};

const mapStateToProps = state => ({
  getCharacter: id=>state.characters[(Object.keys(state.characters) || []).filter(c=>c===id)[0]]
});
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetails);

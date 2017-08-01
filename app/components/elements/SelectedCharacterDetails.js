import React from 'react';
import PropTypes from 'prop-types';
import Character from '../../helpers/character';

import '../../styles/selectedCharacter.less';

const SelectedCharacterDetails = ({character}) => {
  const char = new Character(character);

  return (
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
      <table style={{width: '100%'}}>
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
  );
};

SelectedCharacterDetails.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
    savingThrows: PropTypes.objectOf(PropTypes.number),
    armorClass: PropTypes.number,
    initiative: PropTypes.number
  }).isRequired
};

export default SelectedCharacterDetails;

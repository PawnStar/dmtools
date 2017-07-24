import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createCharacter, progressTurn, addToEncounter} from '../../actions';

//React presentational component
const DebugButtons = ({
  addCharacter,
  moveTurn
}) => (
  <div>
    <button onClick={addCharacter}>Add Character</button>
    <button onClick={moveTurn}>Progress Turn</button>
  </div>
);

DebugButtons.propTypes = {
  addCharacter: PropTypes.func.isRequired,
  moveTurn: PropTypes.func.isRequired
};


const names = [
  'Marcellina',
  'Dolores',
  'Dolores',
  'Lucrece',
  'Judith',
  'Aislinn',
  'Vina',
  'Faun',
  'Demie',
  'Sarina',
  'Jehane',
  'Soreen',
  'Paris',
  'Effi',
  'Damia',
  'Courtney',
  'Detlev',
  'Romek',
  'Gottfried',
  'Baron',
  'Vallois',
  'Uvo',
  'Rishley',
  'Todd',
  'Derick',
  'Harbert',
  'Seppi',
  'Jasmin',
  'Kastor',
  'Horton',
  'Quirinus',
  'Amadeus',
  'Laney',
  'Bente',
  'Marisol',
  'Harriette',
  'Ellie',
  'Druella',
  'Billie',
  'Orlene',
  'Serilde',
  'Dagmar',
  'Waldburg',
  'Brunhilde',
  'Fidelia',
  'Katrina',
  'Katerina',
  'Marcelle'
];

function selectName() {
  return names[Math.floor(Math.random() * names.length)];
}

const d = (n)=>Math.floor(Math.random() * n) + 1;
function randomStat() {
  const vals = [ d(6), d(6), d(6), d(6) ];

  return vals.sort((a,b)=>a - b).slice(1).reduce((sum, cur)=>sum + cur, 0);
}

const computeAbilityScore = stat=>Math.floor(stat / 2) - 5;

//Redux wrapper
const mapDispatchToProps = dispatch => {
  return {
    addCharacter: (ev)=>{
      ev.preventDefault();

      const stats = {
        dex: randomStat(),
        str: randomStat(),
        con: randomStat(),
        wis: randomStat(),
        int: randomStat(),
        cha: randomStat()
      };

      const abilityScores = {
        dex: computeAbilityScore(stats.dex),
        str: computeAbilityScore(stats.str),
        con: computeAbilityScore(stats.con),
        wis: computeAbilityScore(stats.wis),
        int: computeAbilityScore(stats.int),
        cha: computeAbilityScore(stats.cha)
      };

      const res = dispatch(createCharacter({
        initiative: 2 + abilityScores.dex + d(20),
        name: selectName(),
        stats: stats,
        savingThrows: abilityScores
      }));
      dispatch(addToEncounter(res.character.id));
    },
    moveTurn: (ev)=>{
      ev.preventDefault();
      dispatch(progressTurn());
    }
  };
};

const Wrapped = connect(
  null,
  mapDispatchToProps
)(DebugButtons);

export default Wrapped;

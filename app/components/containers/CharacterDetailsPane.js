import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {selectCharacter} from '../../actions';

import Icon from '../elements/Icon';

const CharacterDetailsPane = ({character, close}) => {
  const root = window.__webpack_public_path__;

  return (
    <div className="SelectedCharacterPane">
      {/*TODO: A better empty state (CUUUTE)*/}

      {/*Wrap for empty state*/}
      {character ? (
        <div>
          <div className="CharacterPaneMenu">
            <Link to={root + 'edit/' + character.id}><Icon icon="pencil"/></Link>
            <a href="#" onClick={(ev)=>{ev.preventDefault(); close()}}><Icon icon="close"/></a>
          </div>
          <h2>{character.name}</h2>
          <p>Stats go here</p>
        </div>
      ) : 'No character selected'}
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
  close: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    character: state.characters[state.selectedCharacter]
  };
};

const mapDispatchToProps = dispatch=> {
  return {
    close: ()=>dispatch(selectCharacter('')),
    edit: ()=>dispatch()
  };
};

const WrappedNode = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailsPane);


export default WrappedNode;

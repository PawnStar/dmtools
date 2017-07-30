import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CharacterListItem from '../elements/CharacterListItem';
import Debug from '../elements/Debug';
import { selectCharacter } from '../../actions';
import '../../styles/initiativeList.less';

//React presentational component
const CharacterList = () => {
  return (
    <div className="CharacterBrowserPane">
      <p>
        This will be where all your character templates are, but right
        now it only adds them randomly.
      </p>
      <p>
        To test out the (limited) functionality I&#39;ve put in so far,
        click the &ldquo;Add Character&rdquo; button a few times, followed by the
        &ldquo;Progress Turn&rdquo; button to move through the round.
      </p>
      <Debug/>
    </div>
  );
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
)(CharacterList);

export default CharacterList;

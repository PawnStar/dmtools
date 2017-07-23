import React from 'react';
import { connect } from 'react-redux';

import CharacterList from '../containers/CharacterList';
import CharacterDetails from '../containers/CharacterDetailsPane';
import Debug from '../elements/Debug';

import { selectedCharacter } from '../../styles/selectedCharacter.scss';

const MainPage = () =>
    <div>
      <CharacterList/>
      <div className={selectedCharacter}>
        <Debug/>
      </div>
    </div>;

export default MainPage;

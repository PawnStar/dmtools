import React from 'react';

import CharacterList from '../containers/CharacterList';
import CharacterDetails from '../containers/CharacterDetailsPane';
import Debug from '../elements/Debug';

import { selectedCharacter } from '../../styles/selectedCharacter.scss';

const MainPage = () =>
    <div>
      <CharacterList/>
      <div className={selectedCharacter}>
        <CharacterDetails />
        <Debug/>
      </div>
    </div>;

export default MainPage;

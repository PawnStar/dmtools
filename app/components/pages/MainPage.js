import React from 'react';

import CharacterList from '../containers/CharacterList';
import CharacterDetails from '../containers/CharacterDetailsPane';
import Debug from '../elements/Debug';

import '../../styles/selectedCharacter.less';

const MainPage = () =>
    <div>
      <CharacterList/>
      <div className="SelectedCharacterPane">
        <CharacterDetails />
        <Debug/>
      </div>
    </div>;

export default MainPage;

import React from 'react';

import CharacterList from '../containers/CharacterList';
import CharacterDetails from '../containers/CharacterDetailsPane';

import '../../styles/selectedCharacter.less';

const MainPage = () =>
    <div>
      <CharacterList/>
      <div className="SelectedCharacterPane">
        <CharacterDetails />
      </div>
    </div>;

export default MainPage;

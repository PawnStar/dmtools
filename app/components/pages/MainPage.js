import React from 'react';

import EncounterList from '../containers/EncounterList';
import CharacterDetails from '../containers/CharacterDetailsPane';
import CharacterList from '../containers/CharacterList';

import '../../styles/selectedCharacter.less';
import '../../styles/mainPagePanes.less';

const MainPage = () =>
    <div>
      <EncounterList/>
      <div className="RightDynamicPanes">
        <CharacterDetails />
        <CharacterList/>
      </div>
    </div>;

export default MainPage;

import React from 'react';

import CharacterList from '../containers/CharacterList';
import CharacterDetails from '../containers/CharacterDetailsPane';

import '../../styles/selectedCharacter.less';
import '../../styles/mainPagePanes.less';

const MainPage = () =>
    <div>
      <CharacterList/>
      <div className="RightDynamicPanes">
        <CharacterDetails />
        <div className="CharacterBrowserPane">
          <p>
            This will be where all your character templates are, but right
            now it only adds them randomly.
          </p>
        </div>
      </div>
    </div>;

export default MainPage;

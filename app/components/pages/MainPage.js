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
          <p>
            To test out the (limited) functionality I&#39;ve put in so far,
            click the &ldquo;Add Character&rdquo; button a few times, followed by the
            &ldquo;Progress Turn&rdquo; button to move through the round.
          </p>
        </div>
      </div>
    </div>;

export default MainPage;

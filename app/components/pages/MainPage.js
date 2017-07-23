import React from 'react';
import { connect } from 'react-redux';

import CharacterList from '../containers/CharacterList';
import CharacterDetails from '../containers/CharacterDetailsPane';
import Debug from '../elements/Debug';

const MainPage = () =>
    <div>
      <CharacterList/>
      <Debug/>
    </div>;

export default MainPage;

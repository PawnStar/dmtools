import React from 'react';

import EncounterList from '../encounter/EncounterList';
import CharacterDetails from '../encounter/CharacterDetailsPane';

import '../encounter/encounterPage.less';

const EncounterPage = () =>
    <div>
      <EncounterList/>
      <CharacterDetails />
    </div>;

export default EncounterPage;

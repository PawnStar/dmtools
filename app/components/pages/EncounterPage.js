import React from 'react';

import EncounterList from '../encounter/EncounterList';
import CharacterDetails from '../encounter/CharacterDetailsPane';
import EncounterControls from '../encounter/EncounterControls';

import '../encounter/encounterPage.less';

const EncounterPage = () =>
    <div>
      <EncounterControls/>
      <EncounterList/>
      <CharacterDetails />
    </div>;

export default EncounterPage;

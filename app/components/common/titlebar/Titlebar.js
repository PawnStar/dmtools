import React from 'react';
import '../../../styles/titlebar.less';

import Link from '../Link';
import SaveStatusIndicator from './SaveStatusIndicator';

const Titlebar = () =>{
  return(
    <div className="Titlebar">
        <Link click="">DMTool</Link>
        <Link click="encounter">Encounter</Link>
        <Link click="characters">Character</Link>
        <Link click="settings">Settings</Link>
        <SaveStatusIndicator/>
    </div>
  );
};


export default Titlebar;

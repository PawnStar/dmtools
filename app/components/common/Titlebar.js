import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/titlebar.less';

import SaveStatusIndicator from '../elements/SaveStatusIndicator';

const Titlebar = () =>{
  const root = window.__webpack_public_path__;

  return(
    <div className="Titlebar">
        <Link to={root}>DMTool</Link>
        <Link to={root + 'settings'}>Settings</Link>
        <SaveStatusIndicator/>
    </div>
  );
};


export default Titlebar;

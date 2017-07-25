import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/titlebar.less';

const Titlebar = () =>{
  const root = window.__webpack_public_path__;

  return(
    <div className="Titlebar">
        <Link to={root}>DMTool</Link>
        <Link to={root + 'settings'}>Settings</Link>
    </div>
  );
}


export default Titlebar;

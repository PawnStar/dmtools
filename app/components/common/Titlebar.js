import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/titlebar.less';

const Titlebar = () =>(
    <div className="Titlebar">
        <Link to="/">DMTool</Link>
        <Link to="/settings">Settings</Link>
    </div>
  );


export default Titlebar;

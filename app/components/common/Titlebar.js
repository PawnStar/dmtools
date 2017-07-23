import React from 'react';
import { Link } from 'react-router-dom';
import { titlebar } from '../../styles/titlebar.scss';

const Titlebar = () =>(
    <div className={titlebar}>
        <Link to="/">DMTool</Link>
        <Link to="/settings">Settings</Link>
    </div>
  );


export default Titlebar;

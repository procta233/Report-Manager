import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import '../components/CSS/Creator.css';
import ViewBoard from '../components/othercomponents/ViewBoard';

const Creator = () => {
  return (
    <div className="creator-container">
    <h1 className="creator-header">Creator Dashboard</h1>

      <div className="creator-nav">
        <ul className="creator-nav-list">
          <li className="creator-nav-list-item">
            <Link to="/creator/createreport" className="creator-nav-link">
              <i className="creator-nav-link-icon fas fa-user-plus"></i>
               New Report Form
            </Link>
          </li>
          </ul>
        </div>
        <Outlet />
        <ViewBoard/>
      </div>
  
  );
};

export default Creator;

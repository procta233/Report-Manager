import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../components/CSS/Admin.css';
import ViewBoard from '../components/othercomponents/ViewBoard';

const Admin = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-header">Admin Dashboard</h1>

      <div className="admin-nav">
        <ul className="admin-nav-list">
          <li className="admin-nav-list-item">
            <Link to="/admin/usercreation" className="admin-nav-link">
              <i className="admin-nav-link-icon fas fa-user-plus"></i>
              Create New User
            </Link>
          </li>
          <li className="admin-nav-list-item">
            <Link to="/admin/reporttypeselect" className="admin-nav-link">
              <i className="admin-nav-link-icon fas fa-file-alt"></i>
              Define Mapping
            </Link>
          </li>
        </ul>

      </div>

      <Outlet />
      
      <ViewBoard/>
    </div>
  );
};

export default Admin;
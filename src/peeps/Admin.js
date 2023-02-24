import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Admin = () => {
  return (
    <div>
      <h1>admin dashboard</h1>

        
           <div className="App">
            <nav>
            <ul className="App-header">
              <li>
                <Link to="/admin/usercreation">Create New User</Link>
              </li>
              <li>
                <Link to="/admin/reporttypeselect">Define Mapping</Link>
              </li> 
              
            </ul>
            </nav>
            <Outlet/>
          </div>
       

    </div>
  )
}

export default Admin

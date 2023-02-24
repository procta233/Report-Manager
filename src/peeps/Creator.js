import React from 'react'

import { Link,Outlet } from 'react-router-dom'
const Creator = () => {
  return (
    <div>
      <h1> creator dashboard</h1>
      <div className="App">
            <nav>
            <ul className="App-header">
              <li>
                <Link to="/creator/createreport">New Report Form</Link>
              </li>
            </ul>
            </nav>
            <Outlet/>
          </div>
    </div>
  )
}

export default Creator

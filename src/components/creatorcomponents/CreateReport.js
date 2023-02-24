import React from 'react'
import { Link,Outlet } from 'react-router-dom'


const CreateReport = () => {
  return (
    <div>
      <h1>create report form is here</h1>
      <div className="App">
            <nav>
            <ul className="App-header">
              <li>
                <Link to="/creator/createreport/datetimeoptionality">Select Date and Time Type</Link>
              </li>
             
            </ul>
            </nav>
            <Outlet/>
          </div>

    </div>
  )
}

export default CreateReport

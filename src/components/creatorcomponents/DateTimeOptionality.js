import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const DateTimeOptionality = () => {
  return (
    <div>
      <h1>date time type selection here</h1>
      <div className="App">
            <nav>
            <ul className="App-header">
              <li>
                <Link to="/creator/createreport/datetimeoptionality/finalformcreate">Final Edits to the Form</Link>
              </li>
            </ul>
            </nav>
            <Outlet/>
          </div>
    </div>
  )
}

export default DateTimeOptionality

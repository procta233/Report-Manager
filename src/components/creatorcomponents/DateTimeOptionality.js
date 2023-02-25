import React from "react";
import { Link,Outlet } from "react-router-dom";

const data = [
  { head1: "A", head2: "B", unit: "C", attributrtype: "D", reporttype: "Audit Report" },
  { head1: "F", head2: "G", unit: "H", attributrtype: "I", reporttype: "Audit Report" },
  { head1: "K", head2: "L", unit: "M", attributrtype: "N", reporttype: "Audit Report" },
  { head1: "P", head2: "Q", unit: "R", attributrtype: "S", reporttype: "Audit Report" },
  { head1: "U", head2: "V", unit: "W", attributrtype: "X", reporttype: "Audit Report" },
];

const Table = () => {
  const fifthAttribute = data[0].reporttype; // assuming the fifth attribute is the same for all objects

  return (
    <div>
      <div><h1>{fifthAttribute}</h1></div>
      <table>
        <thead>
          <tr>
            <th>head1</th>
            <th>head2</th>
            <th>unit</th>
            <th>attributrtype</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.head1}</td>
              <td>{item.head2}</td>
              <td>{item.unit}</td>
              <td>{item.attributrtype}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
<h1>Select Set points and Column points</h1>
<div >
      <nav>
      <ul >
        <li>
          <Link to="/creator/createreport/datetimeoptionality/finalformcreate">Final Edits to the Form</Link>
        </li>
      </ul>
      </nav>
      <Outlet/>
    </div>
</div>
    </div>
  );
};

export default Table;


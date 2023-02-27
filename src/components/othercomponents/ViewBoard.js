import React, { useState } from 'react';

const reportData = [
  {
    userid: 1,
    clientid: 101,
    reporttype: 'Sales',
    systems: 'ERP',
    manufacturer: 'Microsoft',
    datebegin: '2022-01-01',
    timebegin: '09:00:00',
    dateend: '2022-01-31',
    timeend: '17:00:00',
    status: 'Completed'
  },
  {
    userid: 2,
    clientid: 102,
    reporttype: 'Inventory',
    systems: 'WMS',
    manufacturer: 'SAP',
    datebegin: '2022-02-01',
    timebegin: '10:00:00',
    dateend: '2022-02-28',
    timeend: '18:00:00',
    status: 'In Progress'
  },
  {
    userid: 3,
    clientid: 103,
    reporttype: 'Financial',
    systems: 'Accounting',
    manufacturer: 'Oracle',
    datebegin: '2022-03-01',
    timebegin: '11:00:00',
    dateend: '2022-03-31',
    timeend: '19:00:00',
    status: 'Pending'
  },
];

function ViewBoard() {
  const [data, setData] = useState(reportData);

  const handleEdit = (index) => {
    // TODO: Implement edit functionality
    console.log(`Edit row ${index}`);
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Client ID</th>
          <th>Report Type</th>
          <th>Systems</th>
          <th>Manufacturer</th>
          <th>Date Begin</th>
          <th>Time Begin</th>
          <th>Date End</th>
          <th>Time End</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((report, index) => (
          <tr key={report.userid}>
            <td>{report.userid}</td>
            <td>{report.clientid}</td>
            <td>{report.reporttype}</td>
            <td>{report.systems}</td>
            <td>{report.manufacturer}</td>
            <td>{report.datebegin}</td>
            <td>{report.timebegin}</td>
            <td>{report.dateend}</td>
            <td>{report.timeend}</td>
            <td>{report.status}</td>
            <td>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ViewBoard;
import React, { useState } from 'react';
import "../../CSS/EditSetPoints.css";

function Table() {
  const columns = [
    { key: 'id', title: 'S1' },
    { key: 'name', title: 'S2' },
    { key: 'age', title: 'S3' },
  ];

  const data = [
    { id: 1, name: '4', age: 32 },
    { id: 2, name: '5', age: 45 },
    { id: 3, name: '6', age: 27 },
  ];
  const [tableData, setTableData] = useState(data);
  const [tableColumns, setTableColumns] = useState(columns);

  const handleMoveLeft = (index) => {
    if (index > 0) {
      setTableColumns((prevColumns) => {
        const newColumns = [...prevColumns];
        [newColumns[index - 1], newColumns[index]] = [newColumns[index], newColumns[index - 1]];
        return newColumns;
      });
    }
  };

  const handleMoveRight = (index) => {
    if (index < tableColumns.length - 1) {
      setTableColumns((prevColumns) => {
        const newColumns = [...prevColumns];
        [newColumns[index], newColumns[index + 1]] = [newColumns[index + 1], newColumns[index]];
        return newColumns;
      });
    }
  };

  return (
    <table classname='editsetpoints'>
      <thead classname="editsetpoints-thead">
        <tr classname="editsetpoints-tr">
          {tableColumns.map((column, index) => (
            <th key={column.key} classname="editsetpoints-th">
              <div classname="editsetpoints-div">
               
                {index > 0 && <button classname="editsetpoints-button" onClick={() => handleMoveLeft(index)}>{"<"}</button>}
                <span classname="editsetpoints-span">{column.title}</span>
                {index < tableColumns.length - 1 && <button onClick={() => handleMoveRight(index)}>{">"}</button>}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            {tableColumns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
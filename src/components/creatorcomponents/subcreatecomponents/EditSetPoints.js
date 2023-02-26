import React, { useState } from 'react';

function Table() {
  const columns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
  ];

  const data = [
    { id: 1, name: 'John Doe', age: 32 },
    { id: 2, name: 'Jane Smith', age: 45 },
    { id: 3, name: 'Bob Johnson', age: 27 },
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
    <table>
      <thead>
        <tr>
          {tableColumns.map((column, index) => (
            <th key={column.key}>
              <div>
               
                {index > 0 && <button onClick={() => handleMoveLeft(index)}>{"<"}</button>}
                <span>{column.title}</span>
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
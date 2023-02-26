import React, { useState } from "react";

const data = [
  { sensorname:'S1',head1: "A", head2: "B", unit: "C", attributrtype: "D", reporttype: "Audit Report" },
  { sensorname:'S2',head1: "F", head2: "G", unit: "H", attributrtype: "I", reporttype: "Audit Report" },
  { sensorname:'S3',head1: "K", head2: "L", unit: "M", attributrtype: "N", reporttype: "Audit Report" },
  { sensorname:'S4',head1: "P", head2: "Q", unit: "R", attributrtype: "S", reporttype: "Audit Report" },
  { sensorname:'S5',head1: "U", head2: "V", unit: "W", attributrtype: "X", reporttype: "Audit Report" },
];

const DateTimeOptionality = () => {
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);

  const toggleSelected1 = (index) => {
    const selectedIndex = selected1.indexOf(index);
    if (selectedIndex >= 0) {
      setSelected1(selected1.filter((i) => i !== index));
    } else {
      setSelected1([...selected1, index]);
    }
  };

  const toggleSelected2 = (index) => {
    const selectedIndex = selected2.indexOf(index);
    if (selectedIndex >= 0) {
      setSelected2(selected2.filter((i) => i !== index));
    } else {
      setSelected2([...selected2, index]);
    }
  };

  const fifthAttribute = data[0].reporttype; // assuming the fifth attribute is the same for all objects

  const selectedData1 = selected1.map((i) => data[i]);
  const selectedData2 = selected2.map((i) => data[i]);
  const newData1 = selectedData1.map(({ sensorname, reporttype }) => ({ sensorname, reporttype }));
  const newData2 = selectedData2.map(({ sensorname, reporttype }) => ({ sensorname, reporttype }));
  const last =()=>{
    console.log(newData1);
    console.log(newData2);
  }

  return (
    <div>
      
      <div>
      <h1>Select The Types For Setpoints and Columns</h1>
      <h2>{fifthAttribute}</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Head1</th>
            <th>Head2</th>
            <th>Unit</th>
            <th>Attribute</th>
            <th>SetPoints</th>
            <th>Columns</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.head1}</td>
              <td>{item.head2}</td>
              <td>{item.unit}</td>
              <td>{item.attributrtype}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selected1.indexOf(index) >= 0}
                  onChange={() => toggleSelected1(index)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={selected2.indexOf(index) >= 0}
                  onChange={() => toggleSelected2(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={last}>Submit</button>
      </div>
  )
          };
  export default DateTimeOptionality;
  
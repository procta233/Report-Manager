import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

const DateTimeOptionality = () => {
  const { state } = useLocation();

  const [data, setData] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const API9 = "https://create-users.onrender.com/api/sensors/reporttype";
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

  const selectedData1 = selected1.map((i) => data[i]);
  const selectedData2 = selected2.map((i) => data[i]);
  const newData1 = selectedData1.map(({ sensorname, reporttype }) => ({
    sensorname,
    reporttype,
  }));
  const newData2 = selectedData2.map(({ sensorname, reporttype }) => ({
    sensorname,
    reporttype,
  }));
  const last = () => {
    console.log(newData1);
    console.log(newData2);
  };
  const cancer ={reporttype: state.race};
  const callData= async(API9) => {
    console.log(JSON.stringify(cancer));
    try {
      const response = await fetch(API9, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cancer)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const res = await response.json();
      console.log(res);
      setData(res);
    } catch (error) {
      console.error('Error:', error);
    }
  

  };

  useEffect(() => {
  
  callData(API9);

  }, []);
  

  return (
    <div>
      <div>
        <h1>Select The Types For Setpoints and Columns</h1>
        <h2>{state.race}</h2>
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
  );
};
export default DateTimeOptionality;

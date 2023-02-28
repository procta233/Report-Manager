import React, { useState,useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "../CSS/DateTimeOptionality.css";

const DateTimeOptionality = () => {
  const { state } = useLocation();
  const navigate=useNavigate();

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
    navigate('finalformcreate');
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
    <div className="datetimeoptionality-container">
      <div className="datetimeoptionality-heading">
        <h1 className="datetimeoptionality-h1">Select The Columns For Setpoints Table and Columns Table</h1>
        <h2 className="datetimeoptionality-h1">{state.race} Report</h2>
      </div>
      <table className="datetimeoptionality-table">
        <thead className="datetimeoptionality-thead">
          <tr>
            <th className="datetimeoptionality-th">Head1</th>
            <th className="datetimeoptionality-th">Head2</th>
            <th className="datetimeoptionality-th">Unit</th>
            <th className="datetimeoptionality-th">Attribute</th>
            <th className="datetimeoptionality-th">Columns for SetPoints Table</th>
            <th className="datetimeoptionality-th">Columns for Final Report Table</th>
          </tr>
        </thead>
        <tbody className="datetimeoptionality-tbody">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="datetimeoptionality-td">{item.head1}</td>
              <td className="datetimeoptionality-td">{item.head2}</td>
              <td className="datetimeoptionality-td">{item.unit}</td>
              <td className="datetimeoptionality-td">{item.attributrtype}</td>
              <td className="datetimeoptionality-td">
                <input 
                  type="checkbox"
                  checked={selected1.indexOf(index) >= 0}
                  onChange={() => toggleSelected1(index)}
                />
              </td>
              <td className="datetimeoptionality-td">
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
      <button className="datetimeoptionality-button" onClick={last}>Submit</button>
    </div>
  );
};
export default DateTimeOptionality;

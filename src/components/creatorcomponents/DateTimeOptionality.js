import React, { useState,useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import "../CSS/DateTimeOptionality.css";

const DateTimeOptionality = () => {
  const { state } = useLocation();
  const navigate=useNavigate();

  const [data, setData] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const API9 = "https://create-users.onrender.com/api/sensors/reporttype";
  const API15 ="https://create-users.onrender.com/api/setpoints";
  const API16 ="https://create-users.onrender.com/api/normalpoints";


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
  const newData1 = selectedData1.map(({ sensorname}) => ({
    reportid:state.rep,
    sensorname,

  }));
  
  const newData2 = selectedData2.map(({ sensorname}) => ({
    reportid:state.rep,
    sensorname,
    
  }));
  const last = async() => {
   
    console.log(newData1,"setpts");
    console.log(newData2);
    try {
      const response = await fetch(API15,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       
        body: JSON.stringify(newData1),
      })
      const res = await response.json();
    console.log(res.message);
  
    } catch (error) {
      console.error('Error:', error);
    };
    try {
      const response = await fetch(API16,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       
        body: JSON.stringify(newData2)
      })
      const res = await response.json();
      console.log(res.message);
   
    } catch (error) {
      console.error('Error:', error);
    };
     navigate('finalformcreate');
  };
  
  const cancer ={reporttype: state.race};
  const callData= async(API9) => {
 
    try {
      const response = await fetch(API9,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       
        body: JSON.stringify(cancer),
      })
      const res = await response.json();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
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
        <h4 >Client Id:{state.clie}</h4>   
        <h4>Report ID:{state.rep}</h4>
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
              <td className="datetimeoptionality-td">{item.attributetype}</td>
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

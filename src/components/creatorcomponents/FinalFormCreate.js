import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import "../CSS/FinalFormCreate.css";

const Table2 = () => {
  const API10="https://create-users.onrender.com/api/pwd_auto/search";
  const API11 ="https://create-users.onrender.com/api/sensors/reporttype";
  const [isSelected,setIsselected]=useState(true);
  const [data, setData] = useState([
      
    ['', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-', '-', '-', '-', '-', '-', '-','-'],
    ['', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-', '-', '-', '-', '-', '-', '-','-']
  ]);
  const [body,setBody]=useState([[]]);
  
  const [heading,setHeading]=useState([]);
  const [options,setOptions] =useState([[]]);
  const handleInputChange = (e, row, col) => {
    const newData = [...data];
    newData[row][col] = e.target.value;
    setData(newData);
  };
  function generatePDF() {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('My Table', 10, 10);
    doc.autoTable({html: '#table'});
    doc.save('table.pdf');
  }
  const handleSelectChange = (e, row, col) => {
    const newData = [...data];
    newData[row][col] = e.target.value;
    setData(newData);
    setIsselected(false);
  };

  const addRow = () => {
    const newData = [...data];
    newData.push(Array(data[0].length).fill(''));
    setData(newData);
  };

  const shiftLeft = (col) => {
    if (col > 1) {
      const newData = [...data];
      const header = newData[0][col];
      for (let i = 0; i < newData.length; i++) {
        newData[i][col] = newData[i][col - 1];
      }
      newData[0][col - 1] = header;
      setData(newData);
    }
  };

  const shiftRight = (col) => {
    if (col < data[0].length - 1) {
      const newData = [...data];
      const header = newData[0][col];
      for (let i = 0; i < newData.length; i++) {
        newData[i][col] = newData[i][col + 1];
      }
      newData[0][col + 1] = header;
      setData(newData);
    }
  };

  const handleSubmit = () => {
    console.log(data);
  };
  const getat =async (API10)=>{
    try {
      const res=await fetch(API10);
      const dat=await res.json();
      const trial=Object.entries(dat[0]);

      
      // console.log(sir);
     
      setOptions(trial.slice(2));

    } catch (error) {
      console.log(error);
    };
 

  };
  const getpar = async (API11)=>{
    try {
      const res=await fetch(API11);
      const dat=await res.json();
      const sir =Object.values(dat);
      console.log(sir);
      const arr={sensorname: 'S5', head1: 'Set Points', head2: 'Date and Time', unit: '', attributetype: '', reporttype:''};
      setHeading([arr,...sir]);
      console.log(heading);
      // console.log('===',sir);
    } catch (error) {
      console.log(error);
      
    }
    console.log(heading);
  };

  useEffect(() => {
  getat(API10);
  getpar(API11);

  }, []);
  return (
    <div className="finalformcreate-container">
      <label className="finalformcreate-label">Reorder Columns for Final Report</label>
      <table className="finalformcreate-table " htmlFor="#table">
      <thead className="finalformcreate-thead">
          <tr className="finalformcreate-tr" >
            {heading.map((header, col) => (
              <th className="finalformcreate-th" key={col}>
                
                {col === 0 ? (<div>
                  
                  <th>
                      <tr>{header.head1}</tr>
                      <tr>{}</tr>
                      <tr>{header.unit}</tr>
                    </th>
                 
                </div>): (<div>
                  
                  <th>
                      <tr>{header.head1}</tr>
                      <tr>{header.head2}</tr>
                      <tr>{header.unit}</tr>
                    </th>
                  
                  </div>
                )}

              </th>
            ))}
          </tr>
        </thead>
        
        <tbody className="finalformcreate-tbody">
          {data.map((row, rowIndex) => (
            <tr className="finalformcreate-tr" key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td className="finalformcreate-td"  key={colIndex}>
                  {colIndex === 0 && rowIndex>0 ? (
                    <input type="text" value={cell} onChange={(e) => handleInputChange(e, rowIndex, colIndex)} />
                  ) : 
                  ( rowIndex >0 ?(
                    <select value={cell} onChange={(e) => handleSelectChange(e, rowIndex, colIndex)}>
                      <option value="-">-</option>
                    {options.map((cur,index) => (
                      <option key={index} value={cur[1]}>{isSelected === true? (<>{cur[0]}</>):(<>{cur[1]}</>)}</option>
                    ))}
                      
                    </select>
                 ):(
                  <></>
                 ) )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <button  className="finalformcreate-add-button" onClick={addRow}>Add Row</button>
        <thead className="finalformcreate-thead">
          <tr className="finalformcreate-tr" >
            {heading.map((header, col) => (
              <th className="finalformcreate-th" key={col}>
                {col > 1 ? (
                  <div>
                    <button onClick={() => shiftLeft(col)}>&lt;</button>
                    <th>
                      <tr>{header.head1}</tr>
                      <tr>{header.head2}</tr>
                      <tr>{header.unit}</tr>
                    </th>
                    <button onClick={() => shiftRight(col)}>&gt;</button>
                  </div>
                ):( <>{col === 1 ? (<div>
                  <button onClick={() => shiftLeft(col)} disabled>&lt;</button>
                  <th>
                      <tr>{header.head1}</tr>
                      <tr>{header.head2}</tr>
                      <tr>{header.unit}</tr>
                    </th>
                  <button onClick={() => shiftRight(col)} >&gt;</button>
                </div>): (<div>
                  <button onClick={() => shiftLeft(col)} disabled>&lt;</button>
                  <th>
                      <tr>{}</tr>
                      <tr>{header.head2}</tr>
                      <tr>{header.unit}</tr>
                    </th>
                  <button onClick={() => shiftRight(col)} disabled>&gt;</button>
                  </div>
                )}</>)}
            
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="finalformcreate-tbody">
          
        </tbody>
        <button className="finalformcreate-submit-button" onClick={generatePDF}>Submit</button>
      </table>
      
      
      </div>
);};
export default Table2;
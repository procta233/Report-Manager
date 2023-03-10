import React, { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";

import "../CSS/FinalFormCreate.css";

const Table2 = () => {
  const API10 = "https://create-users.onrender.com/api/pwd_auto/search";
  const API11 = "https://create-users.onrender.com/api/sensors/reporttype";
  const API12 = "https://create-users.onrender.com/api/pwd_auto/search";
  const API17 ="https://create-users.onrender.com/api/advancesearch";
  const [isSelected, setIsselected] = useState(true);
  const [data, setData] = useState([[]]);
  const [body, setBody] = useState([]);
  const [modi, setModi] = useState([[]]);

  const [heading, setHeading] = useState([]);
  const [options, setOptions] = useState([[]]);
  const handleInputChange = (e, row, col) => {
    const newData = [...data];
    newData[row][col] = e.target.value;
    setData(newData);
  };

  const handleSelectChange = (e, row, col) => {
    const newData = [...data];
    newData[row][col] = e.target.value;
    setData(newData);
    setIsselected(false);
  };

  const addRow = () => {
    const newData = [...data];
    newData.push(Array(data[0].length).fill(""));
    setData(newData);
    const len = heading.length;
    const bet = data.length + 1;
    const t = [[]];
    for (var i = 0; i < bet; i++) {
      var tt = [len];
      for (var j = 0; j < len; j++) {
        if (j != 0) {
          tt[j] = "-";
        } else {
          tt[j] = "";
        }
      }
      console.log(tt);
      t[i] = tt;
    }
    setData(t);
  };

  const shiftLeft = (col) => {
    var newdata = [...heading];
    console.log("newdata", newdata);
    if (col < heading.length && col != 0) {
      var temp = newdata[col];
      newdata[col] = newdata[col - 1];
      newdata[col - 1] = temp;
      var tempdata = [...data];
      for (var j = 0; j < data.length; j++) {
        if (col < heading.length && col != 0) {
          var temp2 = tempdata[j][col];
          tempdata[j][col] = tempdata[j][col - 1];
          tempdata[j][col - 1] = temp2;
        }
      }
      var tempzzz = [...body];
      for (var j = 0; j < body.length; j++) {
        if (col < heading.length && col != 0) {
          var temp4 = tempzzz[j][col];
          tempzzz[j][col] = tempzzz[j][col - 1];
          tempzzz[j][col - 1] = temp4;
        }
      }

      setBody(tempzzz);
      setHeading(newdata);
      setData(tempdata);
    }
  };

  const shiftRight = (col) => {
    var newdata = [...heading];
    console.log("newdata", newdata);
    if (col < heading.length - 1) {
      var temp = newdata[col];
      newdata[col] = newdata[col + 1];
      newdata[col + 1] = temp;
      var tempdata = [...data];
      for (var j = 0; j < data.length; j++) {
        if (col < heading.length && col != 0) {
          var temp2 = tempdata[j][col];
          tempdata[j][col] = tempdata[j][col + 1];
          tempdata[j][col + 1] = temp2;
        }
      }
      var tempo = [...body];
      for (var j = 0; j < body.length; j++) {
        if (col < heading.length && col != 0) {
          var temp9 = tempo[j][col];
          tempo[j][col] = tempo[j][col + 1];
          tempo[j][col + 1] = temp9;
        }
      }

      setBody(tempo);
      setHeading(newdata);
      setData(tempdata);
    }
  };

  const handleSubmit = () => {};
  const getat = async (API10) => {
    try {
      const res = await fetch(API10);
      const dat = await res.json();
      const trial = Object.entries(dat[0]);

      // console.log(sir);

      setOptions(trial.slice(2));
    } catch (error) {
      console.log(error);
    }
  };

  const getpar = async (API11) => {
    try {
      const res = await fetch(API11);
      const dat = await res.json();
      const sir = Object.values(dat);
      // console.log(sir);
      const arr = {
        sensorname: "S5",
        head1: "Set Points",
        head2: "Date and Time",
        unit: "",
        attributetype: "",
        reporttype: "",
      };
      setHeading([arr, ...sir]);
    } catch (error) {
      console.log(error);
    }
    // console.log(heading);
  };
  const getbody = async (API12) => {
    try {
      const res = await fetch(API12);
      const dat = await res.json();
      var te = [[]];
      for (var i = 0; i < dat.length - 1; i++) {
        te[i] = Object.values(dat[i]);
      }

      setBody(te);
    } catch (error) {
      console.log(error);
    }

    console.log(body);

  
  };

  const handlePrintClick = () => {
    const printable = document.createElement("table");
    printable.innerHTML = 
    
      `<table>
        <thead>
          <tr>
            <h2>AUDIT REPORT</h2>
          </tr>
          <tr>
            <h2>Manufacturer</h2>
          </tr>
          <tr>
            <th>
            <h2>Manufacturer</h2>
            </th>
            <th>
            <h2>Client</h2>
            </th>
          </tr>
          <tr>
            ${heading.head1}
              
          </tr>
        </thead>
        <tbody></tbody>
        <thead>
          <tr>
            <th>
              <tr>${''}</tr>
              <tr>${heading.head2}</tr>
              <tr>${heading.unit}</tr>
            </th>
            <th>
              <tr>${heading.head1}</tr>
              <tr>${heading.head2}</tr>
              <tr>${heading.unit}</tr>
            </th>
            <th>
              <tr>${heading.head1}</tr>
              <tr>${heading.head2}</tr>
              <tr>${heading.unit}</tr>
            </th>
            <th>
              <tr>${heading.head1}</tr>
              <tr>${heading.head2}</tr>
              <tr>${heading.unit}</tr>
            </th>
            <th>
              <tr>${heading.head1}</tr>
              <tr>${heading.head2}</tr>
              <tr>${heading.unit}</tr>
            </th>
          </tr>
        </thead>
      </table>`
    
    const opt = {
      margin: 0.5,
      filename: "final-report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(printable).save();
    let newWin = window.open("");
    newWin.document.body.appendChild(printable);
    newWin.print();
    newWin.close();
  };
  const getAll= async(API17) => {
 
    try {
      const response = await fetch(API17,{
        method: "POST",
        mode:'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
       
        body: {

          reportid:"2023-01-0610:26:11.00000009:43123ABCABS-896645467000004V_1",
          table:"pwd_auto"
      }
      })
      const res = await response.text();
      console.log(res);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // console.log(res);

    } catch (error) {
      console.error('Error:', error);
    }
  

  };
  const tablename="pwd_auto";

  // const getAll5=async(API17)=>{
  //   const reportid="2023-01-0610:26:11.00000009:43123ABCABS-896645467000004V_1"
  //   fetch( API17+`?reportid=${reportid}&table=${tablename}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // };


  // const API17 = "https://create-users.onrender.com/api/advancesearch";
const getAll5 = async (API17) => {
  const tablename = "pwd_auto";
  const reportid = "2023-01-0610:26:11.00000009:43123ABCABS-896645467000004V_1";
  const url = new URL(API17);
  url.searchParams.set("reportid", reportid);
  url.searchParams.set("table", tablename);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};




  useEffect(() => {
    // getat(API10);
    // getpar(API11);
    // getbody(API12);
    // getAll(API17);
    getAll5(API17);
  }, []);
  return (
    <div className="finalformcreate-container">
      <label className="finalformcreate-label">
        Reorder Columns for Final Report
      </label>
      <table className="finalformcreate-table " htmlFor="#table">
        <thead className="finalformcreate-thead">
          <tr className="finalformcreate-tr">
            {heading.map((header, col) => (
              <th className="finalformcreate-th" key={col}>
                {col === 0 ? (
                  <div>
                    <th>
                      <tr>{header.head1}</tr>
                      <tr>{}</tr>
                      <tr>{header.unit}</tr>
                    </th>
                  </div>
                ) : (
                  <div>
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
                <td className="finalformcreate-td" key={colIndex}>
                  {colIndex === 0 && rowIndex > 0 ? (
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                    />
                  ) : rowIndex > 0 ? (
                    <select
                      value={cell}
                      onChange={(e) =>
                        handleSelectChange(e, rowIndex, colIndex)
                      }
                    >
                      <option value="-">-</option>
                      {options.map((cur, index) => (
                        <option key={index} value={cur[1]}>
                          {isSelected === true ? <>{cur[0]}</> : <>{cur[1]}</>}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <></>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <button className="finalformcreate-add-button" onClick={addRow}>
          Add Row
        </button>
        <thead className="finalformcreate-thead">
          <tr className="finalformcreate-tr">
            {heading.map((header, col) => (
              <th className="finalformcreate-th" key={col}>
                {col > 1 ? (
                  <div >
                    
                    <button onClick={() => shiftLeft(col)}>&lt;</button>
                    <div >
                    <th>
                    
                      <tr>{header.head1}</tr>
                      <tr>{header.head2}</tr>
                      <tr>{header.unit}</tr>
                    </th>
                    </div>

                    <button onClick={() => shiftRight(col)}>&gt;</button>
                  </div>
                ) : (
                  <>
                    {col === 1 ? (
                      <div>
                        <button onClick={() => shiftLeft(col)} disabled>
                          &lt;
                        </button>
                        <th>
                          <tr>{header.head1}</tr>
                          <tr>{header.head2}</tr>
                          <tr>{header.unit}</tr>
                        </th>
                        <button onClick={() => shiftRight(col)}>&gt;</button>
                      </div>
                    ) : (
                      <div>
                        <button onClick={() => shiftLeft(col)} disabled>
                          &lt;
                        </button>
                        <th>
                          <tr>{}</tr>
                          <tr>{header.head2}</tr>
                          <tr>{header.unit}</tr>
                        </th>
                        <button onClick={() => shiftRight(col)} disabled>
                          &gt;
                        </button>
                      </div>
                    )}
                  </>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="finalformcreate-tbody">
          {body.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <button
          className="finalformcreate-submit-button"
          onClick={handlePrintClick}
        >
          Submit
        </button>
      </table>
    </div>
  );
};
export default Table2;

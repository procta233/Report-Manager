import React, { useState, useEffect } from "react";
import "../CSS/ReportTypeSelect.css";
import { FaPlus } from "react-icons/fa";

const ReportTypeSelect = () => {
  const [data, setData] = useState([]);
  const [selectedFormType, setSelectedFormType] = useState("");
  const [newHead1, setNewHead1] = useState("");
  const [newHead2, setNewHead2] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const [newAttributetype, setNewAttributetype] = useState("");
  const [atlist, setAtlist] = useState([]);
  const [select, setSelect] = useState(false);
  const [select2, setSelect2] = useState(true);
  const [select3, setSelect3] = useState(false);
  const [addReportType, setAddReportType] = useState("");
  const [newData, setNewData] = useState([]);
  const API = "https://create-users.onrender.com/api/sensorlist";
  const API2 = "https://create-users.onrender.com/api/pwd_auto/columns";
  const API3 = "https://create-users.onrender.com/api/addsensorlist";

  useEffect(() => {
    fetchData(API).then((data) => setData(data));
    console.log(data);
    fetchAttribute(API2).then((data2) => setAtlist(data2.slice(2)));
  }, []);
  const fetchAttribute = async (API2) => {
    // Fetch the data from your API or any source
    const response = await fetch(API2);
    const data2 = await response.json();

    return data2;
  };
  const fetchData = async (API) => {
    // Fetch the data from your API or any source
    const response = await fetch(API);
    const data = await response.json();
    return data;
  };

  const getUniqueFormTypes = [...new Set(data.map((item) => item.reporttype))];

  const getFilteredData = () => {
    if (!selectedFormType) {
      return data;
    }
    return data.filter((item) => item.reporttype === selectedFormType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewData([
      ...newData,
      {
        head1: newHead1,
        head2: newHead2,
        unit: newUnit,
        attributetype: newAttributetype,
        reporttype: selectedFormType,
      },
    ]);
    const newData2 = [
      ...data,
      {
        sensorname: "1",
        head1: newHead1,
        head2: newHead2,
        unit: newUnit,
        attributetype: newAttributetype,
        reporttype: selectedFormType,
      },
    ];
    setData(newData2);
    setNewHead1("");
    setNewHead2("");
    setNewUnit("");
    setNewAttributetype("");
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log(newData);
    try {
      const response = await fetch(API3, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("User registration successful");
      // replace with your logic to handle successful registration
    } catch (error) {
      console.error("There was an error registering the user:", error);
      // replace with your logic to handle registration errors
    }
    console.log(newData);
    window.location.reload(false);
  };
  const call = (e) => {
    setSelectedFormType(e);
    setSelect(true);
    setSelect2(false);
    setSelect3(false);
  };
  const call2 = () => {
    setSelectedFormType(addReportType);
    setSelect(true);
    setSelect2(false);
    setSelect3(false);
  };
  const addReport = (e) => {
    console.log(e);
    setAddReportType(e);
  };
  return (
    <div className="reporttypeselect-div">
      {select2 && (
        <div >
          <label className="selectreporttype-label">Select Report Type</label>
          <table className="reporttypeselect-table">
            <thead className="reporttypeselect-thead">
              <tr className="reporttypeselect-tr1column">
                <th className="reporttypeselect-th1column">S.no.</th>
                <th className="reporttypeselect-th1column">Form Type</th>
              </tr>
            </thead>
            <tbody className="reporttypeselect-tbody">
              {getUniqueFormTypes.map((cur, index) => (
                <tr
                  className="reporttypeselect-tr2-tbody"
                  key={index}
                  value={cur}
                  onClick={() => call(cur)}
                >
                  <td className="reporttypeselect-tbody-td">{index + 1}</td>
                  <td className="reporttypeselect-tbody-td">{cur}</td>
                </tr>
              ))}
              <tr className="reporttypeselect-trbuttoncolumn">
                <button
                  className="reportselecttype-add-button"
                  onClick={() => {
                    setSelect3(true);
                  }}
                >
                  <FaPlus /> ReportType
                </button>
              </tr>
              {select3 && (
                <div>
                  <input
                    className=" selectreporttype-input-tfoot"
                    type="text"
                    onChange={(e) => addReport(e.target.value)}
                    required
                  />
                  <button
                    className="reportselecttype-submit-button "
                    onClick={() => call2()}
                  >
                    Submit
                  </button>
                </div>
              )}
            </tbody>
          </table>
        </div>
      )}
      {select && (
        <div>
          {/* popup */}
          <div>
            <h2 className="selectreporttype-h2">{selectedFormType} Report</h2>
          </div>
          <table className="reportselecttype-table">
            <thead className="reporttypeselect-thead">
              <tr className="reporttypeselect-tr1column">
                <th className="reporttypeselect-th1column">Head1</th>
                <th className="reporttypeselect-th1column">Head2</th>
                <th className="reporttypeselect-th1column">Unit</th>
                <th className="reporttypeselect-th1column">Select Attribute</th>
              </tr>
            </thead>
            <tbody className="reporttypeselect-tbody">
              {getFilteredData().map((item) => (
                <tr key={item.id}>
                  <td>{item.head1}</td>
                  <td>{item.head2}</td>
                  <td>{item.unit}</td>
                  <td>{item.attributetype}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th className="reporttypeselect-th3column">Head1</th>
                <th className="reporttypeselect-th3column">Head2</th>
                <th className="reporttypeselect-th3column">Unit</th>
                <th className="reporttypeselect-th3column">Select Attribute</th>
              </tr>
              <tr>
                <td className="reporttypeselect-tfoot-td">
                  <input
                    className=" selectreporttype-input-tfoot"
                    type="text"
                    value={newHead1}
                    onChange={(e) => setNewHead1(e.target.value)}
                    required
                  />
                </td>
                <td className="reporttypeselect-tfoot-td">
                  <input
                    className=" selectreporttype-input-tfoot"
                    type="text"
                    value={newHead2}
                    onChange={(e) => setNewHead2(e.target.value)}
                    required
                  />
                </td>
                <td className="reporttypeselect-tfoot-td">
                  <input
                    className=" selectreporttype-input-tfoot"
                    type="text"
                    value={newUnit}
                    onChange={(e) => setNewUnit(e.target.value)}
                    required
                  />
                </td>
                <td className="reporttypeselect-tfoot-td">
                  <select
                    className=" selectreporttype-select-tfoot"
                    type="text"
                    value={newAttributetype}
                    onChange={(e) => setNewAttributetype(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Select an option
                    </option>
                    {atlist.map((cur, index) => (
                      <option key={index}>{cur}</option>
                    ))}
                  </select>
                </td>
              </tr>
            </tfoot>
          </table>
          <button className=" selectreporttype-addrow" onClick={handleSubmit}>
            Add Row
          </button>
          <button className=" selectreporttype-submit" onClick={handleSubmit2}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportTypeSelect;

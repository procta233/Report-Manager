import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



import "../CSS/CreateReport.css"

function CreateReport() {
  const [values, setValues] = useState({

    userid:"ABS-896645467",
    clientid: "",
    reporttype: "",
    systems: "",
    manufacturer: "",
    datebegin: "",
    timebegin: "",
    dateend: "",
    timeend: "",
    status:"",
    timetype: "",
  });
  // const [manList, setManList] = useState([]);
  const [clientList, setClientList] = useState([]);
  const [systemList, setSystemList] = useState([]);
  const [repList, setRepList] = useState([]);
  const API7 = "https://create-users.onrender.com/api/sensorlist";
  const API5 = "https://create-users.onrender.com/api/clients";
  // const API4 ="https://create-users.onrender.com/api/manufacturers";
  const API6 = "https://create-users.onrender.com/api/systems";
  const API8 = "https://create-users.onrender.com/api/description";
  const race = values.reporttype;
  const navigate =useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    

    console.log(JSON.stringify(values))

    try {
      const response = await fetch(API8, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("User registration successful");
      // replace with your logic to handle successful registration
    } catch (error) {
      console.error("There was an error registering the user:", error);
      // replace with your logic to handle registration errors
    };
       
    
    navigate("datetimeoptionality", { state: { race} }); 
    };
  const formattedDateBegin = values.datebegin.split("/").reverse().join("-");
  const formattedDateEnd = values.dateend.split("/").reverse().join("-");
  const getUniqueClients = [
    ...new Set(clientList.map((item) => item.Client_Id)),
  ];
  const getUniqueSystems = [
    ...new Set(systemList.map((item) => item.System_Name)),
  ];
  const getUniqueManu = [
    ...new Set(systemList.map((item) => item.Manufacturer)),
  ];
  const getUniqueFormTypes = [
    ...new Set(repList.map((item) => item.reporttype)),
    
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      datebegin: formattedDateBegin,
      dateend: formattedDateEnd,
    });

    setValues({ ...values, [name]: value });
  };
  // const getman = async (API4) => {
  //   // Fetch the data from your API or any source
  //   const response = await fetch(API4);
  //   const data = await response.json();
  //   return data;
  // };
  const getclient = async (API5) => {
    // Fetch the data from your API or any source
    const response = await fetch(API5);
    const data1 = await response.json();
    console.log(data1);
    return data1;
  };
  const getsys = async (API6) => {
    // Fetch the data from your API or any source
    const response = await fetch(API6);
    const data2 = await response.json();
    return data2;
  };
  const getrep = async (API7) => {
    // Fetch the data from your API or any source
    const response = await fetch(API7);
    const data3 = await response.json();

    return data3;
  };

  useEffect(() => {
    // getman(API4).then((data) => setManList(data));
    getclient(API5).then((data1) => setClientList(data1));
    getsys(API6).then((data2) => setSystemList(data2));
    getrep(API7).then((data3) => setRepList(data3));
  }, []);

  return (
    <div className="createreport-div">
    <label>
        <h1 className="createreport-h1">Create New Report</h1>
      </label>
      
    <form className="createreport-form" onSubmit={handleSubmit}>
     <div className="createreport-div2">
      <label className="createreport-label-2" htmlFor="userid">User ID</label>
      <input
      className="createreport-select"
        type="text"
        id="userid"
        name="userid"
        value={values.userid}
        onChange={handleChange}
        placeholder={values.userid}
        disabled
      />
      </div>
      <div className="createreport-div2">
      <label className="createreport-label-2" htmlFor="clientid">Client ID</label>
      <select
      className="createreport-select"
        type="text"
        id="clientid"
        name="clientid"
        value={values.clientid}
        onChange={handleChange}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        {getUniqueClients.map((cur, index) => (
          <option key={index}>{cur}</option>
        ))}
      </select>
      </div>
      <div className="createreport-div2">
      <label  className="createreport-label-2" htmlFor="reporttype">Report Type</label>
      <select
      className="createreport-select"
        type="text"
        id="reporttype"
        name="reporttype"
        value={values.reporttype}
        onChange={handleChange}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        {getUniqueFormTypes.map((cur, index) => (
          <option key={index}>{cur}</option>
        ))}
      </select>
      </div>
       <div className="createreport-div2">
      <label className="createreport-label-2" htmlFor="systems">systems</label>
      <select
        className="createreport-select"
        type="text"
        id="systems"
        name="systems"
        value={values.systems}
        onChange={handleChange}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        {getUniqueSystems.map((cur, index) => (
          <option key={index}>{cur}</option>
        ))}
      </select>
      </div>   
        <div className="createreport-div2">
      <label className="createreport-label-2" htmlFor="manufacturer">Manufacturer</label>
      <select
        className="createreport-select"
        type="text"
        id="manufacturer"
        name="manufacturer"
        value={values.manufacturer}
        onChange={handleChange}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        {getUniqueManu.map((cur, index) => (
          <option key={index}>{cur}</option>
        ))}
      </select>
      </div>
       <div className="createreport-div2">
      <label className="createreport-label-2" htmlFor="datebegin">Date Begin</label>
      <input
      className="createreport-input"
        type="date"
        id="datebegin"
        name="datebegin"
        value={values.datebegin}
        onChange={handleChange}
      />
      </div>
          <div className="createreport-div2">
      <label className="createreport-label-2" htmlFor="timebegin">Time Begin</label>
      <input
      className="createreport-input"
        type="time"
        id="timebegin"
        name="timebegin"
        value={values.timebegin}
        onChange={handleChange}
      />
      </div>
      <div className="createreport-div2">
      <label className="createreport-label-2" htmlFor="dateend">Date End</label>
      <input
        className="createreport-input"
        type="date"
        id="dateend"
        name="dateend"
        value={values.dateend}
        onChange={handleChange}
      />
      </div>
      <div className="createreport-div2">
      <label className="createreport-label-2" htmlFor="timeend">Time End</label>
      <input
        className="createreport-input"
        type="time"
        id="timeend"
        name="timeend"
        value={values.timeend}
        onChange={handleChange}
      />
      </div>
      <div className="createreport-div2">
      <label className="createreport-label-2" htmlFor="timetype">Time Type</label>
      <select
      className="createreport-select"
        type="text"
        id="timetype"
        name="timetype"
        value={values.timetype}
        onChange={handleChange}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        <option value="1">Date And Time Separate</option>
        <option value="2">Date And Time Joined</option>
      </select>
      </div>

      <button className="createreport-button" type="submit">Submit</button>
    </form>
  

    </div>
  );
}
export default CreateReport;

import React, { useState, useEffect } from 'react';
import "./ReportTypeSelect.css"

const ReportTypeSelect = () => {
  const [data, setData] = useState([]);
  const [selectedFormType, setSelectedFormType] = useState('');
  const [newHead1, setNewHead1] = useState('');
  const [newHead2, setNewHead2] = useState('');
  const [newUnit, setNewUnit] = useState('');
  const [newAttributetype,setNewAttributetype]=useState('');
  const [atlist,setAtlist]=useState([]);
  const API = "https://create-users.onrender.com/api/sensorlist";
  const API2='https://create-users.onrender.com/api/pwd_auto/columns';

  useEffect(() => {
    fetchData(API).then(data => setData(data));
    fetchAttribute(API2).then(data2 =>setAtlist(data2.slice(2)));
      
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

  const getUniqueFormTypes = () => {
    const formTypes = data.map(item => item.reporttype);
    return [...new Set(formTypes)];
  };

  const getFilteredData = () => {
    if (!selectedFormType) {
      return data;
    }
    return data.filter(item => item.reporttype === selectedFormType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = data.length + 1;
    const newData = [...data, { id: newId, head1: newHead1, head2: newHead2, unit: newUnit, attributetype: newAttributetype, reporttype: selectedFormType }];
    setData(newData);
    setNewHead1('');
    setNewHead2('');
    setNewUnit('');
  };

  return (
    <div>
      <select onChange={(e) => setSelectedFormType(e.target.value)}>
        <option value="">Select a form type</option>
        {getUniqueFormTypes().map(formType => (
          <option key={formType} value={formType}>
            {formType}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Head1</th>
            <th>Head2</th>
            <th>Unit</th>
            <th>Attribute</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredData().map(item => (
            <tr key={item.id}>
              <td>{item.head1}</td>
              <td>{item.head2}</td>
              <td>{item.unit}</td>
              <td>{item.attributetype}</td>
            </tr>
          ))}
        </tbody>
        < tfoot >
        <tr>
          <th>Head1</th>
          <th>Head2</th>
          <th>Unit</th>
          <th>Attribute</th>
        </tr>
        <tr>
        <td>
        
          <input type="text" value={newHead1} onChange={(e) => setNewHead1(e.target.value)} required />
        </td>
        <td>
        
          <input type="text" value={newHead2} onChange={(e) => setNewHead2(e.target.value)} required />
        </td>
        <td>
      
          <input type="text" value={newUnit} onChange={(e) => setNewUnit(e.target.value)} required/>
        </td>
        <td>
          
          <select type="text"  value={newAttributetype} onChange={(e) => setNewAttributetype(e.target.value) }>
          <option value="" disabled selected>
          Select an option
        </option>
            {atlist.map((cur,index)=>(
              <option  key={index} >{cur}</option>
            ))}
          </select>
        </td>
        </tr>
        
      </tfoot>
    
      </table>
      <button onClick={handleSubmit}>Add Row</button>
   
    </div>
  );
};

export default ReportTypeSelect;
import React,{useEffect} from 'react'



const ReportTypeSelect = () => {

const API = "https://create-users.onrender.com/api/sensorlist";
const getData = async(API) =>{
  try {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getData(API)
}, []);

  return (
    <div>
      
    </div>
  )
}

export default ReportTypeSelect


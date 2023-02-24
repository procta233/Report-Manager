import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./peeps/Admin";
import Approver from "./peeps/Approver";
import LoginPage from "./LoginPage";
import Creator from "./peeps/Creator";
import Checker from "./peeps/Checker";
import UserCreation from './components/admincomponents/UserCreation'
import MapModule from './components/admincomponents/MapModule'
import ReportTypeSelect from "./components/admincomponents/ReportTypeSelect";
import CreateReport from "./components/creatorcomponents/CreateReport";
import DateTimeOptionality from "./components/creatorcomponents/DateTimeOptionality";
import FinalFormCreate from "./components/creatorcomponents/FinalFormCreate"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<Admin />} />
            <Route exact path="/admin/usercreation" element={<UserCreation />}/>
            <Route exact path="/admin/reporttypeselect" element={<ReportTypeSelect />}/>
              <Route exact path="/admin/selectreporttype/mapmodule" element={<MapModule />}/>
          <Route path="/approver" element={<Approver />} />
          <Route path="/checker" element={<Checker />} />
          <Route path="/creator" element={<Creator />} />
            <Route exact path="/creator/createreport" element={<CreateReport />}/>
             <Route exact path="/creator/createreport/datetimeoptionality" element={<DateTimeOptionality />}/>
              <Route exact path="/creator/createreport/datetimeoptionality/finalformcreate" element={<FinalFormCreate/>}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

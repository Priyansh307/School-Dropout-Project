
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home_pages from './Pages/Home_pages';
import Schoolhome from './Pages/Schoolhome';
import Districthome from './Pages/Districthome';
import Govhome from './Pages/Govhome';
import Logindistrict from './Pages/Logindistrict';
import Logingov from './Pages/Logingov';
import Loginschool from './Pages/Loginschool';
import Student_full_details from './Components/School/Student_full_details';
import Std_wise_details from './Components/School/Std_wise_details';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home_pages/>} />
        <Route path="/loginschlogin" element={<Loginschool/>} />
        <Route path="/loginschhome" element={<Schoolhome/>} />
        <Route path="/logindishome" element={<Districthome/>} />
        <Route path="/logingov" element={<Govhome/>} />
        <Route path="/logindislogin" element={<Logindistrict/>} />
        <Route path="/logingovlogin" element={<Logingov/>} />
        <Route path="/student-details/*" element={<Student_full_details/>} />
        <Route path="/standard-wise-details" element={<Std_wise_details/>} />
      </Routes>
    </Router>
  );
}

export default App;

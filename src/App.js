import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/jsFiles/Home';
import Jobs from './Components/jsFiles/Jobs';
import Login from './Components/jsFiles/Login';
import Signup from './Components/jsFiles/Signup';
import Nav from './Components/jsFiles/Nav';
import Error from './Components/jsFiles/Error';
import Contact from './Components/jsFiles/Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

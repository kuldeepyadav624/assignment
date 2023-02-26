import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Assign from "./Components/Assign";
import Private from "./Components/Private";
import Header from "./Components/Header"
import './App.css';


function App() {
  return (
    <div>
      <Header/>
       <BrowserRouter>
        <Routes>
          <Route element={<Private />}>
            <Route path="/assign" element={<Assign />} />
          </Route>
          
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

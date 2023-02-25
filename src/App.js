import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Assign from "./Assign";
import Private from "./Private";
import './App.css';
import Header from "./Header";

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

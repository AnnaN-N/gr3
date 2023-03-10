import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Location from "./components/Location/Location";
import Weather from "./components/Weather/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Currency from "./components/Currency/Currency";
import Thanks from "./components/Thanks/Thanks";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exchange" element={<Currency />} />
          <Route path="/thx" element={<Thanks />} />
        </Routes>

        <Weather />
      </div>
    </BrowserRouter>
  );
}

export default App;

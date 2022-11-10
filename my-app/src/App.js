import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import DetailE from "./components/DetailEvent";
import DetailN from "./components/DaftarNews";
import Header from './common/Header';
import Footer from './common/Footer';
import Home from "./components/Home";
import React from 'react';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail-event" element={<DetailE />}></Route>
        <Route path="/news/:slug" element={<DetailN />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

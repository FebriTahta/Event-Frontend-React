import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import DetailE from "./components/DetailEvent";
import DetailB from "./components/DetailBlog";
import DaftarB from "./components/DaftarBlog";
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
        <Route path="/" element={<Navigate to="/blog" replace />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail-event" element={<DetailE />}></Route>
        <Route path="/blog/:slug" element={<DetailB />}></Route>
        <Route path="/blog" element={<DaftarB />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

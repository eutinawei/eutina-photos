import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './Home'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App root={root} />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

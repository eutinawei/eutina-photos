import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import App from './App'
import Home from './Home'
import Thoughts from './Thoughts'
import About from './About'
import Thought from './Thought'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App root={root} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/thoughts" element={<Thoughts />} />
      <Route path="/about" element={<About />} />
      <Route path="/thought/:key" element={<Thought />} />
    </Routes>
  </BrowserRouter>
);

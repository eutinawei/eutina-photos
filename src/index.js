import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

setTimeout(function() {
root.render(<Home />);
}, 1000);

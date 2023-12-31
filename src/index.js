import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Componets/Counter';
import Animation from './Componets/Animation';
import Animation2 from './Componets/animation2/Animation2';
import { BrowserRouter } from 'react-router-dom';
import About from './Componets/animation2/About/About';
import HomeServices from './Componets/animation2/Homeservices/HomeServices';
import GetInTouch from './Componets/animation2/Getintouch/GetInTouch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

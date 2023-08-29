import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import About from './components/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/about' element={<About/>}/>

    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);


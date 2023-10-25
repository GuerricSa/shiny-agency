import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index';
import Survey from './pages/Survey/index';
import Header from './components/Header/index'
import Error from './components/Error/index'
import Results from './pages/Results/index'
import Freelance from './pages/Freelances/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/survey/:questionNumber' element={<Survey />}/>
        <Route path='/results' element={<Results />}/>
        <Route path='/freelances' element={<Freelance />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

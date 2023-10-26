import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createGlobalStyle, styled } from 'styled-components'
import Home from './pages/Home/index';
import Survey from './pages/Survey/index';
import Header from './components/Header/index'
import Error from './components/Error/index'
import Results from './pages/Results/index'
import Freelance from './pages/Freelances/index'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
`

const GlobalContainer = styled.div`
  width: 80vw;
  margin: auto;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <GlobalContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/survey/:questionNumber' element={<Survey />}/>
          <Route path='/results' element={<Results />}/>
          <Route path='/freelances' element={<Freelance />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </GlobalContainer>
    </Router>
  </React.StrictMode>
);

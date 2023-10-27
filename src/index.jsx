import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { styled } from 'styled-components'
import { SurveyProvider, ThemeProvider } from './utils/context/index'
import Home from './pages/Home/index';
import Survey from './pages/Survey/index';
import Header from './components/Header/index'
import Error from './components/Error/index'
import Results from './pages/Results/index'
import Freelance from './pages/Freelances/index'
import Footer from './components/footer/index'
import GlobalStyle from './utils/style/GlobalStyle';

const GlobalContainer = styled.div`
  width: 80vw;
  margin: auto;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
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
        <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

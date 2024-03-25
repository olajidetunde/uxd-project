import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/index';
import SignupPage from './pages/signup';
import SignupSuccess from './pages/signupSuccess';
import FormSuccess from './pages/formSuccess';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/signupSuccess" element={<SignupSuccess/>} />
          <Route path="/formSuccess" element={<FormSuccess/>} />
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
 
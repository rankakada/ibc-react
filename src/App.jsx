import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DesktopLogin from './pages/DesktopLogin';
import DesktopRegister from './pages/DesktopRegister';
import MobileLogin from './pages/MobileLogin';
import MobileRegister from './pages/MobileRegister';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<DesktopLogin/>}/>
            <Route path='/register' element={<DesktopRegister/>}/>
            <Route path='/m.login' element={<MobileLogin/>}/>
            <Route path='/m.register' element={<MobileRegister/>}/>
        </Routes>
      </BrowserRouter>
  )
};

export default App;
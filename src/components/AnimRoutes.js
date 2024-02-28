import React from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

import { Route, Routes, useLocation} from 'react-router-dom';

const AnimRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/portfolio' element={<Contact/>}/>
    <Route path='/contact' element={<Portfolio/>}/>
  </Routes>;
};

export default AnimRoutes;

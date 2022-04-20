import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/style.scss';
import AllTats from './AllTats';

import Home from './Home';
import Nav from './Nav';
import TattooShow from './TattooShow';
import Register from './Register';
import Login from './Login';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tattoos" element={<AllTats />} />
      <Route path="/tattoos/:tattooId" element={<TattooShow />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/style.scss';

import AllTatsIn from './AllTatsIn';
import Home from './Home';
import Nav from './Nav';
import SingleTattoo from './SingleTattoo';
import Register from './Register';
import Login from './Login';
import NewTat from './NewTat';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tattoos" element={<AllTatsIn />} />
      <Route path="/tattoos/:tattooId" element={<SingleTattoo />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/new-tattoo" element={<NewTat />} />
    </Routes>
  </BrowserRouter>
);

export default App;

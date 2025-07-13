import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './components/index';
import Galeria from './components/galeria';
import Contacto from './components/contacto';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;
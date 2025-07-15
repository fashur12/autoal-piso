import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './components/index';
import Galeria from './components/galeria';
import Contacto from './components/contacto';
import EvaluacionForm from './components/evaluacionForm';
import TestDriveForm from './components/testDriveForm';
import ReservaForm from './components/reservaForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/evaluacion" element={<EvaluacionForm />} />
      <Route path="/testdrive" element={<TestDriveForm />} />
      <Route path="/reserva" element={<ReservaForm />} />
    </Routes>
  );
}

export default App;
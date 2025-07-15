import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contacto.css';

export default function EvaluacionForm() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    patente: '',
    marca: '',
    modelo: '',
    anio: '',
    kilometros: '',
    estado: '',
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('Enviando...');

    try {
      await axios.post('/api/evaluacion', form);
      setMensaje('Evaluación enviada correctamente.');
      setForm({
        nombre: '',
        email: '',
        telefono: '',
        patente: '',
        marca: '',
        modelo: '',
        anio: '',
        kilometros: '',
        estado: '',
      });
    } catch (error) {
      setMensaje('Error al enviar la evaluación. Intenta nuevamente.');
    }
  };

  return (
    <section className="content contacto">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Evaluar tu vehículo usado</h2>

        <label>Nombre:</label>
        <input name="nombre" type="text" value={form.nombre} onChange={handleChange} />

        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} />

        <label>Teléfono:</label>
        <input name="telefono" type="tel" value={form.telefono} onChange={handleChange} />

        <label>Patente:</label>
        <input name="patente" type="text" value={form.patente} onChange={handleChange} required />

        <label>Marca:</label>
        <input name="marca" type="text" value={form.marca} onChange={handleChange} />

        <label>Modelo:</label>
        <input name="modelo" type="text" value={form.modelo} onChange={handleChange} />

        <label>Año:</label>
        <input name="anio" type="number" value={form.anio} onChange={handleChange} />

        <label>Kilómetros:</label>
        <input name="kilometros" type="number" value={form.kilometros} onChange={handleChange} />

        <label>Estado general:</label>
        <select name="estado" value={form.estado} onChange={handleChange}>
          <option value="">-- Selecciona --</option>
          <option value="excelente">Excelente</option>
          <option value="bueno">Bueno</option>
          <option value="regular">Regular</option>
        </select>

        <div className="buttons">
          <button type="submit">Enviar evaluación</button>
        </div>

        {mensaje && <p style={{ marginTop: '10px' }}>{mensaje}</p>}
      </form>
    </section>
  );
}

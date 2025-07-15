import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contacto.css';

export default function ReservaForm() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    modelo: '',
    fechaReserva: '',
    comentarios: '',
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('Enviando...');

    try {
      await axios.post('/api/reservas', form);
      setMensaje('Reserva enviada con éxito.');
      setForm({
        nombre: '',
        email: '',
        telefono: '',
        modelo: '',
        fechaReserva: '',
        comentarios: '',
      });
    } catch (error) {
      setMensaje('Error al enviar la reserva. Intenta nuevamente.');
    }
  };

  return (
    <section className="content contacto">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Reservar Vehículo</h2>

        <label>Nombre:</label>
        <input name="nombre" type="text" value={form.nombre} onChange={handleChange} required />

        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />

        <label>Teléfono:</label>
        <input name="telefono" type="tel" value={form.telefono} onChange={handleChange} />

        <label>Modelo a reservar:</label>
        <input name="modelo" type="text" value={form.modelo} onChange={handleChange} required />

        <label>Fecha de reserva:</label>
        <input name="fechaReserva" type="date" value={form.fechaReserva} onChange={handleChange} />

        <label>Comentarios adicionales:</label>
        <textarea name="comentarios" rows="4" value={form.comentarios} onChange={handleChange} />

        <div className="buttons">
          <button type="submit">Enviar reserva</button>
        </div>

        {mensaje && <p style={{ marginTop: '10px' }}>{mensaje}</p>}
      </form>
    </section>
  );
}

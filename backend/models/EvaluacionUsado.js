import mongoose from "mongoose";

const evaluacionUsadoSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  telefono: String,
  patente: String,
  estado: String,
  kilometraje: Number,
  fotos: [String],
  respuestaEnviada: { type: Boolean, default: false },
  fecha: { type: Date, default: Date.now },
});

export default mongoose.model("EvaluacionUsado", evaluacionUsadoSchema);

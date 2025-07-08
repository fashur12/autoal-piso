import mongoose from "mongoose";

const vehiculoSchema = new mongoose.Schema({
  marca: String,
  modelo: String,
  año: Number,
  tipo: String, 
  combustible: String,
  precio: Number,
  kilometraje: Number,
  transmision: String,
  imagenes: [String],
  destacado: { type: Boolean, default: false }, 
});

export default mongoose.model("Vehiculo", vehiculoSchema);

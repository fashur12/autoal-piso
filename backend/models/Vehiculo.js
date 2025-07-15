import mongoose from 'mongoose';

const VehiculoSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  año: { type: Number, required: true },
  tipo: { type: String, enum: ['sedán', 'SUV', 'pickup', 'hatchback', 'furgoneta', 'otro'], required: true },
  combustible: { type: String, enum: ['nafta', 'diésel', 'eléctrico', 'híbrido'], required: true },
  precio: { type: Number, required: true },
  kilometraje: { type: Number, required: true },
  transmision: { type: String, enum: ['manual', 'automática'], required: true },
  fotos: [{ type: String }], 
  destacado: { type: Boolean, default: false },
  creadoEn: { type: Date, default: Date.now }
});

export default mongoose.model('Vehiculo', VehiculoSchema);

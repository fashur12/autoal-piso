import mongoose from "mongoose";

const promocionSchema = new mongoose.Schema({
  vehiculoId: { type: mongoose.Schema.Types.ObjectId, ref: "Vehiculo" },
  descuento: Number,
  fechaInicio: Date,
  fechaFin: Date,
  activo: { type: Boolean, default: true },
});

export default mongoose.model("Promocion", promocionSchema);

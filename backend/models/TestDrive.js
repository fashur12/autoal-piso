import mongoose from "mongoose";

const testDriveSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  telefono: String,
  fecha: Date,
  vehiculo: String,
  sucursal: String,
  confirmado: { type: Boolean, default: false },
});

export default mongoose.model("TestDrive", testDriveSchema);

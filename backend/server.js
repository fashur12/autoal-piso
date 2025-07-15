import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';

import vehiculosRoutes from './routes/vehiculos.routes.js';
import financiamientoRoutes from './routes/financiamiento.routes.js';
import testDriveRoutes from './routes/testdrive.routes.js';
import evaluacionRoutes from './routes/evaluacion.routes.js';
import chatbotRoutes from './routes/chatbot.routes.js';
import promocionRoutes from "./routes/promociones.routes.js";
import simuladorRoutes from "./routes/simulador.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/vehiculos', vehiculosRoutes);
app.use('/api/financiamiento', financiamientoRoutes);
app.use('/api/testdrive', testDriveRoutes);
app.use('/api/evaluacion', evaluacionRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/chatbot', chatbotRoutes);
app.use("/api/promociones", promocionRoutes);
app.use("/api/simulador", simuladorRoutes);

// Conexión a Mongo y arranque del servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
  });
});

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// las rutas
import vehiculosRoutes from "./routes/vehiculos.routes.js";
import simuladorRoutes from "./routes/simulador.routes.js";
import testdriveRoutes from "./routes/testdrive.routes.js";
import evaluacionRoutes from "./routes/evaluacion.routes.js";
import promocionesRoutes from "./routes/promociones.routes.js";
import chatbotRoutes from "./routes/chatbot.routes.js";

dotenv.config();
const app = express();

// interceptacion de peticones
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

// Rutas
app.use("/api/vehiculos", vehiculosRoutes);
app.use("/api/simulador", simuladorRoutes);
app.use("/api/testdrive", testdriveRoutes);
app.use("/api/evaluacion", evaluacionRoutes);
app.use("/api/promociones", promocionesRoutes);
app.use("/api/chatbot", chatbotRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error al conectarse a MongoDB:", err));

// Inicio del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo: http://localhost:${PORT}`);
});


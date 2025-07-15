import express from "express";
import { body, validationResult } from "express-validator";
import Promocion from "../models/Promocion.js";

const router = express.Router();

// Crear una promoción
router.post(
  "/",
  [
    body("titulo").notEmpty().withMessage("El título es obligatorio"),
    body("vehiculo.precioOriginal").isNumeric().withMessage("Precio original inválido"),
    body("vehiculo.precioConDescuento").isNumeric().withMessage("Precio con descuento inválido"),
    body("desde").notEmpty().withMessage("Fecha de inicio requerida"),
    body("hasta").notEmpty().withMessage("Fecha de finalización requerida")
  ],
  async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }

    try {
      const promo = new Promocion(req.body);
      const guardada = await promo.save();
      res.status(201).json(guardada);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Obtener todas las promociones activas
router.get("/", async (req, res) => {
  try {
    const hoy = new Date();
    const promociones = await Promocion.find({
      desde: { $lte: hoy },
      hasta: { $gte: hoy }
    });
    res.json(promociones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener todas
router.get("/todas", async (req, res) => {
  try {
    const promos = await Promocion.find().sort({ creadoEn: -1 });
    res.json(promos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

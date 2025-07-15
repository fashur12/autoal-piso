import express from "express";
import { body, validationResult } from "express-validator";
import Evaluacion from "../models/Evaluacion.js";

const router = express.Router();

router.post(
  "/",
  [
    body("patente").notEmpty().withMessage("La patente es obligatoria"),
    body("estado").notEmpty().withMessage("El estado es obligatorio"),
    body("kilometros").isNumeric().withMessage("Kilometraje inválido")
  ],
  async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }

    try {
      const evaluacion = new Evaluacion(req.body);
      const guardada = await evaluacion.save();
      res.status(201).json(guardada);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

export default router;

import express from 'express';
import { body, validationResult } from "express-validator";
import TestDrive from '../models/TestDrive.js';

const router = express.Router();

// POST - Agendar un test drive
router.post(
  "/",
  [
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("email").isEmail().withMessage("Email inválido"),
    body("telefono").isLength({ min: 8 }).withMessage("Teléfono inválido"),
    body("fecha").notEmpty().withMessage("La fecha es obligatoria"),
    body("vehiculo").notEmpty().withMessage("Selecciona un vehículo"),
    body("sucursal").notEmpty().withMessage("Selecciona una sucursal")
  ],
  async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }

    try {
      const nuevo = new TestDrive(req.body);
      const guardado = await nuevo.save();
      res.status(201).json(guardado);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// GET - Obtener todos los test drives
router.get('/', async (req, res) => {
  try {
    const testDrives = await TestDrive.find().sort({ fecha: -1 });
    res.json(testDrives);
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al obtener datos', error: err.message });
  }
});

export default router;

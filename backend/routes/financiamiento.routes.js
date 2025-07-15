import express from 'express';

const router = express.Router();

// Función para calcular la cuota mensual
function calcularCuota(precioVehiculo, entrada, meses, tasaAnual) {
  const montoFinanciado = precioVehiculo - entrada;
  const tasaMensual = tasaAnual / 12 / 100;
  const cuota = (montoFinanciado * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -meses));
  return Math.round(cuota * 100) / 100;
}

// POST - Simulación de financiación
router.post('/simular', (req, res) => {
  try {
    const { precioVehiculo, entrada, meses, tasa } = req.body;

    if (!precioVehiculo || !entrada || !meses || !tasa) {
      return res.status(400).json({ mensaje: 'Faltan parámetros' });
    }

    const cuota = calcularCuota(precioVehiculo, entrada, meses, tasa);

    res.json({
      precioVehiculo,
      entrada,
      meses,
      tasa,
      cuotaMensual: cuota
    });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error en la simulación', error: err });
  }
});

export default router;
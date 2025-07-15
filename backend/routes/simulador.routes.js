import express from "express";

const router = express.Router();

function calcularCuota(montoTotal, tasaMensual, cuotas) {
  if (tasaMensual === 0) return montoTotal / cuotas;

  const numerador = montoTotal * tasaMensual * Math.pow(1 + tasaMensual, cuotas);
  const denominador = Math.pow(1 + tasaMensual, cuotas) - 1;
  return numerador / denominador;
}

router.post("/", (req, res) => {
  const { precioAuto, entrada, cuotas } = req.body;

  if (!precioAuto || !cuotas || entrada === undefined) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const montoFinanciar = precioAuto - entrada;
  const tasaInteresAnual = 0.28;
  const tasaMensual = tasaInteresAnual / 12;

  const valorCuota = calcularCuota(montoFinanciar, tasaMensual, cuotas);

  res.json({
    montoFinanciar,
    tasaInteresAnual,
    cuotas,
    valorCuota: valorCuota.toFixed(2),
    totalPagado: (valorCuota * cuotas).toFixed(2),
  });
});

export default router;

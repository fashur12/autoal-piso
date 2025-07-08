import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Simulador funcionando...");
});

export default router;

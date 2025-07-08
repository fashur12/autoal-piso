import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Vehiculos funcionando...");
});

export default router;

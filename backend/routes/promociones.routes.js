import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Promociones funcionando...");
});

export default router;

import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Testdrive funcionando...");
});

export default router;

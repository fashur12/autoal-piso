import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Chatbot funcionando...");
});

export default router;

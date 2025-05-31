import express from 'express';
import { createConfirmation } from '../controllers/confirmationController.js';
const router = express.Router();

router.post('/create', createConfirmation);

export default router;

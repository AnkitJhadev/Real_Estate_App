import express from 'express';
import { signup , signin } from '../controllers/auth.controller.js'; // Corrected import path

const router = express.Router();

router.post('/signup', signup);
router.post('/signin',signin);

export default router;

import express from 'express';
import { Signup } from '../controllers/auth.controller.js'; // Corrected import path

const router = express.Router();

router.post('/signup', Signup);

export default router;

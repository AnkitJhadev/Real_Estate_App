import express from 'express';
import { authsignup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', authsignup);

export default router;

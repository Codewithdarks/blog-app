import express from 'express';
import { body } from 'express-validator';
import * as authController from '../controllers/authController.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// for Sign up
router.post('/signup', upload.single('profileImage'), [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
], authController.signup);

// for Login
router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').exists()
], authController.login);

// Get current user
router.get('/me', auth, authController.getCurrentUser);

export default router;
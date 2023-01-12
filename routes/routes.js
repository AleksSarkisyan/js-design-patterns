import express from 'express';
const router = express.Router();
import { command } from '../controllers/HomeController.js';
import { iterator } from '../controllers/HomeController.js';
import { generator } from '../controllers/HomeController.js';

// Application Routes
router.get('/command', command);
router.get('/iterator', iterator);
router.get('/generator', generator);

export default router;

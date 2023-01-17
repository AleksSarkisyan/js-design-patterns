import express from 'express';
const router = express.Router();
import { command } from '../controllers/HomeController.js';
import { iterator } from '../controllers/HomeController.js';
import { generator } from '../controllers/HomeController.js';
import { mediator } from '../controllers/HomeController.js';

// Application Routes
router.get('/command', command);
router.get('/iterator', iterator);
router.get('/generator', generator);
router.get('/mediator', mediator);

export default router;

import express from 'express';
const router = express.Router();

import { command } from '../controllers/HomeController.js';
import { iterator } from '../controllers/HomeController.js';
import { generator } from '../controllers/HomeController.js';
import { mediator } from '../controllers/HomeController.js';
import { memento } from '../controllers/HomeController.js';
import { observer } from '../controllers/HomeController.js';
import { strategy } from '../controllers/HomeController.js';
import { template } from '../controllers/HomeController.js';
import { factory } from '../controllers/HomeController.js';

// Application Routes
router.get('/command', command);
router.get('/iterator', iterator);
router.get('/generator', generator);
router.get('/mediator', mediator);
router.get('/memento', memento);
router.get('/observer', observer);
router.get('/strategy', strategy);
router.get('/template', template);
router.get('/factory', factory);

export default router;

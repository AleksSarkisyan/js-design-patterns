import express from 'express';
const router = express.Router()
import { command } from '../controllers/appController.js'

// Application Routes
router.get('/command', command)


export default router

import express from 'express';
import { getAllBuses, getBusById, createBus, updateBus, deleteBus } from '../controllers/busController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllBuses); 
router.get('/:id', getBusById); 
router.post('/', auth(['admin', 'operator']), createBus);
router.put('/:id', auth(['admin', 'operator']), updateBus);
router.delete('/:id', auth(['admin']), deleteBus); 
export default router;